import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useConsultaModal } from "@/lib/consulta-store";

type CtaBandProps = {
  title?: string;
  text?: string;
  label?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  variant?: "dark" | "gold";
};

export function CtaBand({
  title = "Vamos Construir\no Seu Sonho",
  text = "Conte-nos a sua ideia e receba uma proposta personalizada e sem compromisso para o seu projeto no Porto.",
  label = "Pedir Orçamento",
  secondaryLabel = "Saber Mais",
  secondaryTo = "/empresa",
  variant = "dark",
}: CtaBandProps) {
  const { open: openConsulta } = useConsultaModal();
  const bg = variant === "gold" ? "var(--gold)" : "var(--dark-section)";

  return (
    <section className="section-pad text-center" style={{ backgroundColor: bg }}>
      <div className="s-wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
        >
          <h2 className="s-display-lg text-white mb-10" style={{ whiteSpace: "pre-line" }}>
            {title}
          </h2>
          <p
            className="s-body-lg mx-auto mb-12 text-white/80"
            style={{ maxWidth: 520 }}
          >
            {text}
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <motion.button
              type="button"
              onClick={openConsulta}
              className="s-label-caps block w-full text-center px-12 py-5 text-white transition-all duration-300 sm:inline-block sm:w-auto cursor-pointer"
              style={{ backgroundColor: "var(--gold)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4a968")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
              whileTap={{ scale: 0.97 }}
            >
              {label}
            </motion.button>
            <Link
              to={secondaryTo as "/"}
              className="s-label-caps block w-full text-center border border-white px-12 py-5 text-white transition-all duration-300 hover:bg-white hover:text-black sm:inline-block sm:w-auto"
            >
              {secondaryLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
