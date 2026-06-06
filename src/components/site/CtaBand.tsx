import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

type CtaBandProps = {
  title?: string;
  text?: string;
  label?: string;
  variant?: "dark" | "gold";
};

export function CtaBand({
  title = "Vamos Construir\no Seu Sonho",
  text = "Conte-nos a sua ideia e receba uma proposta personalizada e sem compromisso para o seu projeto no Porto.",
  label = "Pedir Orçamento",
  variant = "dark",
}: CtaBandProps) {
  const isGold = variant === "gold";
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: isGold ? "var(--gold)" : "var(--dark-section)" }}
    >
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-1100 relative z-10 py-24">
        <div className="flex flex-col items-start gap-12 md:flex-row md:items-center md:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            <div className="mb-5 flex items-center gap-4">
              <span className="block h-px w-10" style={{ backgroundColor: isGold ? "rgba(255,255,255,0.5)" : "var(--gold)" }} />
              <span
                className="tracked text-[11px] font-medium"
                style={{ color: isGold ? "rgba(255,255,255,0.7)" : "var(--gold)", fontFamily: "var(--font-display)" }}
              >
                Contacte-nos
              </span>
              <span className="block h-px w-10" style={{ backgroundColor: isGold ? "rgba(255,255,255,0.5)" : "var(--gold)" }} />
            </div>
            <h2
              className="text-[36px] leading-tight text-white md:text-[50px]"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                whiteSpace: "pre-line",
              }}
            >
              {title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            <p className="max-w-xs text-[14px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              {text}
            </p>
            <div>
              <Link
                to="/contacto"
                className="tracked inline-block px-10 py-4 text-[11px] font-medium transition-colors"
                style={{
                  backgroundColor: isGold ? "var(--dark-section)" : "var(--gold)",
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = isGold ? "#333" : "#d4a968")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = isGold ? "var(--dark-section)" : "var(--gold)")}
              >
                {label}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
