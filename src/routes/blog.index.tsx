import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CtaBand } from "@/components/site/CtaBand";
import { SITE } from "@/lib/site-data";
import { fetchBlogPosts } from "@/lib/sanity-queries";

export const Route = createFileRoute("/blog/")({
  loader: async () => ({ posts: await fetchBlogPosts() }),
  head: () => ({
    meta: [
      { title: "Blog | Construção Modular e Sustentabilidade, EsDomusTech" },
      {
        name: "description",
        content:
          "Artigos e novidades sobre arquitetura modular, sustentabilidade e design de interiores no Porto. Insights da equipa EsDomusTech.",
      },
      { property: "og:title", content: "Blog | EsDomusTech Porto" },
      { property: "og:description", content: "Novidades sobre arquitetura e construção modular." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/blog` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/blog` }],
  }),
  component: BlogPage,
});

const POSTS_PER_PAGE = 4;

function BlogPage() {
  const { posts: BLOG_POSTS } = Route.useLoaderData();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const filtered = search.trim()
    ? BLOG_POSTS.filter((p) => {
        const q = search.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.cat.toLowerCase().includes(q)
        );
      })
    : BLOG_POSTS;

  const CATEGORIES = Array.from(
    BLOG_POSTS.reduce((map, p) => {
      map.set(p.cat, (map.get(p.cat) ?? 0) + 1);
      return map;
    }, new Map<string, number>()),
    ([label, count]) => ({ label, count }),
  );
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const displayed = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <main style={{ backgroundColor: "#f9f9f9" }}>

      {/* Hero */}
      <header style={{ paddingBlock: "120px 0" }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <motion.span
                className="s-label-caps mb-4 block"
                style={{ color: "#BE9355", letterSpacing: "0.3em" }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Insights
              </motion.span>
              <motion.h1
                className="s-display-lg"
                style={{ color: "#000000" }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              >
                O Nosso Blog
              </motion.h1>
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
                {displayed.map((n, i) => (
                  <motion.div
                    key={n.slug}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                  >
                    <Link to="/blog/$slug" params={{ slug: n.slug }} className="group block" style={{ backgroundColor: "#ffffff" }}>
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={n.image}
                          alt={`${n.title}, artigo do blog EsDomusTech`}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-8">
                        <p className="s-label-caps mb-3" style={{ color: "var(--label-muted)" }}>
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
                  </motion.div>
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

              {/* Pesquisa */}
              <div>
                <h4
                  className="s-label-caps mb-6 pb-4 border-b"
                  style={{ color: "#000000", borderColor: "#eeeeee" }}
                >
                  Pesquisa
                </h4>
                <div className="flex" style={{ border: "1px solid #d8d8d8" }}>
                  <input
                    type="text"
                    placeholder="Pesquisar..."
                    value={search}
                    onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                    className="flex-1 px-4 py-3 s-body-md bg-white outline-none placeholder:text-[#9a9a9a]"
                    style={{ color: "#000000" }}
                  />
                  <button
                    type="button"
                    onClick={() => setPage(1)}
                    className="px-4 flex items-center justify-center transition-colors"
                    style={{ backgroundColor: "#000000", color: "#ffffff" }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#BE9355"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#000000"; }}
                    aria-label="Pesquisar"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="11" cy="11" r="8" />
                      <path strokeLinecap="round" d="m21 21-4.35-4.35" />
                    </svg>
                  </button>
                </div>
                {search.trim() && (
                  <p className="s-label-caps mt-3" style={{ color: "var(--label-muted)" }}>
                    {filtered.length} resultado{filtered.length !== 1 ? "s" : ""} para "{search}"
                  </p>
                )}
              </div>

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
                      <Link to="/blog/$slug" params={{ slug: post.slug }} className="flex gap-4 group">
                        <div className="w-16 h-12 shrink-0 overflow-hidden">
                          <img
                            src={post.image}
                            alt={`${post.title}, artigo do blog EsDomusTech`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
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
                        <span style={{ color: "var(--label-muted)" }}>({cat.count})</span>
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
