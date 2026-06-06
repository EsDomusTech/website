import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { CtaBand } from "@/components/site/CtaBand";
import { FAQS, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Perguntas Frequentes sobre Casas Modulares — DomusTech" },
      {
        name: "description",
        content:
          "Respostas às perguntas mais frequentes sobre casas modulares, prazos, personalização e licenciamento no Porto. Tire as suas dúvidas com a DomusTech.",
      },
      { property: "og:title", content: "Perguntas Frequentes — DomusTech" },
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

/* Accordion item — estrutura exacta do Stitch */
function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group border-b"
      style={{ borderColor: "#eeeeee" }}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex justify-between items-center py-8 text-left focus:outline-none"
      >
        <span
          className="s-headline-md group-hover:text-[#BE9355] transition-colors"
          style={{ color: "#000000" }}
        >
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 s-headline-md"
          style={{ color: "#BE9355" }}
          aria-hidden
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
            style={{ overflow: "hidden" }}
          >
            <div className="pb-12 pr-12">
              <p className="s-body-md" style={{ color: "#444748" }}>
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FaqPage() {
  const categories = [
    {
      id: "processo",
      label: "O PROCESSO",
      num: "01",
      items: [FAQS[3], FAQS[2]],
    },
    {
      id: "prazos",
      label: "PRAZOS",
      num: "02",
      items: [FAQS[0]],
    },
    {
      id: "qualidade",
      label: "QUALIDADE",
      num: "03",
      items: [FAQS[1]],
    },
    {
      id: "sobre-nos",
      label: "SOBRE NÓS",
      num: "04",
      items: [FAQS[4]],
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

            {/* Sidebar — categorias, sticky */}
            <aside className="hidden md:block col-span-3">
              <div className="sticky top-40">
                <span
                  className="s-label-caps mb-6 block"
                  style={{ color: "#BE9355" }}
                >
                  Categorias
                </span>
                <ul className="space-y-4">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <a
                        href={`#${cat.id}`}
                        className="s-label-caps transition-colors hover:text-[#BE9355]"
                        style={{ color: "#000000" }}
                      >
                        {cat.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main — accordeões por categoria */}
            <div className="col-span-12 md:col-span-9 space-y-12">
              {categories.map((cat) => (
                <section id={cat.id} key={cat.id} className="space-y-0">
                  <h2
                    className="s-headline-md border-b pb-4 mb-8"
                    style={{ color: "#000000", borderColor: "#eeeeee" }}
                  >
                    {cat.num} / {cat.label}
                  </h2>
                  {cat.items.map((f) => (
                    <AccordionItem key={f.q} q={f.q} a={f.a} />
                  ))}
                </section>
              ))}

              {/* Still have questions — Stitch CTA box */}
              <section
                className="mt-24 flex flex-col md:flex-row items-center justify-between p-12 md:p-20"
                style={{ backgroundColor: "#eeeeee" }}
              >
                <div className="mb-8 md:mb-0">
                  <h3
                    className="s-headline-lg leading-tight"
                    style={{ color: "#000000" }}
                  >
                    Ainda tem <br />perguntas?
                  </h3>
                </div>
                <div style={{ maxWidth: 400 }}>
                  <p className="s-body-md mb-8" style={{ color: "#444748" }}>
                    A nossa equipa está disponível para consultas personalizadas sobre o seu projeto.
                  </p>
                  <a
                    href="/contacto"
                    className="s-label-caps inline-block border px-10 py-4 transition-all duration-300 hover:bg-[#000000] hover:text-white"
                    style={{ borderColor: "#000000", color: "#000000" }}
                  >
                    Agendar Consulta
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
