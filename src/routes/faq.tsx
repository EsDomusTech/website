import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CtaBand } from "@/components/site/CtaBand";
import { useConsultaModal } from "@/lib/consulta-store";
import { FAQS, SITE } from "@/lib/site-data";
import { fetchFaqs } from "@/lib/sanity-queries";

export const Route = createFileRoute("/faq")({
  loader: async () => ({ faqs: await fetchFaqs() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "FAQ | Perguntas Frequentes sobre Casas Modulares, EsDomusTech" },
      {
        name: "description",
        content:
          "Respostas às perguntas mais frequentes sobre casas modulares, prazos, personalização e licenciamento no Porto. Tire as suas dúvidas com a EsDomusTech.",
      },
      { property: "og:title", content: "Perguntas Frequentes | EsDomusTech" },
      { property: "og:description", content: "Tudo o que precisa de saber sobre casas modulares." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/faq` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/faq` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: (loaderData?.faqs ?? FAQS).map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="border-b py-8" style={{ borderColor: "#eeeeee" }}>
      <p className="s-body-lg font-medium mb-3" style={{ color: "#000000" }}>
        {q}
      </p>
      <p className="s-body-md pr-12" style={{ color: "#444748" }}>
        {a}
      </p>
    </div>
  );
}

function FaqPage() {
  const { faqs } = Route.useLoaderData();
  const F = faqs.length > 0 ? faqs : FAQS;
  const { open: openConsulta } = useConsultaModal();
  const categories = [
    {
      id: "produto",
      label: "O PRODUTO",
      num: "01",
      items: [F[0], F[4], F[7]].filter(Boolean),
    },
    {
      id: "processo",
      label: "O PROCESSO",
      num: "02",
      items: [F[3], F[5], F[6], F[10]].filter(Boolean),
    },
    {
      id: "prazos-precos",
      label: "PRAZOS & PREÇOS",
      num: "03",
      items: [F[1], F[2], F[11]].filter(Boolean),
    },
    {
      id: "personalizacao",
      label: "PERSONALIZAÇÃO",
      num: "04",
      items: [F[8], F[9]].filter(Boolean),
    },
  ];

  return (
    <main style={{ backgroundColor: "#f9f9f9" }}>

      {/* Hero header — display-lg, à risca do Stitch */}
      <header style={{ paddingBlock: "120px 0" }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <motion.h1
                className="s-display-lg mb-8"
                style={{ color: "#000000" }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                Perguntas <br />
                <span style={{ color: "#BE9355" }}>Frequentes</span>
              </motion.h1>
              <motion.p
                className="s-body-lg"
                style={{ color: "#444748", maxWidth: 672 }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              >
                A transparência é a base do nosso processo. Reunimos as respostas às perguntas
                mais frequentes para o ajudar a navegar desde o conceito até à entrega.
              </motion.p>
            </div>
          </div>
        </div>
      </header>

      {/* FAQ body — sidebar 3col + main 9col */}
      <section style={{ paddingBlock: 120 }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">

            {/* Accordeões por categoria */}
            <div className="col-span-12 space-y-12">
              {categories.map((cat, ci) => (
                <motion.section
                  id={cat.id}
                  key={cat.id}
                  className="space-y-0"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, delay: ci * 0.07, ease: "easeOut" }}
                >
                  <h2
                    className="s-headline-md border-b pb-4 mb-8"
                    style={{ color: "#000000", borderColor: "#eeeeee" }}
                  >
                    {cat.num} / {cat.label}
                  </h2>
                  {cat.items.map((f) => (
                    <FaqItem key={f.q} q={f.q} a={f.a} />
                  ))}
                </motion.section>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA box */}
      <section className="pb-24">
        <div className="s-wrap">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between p-12 md:p-20"
            style={{ backgroundColor: "#eeeeee" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="mb-8 md:mb-0">
              <h3 className="s-headline-lg leading-tight" style={{ color: "#000000" }}>
                Ainda tem <br />perguntas?
              </h3>
            </div>
            <div style={{ maxWidth: 400 }}>
              <p className="s-body-md mb-8" style={{ color: "#444748" }}>
                A nossa equipa está disponível para consultas personalizadas sobre o seu projeto.
              </p>
              <button
                type="button"
                onClick={openConsulta}
                className="s-label-caps inline-block border px-10 py-4 transition-all duration-300 cursor-pointer"
                style={{ borderColor: "#000000", color: "#000000", backgroundColor: "transparent" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#000000"; e.currentTarget.style.color = "#ffffff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#000000"; }}
              >
                Agendar Consulta
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
