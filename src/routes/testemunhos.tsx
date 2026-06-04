import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionTitle } from "@/components/site/SectionTitle";
import { ClientLogos } from "@/components/site/ClientLogos";
import { SITE } from "@/lib/site-data";

const TESTIMONIALS = [
  {
    num: "01",
    quote: "Do projeto à entrega, a equipa DomusTech foi impecável. A casa superou todas as expectativas — moderna, funcional e exatamente o que sonhámos.",
    name: "Maria Fernandes",
    role: "Proprietária, Villa Atlântico",
    project: "Foz do Douro, Porto · 2025",
    avatar: "https://picsum.photos/seed/avatar1/200/200",
    stars: 5,
  },
  {
    num: "02",
    quote: "Profissionalismo e atenção ao detalhe a um nível excecional. O processo foi transparente do início ao fim e o resultado fala por si.",
    name: "João Almeida",
    role: "Diretor, Edifício Ribeira",
    project: "Ribeira, Porto · 2024",
    avatar: "https://picsum.photos/seed/avatar2/200/200",
    stars: 5,
  },
  {
    num: "03",
    quote: "Transformaram a nossa visão num espaço que vai além do que imaginávamos. A qualidade dos materiais e a precisão da execução são extraordinárias.",
    name: "Sofia Carvalho",
    role: "Proprietária, Loft Boavista",
    project: "Boavista, Porto · 2025",
    avatar: "https://picsum.photos/seed/avatar3/200/200",
    stars: 5,
  },
  {
    num: "04",
    quote: "Recomendo vivamente a DomusTech a quem procura qualidade, rigor e uma equipa que realmente ouve o cliente. O resultado final superou todas as expectativas.",
    name: "Pedro Costa",
    role: "Gestor, Espaço Comercial Matosinhos",
    project: "Matosinhos, Porto · 2023",
    avatar: "https://picsum.photos/seed/avatar4/200/200",
    stars: 5,
  },
  {
    num: "05",
    quote: "A nossa casa modular ficou pronta em tempo recorde e com uma qualidade de construção que rival com qualquer projeto tradicional. Fantásticos.",
    name: "Carla Mendes",
    role: "Proprietária, Moradia Gaia",
    project: "Vila Nova de Gaia · 2024",
    avatar: "https://picsum.photos/seed/avatar5/200/200",
    stars: 5,
  },
  {
    num: "06",
    quote: "O acompanhamento foi exemplar — desde o primeiro esboço até à entrega das chaves. Sabem exatamente o que fazem e comunicam com total transparência.",
    name: "António Ramos",
    role: "Proprietário, Casa Braga",
    project: "Braga · 2025",
    avatar: "https://picsum.photos/seed/avatar6/200/200",
    stars: 5,
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
    <main>
      <PageHeader
        eyebrow="Clientes"
        titleFirst="Os Nossos"
        titleSecond="Testemunhos"
        subtitle="Histórias reais de quem confiou na DomusTech para construir o espaço dos seus sonhos."
        image="https://picsum.photos/seed/testimonials-hero/1600/900"
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Testemunhos" }]}
      />

      {/* Stats */}
      <section style={{ backgroundColor: "var(--dark-section)" }}>
        <div className="container-1100 grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center py-12"
              style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
            >
              <p
                className="text-[44px] leading-none"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--gold)" }}
              >
                {s.value}
              </p>
              <p className="tracked mt-3 text-center text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="section-pad" style={{ backgroundColor: "var(--background)" }}>
        <div className="container-1100">
          <div className="mb-16 text-center">
            <SectionTitle eyebrow="Depoimentos" first="O Que Dizem" second="os Clientes" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="relative flex flex-col bg-white p-8"
                style={{ border: "1px solid var(--border)" }}
              >
                {/* Number */}
                <span
                  className="absolute right-7 top-6 select-none text-[48px] leading-none"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "rgba(0,0,0,0.04)" }}
                  aria-hidden
                >
                  {t.num}
                </span>

                {/* Stars */}
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} className="h-3.5 w-3.5 fill-current" style={{ color: "var(--gold)" }} />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="mb-4 h-5 w-5" style={{ color: "var(--gold)" }} />
                <p className="flex-1 text-[14px] font-light leading-[1.9]" style={{ color: "var(--muted-foreground)" }}>
                  {t.quote}
                </p>

                {/* Divider */}
                <div className="my-6 h-px" style={{ backgroundColor: "var(--border)" }} />

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="h-12 w-12 object-cover" />
                  <div>
                    <p
                      className="text-[13px]"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--foreground)" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-[11px] font-light" style={{ color: "var(--muted-foreground)" }}>{t.role}</p>
                    <p className="mt-0.5 text-[10px] font-medium" style={{ color: "var(--gold)", fontFamily: "var(--font-display)", letterSpacing: "0.1em" }}>
                      {t.project}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
