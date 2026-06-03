type SectionTitleProps = {
  first: string;
  second: string;
  className?: string;
  align?: "left" | "center";
};

/** Two-word section title: first word dark, second word gold, spaced uppercase. */
export function SectionTitle({ first, second, className, align = "center" }: SectionTitleProps) {
  return (
    <h2
      className={`tracked font-display text-3xl md:text-4xl font-semibold ${
        align === "center" ? "text-center" : "text-left"
      } ${className ?? ""}`}
    >
      <span className="text-foreground">{first}</span>{" "}
      <span className="text-gold">{second}</span>
    </h2>
  );
}
