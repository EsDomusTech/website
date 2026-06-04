import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { BLOG_POSTS } from "@/lib/site-data";
import { ArrowRight, Calendar, Tag } from "lucide-react";

export function Blog() {
  return (
    <section id="blog" className="section-pad bg-white">
      <div className="container-1100">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle eyebrow="Atualidade" first="Últimas" second="Notícias" align="left" />
          <Link
            to="/blog"
            className="tracked inline-flex items-center gap-2 text-[11px] font-bold transition-colors hover:text-[color:var(--gold)]"
            style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
          >
            <span className="block h-0.5 w-5" style={{ backgroundColor: "var(--gold)" }} />
            Ver Todos os Artigos
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.slice(0, 3).map((n, i) => (
            <motion.article
              key={n.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col bg-white shadow-sm ring-1 ring-border transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <Link to="/blog" className="block overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* Category badge over image bottom */}
              <div className="flex flex-col flex-1 p-7">
                {/* Meta row */}
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
                  >
                    <Tag className="h-2.5 w-2.5" />
                    {n.cat}
                  </span>
                  <span className="h-3 w-px" style={{ backgroundColor: "var(--border)" }} />
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <Calendar className="h-2.5 w-2.5" />
                    {n.date}
                  </span>
                </div>

                {/* Title */}
                <Link to="/blog" className="block flex-1">
                  <h3
                    className="mb-3 text-[18px] font-bold leading-snug text-foreground transition-colors duration-200 group-hover:text-[color:var(--gold)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {n.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-muted-foreground line-clamp-3">
                    {n.excerpt}
                  </p>
                </Link>

                {/* Divider */}
                <div className="mt-6 mb-5 h-px" style={{ backgroundColor: "var(--border)" }} />

                {/* Read more */}
                <Link
                  to="/blog"
                  className="tracked inline-flex items-center gap-2 text-[10px] font-bold transition-all duration-200 hover:gap-3"
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
