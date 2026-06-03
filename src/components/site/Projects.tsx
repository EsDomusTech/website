import { SectionTitle } from "./SectionTitle";

const PROJECTS = [
  { img: "https://picsum.photos/seed/project1/600/400", cat: "Residencial", name: "Villa Atlântico" },
  { img: "https://picsum.photos/seed/project2/600/400", cat: "Comercial", name: "Edifício Ribeira" },
  { img: "https://picsum.photos/seed/project3/600/400", cat: "Interiores", name: "Loft Boavista" },
  { img: "https://picsum.photos/seed/project4/600/400", cat: "Urbanismo", name: "Praça Central" },
];

export function Projects() {
  return (
    <section id="projects" className="section-pad bg-white">
      <div className="container-1100">
        <SectionTitle first="NOSSOS" second="PROJETOS" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href="#"
              className="group relative block aspect-[3/2] overflow-hidden"
            >
              <img
                src={p.img}
                alt={p.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="tracked text-[10px] text-gold">{p.cat}</p>
                <h3 className="mt-1 font-display text-[22px] font-medium text-white">{p.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
