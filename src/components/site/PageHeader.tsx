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

/** Inner-page hero: full-bleed image, dark overlay, breadcrumb and two-word title. */
export function PageHeader({
  eyebrow,
  titleFirst,
  titleSecond,
  subtitle,
  image,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden pt-20">
      <img src={image} alt={`${titleFirst} ${titleSecond}`} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/60" />

      <div className="container-1100 relative py-24 text-center">
        {eyebrow && <p className="tracked mb-5 text-[12px] text-gold">{eyebrow}</p>}
        <h1 className="tracked font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          <span>{titleFirst}</span> <span className="text-gold">{titleSecond}</span>
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white/85">{subtitle}</p>
        )}

        {breadcrumbs && (
          <nav aria-label="Caminho" className="mt-8">
            <ol className="tracked flex flex-wrap items-center justify-center gap-2 text-[11px] text-white/70">
              {breadcrumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {c.to ? (
                    <Link to={c.to} className="transition-colors hover:text-gold">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-gold">{c.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <span aria-hidden>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
}
