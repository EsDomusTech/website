import { Link } from "@tanstack/react-router";

type Crumb = { label: string; to?: string };

type PageHeaderProps = {
  eyebrow?: string;
  titleFirst: string;
  titleSecond: string;
  subtitle?: string;
  image: string;
  breadcrumbs?: Crumb[];
  align?: "left" | "center";
};

export function PageHeader({
  eyebrow,
  titleFirst,
  titleSecond,
  subtitle,
  image,
  breadcrumbs,
  align = "center",
}: PageHeaderProps) {
  const isCenter = align === "center";
  return (
    <section className="relative flex min-h-[48vh] items-center overflow-hidden">
      <img src={image} alt={`${titleFirst} ${titleSecond}`} className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ background: isCenter ? "rgba(0,0,0,0.6)" : "linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 70%)" }}
      />

      <div className={`container-1100 relative py-24 ${isCenter ? "text-center" : ""}`}>
        {eyebrow && (
          <div className={`mb-5 flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}>
            <span className="block h-px w-8" style={{ backgroundColor: "var(--gold)" }} />
            <span
              className="tracked text-[11px] font-medium text-white/60"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {eyebrow}
            </span>
          </div>
        )}

        <h1
          className="text-[38px] text-white sm:text-[52px]"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            lineHeight: 1.1,
          }}
        >
          {titleFirst}{" "}
          <span style={{ color: "var(--gold)" }}>{titleSecond}</span>
        </h1>

        {subtitle && (
          <p className={`mt-5 text-[15px] font-light leading-relaxed text-white/60 ${isCenter ? "mx-auto max-w-lg" : "max-w-lg"}`}>
            {subtitle}
          </p>
        )}

        {breadcrumbs && (
          <nav aria-label="Caminho" className={`mt-8 ${isCenter ? "flex justify-center" : ""}`}>
            <ol className={`tracked flex flex-wrap items-center gap-2 text-[11px] text-white/40 ${isCenter ? "justify-center" : ""}`}>
              {breadcrumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {c.to ? (
                    <Link to={c.to} className="transition-colors hover:text-white/80">
                      {c.label}
                    </Link>
                  ) : (
                    <span style={{ color: "var(--gold)" }}>{c.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <span aria-hidden className="opacity-40">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
}
