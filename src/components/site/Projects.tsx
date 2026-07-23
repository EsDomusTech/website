import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PROJECTS, type Project } from "@/lib/site-data";

export function Projects({ projects }: { projects?: Project[] }) {
  const items = projects ?? PROJECTS;
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered ?? 0;
  return (
    <section id="projects" className="section-pad" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="s-wrap">

        {/* Header — eyebrow + H2 left, "View All" right with border-b */}
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="s-headline-lg">
              Nossos Projetos
            </h2>
          </div>
          <Link
            to="/projetos"
            className="s-label-caps border-b pb-1 transition-colors"
            style={{ color: "var(--foreground)", borderColor: "var(--foreground)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--gold)";
              e.currentTarget.style.borderColor = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--foreground)";
              e.currentTarget.style.borderColor = "var(--foreground)";
            }}
          >
            VER TODOS OS PROJETOS →
          </Link>
        </div>

        {/* 3-col grid — smaller tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.slice(0, 6).map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <Link
                to="/projetos/$slug"
                params={{ slug: p.slug }}
                className="group relative block aspect-square overflow-hidden"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image — grayscale default, color on active. Only one tile active at a time: first by default, hovered one otherwise. */}
                <img
                  src={p.image}
                  alt={`${p.name}, projeto de ${p.category.toLowerCase()} EsDomusTech`}
                  className={`h-full w-full object-cover transition-all duration-700 touch:!grayscale-0 touch:scale-[1.05] ${i === active ? "md:scale-[1.05]" : "md:grayscale"}`}
                />

                {/* Overlay — always visible on mobile, only on the active tile on desktop */}
                <div className={`absolute inset-0 flex flex-col justify-end bg-black/40 p-6 md:p-8 opacity-100 transition-opacity duration-500 touch:!opacity-100 ${i === active ? "" : "md:opacity-0"}`}>
                  <span
                    className="s-label-caps mb-2 block"
                    style={{ color: "var(--gold)", letterSpacing: "0.2em" }}
                  >
                    {p.category}
                  </span>
                  <h3 className="s-headline-md mb-4 text-white">
                    {p.name}
                  </h3>
                  <span className="block h-px w-12 bg-white" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
