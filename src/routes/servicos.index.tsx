import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";
import { SERVICES, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/servicos/")({
  head: () => ({
    meta: [
      { title: "Serviços | Construção Modular e Remodelação — DomusTech" },
      {
        name: "description",
        content:
          "Serviços DomusTech no Porto: casas modulares, construção modular, design de interiores e remodelação. Soluções chave na mão, sustentáveis e personalizadas.",
      },
      { property: "og:title", content: "Serviços — DomusTech Porto" },
      { property: "og:description", content: "Casas modulares, construção modular, design de interiores e remodelação no Porto." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/servicos` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/servicos` }],
  }),
  component: ServicosPage,
});

/* Stitch service-row pattern — hover gerido por useState */
function ServiceRow({ s, i }: { s: typeof SERVICES[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  const num = String(i + 1).padStart(2, "0");

  return (
    <Link
      to="/servicos/$slug"
      params={{ slug: s.slug }}
      className="block border-b py-12 px-4 transition-colors duration-500"
      style={{
        borderColor: "#c4c7c7",
        backgroundColor: hovered ? "#f3f3f3" : "transparent",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="grid grid-cols-12 gap-x-4 gap-y-2 md:gap-8 items-center">
        {/* 01 */}
        <div className="col-span-2 md:col-span-1">
          <span
            className="s-headline-md"
            style={{
              color: hovered ? "#000000" : "#767676",
              transition: "color 0.3s",
            }}
          >
            {num}
          </span>
        </div>

        {/* Title */}
        <div className="col-span-10 md:col-span-4">
          <h4 className="s-headline-md" style={{ color: "#000000" }}>
            {s.name}
          </h4>
        </div>

        {/* Description */}
        <div className="col-span-12 md:col-start-6 md:col-span-5 py-4 md:py-0">
          <p className="s-body-md" style={{ color: "#444748" }}>
            {s.excerpt}
          </p>
        </div>

        {/* Arrow */}
        <div className="col-span-12 md:col-span-1 flex justify-end">
          <span
            className="text-3xl"
            style={{
              color: "#000000",
              transform: hovered ? "translateX(10px)" : "none",
              transition: "transform 0.3s, color 0.3s",
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
      {/* Hero — full-bleed h-614, imagem com overlay */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ height: 614 }}
      >
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/services-hero/1600/900"
            alt="Serviços de construção modular DomusTech no Porto"
            className="h-full w-full object-cover"
            style={{ filter: "brightness(0.5)" }}
          />
        </div>
        <div className="s-wrap relative z-10 pb-20 w-full grid grid-cols-12">
          <div className="col-span-12 md:col-span-8">
            <h1
              className="s-display-lg mb-6"
              style={{ color: "#ffffff" }}
            >
              Expertise <span style={{ color: "#BE9355" }}>&amp;</span> Precisão
            </h1>
            <p className="s-body-lg" style={{ color: "rgba(255,255,255,0.9)", maxWidth: 560 }}>
              Transformamos visões complexas em realidades estruturais através de uma abordagem
              disciplinada ao design minimalista e engenharia inovadora.
            </p>
          </div>
        </div>
      </section>

      {/* Services list section */}
      <section style={{ backgroundColor: "#f9f9f9", paddingBlock: 120 }}>
        <div className="s-wrap">
          {/* Section header */}
          <div className="grid grid-cols-12 gap-8 mb-24">
            <div className="col-span-12 md:col-span-4">
              <span
                className="s-label-caps mb-4 block"
                style={{ color: "#BE9355" }}
              >
                As Nossas Capacidades
              </span>
              <h3
                className="s-headline-lg"
                style={{ color: "#000000", lineHeight: 1.1 }}
              >
                Construção modular pensada ao detalhe
              </h3>
            </div>
          </div>

          {/* Rows */}
          <div
            className="border-t"
            style={{ borderColor: "#c4c7c7" }}
          >
            {SERVICES.map((s, i) => (
              <ServiceRow key={s.slug} s={s} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Asymmetric visual break — Stitch pattern */}
      <section style={{ backgroundColor: "#eeeeee", paddingBlock: 120 }}>
        <div className="s-wrap grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-7">
            <img
              src="https://picsum.photos/seed/services-break/1200/800"
              alt="Design de interiores e acabamentos DomusTech — filosofia de projeto"
              className="w-full object-cover"
              style={{ height: 600 }}
            />
          </div>
          <div className="col-span-12 md:col-start-9 md:col-span-4 py-8">
            <h3
              className="s-headline-lg mb-8"
              style={{ color: "#000000" }}
            >
              Filosofia de Design Integrado
            </h3>
            <p className="s-body-md mb-10" style={{ color: "#444748" }}>
              A nossa equipa multidisciplinar trabalha em harmonia para garantir que cada detalhe
              serve uma visão unificada — do planeamento urbano ao décor final.
            </p>
            <Link
              to="/empresa"
              className="s-label-caps inline-flex items-center gap-4 pb-2 transition-colors hover:text-[#BE9355]"
              style={{
                color: "#000000",
                borderBottom: "1px solid #000000",
              }}
            >
              Ver o Nosso Processo
              <span className="material-symbols-outlined text-lg">north_east</span>
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
