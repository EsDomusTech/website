import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CtaBand } from "@/components/site/CtaBand";
import { ClientLogos } from "@/components/site/ClientLogos";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site-data";

const TESTIMONIALS = [
  {
    num: "01",
    quote: "Do projeto à entrega, a equipa DomusTech foi impecável. A casa superou todas as expectativas. Moderna, funcional e exatamente o que sonhámos.",
    name: "Maria Fernandes",
    role: "Proprietária, Villa Atlântico",
    project: "Foz do Douro, Porto · 2025",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=600&fit=crop&auto=format&q=80",
  },
  {
    num: "02",
    quote: "Profissionalismo e atenção ao detalhe a um nível excecional. O processo foi transparente do início ao fim e o resultado fala por si.",
    name: "João Almeida",
    role: "Diretor, Edifício Ribeira",
    project: "Ribeira, Porto · 2024",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=800&h=600&fit=crop&auto=format&q=80",
  },
  {
    num: "03",
    quote: "Transformaram a nossa visão num espaço que vai além do que imaginávamos. A qualidade dos materiais e a precisão da execução são extraordinárias.",
    name: "Sofia Carvalho",
    role: "Proprietária, Loft Boavista",
    project: "Boavista, Porto · 2025",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=600&fit=crop&auto=format&q=80",
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


export const Route = createFileRoute("/testemunhos")({
  head: () => ({
    meta: [
      { title: "Testemunhos | O Que Dizem os Nossos Clientes, DomusTech" },
      { name: "description", content: "Veja o que os nossos clientes dizem sobre os projetos DomusTech. Testemunhos reais de famílias e empresas que confiaram em nós." },
      { property: "og:title", content: "Testemunhos | DomusTech" },
      { property: "og:description", content: "Veja o que os nossos clientes dizem sobre os projetos DomusTech. Testemunhos reais de famílias e empresas." },
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
      <header style={{ paddingTop: 140, paddingBottom: 64 }}>
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
                  <p className="s-label-caps mb-8" style={{ color: "var(--label-muted)" }}>
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
                      <p className="s-label-caps mt-1" style={{ color: "var(--label-muted)" }}>{t.role}</p>
                    </div>
                    {t.image && (
                      <img
                        src={t.image}
                        alt={`${t.name}, cliente DomusTech`}
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
                        alt={`${t.name}, cliente DomusTech`}
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
                    <p className="s-label-caps mb-8" style={{ color: "var(--label-muted)" }}>
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
                      <p className="s-label-caps mt-1" style={{ color: "var(--label-muted)" }}>{t.role}</p>
                      <p className="s-label-caps mt-1" style={{ color: "#BE9355" }}>{t.project}</p>
                    </div>
                  </div>
                  {t.image && (
                    <div className="col-span-12 md:col-span-4 md:col-start-9 hidden md:block" style={{ marginTop: 80 }}>
                      <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
                        <img
                          src={t.image}
                          alt={`${t.name}, cliente DomusTech`}
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
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <ClientLogos />
      <CtaBand
        title={"Pronto para o\nSeu Projeto?"}
        text="Junte-se a centenas de clientes satisfeitos. Contacte-nos para uma consulta gratuita."
      />
    </main>
  );
}
