import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

type CtaBandProps = {
  title?: string;
  text?: string;
  label?: string;
};

export function CtaBand({
  title = "Vamos Construir\no Seu Sonho",
  text = "Conte-nos a sua ideia e receba uma proposta personalizada e sem compromisso para o seu projeto no Porto.",
  label = "Pedir Orçamento",
}: CtaBandProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--dark-section)" }}
    >
      {/* Background geometric shapes */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 opacity-5"
        style={{ backgroundColor: "var(--gold)", borderRadius: "50%" }}
      />
      <div
        className="pointer-events-none absolute -bottom-10 right-40 h-48 w-48 opacity-5"
        style={{ backgroundColor: "var(--gold)", borderRadius: "50%" }}
      />

      <div className="container-1100 relative z-10 py-24">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="block h-0.5 w-8" style={{ backgroundColor: "var(--gold)" }} />
              <span
                className="tracked text-[11px] font-bold text-white/60"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Contacte-nos
              </span>
            </div>
            <h2
              className="text-[38px] font-black leading-tight text-white md:text-[48px]"
              style={{ fontFamily: "var(--font-display)", whiteSpace: "pre-line" }}
            >
              {title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <p className="max-w-xs text-[14px] leading-relaxed text-white/60">{text}</p>
            <div>
              <Link
                to="/contacto"
                className="tracked inline-block px-9 py-4 text-[11px] font-bold text-white transition-opacity hover:opacity-85"
                style={{ backgroundColor: "var(--gold)", fontFamily: "var(--font-display)" }}
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
