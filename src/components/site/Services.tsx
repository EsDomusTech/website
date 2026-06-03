import { SectionTitle } from "./SectionTitle";
import { SERVICE_ICONS } from "./icons";

const DESC =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";

const SERVICES = [
  "Arquitetura",
  "Design de Interiores",
  "Design Urbano",
  "Planeamento",
  "Modelação 3D",
  "Plano de Décor",
];

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-1100">
        <SectionTitle first="OS NOSSOS" second="SERVIÇOS" />

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((name, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <div key={name} className="relative bg-white p-10">
                <Icon className="h-12 w-12 text-gold" size={48} />
                <h3 className="tracked mt-6 text-[12px] text-foreground">{name}</h3>
                <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                  {DESC}
                </p>
                <span
                  className="absolute bottom-6 right-8 font-display text-5xl font-semibold leading-none"
                  style={{ color: "var(--ghost)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
