import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { PROJECTS } from "@/lib/site-data";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="section-pad" style={{ backgroundColor: "var(--logo-strip)" }}>
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

        <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.slice(0, 6).map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <Link
                to="/projetos/$slug"
                params={{ slug: p.slug }}
                className="group relative block aspect-[4/3] overflow-hidden"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                {/* Base dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Hover orange overlay stripe */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundColor: "var(--gold)" }}
                />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span
                    className="tracked mb-1 text-[10px] font-bold"
                    style={{ color: "var(--gold)" }}
                  >
                    {p.category}
                  </span>
                  <h3
                    className="text-[20px] font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.name}
                  </h3>
                </div>

                {/* Arrow icon on hover */}
                <div className="absolute right-5 top-5 flex h-9 w-9 translate-y-2 items-center justify-center bg-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" style={{ color: "var(--foreground)" }} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
