import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { PROJECTS, SITE } from "@/lib/site-data";

const CATS = ["Todos", "Residencial", "Comercial", "Interiores", "Urbanismo"];

export const Route = createFileRoute("/projetos/filtro")({
  head: () => ({
    meta: [
      { title: "Projetos, Grid com Filtros | DomusTech" },
      { name: "robots", content: "noindex, follow" },
      { property: "og:url", content: `${SITE.domain}/projetos/filtro` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/projetos` }],
  }),
  component: PortfolioFiltroPage,
});

function PortfolioFiltroPage() {
  const [active, setActive] = useState("Todos");
  const filtered = PROJECTS.filter((p) => active === "Todos" || p.category === active);

  return (
    <main>
      <PageHeader
        eyebrow="Portfolio"
        titleFirst="Portfolio Grid"
        titleSecond="Filter"
        image="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&h=900&fit=crop&auto=format&q=80"
      />

      <section className="section-pad" style={{ backgroundColor: "var(--background)" }}>
        <div className="container-1100">
          {/* Filters */}
          <div className="mb-12 flex flex-wrap gap-2">
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
            <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              className="grid grid-cols-2 gap-1 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <motion.div key={p.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }}>
                  <Link to="/projetos/$slug" params={{ slug: p.slug }} className="group relative block overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ backgroundColor: "rgba(190,147,85,0.12)" }} />
                    <div className="absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" style={{ backgroundColor: "var(--gold)" }}>
                      <ArrowUpRight className="h-4 w-4 text-white" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <span className="tracked mb-1 block text-[10px] font-medium" style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}>{p.category}</span>
                      <h3 className="text-[16px] text-white" style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase" }}>{p.name}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
