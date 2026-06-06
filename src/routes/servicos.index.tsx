import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
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

function ServiceRow({ s, i }: { s: typeof SERVICES[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  const num = String(i + 1).padStart(2, "0");

  return (
    <Link
      to="/servicos/$slug"
      params={{ slug: s.slug }}
      className="block border-b py-12 transition-colors duration-300"
      style={{
        borderColor: "var(--border)",
        backgroundColor: hovered ? "#f3f3f3" : "transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="grid items-center gap-6 md:grid-cols-12">
        {/* Number */}
        <div className="md:col-span-1">
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "20px",
              color: hovered ? "var(--foreground)" : "#999999",
              transition: "color 0.3s",
            }}
          >
            {num}
          </span>
        </div>

        {/* Title */}
        <div className="md:col-span-4">
          <h3
            className="uppercase"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "20px",
              letterSpacing: "0.03em",
              color: "var(--foreground)",
            }}
          >
            {s.name}
          </h3>
        </div>

        {/* Description */}
        <div className="md:col-start-6 md:col-span-5">
          <p
            className="text-[14px] font-light leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            {s.excerpt}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex justify-end md:col-span-1">
          <span
            style={{
              fontSize: "22px",
              color: hovered ? "var(--gold)" : "var(--foreground)",
              transform: hovered ? "translateX(8px)" : "none",
              transition: "all 0.5s",
              display: "inline-block",
            }}
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

function ServicosPage() {
  return (
    <main>
      {/* Hero — full-bleed image with text overlay */}
      <section className="relative flex items-end overflow-hidden" style={{ height: 614 }}>
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/services-hero/1600/900"
            alt="Serviços DomusTech"
            className="h-full w-full object-cover"
            style={{ filter: "brightness(0.5)" }}
          />
        </div>
        <div className="container-1100 relative z-10 pb-20 w-full">
          <div className="max-w-[65%]">
            <h1
              className="mb-6 uppercase leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(52px, 7vw, 80px)",
                letterSpacing: "0.05em",
                color: "#ffffff",
              }}
            >
              Expertise <span style={{ color: "var(--gold)" }}>&amp;</span> Precisão
            </h1>
            <p
              className="max-w-xl text-[18px] font-light leading-[1.7]"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Transformamos visões complexas em realidades estruturais através de uma abordagem
              disciplinada ao design minimalista e engenharia inovadora.
            </p>
          </div>
        </div>
      </section>

      {/* Services numbered rows */}
      <section className="section-pad" style={{ backgroundColor: "var(--background)" }}>
        <div className="container-1100">
          {/* Intro header */}
          <div className="mb-24 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <p
                className="tracked mb-4 text-[11px] uppercase"
                style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
              >
                As Nossas Capacidades
              </p>
              <h2
                className="uppercase leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "38px",
                  letterSpacing: "0.03em",
                  color: "var(--foreground)",
                }}
              >
                Shaping the environment through design
              </h2>
            </div>
          </div>

          {/* Rows */}
          <div className="border-t" style={{ borderColor: "var(--border)" }}>
            {SERVICES.map((s, i) => (
              <ServiceRow key={s.slug} s={s} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Asymmetric visual break */}
      <section className="section-pad" style={{ backgroundColor: "var(--logo-strip)" }}>
        <div className="container-1100 grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <img
              src="https://picsum.photos/seed/services-break/1200/800"
              alt="DomusTech — Filosofia de Design"
              className="h-[480px] w-full object-cover"
            />
          </div>
          <div className="md:col-start-9 md:col-span-4 py-8">
            <h3
              className="mb-8 uppercase leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "32px",
                letterSpacing: "0.03em",
                color: "var(--foreground)",
              }}
            >
              Filosofia de Design Integrado
            </h3>
            <p
              className="mb-10 text-[14px] font-light leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              A nossa equipa multidisciplinar trabalha em harmonia para garantir que cada
              detalhe, do planeamento urbano ao décor final, serve uma visão unificada.
            </p>
            <Link
              to="/empresa"
              className="inline-flex items-center gap-3 pb-2 text-[12px] font-medium uppercase tracking-[0.18em] transition-colors hover:text-gold hover:border-gold border-b border-foreground text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ver o Nosso Processo
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
