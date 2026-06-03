import { useState } from "react";
import { Play } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Trabalho impecável do início ao fim.",
    name: "Maria Fernandes",
    role: "Proprietária, Villa Atlântico",
    avatar: "https://picsum.photos/seed/avatar1/120/120",
  },
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Profissionalismo e atenção ao detalhe excecionais.",
    name: "João Almeida",
    role: "Diretor, Edifício Ribeira",
    avatar: "https://picsum.photos/seed/avatar2/120/120",
  },
];

export function VideoTestimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  return (
    <section className="relative" style={{ backgroundColor: "var(--dark-section)" }}>
      <div className="container-1100 grid items-center gap-12 py-24 md:grid-cols-2">
        {/* Left: video */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <button
            type="button"
            aria-label="Ver vídeo promocional"
            className="flex h-24 w-24 items-center justify-center rounded-full bg-gold text-white transition-transform hover:scale-105"
          >
            <Play className="h-8 w-8 translate-x-0.5" fill="currentColor" />
          </button>
          <p className="tracked mt-6 text-[12px] text-white">Ver Vídeo Promo</p>
        </div>

        {/* Right: floating testimonial card */}
        <div className="bg-white p-10 shadow-xl md:-mb-20 md:mt-0 md:translate-y-8">
          <h3 className="tracked font-display text-xl font-semibold text-foreground">
            O Que Dizem os Clientes?
          </h3>
          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">{t.quote}</p>
          <div className="mt-8 flex items-center gap-4">
            <img src={t.avatar} alt={t.name} className="h-14 w-14 rounded-full object-cover" />
            <div>
              <p className="font-display text-lg font-medium text-gold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Testemunho ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  idx === i ? "bg-gold" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
