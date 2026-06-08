import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionTitle } from "@/components/site/SectionTitle";
import { getService, SERVICES, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Serviço não encontrado — DomusTech" }] };
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `${SITE.domain}/servicos/${s.slug}` },
        { property: "og:image", content: s.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: s.image },
      ],
      links: [{ rel: "canonical", href: `${SITE.domain}/servicos/${s.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.name,
            description: s.metaDescription,
            areaServed: "Porto, Portugal",
            provider: { "@type": "Organization", name: SITE.name, url: SITE.domain },
          }),
        },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: ServiceNotFound,
  errorComponent: ServiceError,
});

function ServiceDetail() {
  const { service: s } = Route.useLoaderData();
  const others = SERVICES.filter((x) => x.slug !== s.slug);

  return (
    <main>
      <PageHeader
        eyebrow="Serviço"
        titleFirst={s.titleFirst}
        titleSecond={s.titleSecond}
        subtitle={s.excerpt}
        image={s.image}
      />

      <section className="section-pad">
        <div className="container-1100 grid gap-12 md:grid-cols-2">
          <div>
            <SectionTitle first="O QUE" second="OFERECEMOS" align="left" />
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
              {s.intro.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="bg-white p-10">
            <h3 className="tracked text-[13px] text-foreground">Inclui</h3>
            <ul className="mt-6 space-y-4">
              {s.features.map((f: string) => (
                <li key={f} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contacto"
              className="tracked mt-8 inline-block border border-foreground px-8 py-3 text-[12px] text-foreground transition-colors hover:bg-foreground hover:text-white"
            >
              Pedir Orçamento
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-1100">
          <SectionTitle first="OUTROS" second="SERVIÇOS" />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/servicos/$slug"
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

function ServiceNotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center pt-20 text-center">
      <div>
        <h1 className="font-display text-4xl font-semibold text-foreground">Serviço não encontrado</h1>
        <p className="mt-4 text-muted-foreground">O serviço que procura não existe ou foi movido.</p>
        <Link to="/servicos" className="tracked mt-8 inline-block text-[12px] text-gold">
          Ver todos os serviços →
        </Link>
      </div>
    </main>
  );
}

function ServiceError({ error, reset }: { error: Error; reset: () => void }) {
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
