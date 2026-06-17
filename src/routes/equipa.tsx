import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionTitle } from "@/components/site/SectionTitle";
import { TEAM, SITE } from "@/lib/site-data";

const EXTENDED_TEAM = [
  ...TEAM,
  {
    name: "Rui Oliveira",
    role: "Engenheiro de Estruturas",
    image: "https://picsum.photos/seed/portrait-rui/600/800",
  },
  {
    name: "Mariana Silva",
    role: "Gestora de Projetos",
    image: "https://picsum.photos/seed/portrait-mariana/600/800",
  },
  {
    name: "Tiago Monteiro",
    role: "Especialista em BIM",
    image: "https://picsum.photos/seed/portrait-tiago/600/800",
  },
  {
    name: "Inês Rodrigues",
    role: "Arquitecta de Interiores",
    image: "https://picsum.photos/seed/portrait-ines/600/800",
  },
];

const VALUES = [
  { num: "01", title: "Colaboração", text: "Cada projeto é uma parceria. Ouvimos, questionamos e co-criamos com o cliente em cada fase." },
  { num: "02", title: "Excelência", text: "Recusamos o mediano. Cada detalhe técnico e estético é trabalhado com o máximo rigor." },
  { num: "03", title: "Inovação", text: "Integramos as mais recentes tecnologias de construção e design para entregar resultados únicos." },
];

export const Route = createFileRoute("/equipa")({
  head: () => ({
    meta: [
      { title: "Equipa | Os Arquitectos e Designers da DomusTech, Porto" },
      { name: "description", content: "Conheça a equipa multidisciplinar da DomusTech: arquitectos, engenheiros e designers dedicados a criar casas modulares de excelência no Porto." },
      { property: "og:title", content: "A Nossa Equipa | DomusTech" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/equipa` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/equipa` }],
  }),
  component: EquipaPage,
});

function EquipaPage() {
  return (
    <main style={{ backgroundColor: "#f9f9f9" }}>

      {/* Hero — display-lg, sem imagem */}
      <header style={{ paddingBlock: "120px 0" }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <span className="s-label-caps mb-4 block" style={{ color: "#BE9355", letterSpacing: "0.3em" }}>
                As Pessoas
              </span>
              <h1 className="s-display-lg mb-8" style={{ color: "#000000" }}>
                A Nossa Equipa
              </h1>
              <p className="s-body-lg" style={{ color: "#444748", maxWidth: 640 }}>
                Um grupo multidisciplinar de arquitectos, engenheiros e designers unidos pela mesma paixão: criar espaços extraordinários.
              </p>
            </div>
            <div className="col-span-4 self-end hidden md:block">
              <div className="h-px w-full mb-8" style={{ backgroundColor: "#c4c7c7" }} />
            </div>
          </div>
        </div>
      </header>

      {/* Team grid */}
      <section style={{ paddingBlock: 120 }}>
        <div className="s-wrap">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {EXTENDED_TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="group"
              >
                {/* Portrait */}
                <div className="relative aspect-[3/4] overflow-hidden" style={{ backgroundColor: "var(--logo-strip)" }}>
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role} na DomusTech`}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
                  {/* Gold bottom bar */}
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: "var(--gold)" }}
                  />
                  {/* Social icons on hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex translate-y-4 justify-center gap-3 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="flex h-8 w-8 items-center justify-center bg-white text-foreground transition-colors hover:bg-[color:var(--gold)] hover:text-white"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="flex h-8 w-8 items-center justify-center bg-white text-foreground transition-colors hover:bg-[color:var(--gold)] hover:text-white"
                    >
                      <Instagram className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-4">
                  <h3
                    className="text-[14px] leading-snug"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--foreground)" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="tracked mt-1.5 text-[10px] font-medium"
                    style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
                  >
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ backgroundColor: "var(--logo-strip)" }}>
        <div className="container-1100">
          <div className="grid items-start gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionTitle eyebrow="Como Trabalhamos" first="Os Nossos" second="Valores" align="left" />
            </div>
            <div className="grid gap-10 md:col-span-7 sm:grid-cols-3">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <p
                    className="tracked mb-3 text-[11px] font-medium"
                    style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
                  >
                    {v.num}
                  </p>
                  <h4
                    className="mb-3 text-[16px]"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--foreground)" }}
                  >
                    {v.title}
                  </h4>
                  <p className="text-[14px] font-light leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {v.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Trabalhe\nConnosco"
        text="Estamos sempre à procura de talento. Envie o seu portfólio para joinus@domustech.pt"
        label="Ver Vagas"
      />
    </main>
  );
}
