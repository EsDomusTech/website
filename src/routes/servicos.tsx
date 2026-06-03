import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { Services } from "@/components/site/Services";
import { SectionTitle } from "@/components/site/SectionTitle";
import { SERVICES, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços | Construção Modular, Interiores e Remodelação — DomusTech" },
      {
        name: "description",
        content:
          "Serviços DomusTech no Porto: casas modulares, construção modular, design de interiores e remodelação. Soluções chave na mão, sustentáveis e personalizadas.",
      },
      { property: "og:title", content: "Serviços — DomusTech Porto" },
      {
        property: "og:description",
        content: "Casas modulares, construção modular, design de interiores e remodelação no Porto.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/servicos` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/servicos` }],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <main>
      <PageHeader
        eyebrow="O Que Fazemos"
        titleFirst="OS NOSSOS"
        titleSecond="SERVIÇOS"
        subtitle="Do conceito à entrega, oferecemos soluções completas de arquitetura e construção modular no Porto."
        image="https://picsum.photos/seed/modular2/1600/900"
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Serviços" }]}
      />

      <section className="section-pad">
        <div className="container-1100">
          <SectionTitle first="ÁREAS DE" second="ESPECIALIDADE" />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/servicos/$slug"
                params={{ slug: s.slug }}
                className="group relative block overflow-hidden bg-white"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-medium text-foreground">{s.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.excerpt}</p>
                  <span className="tracked mt-5 inline-block text-[11px] text-gold">Saber mais →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <CtaBand />
    </main>
  );
}
