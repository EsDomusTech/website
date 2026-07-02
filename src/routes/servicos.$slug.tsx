import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionTitle } from "@/components/site/SectionTitle";
import { PageHeader } from "@/components/site/PageHeader";
import { SITE, AREA_SERVED_NORTE } from "@/lib/site-data";
import { fetchService, fetchServices } from "@/lib/sanity-queries";

export const Route = createFileRoute("/servicos/$slug")({
  loader: async ({ params }) => {
    const [service, allServices] = await Promise.all([fetchService(params.slug), fetchServices()]);
    if (!service) throw notFound();
    return { service, allServices };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Serviço não encontrado | EsDomusTech" }] };
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `${SITE.domain}/servicos/${s.slug}` },
        { property: "og:image", content: s.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: s.image },
      ],
      links: [{ rel: "canonical", href: `${SITE.domain}/servicos/${s.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.name,
            description: s.metaDescription,
            image: s.image,
            url: `${SITE.domain}/servicos/${s.slug}`,
            provider: {
              "@type": "Organization",
              name: SITE.name,
              url: SITE.domain,
              telephone: SITE.phone,
              email: SITE.email,
            },
            areaServed: AREA_SERVED_NORTE,
            serviceType: s.name,
          }),
        },
      ],
    };
  },
  component: ServicoDetailPage,
  notFoundComponent: ServicoNotFound,
});

function ServicoNotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center pt-20 text-center">
      <div>
        <h1
          style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "#000000", letterSpacing: "0.04em" }}
        >
          Serviço não encontrado
        </h1>
        <p className="mt-4" style={{ color: "#444748" }}>
          O serviço que procura não existe ou foi movido.
        </p>
        <Link
          to="/servicos"
          className="s-label-caps mt-8 inline-block transition-colors hover:text-[#BE9355]"
          style={{ color: "#000000" }}
        >
          Ver todos os serviços →
        </Link>
      </div>
    </main>
  );
}

function ServicoDetailPage() {
  const { service: s, allServices } = Route.useLoaderData();
  const others = allServices.filter((x) => x.slug !== s.slug);

  return (
    <main style={{ backgroundColor: "#f9f9f9" }}>

      <PageHeader
        eyebrow="Serviços"
        titleFirst={s.titleFirst}
        titleSecond={s.titleSecond}
        subtitle={s.excerpt}
        image={s.image}
      />

      {/* Intro + features */}
      <section style={{ paddingBlock: 100 }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-12 items-start">

            {/* Intro text */}
            <div className="col-span-12 md:col-span-7">
              <SectionTitle first="O SERVIÇO" second="EM DETALHE" align="left" />
              <div className="mt-8 space-y-5" style={{ color: "#444748", fontSize: "15px", lineHeight: 1.8 }}>
                {s.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="col-span-12 md:col-span-5">
              <div className="p-10 md:p-12" style={{ backgroundColor: "#f0f0f0" }}>
                <span className="s-label-caps block mb-6" style={{ color: "#BE9355", letterSpacing: "0.25em" }}>
                  O Que Inclui
                </span>
                <ul className="space-y-4">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#BE9355" }} />
                      <span className="s-body-md" style={{ color: "#444748" }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process steps */}
      <section style={{ paddingBlock: 100, backgroundColor: "#111111" }}>
        <div className="s-wrap">
          <SectionTitle first="O PROCESSO" second="PASSO A PASSO" light className="mb-16 items-center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {s.process.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-t pt-8"
                style={{ borderColor: "#BE9355" }}
              >
                <span
                  className="s-headline-lg block mb-4 leading-none"
                  style={{ color: "#222222", fontFamily: "var(--font-display)" }}
                >
                  {step.num}
                </span>
                <h3
                  className="s-headline-md mb-3"
                  style={{ color: "#ffffff" }}
                >
                  {step.title}
                </h3>
                <p className="s-body-md" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      {others.length > 0 && (
        <section style={{ paddingBlock: 100 }}>
          <div className="s-wrap">
            <SectionTitle first="OUTROS" second="SERVIÇOS" className="mb-14" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {others.map((o, i) => (
                <motion.div
                  key={o.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <Link
                    to="/servicos/$slug"
                    params={{ slug: o.slug }}
                    className="group relative block aspect-[16/9] overflow-hidden"
                  >
                    <img
                      src={o.image}
                      alt={o.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: "brightness(0.6)" }}
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <h3
                        className="s-headline-lg text-white"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {o.name}
                      </h3>
                      <span
                        className="s-label-caps mt-3 inline-block transition-colors group-hover:text-[#BE9355]"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      >
                        Ver serviço →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title="Pronto para começar?"
        text="Fale connosco. A primeira consulta é gratuita e sem compromisso."
        label="Pedir Orçamento"
      />
    </main>
  );
}
