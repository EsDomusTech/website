import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";
import { FAQS, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Perguntas Frequentes sobre Casas Modulares, DomusTech" },
      {
        name: "description",
        content:
          "Respostas às perguntas mais frequentes sobre casas modulares, prazos, personalização e licenciamento no Porto. Tire as suas dúvidas com a DomusTech.",
      },
      { property: "og:title", content: "Perguntas Frequentes | DomusTech" },
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
          mainEntity: FAQS.map((f) => ({
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
  const categories = [
    {
      id: "produto",
      label: "O PRODUTO",
      num: "01",
      items: [FAQS[0], FAQS[4], FAQS[7]],
    },
    {
      id: "processo",
      label: "O PROCESSO",
      num: "02",
      items: [FAQS[3], FAQS[5], FAQS[6], FAQS[10]],
    },
    {
      id: "prazos-precos",
      label: "PRAZOS & PREÇOS",
      num: "03",
      items: [FAQS[1], FAQS[2], FAQS[11]],
    },
    {
      id: "personalizacao",
      label: "PERSONALIZAÇÃO",
      num: "04",
      items: [FAQS[8], FAQS[9]],
    },
  ];

  return (
    <main style={{ backgroundColor: "#f9f9f9" }}>

      {/* Hero header — display-lg, à risca do Stitch */}
      <header style={{ paddingBlock: "120px 0" }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <h1 className="s-display-lg mb-8" style={{ color: "#000000" }}>
                Perguntas <br />
                <span style={{ color: "#BE9355" }}>Frequentes</span>
              </h1>
              <p
                className="s-body-lg"
                style={{ color: "#444748", maxWidth: 672 }}
              >
                A transparência é a base do nosso processo. Reunimos as respostas às perguntas
                mais frequentes para o ajudar a navegar desde o conceito até à entrega.
              </p>
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
              {categories.map((cat) => (
                <section id={cat.id} key={cat.id} className="space-y-0">
                  <h2
                    className="s-headline-md border-b pb-4 mb-8"
                    style={{ color: "#000000", borderColor: "#eeeeee" }}
                  >
                    {cat.num} / {cat.label}
                  </h2>
                  {cat.items.map((f) => (
                    <FaqItem key={f.q} q={f.q} a={f.a} />
                  ))}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA box */}
      <section className="pb-24">
        <div className="s-wrap">
          <div
            className="flex flex-col md:flex-row items-center justify-between p-12 md:p-20"
            style={{ backgroundColor: "#eeeeee" }}
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
              <a
                href="/contacto"
                className="s-label-caps inline-block border px-10 py-4 transition-all duration-300"
                style={{ borderColor: "#000000", color: "#000000" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#000000"; e.currentTarget.style.color = "#ffffff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#000000"; }}
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
