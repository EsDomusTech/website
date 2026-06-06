import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CtaBand } from "@/components/site/CtaBand";
import { ClientLogos } from "@/components/site/ClientLogos";
import { SITE } from "@/lib/site-data";

const TESTIMONIALS = [
  {
    num: "01",
    quote: "Do projeto à entrega, a equipa DomusTech foi impecável. A casa superou todas as expectativas — moderna, funcional e exatamente o que sonhámos.",
    name: "Maria Fernandes",
    role: "Proprietária, Villa Atlântico",
    project: "Foz do Douro, Porto · 2025",
    image: "https://picsum.photos/seed/test-img1/800/600",
  },
  {
    num: "02",
    quote: "Profissionalismo e atenção ao detalhe a um nível excecional. O processo foi transparente do início ao fim e o resultado fala por si.",
    name: "João Almeida",
    role: "Diretor, Edifício Ribeira",
    project: "Ribeira, Porto · 2024",
    image: "https://picsum.photos/seed/test-img2/800/600",
  },
  {
    num: "03",
    quote: "Transformaram a nossa visão num espaço que vai além do que imaginávamos. A qualidade dos materiais e a precisão da execução são extraordinárias.",
    name: "Sofia Carvalho",
    role: "Proprietária, Loft Boavista",
    project: "Boavista, Porto · 2025",
    image: "https://picsum.photos/seed/test-img3/800/600",
  },
  {
    num: "04",
    quote: "Recomendo vivamente a DomusTech a quem procura qualidade, rigor e uma equipa que realmente ouve o cliente. O resultado final superou todas as expectativas.",
    name: "Pedro Costa",
    role: "Gestor, Espaço Comercial Matosinhos",
    project: "Matosinhos, Porto · 2023",
    image: null,
  },
];

const STATS = [
  { value: "98%", label: "Clientes Satisfeitos" },
  { value: "340+", label: "Projetos Entregues" },
  { value: "12", label: "Anos de Experiência" },
  { value: "5★", label: "Avaliação Média" },
];

export const Route = createFileRoute("/testemunhos")({
  head: () => ({
    meta: [
      { title: "Testemunhos | O Que Dizem os Nossos Clientes — DomusTech" },
      { name: "description", content: "Veja o que os nossos clientes dizem sobre os projetos DomusTech. Testemunhos reais de famílias e empresas que confiaram em nós." },
      { property: "og:title", content: "Testemunhos — DomusTech" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/testemunhos` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/testemunhos` }],
  }),
  component: TestemunhosPage,
});

