import { motion } from "framer-motion";
import { LOGO_ICONS } from "./icons";

export function ClientLogos() {
  return (
    <section className="border-y border-border bg-white py-14">
      <div className="container-1100">
        <p
          className="tracked mb-8 text-center text-[11px] font-bold"
          style={{ fontFamily: "var(--font-display)", color: "var(--muted-foreground)" }}
        >
          Parceiros e Clientes de Confiança
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:justify-between md:gap-6">
          {LOGO_ICONS.map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="opacity-40 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
            >
              <Icon className="h-10 w-10" style={{ color: "var(--foreground)" }} size={40} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
