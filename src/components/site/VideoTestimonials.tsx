import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Do projeto à entrega, a equipa DomusTech foi impecável. A casa superou todas as expectativas — moderna, funcional e exactamente o que sonhámos.",
    name: "Maria Fernandes",
    role: "Proprietária, Villa Atlântico",
    avatar: "https://picsum.photos/seed/avatar1/120/120",
  },
  {
    quote:
      "Profissionalismo e atenção ao detalhe a um nível excecional. O processo foi transparente do início ao fim e o resultado fala por si.",
    name: "João Almeida",
    role: "Diretor, Edifício Ribeira",
    avatar: "https://picsum.photos/seed/avatar2/120/120",
  },
];

export function VideoTestimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  return (
    <section style={{ backgroundColor: "var(--dark-section)" }}>
      <div className="container-1100 grid items-stretch gap-0 md:grid-cols-2">
        {/* Left: video promo */}
        <div
          className="relative flex min-h-[340px] flex-col items-center justify-center gap-6 bg-cover bg-center p-14"
          style={{ backgroundImage: "url(https://picsum.photos/seed/arch4/800/500)" }}
        >
          <div className="absolute inset-0 bg-black/65" />
          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.button
              type="button"
              aria-label="Ver vídeo promocional"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-[color:var(--gold)] hover:border-[color:var(--gold)]"
            >
              <Play className="h-7 w-7 translate-x-0.5" fill="currentColor" />
            </motion.button>
            <p
              className="tracked mt-5 text-[11px] font-bold text-white/70"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ver Vídeo Promo
            </p>
          </div>
        </div>

        {/* Right: testimonial */}
        <div className="flex flex-col justify-between bg-white p-12">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="block h-0.5 w-6" style={{ backgroundColor: "var(--gold)" }} />
              <span
                className="tracked text-[11px] font-bold"
                style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}
              >
                Testemunhos
              </span>
            </div>
            <h3
              className="mb-6 text-[26px] font-black text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              O Que Dizem os Nossos Clientes?
            </h3>

            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <Quote className="mb-3 h-6 w-6" style={{ color: "var(--gold)" }} />
                <p className="text-[15px] leading-[1.85] text-muted-foreground">{t.quote}</p>
                <div className="mt-7 flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="h-12 w-12 object-cover" />
                  <div>
                    <p
                      className="text-[16px] font-bold text-foreground"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-[12px] text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              onClick={() => setI((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="flex h-9 w-9 items-center justify-center border border-border transition-colors hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setI((prev) => (prev + 1) % TESTIMONIALS.length)}
              className="flex h-9 w-9 items-center justify-center border border-border transition-colors hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <span className="text-[12px] text-muted-foreground">
              {String(i + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
