import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/site-data";

export function Projects({ projects }: { projects?: Project[] }) {
  const items = projects ?? PROJECTS;
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered ?? 0;
  const [slide, setSlide] = useState(0);
  const shown = items.slice(0, 6);
  const prevSlide = () => setSlide((s) => (s - 1 + shown.length) % shown.length);
  const nextSlide = () => setSlide((s) => (s + 1) % shown.length);
  return (
    <section id="projects" className="section-pad" style={{ backgroundColor: "var(--secondary)" }}>
      <div className="s-wrap">

        {/* Header — eyebrow + H2 left, "View All" right with border-b */}
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="s-headline-lg">
              Nossos Projetos
            </h2>
          </div>
          <Link
            to="/projetos"
            className="s-label-caps border-b pb-1 transition-colors"
            style={{ color: "var(--foreground)", borderColor: "var(--foreground)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--gold)";
              e.currentTarget.style.borderColor = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--foreground)";
              e.currentTarget.style.borderColor = "var(--foreground)";
            }}
          >
            VER TODOS OS PROJETOS →
          </Link>
        </div>

        {/* Mobile — 1 project + arrows, no full grid */}
        <div className="relative sm:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={shown[slide].slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/projetos/$slug"
                params={{ slug: shown[slide].slug }}
                className="group relative block aspect-square overflow-hidden"
              >
                <img
                  src={shown[slide].image}
                  alt={`${shown[slide].name}, projeto de ${shown[slide].category.toLowerCase()} EsDomusTech`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-6">
                  <span className="s-label-caps mb-2 block" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>
                    {shown[slide].category}
                  </span>
                  <h3 className="s-headline-md mb-4 text-white">{shown[slide].name}</h3>
                  <span className="block h-px w-12 bg-white" />
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            aria-label="Projeto anterior"
            onClick={(e) => {
              e.preventDefault();
              prevSlide();
            }}
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-white/90"
          >
            <ChevronLeft className="h-5 w-5" style={{ color: "#000000" }} />
          </button>
          <button
            type="button"
            aria-label="Próximo projeto"
            onClick={(e) => {
              e.preventDefault();
              nextSlide();
            }}
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-white/90"
          >
            <ChevronRight className="h-5 w-5" style={{ color: "#000000" }} />
          </button>

          <div className="mt-4 flex justify-center gap-2">
            {shown.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                aria-label={`Ir para projeto ${i + 1}`}
                onClick={() => setSlide(i)}
                className="h-1.5 w-1.5"
                style={{ backgroundColor: i === slide ? "var(--gold)" : "#dddddd" }}
              />
            ))}
          </div>
        </div>

        {/* 3-col grid — smaller tiles, desktop/tablet only */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <Link
                to="/projetos/$slug"
                params={{ slug: p.slug }}
                className="group relative block aspect-square overflow-hidden"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image — grayscale default, color on active. Only one tile active at a time: first by default, hovered one otherwise. */}
                <img
                  src={p.image}
                  alt={`${p.name}, projeto de ${p.category.toLowerCase()} EsDomusTech`}
                  className={`h-full w-full object-cover transition-all duration-700 touch:!grayscale-0 touch:scale-[1.05] ${i === active ? "md:scale-[1.05]" : "md:grayscale"}`}
                />

                {/* Overlay — always visible on mobile, only on the active tile on desktop */}
                <div className={`absolute inset-0 flex flex-col justify-end bg-black/40 p-6 md:p-8 opacity-100 transition-opacity duration-500 touch:!opacity-100 ${i === active ? "" : "md:opacity-0"}`}>
                  <span
                    className="s-label-caps mb-2 block"
                    style={{ color: "var(--gold)", letterSpacing: "0.2em" }}
                  >
                    {p.category}
                  </span>
                  <h3 className="s-headline-md mb-4 text-white">
                    {p.name}
                  </h3>
                  <span className="block h-px w-12 bg-white" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
