import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { ClientLogos } from "@/components/site/ClientLogos";
import { VideoTestimonials } from "@/components/site/VideoTestimonials";
import { SectionTitle } from "@/components/site/SectionTitle";
import { SITE } from "@/lib/site-data";

const VALUES = [
  {
    title: "Sustentabilidade",
    text: "Construímos com materiais responsáveis e soluções de eficiência energética que reduzem a pegada de carbono.",
  },
  {
    title: "Rigor",
    text: "Cada projeto é gerido com precisão técnica, prazos claros e controlo de qualidade em todas as fases.",
  },
  {
    title: "Personalização",
    text: "Desenhamos espaços únicos, adaptados ao estilo de vida, ao orçamento e às ambições de cada cliente.",
  },
];

const STATS = [
  { value: "120+", label: "Projetos entregues" },
  { value: "15", label: "Anos de experiência" },
  { value: "98%", label: "Clientes satisfeitos" },
  { value: "A+", label: "Eficiência energética" },
];

export const Route = createFileRoute("/empresa")({
  head: () => ({
    meta: [
      { title: "Empresa | Estúdio de Arquitetura Modular no Porto — DomusTech" },
      {
        name: "description",
        content:
          "Conheça a DomusTech: estúdio de arquitetura e construção modular no Porto. A nossa missão, valores e equipa dedicada a casas inteligentes e sustentáveis.",
      },
      { property: "og:title", content: "Sobre a DomusTech — Arquitetura Modular no Porto" },
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
    <main>
      <PageHeader
        eyebrow="Quem Somos"
        titleFirst="SOBRE"
        titleSecond="NÓS"
        subtitle="Um estúdio de arquitetura e construção modular sediado no Porto, dedicado a criar casas inteligentes, sustentáveis e profundamente humanas."
        image="https://picsum.photos/seed/office1/1600/900"
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Empresa" }]}
      />

      <section className="section-pad">
        <div className="container-1100 grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionTitle first="A NOSSA" second="HISTÓRIA" align="left" />
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Fundada no coração do Porto, a DomusTech nasceu da convicção de que a construção pode
                ser mais rápida, mais limpa e mais bonita. Especializámo-nos em casas modulares que
                combinam arquitetura contemporânea com tecnologia de fabrico de precisão.
              </p>
              <p>
                Ao longo dos anos, ajudámos famílias e empresas a concretizar espaços que refletem a
                sua identidade, sempre com foco na sustentabilidade e na eficiência energética.
              </p>
              <p>
                Hoje, a nossa equipa multidisciplinar de arquitetos, engenheiros e designers acompanha
                cada projeto do conceito à entrega, com o mesmo rigor e paixão do primeiro dia.
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

      <section className="section-pad bg-white">
        <div className="container-1100">
          <SectionTitle first="OS NOSSOS" second="VALORES" />
          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white p-10">
                <h3 className="tracked text-[13px] text-foreground">{v.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--logo-strip)" }}>
        <div className="container-1100 grid grid-cols-2 gap-10 py-20 text-center md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl font-semibold text-gold">{s.value}</p>
              <p className="tracked mt-3 text-[11px] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <VideoTestimonials />
      <ClientLogos />
      <CtaBand />
    </main>
  );
}