function TestemunhosPage() {
  return (
    <main style={{ backgroundColor: "#f9f9f9" }}>

      {/* Hero — display-lg sem imagem, com divider gold */}
      <header style={{ paddingTop: 80, paddingBottom: 64 }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <span
                className="s-label-caps mb-4 block"
                style={{ color: "#BE9355", letterSpacing: "0.3em" }}
              >
                Clientes
              </span>
              <h1 className="s-display-lg" style={{ color: "#000000" }}>
                Parcerias <br />
                <span style={{ marginLeft: 80, display: "inline-block" }}>Elevadas.</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Divider especial gold/cinza */}
        <div
          className="mt-16"
          style={{
            height: 4,
            background: "linear-gradient(to right, #BE9355 12%, #eeeeee 12%)",
          }}
        />
      </header>

      {/* Stats — fundo escuro */}
      <section style={{ backgroundColor: "#1b1b1b" }}>
        <div className="s-wrap">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
                style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
              >
                <p
                  className="s-display-lg leading-none"
                  style={{ color: "#BE9355" }}
                >
                  {s.value}
                </p>
                <p className="s-label-caps mt-3" style={{ color: "#858383" }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testemunhos — padrões alternados per UI.md */}
      <section style={{ paddingBlock: 120 }}>
        <div className="s-wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: 96 }}>

            {/* Padrão 1 — Citação grande com imagem (odd) */}
            {TESTIMONIALS.filter((_, i) => i % 2 === 0).map((t, idx) => (
              <motion.div
                key={t.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid grid-cols-12 gap-8 items-center"
              >
                {/* Col texto — 7/12 */}
                <div className="col-span-12 md:col-span-7">
                  <p className="s-label-caps mb-8" style={{ color: "#999999" }}>
                    {t.num} / CASO DE ESTUDO
                  </p>
                  <p
                    className="s-headline-lg mb-12 relative italic"
                    style={{ color: "#000000" }}
                  >
                    <span
                      className="absolute pointer-events-none select-none"
                      style={{
                        left: -40,
                        top: 0,
                        color: "#BE9355",
                        opacity: 0.3,
                        fontSize: 96,
                        fontFamily: "Oswald, sans-serif",
                        lineHeight: 1,
                      }}
                      aria-hidden
                    >
                      "
                    </span>
                    {t.quote}
                  </p>
                  <div
                    className="flex justify-between items-end border-l pl-6 py-2"
                    style={{ borderColor: "#BE9355" }}
                  >
                    <div>
                      <p className="s-headline-md" style={{ color: "#000000" }}>{t.name}</p>
                      <p className="s-label-caps mt-1" style={{ color: "#999999" }}>{t.role}</p>
                    </div>
                    {t.image && (
                      <img
                        src={t.image}
                        alt={t.name}
                        className="object-cover"
                        style={{ width: 128, height: 80, filter: "grayscale(1) opacity(0.5)", transition: "all 0.3s" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.filter = "grayscale(0) opacity(1)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.filter = "grayscale(1) opacity(0.5)"; }}
                      />
                    )}
                  </div>
                </div>

                {/* Col imagem — 4/12, mt-20 stagger */}
                {t.image && (
                  <div
                    className="col-span-12 md:col-span-4 md:col-start-9 hidden md:block"
                    style={{ marginTop: 80 }}
                  >
                    <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Padrão 2 — Card com bg claro + estrelas (even) */}
            {TESTIMONIALS.filter((_, i) => i % 2 !== 0).map((t) => (
              <motion.div
                key={t.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div
                  className="h-px mb-24"
                  style={{ backgroundColor: "#eeeeee" }}
                />
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-12 md:col-span-7">
                    <p className="s-label-caps mb-8" style={{ color: "#999999" }}>
                      {t.num} / TESTEMUNHO
                    </p>
                    <p className="s-headline-lg mb-12" style={{ color: "#000000" }}>
                      {t.quote}
                    </p>
                    <div
                      className="border-l pl-6 py-2"
                      style={{ borderColor: "#BE9355" }}
                    >
                      <p className="s-headline-md" style={{ color: "#000000" }}>{t.name}</p>
                      <p className="s-label-caps mt-1" style={{ color: "#999999" }}>{t.role}</p>
                      <p className="s-label-caps mt-1" style={{ color: "#BE9355" }}>{t.project}</p>
                    </div>
                  </div>
                  {t.image && (
                    <div className="col-span-12 md:col-span-4 md:col-start-9 hidden md:block" style={{ marginTop: 80 }}>
                      <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Padrão 3 — Card com bg claro + texto + logos placeholder */}
      <section style={{ paddingBlock: 120, backgroundColor: "#f3f3f3" }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6">
              <span className="material-symbols-outlined text-4xl mb-4 block" style={{ color: "#BE9355" }}>
                star_rate
              </span>
              <h3 className="s-headline-md mb-6" style={{ color: "#000000" }}>
                "Uma equipa que ouve e executa com perfeição."
              </h3>
              <p className="s-body-lg" style={{ color: "#999999", maxWidth: 480 }}>
                A confiança dos nossos clientes é o maior reconhecimento. Construímos relações duradouras, projeto após projeto.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                {["CF", "GB", "AM", "PR"].map((initials) => (
                  <div
                    key={initials}
                    className="aspect-square flex items-center justify-center"
                    style={{ backgroundColor: "#ffffff", border: "1px solid #eeeeee" }}
                  >
                    <span
                      className="s-headline-lg"
                      style={{ color: "#000000", opacity: 0.15 }}
                    >
                      {initials}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final — bg escuro */}
      <section style={{ backgroundColor: "#1b1b1b", paddingBlock: 120 }}>
        <div className="s-wrap text-center">
          <h2
            className="s-headline-lg mb-12"
            style={{ color: "#ffffff", letterSpacing: "0.2em" }}
          >
            Pronto para o Seu Projeto?
          </h2>
          <a
            href="/contacto"
            className="s-label-caps inline-flex items-center gap-4 border px-12 py-5 transition-all duration-300 hover:bg-[#BE9355] hover:border-[#BE9355]"
            style={{ color: "#ffffff", borderColor: "#ffffff" }}
          >
            Pedir Consulta Gratuita
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>
      </section>

      <ClientLogos />
      <CtaBand
        title="Pronto para o\nSeu Projeto?"
        text="Junte-se a centenas de clientes satisfeitos. Contacte-nos para uma consulta gratuita."
      />
    </main>
  );
}
