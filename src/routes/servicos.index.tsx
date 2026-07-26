import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { SITE, PRICING, AREA_SERVED_NORTE } from "@/lib/site-data";
import { fetchServices } from "@/lib/sanity-queries";

const HERO_PRICE = PRICING.CAMPAIGN_ACTIVE ? PRICING.CAMPAIGN : PRICING.REGULAR;

export const Route = createFileRoute("/servicos/")({
  loader: async () => ({ services: await fetchServices() }),
  head: () => ({
    meta: [
      { title: "Construção Modular de Casas Modulares no Porto | EsDomusTech" },
      {
        name: "description",
        content: `Construção modular de casas modulares no Porto, chave na mão a partir de ${HERO_PRICE.toLocaleString("pt-PT")} €/m² + IVA. Estrutura em aço galvanizado, garantia estrutural de 10 anos.`,
      },
      { property: "og:title", content: "Serviços | EsDomusTech Porto" },
      { property: "og:description", content: "Construção modular de casas modulares chave na mão no Porto, com garantia estrutural de 10 anos." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/servicos` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/servicos` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Construção modular de casas modulares",
          name: "Casas Modulares Chave na Mão — EsDomusTech",
          description: "Construção modular de casas modulares no Porto: projeto, fabrico da estrutura em aço galvanizado e montagem no terreno, entregues chave na mão.",
          url: `${SITE.domain}/servicos`,
          provider: { "@type": "Organization", name: SITE.name, url: SITE.domain },
          areaServed: AREA_SERVED_NORTE,
          offers: {
            "@type": "Offer",
            url: `${SITE.domain}/precos`,
            priceCurrency: "EUR",
            price: HERO_PRICE,
          },
        }),
      },
    ],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  const { services: SERVICES } = Route.useLoaderData();
  return (
    <main>
      {/* Hero — full-bleed h-614, capped like the homepage Hero */}
      <div className="w-full" style={{ backgroundColor: "var(--background)" }}>
      <section className="relative mx-auto max-w-[1440px] flex items-end overflow-hidden" style={{ height: 614 }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1628592102751-ba83b0314276?w=1600&h=900&fit=crop&auto=format&q=80"
            alt="Serviços de construção modular EsDomusTech no Porto"
            className="h-full w-full object-cover"
            style={{ filter: "brightness(0.5)" }}
          />
        </div>
        <div className="s-wrap relative z-10 pb-20 w-full grid grid-cols-12">
          <div className="col-span-12 md:col-span-8">
            <motion.h1
              className="s-display-lg mb-6"
              style={{ color: "#ffffff" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Serviços <span style={{ color: "#BE9355" }}>de Construção Modular</span>
            </motion.h1>
            <motion.p
              className="s-body-lg"
              style={{ color: "rgba(255,255,255,0.9)", maxWidth: 560 }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >
              Construção modular de casas modulares, chave na mão a partir de{" "}
              {HERO_PRICE.toLocaleString("pt-PT")} €/m² + IVA, do projeto à entrega.
            </motion.p>
          </div>
        </div>
      </section>
      </div>

      {/* Services — alternating image/content per service */}
      {SERVICES.map((s, i) => {
        const reversed = i % 2 !== 0;
        return (
          <section
            key={s.slug}
            className="overflow-hidden"
            style={{ backgroundColor: i % 2 === 0 ? "#f9f9f9" : "#ffffff" }}
            id={s.slug}
          >
            <div className={`s-wrap grid grid-cols-12 gap-0 md:gap-8 items-stretch py-0 md:py-0`}>
              {/* Image(s) */}
              <motion.div
                initial={{ opacity: 0, x: reversed ? 32 : -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className={`col-span-12 md:col-span-6 ${reversed ? "md:order-last" : ""} min-h-[320px] md:min-h-[600px] ${s.image2 ? "grid grid-rows-1 md:grid-rows-2 gap-1" : ""}`}
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full object-cover"
                  style={{ display: "block" }}
                />
                {s.image2 && (
                  <img
                    src={s.image2}
                    alt={`${s.name}, detalhe`}
                    className="hidden w-full h-full object-cover md:block"
                  />
                )}
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`col-span-12 md:col-span-6 flex flex-col justify-center px-8 py-16 md:px-14 md:py-20 ${reversed ? "md:order-first" : ""}`}
              >
                {SERVICES.length > 1 && (
                  <span className="s-label-caps mb-4 block" style={{ color: "#BE9355", letterSpacing: "0.3em" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                <h2 className="s-headline-lg mb-6" style={{ color: "#000000" }}>
                  {s.name}
                </h2>
                {s.intro.map((p) => (
                  <p key={p} className="s-body-md mb-6" style={{ color: "#444748", maxWidth: 520 }}>
                    {p}
                  </p>
                ))}

                {/* Features */}
                <ul className="space-y-3 mb-10 mt-4 border-t pt-8" style={{ borderColor: "#e8e8e8" }}>
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#BE9355" }} />
                      <span className="s-body-md" style={{ color: "#444748" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Second image — mobile only, breaks up the flow before the process grid */}
                {s.image2 && (
                  <img
                    src={s.image2}
                    alt={`${s.name}, detalhe`}
                    className="mb-10 h-64 w-full object-cover md:hidden"
                  />
                )}

                {/* Process steps — compact 2×2 */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {s.process.map((step) => (
                    <div key={step.num} className="p-4" style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#f9f9f9" }}>
                      <span className="block text-[10px] font-bold tracking-[0.2em] mb-2" style={{ fontFamily: "var(--font-display)", color: "#BE9355" }}>
                        {step.num}
                      </span>
                      <p className="text-[12px] font-semibold mb-2" style={{ fontFamily: "var(--font-display)", color: "#000000", letterSpacing: "0.05em" }}>
                        {step.title}
                      </p>
                      <p className="text-[12px] leading-relaxed" style={{ color: "#444748" }}>
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Internal links */}
                <div className="flex flex-wrap gap-3 border-t pt-6" style={{ borderColor: "#e8e8e8" }}>
                  {[
                    { to: "/sistema-construtivo" as const, label: "Sistema Construtivo" },
                    { to: "/precos" as const, label: "Ver Preços" },
                    { to: "/projetos" as const, label: "Ver Projetos" },
                  ].map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="s-label-caps inline-block border px-6 py-3 transition-all duration-300"
                      style={{ borderColor: "#000000", color: "#000000", backgroundColor: "transparent" }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#000000"; e.currentTarget.style.color = "#ffffff"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#000000"; }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Áreas servidas */}
      <section className="section-pad" style={{ backgroundColor: "#ffffff" }}>
        <div className="s-wrap text-center">
          <span className="s-label-caps mb-4 block" style={{ color: "#BE9355", letterSpacing: "0.3em" }}>
            Área de Atuação
          </span>
          <h2 className="s-headline-lg mb-6" style={{ color: "#000000" }}>
            Construção Modular no Norte de Portugal
          </h2>
          <p className="s-body-md mx-auto" style={{ color: "#444748", maxWidth: 640 }}>
            Entregamos e acompanhamos obra diretamente em {AREA_SERVED_NORTE.filter((a) => a["@type"] === "City").map((a) => a.name).join(", ")}
            {" "}e restante região Norte.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CtaBand secondaryLabel="Ver Preços" secondaryTo="/precos" />
    </main>
  );
}
