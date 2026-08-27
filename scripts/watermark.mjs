import sharp from "sharp";
import { readdir, mkdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const IMG_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const [, , inputDirArg, ...flags] = process.argv;
if (!inputDirArg) {
  console.error(
    "Uso: node scripts/watermark.mjs <pasta> [--logo=caminho] [--opacity=0.45] [--scale=0.11] [--label=EsDomusTech] [--exclude=a.jpg,b.jpg] [--inplace]"
  );
  process.exit(1);
}

const getFlag = (name, fallback) => {
  const f = flags.find((f) => f.startsWith(`--${name}=`));
  return f ? f.split("=")[1] : fallback;
};

const inputDir = path.resolve(inputDirArg);
const logoPath = path.resolve(getFlag("logo", "public/logo-casinha.png"));
const opacity = parseFloat(getFlag("opacity", "0.45"));
const scale = parseFloat(getFlag("scale", "0.11")); // logo largura = % da largura da foto
const label = getFlag("label", "EsDomusTech");
const exclude = new Set(getFlag("exclude", "").split(",").filter(Boolean));
const inplace = flags.includes("--inplace");

const outputDir = path.join(inputDir, "watermarked");

async function buildWatermark(photoWidth, photoHeight) {
  const iconW = Math.round(photoWidth * scale);
  const logoBuf = await sharp(logoPath).resize({ width: iconW }).png().toBuffer();
  const logoMeta = await sharp(logoBuf).metadata();

  const gap = Math.round(iconW * 0.14);
  const fontSize = Math.max(10, Math.round(iconW * 0.24));
  const groupH = logoMeta.height + gap + fontSize * 1.3;
  const svgW = Math.round(photoWidth);
  const svgH = Math.round(groupH + 8);

  const logoB64 = logoBuf.toString("base64");
  const cx = svgW / 2;
  const logoY = 4;
  const textY = logoY + logoMeta.height + gap + fontSize * 0.8;

  const svg = `<svg width="${svgW}" height="${svgH}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000000" flood-opacity="0.6"/>
      </filter>
    </defs>
    <g opacity="${opacity}" filter="url(#shadow)">
      <image x="${cx - logoMeta.width / 2}" y="${logoY}" width="${logoMeta.width}" height="${logoMeta.height}" href="data:image/png;base64,${logoB64}"/>
      <text x="${cx}" y="${textY}" text-anchor="middle" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="${fontSize}" letter-spacing="${fontSize * 0.16}">${label.toUpperCase()}</text>
    </g>
  </svg>`;

  const overlay = await sharp(Buffer.from(svg)).png().toBuffer();
  return { overlay, svgW, svgH };
}

async function run() {
  if (!existsSync(logoPath)) {
    console.error(`Logo não encontrado: ${logoPath}`);
    process.exit(1);
  }
  const entries = await readdir(inputDir, { withFileTypes: true });
  const files = entries.filter(
    (e) => e.isFile() && IMG_EXT.has(path.extname(e.name).toLowerCase()) && !exclude.has(e.name)
  );

  if (files.length === 0) {
    console.log(`Sem imagens em ${inputDir}`);
    return;
  }

  if (!inplace) await mkdir(outputDir, { recursive: true });

  for (const file of files) {
    const src = path.join(inputDir, file.name);
    const srcBuffer = await readFile(src);
    const meta = await sharp(srcBuffer).metadata();
    const photoW = meta.width ?? 1200;
    const photoH = meta.height ?? 800;
    const { overlay, svgW, svgH } = await buildWatermark(photoW, photoH);

    const pipeline = sharp(srcBuffer).composite([
      {
        input: overlay,
        left: Math.round((photoW - svgW) / 2),
        top: Math.round((photoH - svgH) / 2),
      },
    ]);

    const dest = inplace ? src : path.join(outputDir, file.name);
    if (inplace) {
      const out = await pipeline.jpeg({ quality: 82 }).toBuffer();
      await sharp(out).toFile(dest);
    } else {
      await pipeline.toFile(dest);
    }

    console.log(`✓ ${file.name} → ${path.relative(process.cwd(), dest)}`);
  }
}

run();
