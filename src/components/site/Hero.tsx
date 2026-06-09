import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const SLIDES = [
  {
    img: "https://picsum.photos/seed/arch1/1600/900",
    eyebrow: "Arquitetura Moderna",
    title: "Espaços que\nInspiram Viver",
    sub: "Criamos casas modulares que unem estética, tecnologia e sustentabilidade no coração do Porto.",
  },
  {
    img: "https://picsum.photos/seed/arch2/1600/900",
    eyebrow: "Design Inteligente",
    title: "Do Conceito\nà Realidade",
    sub: "Casas modulares pensadas para a vida contemporânea, com soluções personalizadas para cada cliente.",
  },
  {
    img: "https://picsum.photos/seed/arch3/1600/900",
    eyebrow: "Construção Premium",
    title: "Rigor e Detalhe\nem Cada Projeto",
    sub: "Do projeto à entrega, acompanhamos cada etapa com precisão e comprometimento total.",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
  exit: { opacity: 0, y: -12, transition: { duration: 0.3 } },
};

export function Hero() {
  const [index, setIndex] = useState(0);

  const go = useCallback((n: number) => {
    setIndex(((n % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[index];

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background images */}
      {SLIDES.map((s, i) => (
        <motion.div
          key={s.img}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1.2 }}
        >
          <img src={s.img} alt={s.eyebrow} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
          {/* Gradient to ensure navbar legibility */}
          <div className="absolute inset-x-0 top-0 h-40" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 100%)" }} />
        </motion.div>
      ))}

      {/* Content — left-aligned, 2/3 width */}
      <div className="s-wrap relative flex h-full flex-col justify-center">
        <div className="max-w-[640px]">
          <AnimatePresence mode="wait">
            <motion.div key={`slide-${index}`}>
              {/* Eyebrow */}
              <motion.span
                className="s-label-caps mb-6 block text-white/80"
                style={{ letterSpacing: "0.5em" }}
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {slide.eyebrow}
              </motion.span>

              {/* H1 */}
              <motion.h1
                className="s-display-lg text-white"
                style={{ whiteSpace: "pre-line" }}
                custom={0.15}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {slide.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="s-body-lg mt-6 max-w-[440px] text-white/80"
                custom={0.28}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {slide.sub}
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="mt-12 flex flex-wrap items-center gap-8"
                custom={0.4}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Primary — gold filled */}
                <Link
                  to="/projetos"
                  className="s-label-caps inline-block px-10 py-5 text-white transition-all duration-500"
                  style={{ backgroundColor: "var(--gold)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffffff";
                    e.currentTarget.style.color = "var(--foreground)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--gold)";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                >
                  Ver Projetos
                </Link>

                {/* Ghost — text + extending line */}
                <Link
                  to="/contacto"
                  className="s-label-caps group inline-flex items-center gap-4 text-white uppercase"
                >
                  Falar Connosco
                  <span className="block h-px w-12 bg-white transition-all duration-500 group-hover:w-16" />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Side arrows */}
      <button
        type="button"
        aria-label="Anterior"
        onClick={() => go(index - 1)}
        className="absolute left-6 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 text-white transition-all hover:border-[color:var(--gold)] hover:bg-[color:var(--gold)]"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Seguinte"
        onClick={() => go(index + 1)}
        className="absolute right-6 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 text-white transition-all hover:border-[color:var(--gold)] hover:bg-[color:var(--gold)]"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Slide counter — bottom-right, above progress bar */}
      <div className="absolute bottom-10 right-8 z-10 flex items-center gap-3">
        <span
          className="s-headline-md text-white leading-none"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px w-8 bg-white/20" />
        <span className="s-label-caps text-white/40">
          {String(SLIDES.length).padStart(2, "0")}
        </span>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => go(i)}
            className="relative h-0.5 flex-1 bg-white/15"
          >
            <span
              className={`absolute inset-0 origin-left transition-transform duration-[6000ms] ease-linear ${i === index ? "scale-x-100" : "scale-x-0"}`}
              style={{ backgroundColor: "var(--gold)" }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
