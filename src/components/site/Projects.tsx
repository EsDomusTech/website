import { Link } from "@tanstack/react-router";
import { SectionTitle } from "./SectionTitle";
import { PROJECTS } from "@/lib/site-data";

export function Projects() {
  return (
    <section id="projects" className="section-pad bg-white">
      <div className="container-1100">
        <SectionTitle first="NOSSOS" second="PROJETOS" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <Link
              key={p.slug}
              to="/projetos/$slug"
              params={{ slug: p.slug }}
              className="group relative block aspect-[3/2] overflow-hidden"
            >
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="tracked text-[10px] text-gold">{p.category}</p>
                <h3 className="mt-1 font-display text-[22px] font-medium text-white">{p.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
