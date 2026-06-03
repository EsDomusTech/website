import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { BLOG_POSTS, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Arquitetura, Construção Modular e Sustentabilidade — DomusTech" },
      {
        name: "description",
        content:
          "Artigos e novidades sobre arquitetura modular, sustentabilidade e design de interiores no Porto. Insights da equipa DomusTech.",
      },
      { property: "og:title", content: "Blog — DomusTech Porto" },
      { property: "og:description", content: "Novidades sobre arquitetura e construção modular." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/blog` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/blog` }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Insights"
        titleFirst="O NOSSO"
        titleSecond="BLOG"
        subtitle="Ideias, tendências e novidades do mundo da arquitetura e construção modular."
        image="https://picsum.photos/seed/news1/1600/900"
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Blog" }]}
      />

      <section className="section-pad">
        <div className="container-1100 grid gap-10 md:grid-cols-2">
          {BLOG_POSTS.map((n) => (
            <Link key={n.slug} to="/blog" className="group block">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={n.image}
                  alt={n.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="tracked mt-5 text-[11px] text-gold">
                {n.cat} · {n.date}
              </p>
              <h2 className="mt-3 font-display text-2xl font-medium text-foreground transition-colors group-hover:text-gold">
                {n.title}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{n.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
