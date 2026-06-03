import { Link } from "@tanstack/react-router";

type Crumb = { label: string; to?: string };

type PageHeaderProps = {
  eyebrow?: string;
  titleFirst: string;
  titleSecond: string;
  subtitle?: string;
  image: string;
  breadcrumbs?: Crumb[];
};

export function PageHeader({
  eyebrow,
  titleFirst,
  titleSecond,
  subtitle,
  image,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="relative flex min-h-[55vh] items-center overflow-hidden">
      <img src={image} alt={`${titleFirst} ${titleSecond}`} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 70%)" }} />

      <div className="container-1100 relative py-24">
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-0.5 w-8" style={{ backgroundColor: "var(--gold)" }} />
          {eyebrow && (
            <span
              className="tracked text-[11px] font-bold text-white/70"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {eyebrow}
            </span>
          )}
        </div>
        <h1
          className="text-[42px] font-black leading-tight text-white sm:text-[56px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {titleFirst} <span style={{ color: "var(--gold)" }}>{titleSecond}</span>
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/75">{subtitle}</p>
        )}

        {breadcrumbs && (
          <nav aria-label="Caminho" className="mt-8">
            <ol className="tracked flex flex-wrap items-center gap-2 text-[11px] text-white/55">
              {breadcrumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {c.to ? (
                    <Link to={c.to} className="transition-colors hover:text-white">
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
