import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";
import { BLOG_POSTS, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Construção Modular e Sustentabilidade — DomusTech" },
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

const CATEGORIES = [
  { label: "Preços", count: 1 },
  { label: "Arquitetura", count: 1 },
  { label: "Sustentabilidade", count: 1 },
  { label: "Tecnologia", count: 1 },
];

const POSTS_PER_PAGE = 4;

function BlogPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);
  const displayed = BLOG_POSTS.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <main style={{ backgroundColor: "#f9f9f9" }}>

      {/* Hero — display-lg, sem PageHeader */}
      <header style={{ paddingBlock: "120px 0" }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <span
                className="s-label-caps mb-4 block"
                style={{ color: "#BE9355", letterSpacing: "0.3em" }}
              >
                Insights
              </span>
              <h1 className="s-display-lg" style={{ color: "#000000" }}>
                O Nosso Blog
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Grid principal + sidebar */}
      <section style={{ paddingBlock: 120 }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">

            {/* Artigos — col 8/12 */}
            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {displayed.map((n) => (
                  <Link key={n.slug} to={n.href as "/blog" | "/precos"} className="group block" style={{ backgroundColor: "#ffffff" }}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={n.image}
                        alt={`${n.title} — artigo do blog DomusTech`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8">
                      <p className="s-label-caps mb-3" style={{ color: "#767676" }}>
                        {n.cat} · {n.date}
                      </p>
                      <h2 className="s-headline-md mb-4" style={{ color: "#000000" }}>
                        {n.title}
                      </h2>
                      <p className="s-body-md mb-6" style={{ color: "#444748" }}>
                        {n.excerpt}
                      </p>
                      <span
                        className="s-label-caps inline-block border-b pb-1 transition-colors duration-300 group-hover:text-[#BE9355] group-hover:border-[#BE9355]"
                        style={{ color: "#000000", borderColor: "#000000" }}
                      >
                        Ler Mais →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Paginação */}
              {totalPages > 1 && (
                <div className="flex items-center gap-2 mt-16">
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="s-label-caps border px-4 py-2 transition-colors disabled:opacity-30"
                    style={{ borderColor: "#c4c7c7", color: "#000000" }}
                    onMouseEnter={(e) => { if (page > 1) e.currentTarget.style.backgroundColor = "#eeeeee"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
                  >
                    Prev
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setPage(n)}
                      className="s-label-caps w-10 h-10 flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: page === n ? "#000000" : "transparent",
                        color: page === n ? "#ffffff" : "#000000",
                      }}
                      onMouseEnter={(e) => { if (page !== n) e.currentTarget.style.backgroundColor = "#eeeeee"; }}
                      onMouseLeave={(e) => { if (page !== n) e.currentTarget.style.backgroundColor = "transparent"; }}
                    >
                      {n}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="s-label-caps border px-4 py-2 transition-colors disabled:opacity-30"
                    style={{ borderColor: "#c4c7c7", color: "#000000" }}
                    onMouseEnter={(e) => { if (page < totalPages) e.currentTarget.style.backgroundColor = "#eeeeee"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar — col 4/12 */}
            <aside className="col-span-12 md:col-span-4 space-y-12">

              {/* Posts Recentes */}
              <div>
                <h4
                  className="s-label-caps mb-6 pb-4 border-b"
                  style={{ color: "#000000", borderColor: "#eeeeee" }}
                >
                  Posts Recentes
                </h4>
                <ul className="space-y-6">
                  {BLOG_POSTS.map((post) => (
                    <li key={post.slug}>
                      <Link to={post.href as "/blog" | "/precos"} className="flex gap-4 group">
                        <div className="w-16 h-12 shrink-0 overflow-hidden">
                          <img
                            src={post.image}
                            alt={`${post.title} — artigo do blog DomusTech`}
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
                          <p className="s-label-caps" style={{ color: "#767676" }}>
                            {post.date}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categorias */}
              <div>
                <h4
                  className="s-label-caps mb-6 pb-4 border-b"
                  style={{ color: "#000000", borderColor: "#eeeeee" }}
                >
                  Categorias
                </h4>
                <ul className="space-y-4">
                  {CATEGORIES.map((cat) => (
                    <li key={cat.label}>
                      <button
                        type="button"
                        className="flex justify-between w-full s-body-md transition-colors hover:text-[#BE9355]"
                        style={{ color: "#444748" }}
                      >
                        <span>{cat.label}</span>
                        <span style={{ color: "#767676" }}>({cat.count})</span>
                      </button>
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
