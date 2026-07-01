import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Team } from "@/components/site/Team";
import { SITE } from "@/lib/site-data";

const VALUES = [
  { num: "01", title: "Colaboração", text: "Cada projeto é uma parceria. Ouvimos, questionamos e co-criamos com o cliente em cada fase." },
  { num: "02", title: "Excelência", text: "Recusamos o mediano. Cada detalhe técnico e estético é trabalhado com o máximo rigor." },
  { num: "03", title: "Inovação", text: "Integramos as mais recentes tecnologias de construção e design para entregar resultados únicos." },
];

export const Route = createFileRoute("/equipa")({
  head: () => ({
    meta: [
      { title: "Equipa | As Pessoas por Trás da EsDomusTech, Porto" },
      { name: "description", content: "Conheça a equipa da EsDomusTech: gestores de obra, técnicos e administrativos dedicados a construir casas modulares de excelência no Porto." },
      { property: "og:title", content: "A Nossa Equipa | EsDomusTech" },
      { property: "og:description", content: "Conheça a equipa da EsDomusTech dedicada a casas modulares de excelência." },
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

      <header style={{ paddingBlock: "120px 0" }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <motion.span
                className="s-label-caps mb-4 block"
                style={{ color: "#BE9355", letterSpacing: "0.3em" }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                As Pessoas
              </motion.span>
              <motion.h1
                className="s-display-lg mb-8"
                style={{ color: "#000000" }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              >
                A Nossa<br />
                <span style={{ color: "#BE9355" }}>Equipa</span>
              </motion.h1>
              <motion.p
                className="s-body-lg"
                style={{ color: "#444748", maxWidth: 640 }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                Um grupo dedicado de profissionais unidos pela mesma paixão: construir casas modulares de excelência.
              </motion.p>
            </div>
          </div>
        </div>
      </header>

      <Team />

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
                    className="mb-3 text-[16px] uppercase"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "0.06em", color: "var(--foreground)" }}
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
        title={"Trabalhe\nConnosco"}
        text="Estamos sempre à procura de talento. Envie o seu portfólio para geral@esdomustech.com"
        label="Ver Vagas"
      />
    </main>
  );
}
