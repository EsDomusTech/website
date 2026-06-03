import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    img: "https://picsum.photos/seed/arch1/1600/900",
    title: "Arquitetura Moderna",
    sub: "Criamos espaços que unem estética, função e sustentabilidade.",
  },
  {
    img: "https://picsum.photos/seed/arch2/1600/900",
    title: "Design Inteligente",
    sub: "Casas modulares pensadas para a vida contemporânea no Porto.",
  },
  {
    img: "https://picsum.photos/seed/arch3/1600/900",
    title: "Construir o Futuro",
    sub: "Do conceito à entrega, com rigor e detalhe em cada projeto.",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  const go = useCallback((n: number) => {
    setIndex((prev) => (n + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {SLIDES.map((s, i) => (
        <div
          key={s.img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
      ))}

      <div className="container-1100 relative flex h-full items-center justify-end">
        <div className="max-w-xl text-right">
          <h1 className="tracked font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            {SLIDES[index].title}
          </h1>
          <p className="ml-auto mt-6 max-w-md text-sm text-white/85">{SLIDES[index].sub}</p>
          <a
            href="#projects"
            className="tracked mt-8 inline-block border border-white px-8 py-3 text-[12px] text-white transition-colors hover:bg-white hover:text-foreground"
          >
            Ver Projetos
          </a>
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        aria-label="Anterior"
        onClick={() => go(index - 1)}
        className="absolute left-6 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:border-white hover:bg-white/10"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Seguinte"
        onClick={() => go(index + 1)}
        className="absolute right-6 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:border-white hover:bg-white/10"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => go(i)}
            className={`h-2.5 w-2.5 rounded-full border border-white transition-colors ${
              i === index ? "bg-white" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
