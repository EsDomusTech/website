import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { SERVICES, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/servicos/")({
  head: () => ({
    meta: [
      { title: "Serviços | Construção Modular e Design de Interiores, DomusTech" },
      {
        name: "description",
        content:
          "Serviços DomusTech no Porto: casas modulares, construção modular e design de interiores. Soluções chave na mão, sustentáveis e personalizadas.",
      },
      { property: "og:title", content: "Serviços | DomusTech Porto" },
      { property: "og:description", content: "Casas modulares, construção modular e design de interiores no Porto." },
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
      {/* Hero — full-bleed h-614 */}
      <section className="relative flex items-end overflow-hidden" style={{ height: 614 }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1628592102751-ba83b0314276?w=1600&h=900&fit=crop&auto=format&q=80"
            alt="Serviços de construção modular DomusTech no Porto"
            className="h-full w-full object-cover"
            style={{ filter: "brightness(0.5)" }}
          />
        </div>
        <div className="s-wrap relative z-10 pb-20 w-full grid grid-cols-12">
          <div className="col-span-12 md:col-span-8">
            <h1 className="s-display-lg mb-6" style={{ color: "#ffffff" }}>
              Expertise <span style={{ color: "#BE9355" }}>&amp;</span> Precisão
            </h1>
            <p className="s-body-lg" style={{ color: "rgba(255,255,255,0.9)", maxWidth: 560 }}>
              Construção modular do projeto à entrega — casas, edifícios e interiores, tudo com a
              mesma equipa e o mesmo rigor técnico.
            </p>
          </div>
        </div>
      </section>

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
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: reversed ? 32 : -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className={`col-span-12 md:col-span-6 ${reversed ? "md:order-last" : ""} min-h-[320px] md:min-h-[600px]`}
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full object-cover"
                  style={{ display: "block" }}
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`col-span-12 md:col-span-6 flex flex-col justify-center px-8 py-16 md:px-14 md:py-20 ${reversed ? "md:order-first" : ""}`}
              >
                <span className="s-label-caps mb-4 block" style={{ color: "#BE9355", letterSpacing: "0.3em" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="s-headline-lg mb-6" style={{ color: "#000000" }}>
                  {s.name}
                </h2>
                <p className="s-body-md mb-8" style={{ color: "#444748", maxWidth: 480 }}>
                  {s.intro[0]}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-10 border-t pt-8" style={{ borderColor: "#e8e8e8" }}>
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#BE9355" }} />
                      <span className="s-body-md" style={{ color: "#444748" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Process steps — compact 2×2 */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {s.process.map((step) => (
                    <div key={step.num} className="p-4" style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#f9f9f9" }}>
                      <span className="block text-[10px] font-bold tracking-[0.2em] mb-2" style={{ fontFamily: "var(--font-display)", color: "#BE9355" }}>
                        {step.num}
                      </span>
                      <p className="text-[12px] font-semibold mb-1" style={{ fontFamily: "var(--font-display)", color: "#000000", letterSpacing: "0.05em" }}>
                        {step.title}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  to="/servicos/$slug"
                  params={{ slug: s.slug }}
                  className="s-label-caps inline-block border-b pb-1 transition-colors duration-300 hover:text-[#BE9355] hover:border-[#BE9355]"
                  style={{ color: "#000000", borderColor: "#000000" }}
                >
                  Ver detalhe do serviço →
                </Link>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <CtaBand
        secondaryLabel="Pedir Orçamento"
        secondaryTo="/contacto"
      />
    </main>
  );
}
