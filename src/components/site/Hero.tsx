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
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
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
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)" }} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="container-1100 relative flex h-full flex-col justify-center">
        <div className="max-w-[600px]">
          <AnimatePresence mode="wait">
            <motion.div key={`slide-${index}`}>
              <motion.div
                className="mb-4 flex items-center gap-3"
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <span className="block h-0.5 w-8" style={{ backgroundColor: "var(--gold)" }} />
                <span
                  className="tracked text-[11px] font-bold text-white/80"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {slide.eyebrow}
                </span>
              </motion.div>

              <motion.h1
                className="text-[44px] font-black leading-[1.1] text-white sm:text-[56px] md:text-[68px]"
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
                className="mt-5 max-w-[440px] text-[15px] leading-relaxed text-white/75"
                custom={0.24}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {slide.sub}
              </motion.p>

              <motion.div
                className="mt-8 flex flex-wrap gap-4"
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
                  className="tracked inline-block border-2 border-white px-8 py-3 text-[11px] font-bold text-white transition-colors hover:bg-white hover:text-foreground"
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
        className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-black/30 text-white transition-colors hover:bg-[color:var(--gold)]"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Seguinte"
        onClick={() => go(index + 1)}
        className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-black/30 text-white transition-colors hover:bg-[color:var(--gold)]"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 z-10 flex items-center gap-4">
        <span
          className="text-[28px] font-black leading-none text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px w-8 bg-white/40" />
        <span className="text-[13px] font-semibold text-white/40" style={{ fontFamily: "var(--font-display)" }}>
          {String(SLIDES.length).padStart(2, "0")}
        </span>
      </div>

      {/* Bottom dots */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => go(i)}
            className={`h-1 transition-all duration-300 ${i === index ? "w-8 bg-[color:var(--gold)]" : "w-4 bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
