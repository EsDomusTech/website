import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CtaBand } from "@/components/site/CtaBand";
import { ClientLogos } from "@/components/site/ClientLogos";
import { VideoTestimonials } from "@/components/site/VideoTestimonials";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Team } from "@/components/site/Team";
import { SITE } from "@/lib/site-data";

const VALUES = [
  {
    num: "01",
    title: "Orçamentos Claros",
    text: "Sem surpresas: o orçamento aprovado fica fixo por contrato, com pagamentos facilitados em 4 etapas de 25%.",
  },
  {
    num: "02",
    title: "Rigor Técnico",
    text: "Estrutura em aço galvanizado DX51D, isolamento termoacústico e classe energética A, cumprindo Eurocódigo, RSA, REBAP e SCE.",
  },
  {
    num: "03",
    title: "Personalização",
    text: "Sistema de \"plafon\": o cliente escolhe casas de banho, cozinha, portas e janelas de catálogo, pagando apenas a diferença de valor.",
  },
  {
    num: "04",
    title: "Construção Modular",
    text: "Fabrico em ambiente fabril controlado, com montagem no terreno até 60% mais rápida do que a construção tradicional.",
  },
];

const STATS = [
  { value: "23", label: "Casas entregues" },
  { value: "4", label: "Anos no mercado" },
  { value: "13", label: "Localizações" },
  { value: "A", label: "Classe energética" },
];

export const Route = createFileRoute("/empresa")({
  head: () => ({
    meta: [
      { title: "Empresa | Arquitetura Modular no Porto, DomusTech" },
      {
        name: "description",
        content:
          "Conheça a DomusTech: estúdio de arquitetura e construção modular no Porto. A nossa missão, valores e equipa dedicada a casas inteligentes e sustentáveis.",
      },
      { property: "og:title", content: "Sobre a DomusTech | Arquitetura Modular no Porto" },
      { property: "og:description", content: "A nossa história, missão e valores." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/empresa` },
      { property: "og:image", content: "https://picsum.photos/seed/office1/1200/630" },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/empresa` }],
  }),
  component: EmpresaPage,
});

function EmpresaPage() {
  return (
    <main style={{ backgroundColor: "#f9f9f9" }}>

      {/* Hero assimétrico 70vh — col-span-7 texto + imagem absolute direita */}
      <header
        className="relative overflow-hidden"
        style={{ height: "70vh", marginTop: 80, marginBottom: 120 }}
      >
        <div className="s-wrap h-full">
          <div className="grid grid-cols-12 gap-8 h-full">
            <div
              className="col-span-12 md:col-span-6 flex flex-col justify-center relative z-10"
              style={{ paddingBlock: 80 }}
            >
              <span className="s-label-caps mb-4 block" style={{ color: "#BE9355", letterSpacing: "0.3em" }}>
                Quem Somos
              </span>
              <h1 className="s-display-lg mb-8" style={{ color: "#000000" }}>
                Arquitetura e Construção Modular no Porto
              </h1>
              <p className="s-body-lg" style={{ color: "#444748", maxWidth: 480 }}>
                Um estúdio de arquitetura e construção modular sediado no Porto, dedicado a criar casas inteligentes, sustentáveis e profundamente humanas.
              </p>
            </div>
          </div>
        </div>
        {/* Imagem absoluta à direita */}
        <div
          className="absolute top-0 right-0 h-full hidden md:block overflow-hidden"
          style={{ width: "50%" }}
        >
          <img
            src="https://picsum.photos/seed/office1/1200/900"
            alt="DomusTech escritório Porto"
            className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out hover:scale-105"
          />
        </div>
      </header>

      {/* História */}
      <section style={{ paddingBlock: 120 }}>
        <div className="s-wrap grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionTitle first="A NOSSA" second="HISTÓRIA" align="left" />
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Acreditamos que a habitação do futuro deve ser personalizada, sustentável e acessível.
                Por isso desenvolvemos casas modulares em estrutura metálica robusta, com isolamento
                termoacústico e design moderno, garantindo rapidez na construção e máxima eficiência
                energética.
              </p>
              <p>
                Em poucos anos no mercado, já entregámos 23 casas em 13 localizações por todo o
                território nacional. Cada projeto segue o mesmo princípio: orçamentos claros e sem
                surpresas, pagamentos facilitados por etapas e projetos modernos e exclusivos à medida
                do cliente.
              </p>
              <p>
                Personalize, construa, viva. A nossa equipa acompanha cada casa da primeira conversa
                à entrega das chaves, com o mesmo rigor técnico do primeiro dia.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/team1/700/520"
              alt="Equipa DomusTech no Porto"
              className="w-full object-cover"
            />
            <span className="tracked absolute bottom-5 right-5 bg-white px-5 py-3 text-[11px] text-foreground shadow-sm">
              Porto Office
            </span>
          </div>
        </div>
      </section>

      {/* Valores — layout assimétrico Stitch: título esq 5/12 + grid direita 7/12 */}
      <section style={{ paddingBlock: 120, backgroundColor: "#f0f0f0" }}>
        <div className="s-wrap">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            {/* Left: título grande */}
            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="block h-0.5 w-8" style={{ backgroundColor: "var(--gold)" }} />
                  <span
                    className="tracked text-[11px] font-semibold"
                    style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
                  >
                    O Que Nos Define
                  </span>
                </div>
                <h2
                  className="text-[34px] font-extrabold uppercase leading-tight md:text-[44px]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  PRECISÃO EM{" "}
                  <span style={{ color: "var(--gold)" }}>CADA DETALHE</span>
                </h2>
              </motion.div>
            </div>

            {/* Right: 2×2 grid de valores numerados */}
            <div className="md:col-span-7">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {VALUES.map((v, i) => (
                  <motion.div
                    key={v.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <h3
                      className="tracked mb-3 text-[11px] font-bold text-foreground"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {v.num} / {v.title.toUpperCase()}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-muted-foreground">{v.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "#1a1a1a" }}>
        <div className="s-wrap grid grid-cols-2 gap-10 py-20 text-center md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="s-display-lg leading-none" style={{ color: "#BE9355" }}>{s.value}</p>
              <p className="s-label-caps mt-3" style={{ color: "rgba(255,255,255,0.65)" }}>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Equipa — secção Stitch 4-col portrait grid */}
      <Team />

      <VideoTestimonials />
      <ClientLogos />
      <CtaBand />
    </main>
  );
}
