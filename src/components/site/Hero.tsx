import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const SLIDES = [
  {
    img: "https://picsum.photos/seed/arch1/1600/900",
    eyebrow: "Arquitetura Moderna",
    title: "Espaços que\nInspira Viver",
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
  hidden: { opacity: 0, y: 36 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
  exit: { opacity: 0, y: -16, transition: { duration: 0.28 } },
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
    <section className="relative h-[88vh] min-h-[580px] w-full overflow-hidden">
      {/* Background images */}
      {SLIDES.map((s, i) => (
        <motion.div
          key={s.img}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1.1 }}
        >
          <img src={s.img} alt={s.eyebrow} className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.28) 65%, rgba(0,0,0,0.08) 100%)" }} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="container-1100 relative flex h-full flex-col justify-center">
        <div className="max-w-[580px]">
          <AnimatePresence mode="wait">
            <motion.div key={`slide-${index}`}>
              <motion.div
                className="mb-5 flex items-center gap-3"
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <span className="block h-0.5 w-10" style={{ backgroundColor: "var(--gold)" }} />
                <span
                  className="tracked text-[11px] font-semibold text-white/80"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {slide.eyebrow}
                </span>
              </motion.div>

              <motion.h1
                className="text-[42px] font-extrabold leading-[1.1] text-white sm:text-[54px] md:text-[66px]"
                style={{ fontFamily: "var(--font-display)", whiteSpace: "pre-line" }}
                custom={0.12}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {slide.title}
              </motion.h1>

              <motion.p
                className="mt-5 max-w-[420px] text-[15px] leading-relaxed text-white/70"
                custom={0.24}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {slide.sub}
              </motion.p>

              <motion.div
                className="mt-9 flex flex-wrap gap-4"
                custom={0.36}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Link
                  to="/projetos"
                  className="tracked inline-block px-8 py-3.5 text-[11px] font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "var(--gold)", fontFamily: "var(--font-display)" }}
                >
                  Ver Projetos
                </Link>
                <Link
                  to="/contacto"
                  className="tracked inline-block border border-white/70 px-8 py-3.5 text-[11px] font-bold text-white transition-colors hover:border-white hover:bg-white/10"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Falar Connosco
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
        className="absolute left-5 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-black/25 text-white transition-colors hover:bg-[color:var(--gold)]"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Seguinte"
        onClick={() => go(index + 1)}
        className="absolute right-5 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-black/25 text-white transition-colors hover:bg-[color:var(--gold)]"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Slide progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => go(i)}
            className="relative h-1 flex-1 bg-white/20 transition-colors"
          >
            <span
              className={`absolute inset-0 origin-left transition-transform duration-[6000ms] ease-linear ${i === index ? "scale-x-100" : "scale-x-0"}`}
              style={{ backgroundColor: "var(--gold)" }}
            />
          </button>
        ))}
      </div>

      {/* Slide counter bottom-right */}
      <div className="absolute bottom-8 right-8 z-10 flex items-center gap-3">
        <span
          className="text-[26px] font-extrabold leading-none text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px w-6 bg-white/35" />
        <span className="text-[12px] font-semibold text-white/35" style={{ fontFamily: "var(--font-display)" }}>
          {String(SLIDES.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
