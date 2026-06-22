import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Do projeto à entrega, a equipa DomusTech foi impecável. A casa superou todas as expectativas: moderna, funcional e exactamente o que sonhámos.",
    name: "Maria Fernandes",
    role: "Proprietária, Villa Atlântico",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&auto=format&q=80",
  },
  {
    quote:
      "Profissionalismo e atenção ao detalhe a um nível excecional. O processo foi transparente do início ao fim e o resultado fala por si.",
    name: "João Almeida",
    role: "Diretor, Edifício Ribeira",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&auto=format&q=80",
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
          className="relative flex min-h-[340px] flex-col items-center justify-center gap-6 bg-cover bg-center p-8 md:p-14"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=800&h=500&fit=crop&auto=format&q=80)" }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.65)" }} />
          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.button
              type="button"
              aria-label="Ver vídeo promocional"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center border text-white transition-colors"
              style={{ height: 72, width: 72, borderColor: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--gold)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.4)";
              }}
            >
              <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
            </motion.button>
            <p
              className="tracked mt-5 text-[11px] font-medium"
              style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.5)" }}
            >
              Ver Vídeo Promo
            </p>
          </div>
        </div>

        {/* Right: testimonial */}
        <div className="flex flex-col justify-between bg-white p-8 md:p-12">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="block h-px w-6" style={{ backgroundColor: "var(--gold)" }} />
              <span
                className="tracked text-[11px] font-medium"
                style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}
              >
                Testemunhos
              </span>
            </div>
            <h3
              className="mb-6 text-[22px]"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "var(--foreground)",
              }}
            >
              O Que Dizem os Nossos Clientes?
            </h3>

            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.32 }}
              >
                <Quote className="mb-4 h-5 w-5" style={{ color: "var(--gold)" }} />
                <p className="text-[15px] font-light leading-[1.9]" style={{ color: "var(--muted-foreground)" }}>
                  {t.quote}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <img src={t.avatar} alt={`${t.name}, cliente DomusTech`} className="h-11 w-11 object-cover" />
                  <div>
                    <p
                      className="text-[14px]"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--foreground)" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-[12px] font-light" style={{ color: "var(--muted-foreground)" }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              onClick={() => setI((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="flex h-9 w-9 items-center justify-center border transition-colors"
              style={{ borderColor: "var(--border)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                (e.currentTarget as HTMLElement).style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "inherit";
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setI((prev) => (prev + 1) % TESTIMONIALS.length)}
              className="flex h-9 w-9 items-center justify-center border transition-colors"
              style={{ borderColor: "var(--border)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                (e.currentTarget as HTMLElement).style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "inherit";
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <span
              className="text-[12px] font-light"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-display)" }}
            >
              {String(i + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
