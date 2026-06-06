import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { SERVICES, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/servicos/")({
  head: () => ({
    meta: [
      { title: "Serviços | Construção Modular, Interiores e Remodelação — DomusTech" },
      {
        name: "description",
        content:
          "Serviços DomusTech no Porto: casas modulares, construção modular, design de interiores e remodelação. Soluções chave na mão, sustentáveis e personalizadas.",
      },
      { property: "og:title", content: "Serviços — DomusTech Porto" },
      {
        property: "og:description",
        content: "Casas modulares, construção modular, design de interiores e remodelação no Porto.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/servicos` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/servicos` }],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <main>
      <PageHeader
        eyebrow="O Que Fazemos"
        titleFirst="OS NOSSOS"
        titleSecond="SERVIÇOS"
        subtitle="Do conceito à entrega, oferecemos soluções completas de arquitetura e construção modular no Porto."
        image="https://picsum.photos/seed/modular2/1600/900"
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Serviços" }]}
      />

      {/* Intro header */}
      <section className="section-pad" style={{ backgroundColor: "var(--background)" }}>
        <div className="container-1100">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <p
                className="tracked mb-4 text-[11px] uppercase"
                style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
              >
                As Nossas Capacidades
              </p>
              <h2
                className="text-[38px] uppercase leading-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.03em", color: "var(--foreground)" }}
              >
                Shaping the environment through design
              </h2>
            </div>
          </div>

          {/* Numbered rows */}
          <div className="mt-16 border-t" style={{ borderColor: "var(--border)" }}>
            {SERVICES.map((s, i) => {
              const num = String(i + 1).padStart(2, "0");
              return (
                <Link
                  key={s.slug}
                  to="/servicos/$slug"
                  params={{ slug: s.slug }}
                  className="group block border-b py-10 transition-colors duration-300"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="grid items-center gap-6 md:grid-cols-12">
                    {/* Number */}
                    <div className="md:col-span-1">
                      <span
                        className="text-[20px] transition-colors duration-300 group-hover:text-[color:var(--foreground)]"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#999999" }}
                      >
                        {num}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="md:col-span-4">
                      <h3
                        className="text-[20px] uppercase"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.03em", color: "var(--foreground)" }}
                      >
                        {s.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="md:col-start-6 md:col-span-5">
                      <p className="text-[14px] font-light leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                        {s.excerpt}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-end md:col-span-1">
                      <span
                        className="text-[22px] transition-all duration-500 group-hover:translate-x-2 group-hover:text-[color:var(--gold)]"
                        style={{ color: "var(--foreground)" }}
                      >
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
