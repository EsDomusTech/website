import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PROJECTS, type Project } from "@/lib/site-data";

export function Projects({ projects }: { projects?: Project[] }) {
  const items = projects ?? PROJECTS;
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

        {/* 2×2 staggered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.slice(0, 4).map((p, i) => (
            <motion.div
              key={p.slug}
              className={i % 2 === 1 ? "mt-0 md:mt-24" : ""}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Link
                to="/projetos/$slug"
                params={{ slug: p.slug }}
                className="group relative block aspect-[4/5] overflow-hidden"
              >
                {/* Image — grayscale default, color on hover */}
                <img
                  src={p.image}
                  alt={`${p.name}, projeto de ${p.category.toLowerCase()} EsDomusTech no Porto`}
                  className="h-full w-full object-cover md:grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.05]"
                />

                {/* Overlay — always visible on mobile, hover on desktop */}
                <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-8 md:p-12 opacity-100 md:opacity-0 transition-opacity duration-500 md:group-hover:opacity-100">
                  <span
                    className="s-label-caps mb-2 block"
                    style={{ color: "var(--gold)", letterSpacing: "0.2em" }}
                  >
                    {p.category}
                  </span>
                  <h3 className="s-headline-md mb-6 text-white">
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
