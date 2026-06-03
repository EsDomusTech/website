import { Link } from "@tanstack/react-router";
import { SectionTitle } from "./SectionTitle";
import { BLOG_POSTS } from "@/lib/site-data";

export function Blog() {
  return (
    <section id="blog" className="section-pad bg-white">
      <div className="container-1100">
        <SectionTitle first="ÚLTIMAS" second="NOTÍCIAS" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {BLOG_POSTS.map((n) => (
            <Link key={n.slug} to="/blog" className="group relative block aspect-[3/2] overflow-hidden">
              <img
                src={n.image}
                alt={n.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="tracked text-[11px] text-gold">
                  {n.cat} · {n.date}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium text-white">{n.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
