import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { PROJECTS, SITE } from "@/lib/site-data";

const CATS = ["Todos", "Residencial", "Comercial", "Interiores", "Urbanismo"];

export const Route = createFileRoute("/projetos/fancy-filtro")({
  head: () => ({
    meta: [
      { title: "Projetos, Vista Editorial com Filtros | DomusTech" },
      { name: "robots", content: "noindex, follow" },
      { property: "og:url", content: `${SITE.domain}/projetos/fancy-filtro` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/projetos` }],
  }),
  component: PortfolioFancyFiltroPage,
});

function PortfolioFancyFiltroPage() {
  const [active, setActive] = useState("Todos");
  const filtered = PROJECTS.filter((p) => active === "Todos" || p.category === active);

  return (
    <main>
      <PageHeader
        eyebrow="Portfolio"
        titleFirst="Portfolio Fancy"
        titleSecond="Filter"
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=900&fit=crop&auto=format&q=80"
      />

      <section className="section-pad" style={{ backgroundColor: "var(--background)" }}>
        <div className="container-1100">
          {/* Filters */}
          <div className="mb-14 flex flex-wrap gap-2">
            {CATS.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className="tracked px-5 py-2.5 text-[11px] font-medium transition-colors"
                style={{
                  fontFamily: "var(--font-display)",
                  backgroundColor: active === cat ? "#1b1b1b" : "transparent",
                  color: active === cat ? "#fff" : "var(--muted-foreground)",
                  border: "1px solid",
                  borderColor: active === cat ? "#1b1b1b" : "var(--border)",
                }}
                onMouseEnter={(e) => { if (active !== cat) { (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLElement).style.color = "var(--gold)"; } }}
                onMouseLeave={(e) => { if (active !== cat) { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--muted-foreground)"; } }}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="space-y-2">
              {filtered.map((p, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div key={p.slug} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.07 }}
                    className="group grid items-stretch md:grid-cols-2">
                    <div className={`relative overflow-hidden ${isEven ? "" : "md:order-2"}`} style={{ minHeight: 380 }}>
                      <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
                      <span className="tracked absolute left-5 top-5 bg-white px-3 py-1.5 text-[10px] font-medium" style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}>{p.year}</span>
                    </div>
                    <div className={`flex flex-col justify-center p-10 lg:p-14 ${isEven ? "" : "md:order-1"}`} style={{ backgroundColor: i % 4 < 2 ? "var(--logo-strip)" : "#fff" }}>
                      <p className="tracked mb-3 text-[10px] font-medium" style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}>{p.category}</p>
                      <h2 className="mb-3 text-[26px] leading-tight md:text-[32px]" style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--foreground)" }}>{p.name}</h2>
                      <p className="mb-2 text-[12px] font-medium" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-display)", letterSpacing: "0.08em" }}>{p.location}</p>
                      <p className="mb-7 text-[14px] font-light leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{p.summary}</p>
                      <Link to="/projetos/$slug" params={{ slug: p.slug }} className="tracked inline-flex items-center gap-3 text-[11px] font-medium transition-all hover:gap-4"
                        style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}>
                        Ver Projeto <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
