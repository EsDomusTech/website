import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { SERVICE_ICONS } from "./icons";
import { ArrowRight } from "lucide-react";

const DESC =
  "Soluções integradas de design e engenharia pensadas para responder às exigências do cliente moderno.";

const SERVICES = [
  { name: "Arquitetura", slug: "arquitetura" },
  { name: "Design de Interiores", slug: "design-interiores" },
  { name: "Design Urbano", slug: "design-urbano" },
  { name: "Planeamento", slug: "planeamento" },
  { name: "Modelação 3D", slug: "modelacao-3d" },
  { name: "Plano de Décor", slug: "plano-decor" },
];

export function Services() {
  return (
    <section id="services" className="section-pad" style={{ backgroundColor: "var(--logo-strip)" }}>
      <div className="container-1100">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle eyebrow="O Que Fazemos" first="Os Nossos" second="Serviços" align="left" />
          <p className="max-w-sm text-[14px] leading-relaxed text-muted-foreground">{DESC}</p>
        </div>

        <div className="grid gap-0 border border-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <motion.div
                key={svc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group relative border-b border-r border-border bg-white p-10 transition-all duration-300 hover:shadow-lg"
              >
                {/* Colored top border — becomes thicker on hover */}
                <div
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundColor: "var(--gold)" }}
                />
                {/* Thin baseline always visible */}
                <div
                  className="absolute inset-x-0 top-0 h-px opacity-30"
                  style={{ backgroundColor: "var(--gold)" }}
                />

                {/* Icon */}
                <div
                  className="mb-7 inline-flex h-14 w-14 items-center justify-center transition-colors duration-300 group-hover:bg-[color:var(--gold)]"
                  style={{ backgroundColor: "var(--logo-strip)" }}
                >
                  <Icon
                    className="h-6 w-6 transition-colors duration-300 group-hover:text-white"
                    style={{ color: "var(--gold)" }}
                    size={24}
                  />
                </div>

                <h3
                  className="mb-3 text-[17px] font-bold leading-snug text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {svc.name}
                </h3>

                <p className="text-[14px] leading-relaxed text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>

                <a
                  href={`/servicos/${svc.slug}`}
                  className="mt-7 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 group-hover:gap-3 group-hover:text-[color:var(--gold)]"
                  style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
                >
                  Saber Mais <ArrowRight className="h-3 w-3" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
