import { Link } from "@tanstack/react-router";

type CtaBandProps = {
  title?: string;
  text?: string;
  label?: string;
};

/** Dark call-to-action band reused across inner pages. */
export function CtaBand({
  title = "Vamos Construir Juntos",
  text = "Conte-nos a sua ideia e receba uma proposta personalizada para o seu projeto no Porto.",
  label = "Pedir Orçamento",
}: CtaBandProps) {
  return (
    <section style={{ backgroundColor: "var(--dark-section)" }}>
      <div className="container-1100 flex flex-col items-center gap-8 py-20 text-center">
        <h2 className="tracked font-display text-3xl font-semibold text-white md:text-4xl">{title}</h2>
        <p className="max-w-xl text-[15px] leading-relaxed text-white/80">{text}</p>
        <Link
          to="/contacto"
          className="tracked inline-block border border-white px-8 py-3 text-[12px] text-white transition-colors hover:bg-white hover:text-foreground"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
