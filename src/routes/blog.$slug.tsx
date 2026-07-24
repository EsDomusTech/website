import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUp, Newspaper } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { SITE } from "@/lib/site-data";
import { fetchBlogPost, fetchBlogPosts } from "@/lib/sanity-queries";
import { useConsultaModal } from "@/lib/consulta-store";

function truncate(s: string, max: number): string {
  if (s.length <= max) return s;
  return `${s.slice(0, max - 1).replace(/\s+\S*$/, "")}…`;
}

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const [post, allPosts] = await Promise.all([fetchBlogPost(params.slug), fetchBlogPosts()]);
    if (!post) throw notFound();
    return { post, allPosts };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return { meta: [{ title: "Artigo não encontrado | EsDomusTech" }] };
    const metaTitle = `${truncate(p.title, 45)} | EsDomusTech`;
    const metaDescription = truncate(p.excerpt, 155);
    return {
      meta: [
        { title: metaTitle },
        { name: "description", content: metaDescription },
        { property: "og:title", content: p.title },
        { property: "og:description", content: metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${SITE.domain}/blog/${p.slug}` },
        { property: "og:image", content: p.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: p.image },
      ],
      links: [{ rel: "canonical", href: `${SITE.domain}/blog/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.excerpt,
            image: p.image,
            url: `${SITE.domain}/blog/${p.slug}`,
            datePublished: p.isoDate,
            dateModified: p.isoDate,
            author: {
              "@type": "Organization",
              name: SITE.name,
              url: SITE.domain,
            },
            publisher: {
              "@type": "Organization",
              name: SITE.name,
              url: SITE.domain,
              logo: {
                "@type": "ImageObject",
                url: `${SITE.domain}/og-image.jpg`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE.domain}/blog/${p.slug}`,
            },
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: BlogNotFound,
});

function BlogNotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center pt-20 text-center">
      <div>
        <h1
          style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "#000000", letterSpacing: "0.04em" }}
        >
          Artigo não encontrado
        </h1>
        <p className="mt-4" style={{ color: "#444748" }}>
          O artigo que procura não existe ou foi movido.
        </p>
        <Link
          to="/blog"
          className="s-label-caps mt-8 inline-block transition-colors hover:text-[#BE9355]"
          style={{ color: "#000000" }}
        >
          Ver todos os artigos →
        </Link>
      </div>
    </main>
  );
}

function BlogPostPage() {
  const { post: p, allPosts } = Route.useLoaderData();
  const { open: openConsulta } = useConsultaModal();
  const others = allPosts.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <main style={{ backgroundColor: "#f9f9f9" }}>

      {/* Hero image */}
      <div className="relative overflow-hidden" style={{ height: 420, marginTop: 80 }}>
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.6)" }}
        />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="s-wrap pb-14">
            <span
              className="s-label-caps mb-3 inline-flex items-center gap-2"
              style={{ color: "#BE9355", letterSpacing: "0.3em" }}
            >
              <Newspaper className="h-3 w-3 shrink-0" />
              {p.cat}
            </span>
            <h1
              className="s-display-md text-white"
              style={{ maxWidth: 760, lineHeight: 1.15 }}
            >
              {p.title}
            </h1>
            <Link
              to="/blog"
              className="s-label-caps mt-6 inline-flex items-center gap-2 transition-colors"
              style={{ color: "rgba(255,255,255,0.7)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            >
              ← Todos os artigos
            </Link>
          </div>
        </div>
      </div>

      {/* Article + Sidebar */}
      <section style={{ paddingBlock: 80 }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-12">

            {/* Article */}
            <article className="col-span-12 md:col-span-8">
              {/* Meta */}
              <div
                className="flex items-center gap-6 mb-10 pb-8 border-b"
                style={{ borderColor: "#e8e8e8" }}
              >
                <span className="s-label-caps" style={{ color: "var(--label-muted)" }}>
                  {p.date}
                </span>
                <span style={{ color: "#e8e8e8" }}>·</span>
                <span className="s-label-caps" style={{ color: "var(--label-muted)" }}>
                  {p.readTime} de leitura
                </span>
              </div>

              {/* Body */}
              <div className="space-y-6">
                {p.body.map((para, i) => (
                  <p
                    key={i}
                    className="s-body-lg"
                    style={{ color: "#444748", lineHeight: 1.8 }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Scroll to top */}
              <div className="mt-16 pt-8 border-t" style={{ borderColor: "#e8e8e8" }}>
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="s-label-caps inline-flex items-center gap-3 px-8 py-4 text-white transition-colors cursor-pointer"
                  style={{ backgroundColor: "#000000" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#000000")}
                >
                  <ArrowUp className="h-3.5 w-3.5" />
                  Voltar ao Topo
                </button>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="col-span-12 md:col-span-4 space-y-12">

              {/* CTA box */}
              <div className="p-8" style={{ backgroundColor: "#111111" }}>
                <span className="s-label-caps block mb-4" style={{ color: "#BE9355" }}>
                  Consulta Gratuita
                </span>
                <h3 className="s-headline-md text-white mb-4">
                  Pronto para começar?
                </h3>
                <p className="s-body-md mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Fale com a nossa equipa. Primeira consulta sem compromisso.
                </p>
                <button
                  type="button"
                  onClick={openConsulta}
                  className="s-label-caps inline-block px-8 py-4 text-white transition-colors duration-300 cursor-pointer"
                  style={{ backgroundColor: "#BE9355" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#d4a968")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#BE9355")}
                >
                  Contactar
                </button>
              </div>

              {/* Other articles */}
              <div>
                <h4
                  className="s-label-caps mb-6 pb-4 border-b"
                  style={{ color: "#000000", borderColor: "#eeeeee" }}
                >
                  Outros Artigos
                </h4>
                <ul className="space-y-6">
                  {others.map((post) => (
                    <li key={post.slug}>
                      <Link
                        to="/blog/$slug"
                        params={{ slug: post.slug }}
                        className="flex gap-4 group"
                      >
                        <div className="w-16 h-12 shrink-0 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div>
                          <p
                            className="s-body-md leading-snug mb-1 transition-colors group-hover:text-[#BE9355]"
                            style={{ color: "#000000" }}
                          >
                            {post.title}
                          </p>
                          <p className="s-label-caps" style={{ color: "var(--label-muted)" }}>
                            {post.date}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </aside>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
