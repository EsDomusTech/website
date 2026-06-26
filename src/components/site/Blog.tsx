import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { BLOG_POSTS } from "@/lib/site-data";
import { ArrowRight, Calendar, Tag } from "lucide-react";

export function Blog() {
  return (
    <section id="blog" className="section-pad" style={{ backgroundColor: "var(--logo-strip)" }}>
      <div className="s-wrap">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle eyebrow="Atualidade" first="Do" second="Blog" align="left" />
          <Link
            to="/blog"
            className="tracked inline-flex items-center gap-3 text-[11px] font-medium transition-colors"
            style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
          >
            <span className="block h-px w-6" style={{ backgroundColor: "var(--gold)" }} />
            Ver Todos os Artigos
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.slice(0, 3).map((n, i) => (
            <motion.article
              key={n.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col bg-white border"
              style={{ borderColor: "var(--border)" }}
            >
              {/* Image */}
              <Link to="/blog/$slug" params={{ slug: n.slug }} className="block overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={n.image}
                    alt={`${n.title}, artigo do blog DomusTech`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="flex flex-col flex-1 p-8">
                {/* Meta row */}
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span
                    className="tracked inline-flex items-center gap-1.5 text-[10px] font-medium"
                    style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
                  >
                    <Tag className="h-2.5 w-2.5 shrink-0" style={{ color: "var(--gold)" }} />
                    {n.cat}
                  </span>
                  <span className="h-3 w-px" style={{ backgroundColor: "var(--border)" }} />
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-light" style={{ color: "var(--muted-foreground)" }}>
                    <Calendar className="h-2.5 w-2.5" />
                    {n.date}
                  </span>
                </div>

                {/* Title */}
                <Link to="/blog/$slug" params={{ slug: n.slug }} className="block flex-1">
                  <h3
                    className="mb-3 text-[18px] leading-snug text-foreground transition-colors duration-200 group-hover:text-[color:var(--gold)]"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.03em", textTransform: "uppercase" }}
                  >
                    {n.title}
                  </h3>
                  <p className="text-[14px] font-light leading-relaxed line-clamp-3" style={{ color: "var(--muted-foreground)" }}>
                    {n.excerpt}
                  </p>
                </Link>

                {/* Divider */}
                <div className="mt-6 mb-5 h-px" style={{ backgroundColor: "var(--border)" }} />

                {/* Read more */}
                <Link
                  to="/blog/$slug"
                  params={{ slug: n.slug }}
                  className="tracked inline-flex items-center gap-2 text-[10px] font-medium transition-all duration-200 hover:gap-3"
                  style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
                >
                  Ler Artigo <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
