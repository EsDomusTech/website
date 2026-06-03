import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionTitle } from "@/components/site/SectionTitle";
import { getProject, PROJECTS, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Projeto não encontrado — DomusTech" }] };
    const title = `${p.name} | ${p.category} no ${p.location} — DomusTech`;
    return {
      meta: [
        { title },
        { name: "description", content: p.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${SITE.domain}/projetos/${p.slug}` },
        { property: "og:image", content: p.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: p.image },
      ],
      links: [{ rel: "canonical", href: `${SITE.domain}/projetos/${p.slug}` }],
    };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
  errorComponent: ProjectError,
});

function ProjectDetail() {
  const { project: p } = Route.useLoaderData();
  const others = PROJECTS.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <main>
      <PageHeader
        eyebrow={p.category}
        titleFirst={p.name.split(" ")[0].toUpperCase()}
        titleSecond={p.name.split(" ").slice(1).join(" ").toUpperCase() || p.location.toUpperCase()}
        subtitle={p.summary}
        image={p.image}
        breadcrumbs={[
          { label: "Início", to: "/" },
          { label: "Projetos", to: "/projetos" },
          { label: p.name },
        ]}
      />

      <section className="section-pad">
        <div className="container-1100 grid gap-12 md:grid-cols-3">
          <aside className="space-y-6">
            <div>
              <p className="tracked text-[11px] text-gold">Categoria</p>
              <p className="mt-2 text-[15px] text-foreground">{p.category}</p>
            </div>
            <div>
              <p className="tracked text-[11px] text-gold">Localização</p>
              <p className="mt-2 text-[15px] text-foreground">{p.location}</p>
            </div>
            <div>
              <p className="tracked text-[11px] text-gold">Ano</p>
              <p className="mt-2 text-[15px] text-foreground">{p.year}</p>
            </div>
          </aside>

          <div className="md:col-span-2">
            <SectionTitle first="SOBRE O" second="PROJETO" align="left" />
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
              {p.description.map((d: string, i: number) => (
                <p key={i}>{d}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-1100">
          <SectionTitle first="OUTROS" second="PROJETOS" />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/projetos/$slug"
                params={{ slug: o.slug }}
                className="group relative block aspect-[4/3] overflow-hidden"
              >
                <img
                  src={o.image}
                  alt={o.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <h3 className="absolute bottom-5 left-5 right-5 font-display text-xl font-medium text-white">
                  {o.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}

function ProjectNotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center pt-20 text-center">
      <div>
        <h1 className="font-display text-4xl font-semibold text-foreground">Projeto não encontrado</h1>
        <p className="mt-4 text-muted-foreground">O projeto que procura não existe ou foi movido.</p>
        <Link to="/projetos" className="tracked mt-8 inline-block text-[12px] text-gold">
          Ver todos os projetos →
        </Link>
      </div>
    </main>
  );
}

function ProjectError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <main className="flex min-h-[70vh] items-center justify-center pt-20 text-center">
      <div>
        <h1 className="font-display text-3xl font-semibold text-foreground">Algo correu mal</h1>
        <p className="mt-4 text-muted-foreground">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="tracked mt-8 inline-block border border-foreground px-6 py-3 text-[12px] text-foreground"
        >
          Tentar novamente
        </button>
      </div>
    </main>
  );
}
