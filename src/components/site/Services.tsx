import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { SectionTitle } from "./SectionTitle";

const SERVICES = [
  {
    name: "Arquitetura",
    slug: "casas-modulares-porto",
    desc: "Projetos de arquitetura contemporânea, do estudo prévio ao projeto de execução, com acompanhamento técnico integral.",
  },
  {
    name: "Design de Interiores",
    slug: "design-interiores",
    desc: "Interiores que equilibram estética e funcionalidade — conceito, materiais, iluminação e styling final numa entrega chave na mão.",
  },
  {
    name: "Design Urbano",
    slug: "construcao-modular",
    desc: "Requalificação de espaços públicos com estruturas modulares, mobiliário urbano sustentável e integração paisagística.",
  },
  {
    name: "Planeamento",
    slug: "remodelacao",
    desc: "Gestão de projeto end-to-end: cronograma, licenciamento, coordenação de especialidades e controlo de custos rigoroso.",
  },
  {
    name: "Modelação 3D",
    slug: "consultoria-energetica",
    desc: "Visualizações fotorrealistas e maquetes virtuais que permitem validar o design antes de iniciar a construção.",
  },
  {
    name: "Plano de Décor",
    slug: "design-paisagistico",
    desc: "Seleção e fornecimento de mobiliário, têxteis e objetos de decoração, com styling final para entrega imediata.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-pad" style={{ backgroundColor: "var(--background)" }}>
      <div className="container-1100">
        <SectionTitle first="Os Nossos" second="Serviços" align="left" className="mb-16" />

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={svc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group border-l pb-12 pl-8 pt-4 transition-colors duration-500 hover:border-[color:var(--gold)]"
                style={{ borderColor: "var(--border)" }}
              >
                {/* Ghost number — top */}
                <span
                  className="mb-6 block select-none text-[64px] leading-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    color: "#e2e2e2",
                    letterSpacing: "0.02em",
                  }}
                  aria-hidden
                >
                  {num}
                </span>

                <h3
                  className="mb-4 text-[13px]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--foreground)",
                  }}
                >
                  {svc.name}
                </h3>

                <p
                  className="mb-8 text-[14px] font-light leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {svc.desc}
                </p>

                <Link
                  to="/servicos/$slug"
                  params={{ slug: svc.slug }}
                  className="inline-block text-[22px] transition-transform duration-500 group-hover:translate-x-2"
                  style={{ color: "var(--gold)" }}
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
