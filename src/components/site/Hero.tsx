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
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
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
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
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
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.32) 60%, rgba(0,0,0,0.1) 100%)" }}
          />
        </motion.div>
      ))}

      {/* Content */}
      <div className="container-1100 relative flex h-full flex-col justify-center">
        <div className="max-w-[640px]">
          <AnimatePresence mode="wait">
            <motion.div key={`slide-${index}`}>
              {/* Eyebrow */}
              <motion.div
                className="mb-6 flex items-center gap-4"
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <span className="block h-px w-12" style={{ backgroundColor: "var(--gold)" }} />
                <span
                  className="tracked text-[11px] font-medium text-white/70"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {slide.eyebrow}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="text-[52px] leading-[1.05] text-white sm:text-[68px] md:text-[82px]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  whiteSpace: "pre-line",
                }}
                custom={0.12}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {slide.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="mt-6 max-w-[400px] text-[15px] font-light leading-relaxed text-white/75"
                style={{ fontFamily: "var(--font-body)" }}
                custom={0.24}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {slide.sub}
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="mt-10 flex flex-wrap gap-4"
                custom={0.36}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Link
                  to="/projetos"
                  className="tracked inline-block px-10 py-4 text-[11px] font-medium text-white transition-colors"
                  style={{ backgroundColor: "#1b1b1b", fontFamily: "var(--font-display)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1b1b1b")}
                >
                  Ver Projetos
                </Link>
                <Link
                  to="/contacto"
                  className="tracked inline-block px-10 py-4 text-[11px] font-medium text-white/80 transition-colors hover:text-white"
                  style={{ border: "1px solid rgba(255,255,255,0.35)", fontFamily: "var(--font-display)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)")}
                >
                  Falar Connosco
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Thin vertical line accent — right side */}
      <div className="absolute right-16 top-1/2 hidden h-24 w-px -translate-y-1/2 lg:block" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />

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

      {/* Bottom progress lines */}
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

      {/* Slide counter bottom-right — above progress bars */}
      <div className="absolute bottom-10 right-8 z-10 flex items-center gap-3">
        <span
          className="text-[28px] leading-none text-white"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.05em" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px w-6 bg-white/25" />
        <span className="text-[13px] text-white/30" style={{ fontFamily: "var(--font-display)" }}>
          {String(SLIDES.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
