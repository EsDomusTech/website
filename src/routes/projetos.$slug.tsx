import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionTitle } from "@/components/site/SectionTitle";
import { SITE } from "@/lib/site-data";
import { fetchProject, fetchProjects } from "@/lib/sanity-queries";

export const Route = createFileRoute("/projetos/$slug")({
  loader: async ({ params }) => {
    const [project, allProjects] = await Promise.all([fetchProject(params.slug), fetchProjects()]);
    if (!project) throw notFound();
    return { project, allProjects };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Projeto não encontrado | EsDomusTech" }] };
    const title = `${p.name} | ${p.category} | EsDomusTech`;
    return {
      meta: [
        { title },
        { name: "description", content: p.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${SITE.domain}/projetos/${p.slug}` },
        { property: "og:image", content: `${SITE.domain}${p.image}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: `${SITE.domain}${p.image}` },
      ],
      links: [{ rel: "canonical", href: `${SITE.domain}/projetos/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: p.name,
            description: p.summary,
            image: `${SITE.domain}${p.image}`,
            url: `${SITE.domain}/projetos/${p.slug}`,
            dateCreated: p.year,
            creator: {
              "@type": "Organization",
              name: SITE.name,
              url: SITE.domain,
            },
            about: p.category,
          }),
        },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
  errorComponent: ProjectError,
});

function ProjectDetail() {
  const { project: p, allProjects } = Route.useLoaderData();
  const others = allProjects.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <main>
      <PageHeader
        eyebrow={p.category}
        titleFirst={p.name.split(" ")[0].toUpperCase()}
        titleSecond={p.name.split(" ").slice(1).join(" ").toUpperCase() || p.spec.toUpperCase()}
        subtitle={p.summary}
        image={p.image}
      />

      <section className="section-pad">
        <div className="container-1100 grid gap-12 md:grid-cols-3">
          <aside className="space-y-6">
            <div>
              <p className="tracked text-[11px] text-gold">Categoria</p>
              <p className="mt-2 text-[15px] text-foreground">{p.category}</p>
            </div>
            <div>
              <p className="tracked text-[11px] text-gold">Tipologia</p>
              <p className="mt-2 text-[15px] text-foreground">{p.spec}</p>
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

      {p.gallery && p.gallery.length > 0 && (
        <section className="pb-[100px]">
          <div className="container-1100">
            <SectionTitle first="REGISTO" second="DE OBRA" align="left" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {p.gallery.map((src: string, i: number) => (
                <div key={src} className={`overflow-hidden ${i === 0 && p.gallery!.length % 2 !== 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <img
                    src={src}
                    alt={`${p.name}, registo de obra ${i + 1}, EsDomusTech`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
                  alt={`${o.name}, projeto de ${o.category.toLowerCase()} EsDomusTech`}
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

function ProjectError({ reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <main className="flex min-h-[70vh] items-center justify-center pt-20 text-center">
      <div>
        <h1 className="font-display text-3xl font-semibold text-foreground">Algo correu mal</h1>
        <p className="mt-4 text-muted-foreground">Ocorreu um erro inesperado. Por favor, tente novamente.</p>
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
