import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { PROJECTS, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/projetos/fancy")({
  head: () => ({
    meta: [
      { title: "Projetos, Vista Editorial | EsDomusTech" },
      { name: "robots", content: "noindex, follow" },
      { property: "og:url", content: `${SITE.domain}/projetos/fancy` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/projetos` }],
  }),
  component: PortfolioFancyPage,
});

function PortfolioFancyPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Portfolio"
        titleFirst="Portfolio"
        titleSecond="Fancy"
        image="https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=1600&h=900&fit=crop&auto=format&q=80"
      />

      <section className="section-pad" style={{ backgroundColor: "var(--background)" }}>
        <div className="container-1100 space-y-2">
          {PROJECTS.map((p, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6 }}
                className="group grid items-stretch md:grid-cols-2"
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${isEven ? "" : "md:order-2"}`} style={{ minHeight: 420 }}>
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-104" />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
                  {/* Year badge */}
                  <span
                    className="tracked absolute left-6 top-6 bg-white px-3 py-1.5 text-[10px] font-medium"
                    style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}
                  >
                    {p.year}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col justify-center p-12 lg:p-16 ${isEven ? "" : "md:order-1"}`}
                  style={{ backgroundColor: i % 4 < 2 ? "var(--logo-strip)" : "#fff" }}
                >
                  <p className="tracked mb-4 text-[10px] font-medium" style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}>
                    {p.category}
                  </p>
                  <h2
                    className="mb-4 text-[28px] leading-tight md:text-[36px]"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--foreground)" }}
                  >
                    {p.name}
                  </h2>
                  <p className="mb-3 text-[12px] font-medium" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-display)", letterSpacing: "0.08em" }}>
                    {p.location}
                  </p>
                  <p className="mb-8 text-[14px] font-light leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {p.summary}
                  </p>
                  <Link
                    to="/projetos/$slug"
                    params={{ slug: p.slug }}
                    className="tracked inline-flex items-center gap-3 text-[11px] font-medium transition-all hover:gap-4"
                    style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
                  >
                    Ver Projeto <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
