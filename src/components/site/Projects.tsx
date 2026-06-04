import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { PROJECTS } from "@/lib/site-data";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="section-pad" style={{ backgroundColor: "var(--background)" }}>
      <div className="container-1100">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle eyebrow="Portfólio" first="Nossos" second="Projetos" align="left" />
          <Link
            to="/projetos"
            className="tracked inline-flex items-center gap-3 text-[11px] font-medium transition-colors"
            style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
          >
            <span className="block h-px w-6" style={{ backgroundColor: "var(--gold)" }} />
            Ver Todos
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-1">
          {PROJECTS.slice(0, 4).map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to="/projetos/$slug"
                params={{ slug: p.slug }}
                className="group relative block aspect-[4/3] overflow-hidden"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Permanent bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Hover overlay tint */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ backgroundColor: "rgba(190,147,85,0.12)" }}
                />

                {/* Arrow on hover */}
                <div
                  className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </div>

                {/* Bottom text */}
                <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-300 group-hover:-translate-y-1">
                  <span
                    className="tracked mb-2 block text-[10px] font-medium"
                    style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
                  >
                    {p.category}
                  </span>
                  <h3
                    className="text-[17px] text-white"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase" }}
                  >
                    {p.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
