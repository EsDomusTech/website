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
      <span className="mb-4 block h-1 w-10" style={{ backgroundColor: "var(--gold)" }} />
      {eyebrow && (
        <span
          className="tracked mb-3 text-[11px] font-semibold"
          style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-[32px] font-extrabold leading-tight md:text-[42px] ${light ? "text-white" : ""}`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {first}{" "}
        <span style={{ color: "var(--gold)" }}>{second}</span>
      </h2>
    </motion.div>
  );
}
