import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { PROJECTS } from "@/lib/site-data";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="section-pad bg-white">
      <div className="container-1100">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle eyebrow="Portfólio" first="Nossos" second="Projetos" align="left" />
          <Link
            to="/projetos"
            className="tracked inline-flex items-center gap-2 text-[11px] font-bold transition-colors hover:text-[color:var(--gold)]"
            style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
          >
            <span className="block h-0.5 w-5" style={{ backgroundColor: "var(--gold)" }} />
            Ver Todos
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2">
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

                {/* Gradient always visible at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[color:var(--gold)]/0 transition-all duration-500 group-hover:bg-[color:var(--gold)]/15" />

                {/* Arrow icon on hover */}
                <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </div>

                {/* Bottom text */}
                <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-300 group-hover:-translate-y-1">
                  <span
                    className="tracked mb-1 block text-[10px] font-semibold"
                    style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
                  >
                    {p.category}
                  </span>
                  <h3
                    className="text-[18px] font-bold leading-snug text-white"
                    style={{ fontFamily: "var(--font-display)" }}
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
