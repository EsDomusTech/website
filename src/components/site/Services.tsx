import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { SectionTitle } from "./SectionTitle";
import { SERVICES } from "@/lib/site-data";

export function Services() {
  return (
    <section style={{ backgroundColor: "#f9f9f9", paddingBlock: 120 }}>
      <div className="s-wrap">
        {/* Header — grid 12-col, col 6/12 */}
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 md:col-span-6">
            <span className="s-label-caps mb-4 block" style={{ color: "var(--gold)", letterSpacing: "0.3em" }}>
              Especialidade
            </span>
            <h2 className="s-headline-lg">
              Os Nossos Serviços
            </h2>
          </div>
        </div>

        {/* Cards — grid 3 colunas per spec */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SERVICES.map((svc, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group border-t pt-6 pb-12"
                style={{
                  borderColor: "var(--border)",
                  transition: "border-color 0.4s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderTopColor = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderTopColor = "var(--border)")}
              >
                {/* Ghost number */}
                <span
                  className="block mb-6 select-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    fontSize: 48,
                    lineHeight: "56px",
                    letterSpacing: "0.03em",
                    color: "var(--ghost)",
                  }}
                  aria-hidden
                >
                  {num}
                </span>

                {/* Title */}
                <h3
                  className="s-headline-md mb-4"
                  style={{ letterSpacing: "0.1em" }}
                >
                  {svc.name}
                </h3>

                {/* Body */}
                <p className="s-body-md mb-8" style={{ color: "var(--muted-foreground)" }}>
                  {svc.excerpt}
                </p>

                {/* Arrow */}
                <Link
                  to="/servicos/$slug"
                  params={{ slug: svc.slug }}
                  className="inline-block transition-transform duration-500 group-hover:translate-x-4"
                  style={{ color: "var(--gold)", fontSize: 24 }}
                  aria-label={`Ver ${svc.name}`}
                >
                  →
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
