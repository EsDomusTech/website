import { Link } from "@tanstack/react-router";

type Crumb = { label: string; to?: string };

type PageHeaderProps = {
  titleFirst: string;
  titleSecond: string;
  image: string;
  breadcrumbs?: Crumb[];
  eyebrow?: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function PageHeader({ titleFirst, titleSecond, image, breadcrumbs }: PageHeaderProps) {
  return (
    <>
      {/* Faded banner — short, light overlay */}
      <div className="relative h-[220px] overflow-hidden">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: 0.22 }}
        />
      </div>

      {/* Title section on white */}
      <div className="container-1100 pb-4 pt-12">
        <h1
          className="text-[34px] sm:text-[46px]"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            lineHeight: 1.1,
            color: "var(--foreground)",
          }}
        >
          {titleFirst}{" "}
          <span style={{ color: "var(--gold)" }}>{titleSecond}</span>
        </h1>

        {breadcrumbs && (
          <nav aria-label="Caminho" className="mt-4">
            <ol className="tracked flex flex-wrap items-center gap-2 text-[11px]" style={{ color: "var(--muted-foreground)" }}>
              {breadcrumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {c.to ? (
                    <Link to={c.to} className="transition-colors hover:text-[color:var(--gold)]">
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
    </>
  );
}
