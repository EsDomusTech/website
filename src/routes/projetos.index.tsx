import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { PROJECTS, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Projetos | Arquitetura Modular no Porto, DomusTech" },
      {
        name: "description",
        content:
          "Explore o portfólio DomusTech: casas modulares, reabilitações, interiores e projetos de urbanismo realizados no Porto e região Norte.",
      },
      { property: "og:title", content: "Projetos | DomusTech Porto" },
      { property: "og:description", content: "Portfólio de arquitetura e construção modular no Porto." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/projetos` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/projetos` }],
  }),
  component: ProjetosPage,
});

function ProjetosPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Portfólio"
        titleFirst="OS NOSSOS"
        titleSecond="PROJETOS"
        subtitle="Uma seleção de projetos que refletem a nossa abordagem à arquitetura modular e ao design."
        image="https://images.unsplash.com/photo-1449030278034-c8aad2bc6fdf?w=1600&h=900&fit=crop&auto=format&q=80"
      />

      <section className="section-pad">
        <div className="container-1100 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <Link
              key={p.slug}
              to="/projetos/$slug"
              params={{ slug: p.slug }}
              className="group relative block aspect-[3/2] overflow-hidden"
            >
              <img
                src={p.image}
                alt={`${p.name}, projeto de ${p.category.toLowerCase()} DomusTech no Porto`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="tracked text-[10px] text-gold">
                  {p.category} · {p.location}
                </p>
                <h2 className="mt-1 font-display text-[22px] font-medium text-white">{p.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
