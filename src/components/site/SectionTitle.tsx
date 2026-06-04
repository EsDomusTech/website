import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow?: string;
  first: string;
  second: string;
  className?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionTitle({ eyebrow, first, second, className, align = "center", light = false }: SectionTitleProps) {
  const isCenter = align === "center";
  return (
    <motion.div
      className={`${isCenter ? "flex flex-col items-center text-center" : "flex flex-col items-start text-left"} ${className ?? ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {eyebrow && (
        <div className={`mb-5 flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}>
          <span className="block h-px w-8" style={{ backgroundColor: "var(--gold)" }} />
          <span
            className="tracked text-[11px] font-medium"
            style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`text-[32px] leading-tight md:text-[46px] ${light ? "text-white" : ""}`}
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          letterSpacing: "0.03em",
          textTransform: "uppercase",
        }}
      >
        {first}{" "}
        <span style={{ color: "var(--gold)" }}>{second}</span>
      </h2>
    </motion.div>
  );
}
