import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { PROJECTS, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/projetos/lista")({
  head: () => ({
    meta: [
      { title: "Portfolio List | DomusTech" },
      { property: "og:url", content: `${SITE.domain}/projetos/lista` },
    ],
  }),
  component: PortfolioListaPage,
});

function PortfolioListaPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Portfolio"
        titleFirst="Portfolio"
        titleSecond="List"
        image="https://picsum.photos/seed/portfolio-list-hero/1600/900"
      />

      <section className="section-pad" style={{ backgroundColor: "var(--background)" }}>
        <div className="container-1100">
          <div className="space-y-0">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="group border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <Link to="/projetos/$slug" params={{ slug: p.slug }} className="flex flex-col gap-0 py-0 md:flex-row md:items-stretch">
                  {/* Image */}
                  <div className="relative w-full overflow-hidden md:w-[38%]" style={{ minHeight: 240 }}>
                    <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-black/15" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-center px-8 py-10 lg:px-14">
                    <div className="mb-4 flex items-center gap-4">
                      <span
                        className="text-[48px] leading-none"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "rgba(0,0,0,0.05)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
                      <span
                        className="tracked text-[10px] font-medium"
                        style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
                      >
                        {p.category}
                      </span>
                    </div>

                    <h2
                      className="mb-3 text-[24px] transition-colors duration-300 group-hover:text-[color:var(--gold)] md:text-[30px]"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--foreground)" }}
                    >
                      {p.name}
                    </h2>

                    <p className="mb-2 text-[12px] font-medium" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-display)", letterSpacing: "0.08em" }}>
                      {p.location} · {p.year}
                    </p>

                    <p className="mb-6 max-w-lg text-[14px] font-light leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                      {p.summary}
                    </p>

                    <span
                      className="tracked inline-flex items-center gap-2 text-[11px] font-medium transition-all duration-300 group-hover:gap-3 group-hover:text-[color:var(--gold)]"
                      style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
                    >
                      Ver Projeto <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
