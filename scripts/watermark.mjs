import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const IMG_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const [, , inputDirArg, ...flags] = process.argv;
if (!inputDirArg) {
  console.error("Uso: node scripts/watermark.mjs <pasta> [--logo=caminho] [--opacity=0.25] [--scale=0.35]");
  process.exit(1);
}

const getFlag = (name, fallback) => {
  const f = flags.find((f) => f.startsWith(`--${name}=`));
  return f ? f.split("=")[1] : fallback;
};

const inputDir = path.resolve(inputDirArg);
const logoPath = path.resolve(getFlag("logo", "public/logo-casinha.png"));
const opacity = parseFloat(getFlag("opacity", "0.25"));
const scale = parseFloat(getFlag("scale", "0.35")); // logo largura = % da largura da foto

const outputDir = path.join(inputDir, "watermarked");

async function buildWatermark(targetWidth) {
  const logoResized = await sharp(logoPath)
    .resize({ width: Math.round(targetWidth) })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = logoResized;
  for (let i = 3; i < data.length; i += 4) {
    data[i] = Math.round(data[i] * opacity);
  }

  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer();
}

async function run() {
  if (!existsSync(logoPath)) {
    console.error(`Logo não encontrado: ${logoPath}`);
    process.exit(1);
  }
  const entries = await readdir(inputDir, { withFileTypes: true });
  const files = entries.filter((e) => e.isFile() && IMG_EXT.has(path.extname(e.name).toLowerCase()));

  if (files.length === 0) {
    console.log(`Sem imagens em ${inputDir}`);
    return;
  }

  await mkdir(outputDir, { recursive: true });

  for (const file of files) {
    const src = path.join(inputDir, file.name);
    const dest = path.join(outputDir, file.name);
    const base = sharp(src);
    const meta = await base.metadata();
    const wmWidth = Math.round((meta.width ?? 1200) * scale);
    const watermark = await buildWatermark(wmWidth);
    const wmMeta = await sharp(watermark).metadata();

    await base
      .composite([
        {
          input: watermark,
          left: Math.round(((meta.width ?? 1200) - wmMeta.width) / 2),
          top: Math.round(((meta.height ?? 800) - wmMeta.height) / 2),
        },
      ])
      .toFile(dest);

    console.log(`✓ ${file.name} → ${path.relative(process.cwd(), dest)}`);
  }
}

run();
