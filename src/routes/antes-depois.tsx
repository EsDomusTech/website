import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import { SITE } from "@/lib/site-data";

const PROJECTS = [
  {
    num: "01",
    title: "The Obsidian Kitchen",
    location: "Foz do Douro, Porto",
    year: "2025",
    cat: "Remodelação de Interiores",
    before: "https://picsum.photos/seed/before1a/1200/675",
    after: "https://picsum.photos/seed/after1b/1200/675",
    description: "Uma cozinha completamente repensada: dos pavimentos à iluminação, cada detalhe foi substituído por materiais de topo.",
  },
  {
    num: "02",
    title: "Skylight Sanctuary",
    location: "Ribeira, Porto",
    year: "2024",
    cat: "Reabilitação de Edifício",
    before: "https://picsum.photos/seed/before2a/1200/675",
    after: "https://picsum.photos/seed/after2b/1200/675",
    description: "Um edifício histórico transformado em espaço de trabalho contemporâneo, preservando os elementos originais de valor patrimonial.",
  },
  {
    num: "03",
    title: "Urban Loft Boavista",
    location: "Boavista, Porto",
    year: "2025",
    cat: "Renovação Completa",
    before: "https://picsum.photos/seed/before3a/1200/675",
    after: "https://picsum.photos/seed/after3b/1200/675",
    description: "Transformação radical de um espaço industrial em loft premium com ceilings altos e materialidade sofisticada.",
  },
  {
    num: "04",
    title: "Casa das Antas",
    location: "Antas, Porto",
    year: "2023",
    cat: "Renovação de Moradia",
    before: "https://picsum.photos/seed/before4a/1200/675",
    after: "https://picsum.photos/seed/after4b/1200/675",
    description: "Uma moradia dos anos 80 reconvertida em habitação moderna com eficiência energética classe A e novo conceito espacial.",
  },
];

export const Route = createFileRoute("/antes-depois")({
  head: () => ({
    meta: [
      { title: "Antes e Depois | Renovações, DomusTech Porto" },
      { name: "description", content: "Veja as transformações antes e depois dos projetos DomusTech. Remodelações e reabilitações no Porto que exemplificam o nosso método de trabalho." },
      { property: "og:title", content: "Antes e Depois | DomusTech" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/antes-depois` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/antes-depois` }],
  }),
  component: AntesDepoisPage,
});

function AntesDepoisPage() {
  return (
    <main style={{ backgroundColor: "#f9f9f9" }}>

      {/* Hero — display-lg */}
      <header style={{ paddingBlock: "120px 0" }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <span className="s-label-caps mb-4 block" style={{ color: "#BE9355", letterSpacing: "0.3em" }}>
                Transformação
              </span>
              <h1 className="s-display-lg mb-8" style={{ color: "#000000" }}>
                Antes / Depois
              </h1>
              <p className="s-body-lg" style={{ color: "#444748", maxWidth: 640 }}>
                A transformação é a essência da arquitectura. Arraste o divisor para ver a diferença que o nosso trabalho faz.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section style={{ paddingBlock: 120 }}>
        <div className="s-wrap">
          <div className="grid items-end gap-16 md:grid-cols-12">
            <div className="md:col-span-7">
              <div>
                <span className="s-label-caps mb-4 block" style={{ color: "#BE9355", letterSpacing: "0.3em" }}>Casos de Estudo</span>
                <h2 className="s-headline-lg" style={{ color: "#000000" }}>As Nossas Transformações</h2>
              </div>
            </div>
            <div className="md:col-span-5">
              <p className="text-[15px] font-light leading-[1.85]" style={{ color: "var(--muted-foreground)" }}>
                Cada projeto de remodelação começa com um diagnóstico honesto do existente. O resultado é sempre uma elevação: do ordinário ao extraordinário, do funcional ao memorável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      {PROJECTS.map((p, i) => (
        <motion.section
          key={p.num}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="section-pad"
          style={{ backgroundColor: i % 2 === 0 ? "var(--logo-strip)" : "var(--background)" }}
        >
          <div className="s-wrap">
            <div className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}>
              {/* Slider */}
              <div>
                <BeforeAfterSlider before={p.before} after={p.after} />
                <p className="mt-3 text-center text-[12px] font-light" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-display)", letterSpacing: "0.1em" }}>
                  ← Arrastar para comparar →
                </p>
              </div>

              {/* Info */}
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="text-[52px] leading-none"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "rgba(0,0,0,0.06)" }}
                  >
                    {p.num}
                  </span>
                  <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
                </div>

                <p
                  className="tracked mb-3 text-[10px] font-medium"
                  style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
                >
                  {p.cat} · {p.year}
                </p>

                <h2
                  className="mb-4 text-[28px] leading-tight md:text-[36px]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--foreground)" }}
                >
                  {p.title}
                </h2>

                <p
                  className="tracked mb-4 flex items-center gap-2 text-[11px] font-medium"
                  style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-display)" }}
                >
                  <span className="block h-px w-4" style={{ backgroundColor: "var(--gold)" }} />
                  {p.location}
                </p>

                <p className="mb-8 text-[15px] font-light leading-[1.85]" style={{ color: "var(--muted-foreground)" }}>
                  {p.description}
                </p>

                <Link
                  to="/projetos"
                  className="tracked inline-flex items-center gap-2 text-[11px] font-medium transition-all hover:gap-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
                >
                  Ver Caso Completo <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      ))}

      <CtaBand
        title="Comece a Sua\nEvolução"
        text="A sua próxima transformação começa com uma conversa. Contacte-nos hoje."
        label="Consulta Gratuita"
      />
    </main>
  );
}
