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

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b" style={{ borderColor: "#eeeeee" }}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-center justify-between gap-4 py-8 text-left"
      >
        <span
          className="text-[18px] uppercase leading-snug"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            letterSpacing: "0.02em",
            color: "var(--foreground)",
          }}
        >
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="shrink-0 text-[22px] font-light leading-none"
          style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
          aria-hidden
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="pb-8 pr-12 text-[15px] font-light leading-[1.85]"
              style={{ color: "var(--muted-foreground)" }}
            >
              {a}
            </p>
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
    <main>
      {/* Display-lg hero — sem PageHeader, à risca do Stitch */}
      <header className="container-1100 pb-12 pt-24">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-8">
            <h1
              className="mb-8 uppercase"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(52px, 6vw, 80px)",
                letterSpacing: "0.05em",
                color: "var(--foreground)",
                lineHeight: 1.05,
              }}
            >
              Perguntas <br />
              <span style={{ color: "var(--gold)" }}>Frequentes</span>
            </h1>
            <p
              className="max-w-2xl text-[18px] font-light leading-[1.7]"
              style={{ color: "var(--muted-foreground)" }}
            >
              A transparência é a base do nosso processo. Reunimos as respostas às perguntas
              mais frequentes para o ajudar a navegar desde o conceito até à entrega.
            </p>
          </div>
        </div>
      </header>

      {/* FAQ grid: sidebar 3col + main 9col */}
      <section className="section-pad">
        <div className="container-1100 grid gap-12 md:grid-cols-12">
          {/* Sidebar sticky — categorias */}
          <aside className="hidden md:block md:col-span-3">
            <div className="sticky top-32">
              <p
                className="tracked mb-6 text-[11px] uppercase"
                style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
              >
                Categorias
              </p>
              <ul className="space-y-4">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <a
                      href={`#${cat.id}`}
                      className="text-[12px] font-medium uppercase tracking-[0.18em] transition-colors hover:text-gold"
                      style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
                    >
                      {cat.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main content — acordeões por categoria */}
          <div className="md:col-span-9 space-y-16">
            {categories.map((cat) => (
              <section key={cat.id} id={cat.id}>
                <h2
                  className="mb-8 border-b pb-4 text-[18px] uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    color: "var(--foreground)",
                    borderColor: "#eeeeee",
                  }}
                >
                  {cat.num} / {cat.label}
                </h2>
                {cat.items.map((f) => (
                  <AccordionItem key={f.q} q={f.q} a={f.a} />
                ))}
              </section>
            ))}

            {/* CTA inline */}
            <div
              className="flex flex-col items-start justify-between gap-8 p-12 sm:flex-row sm:items-center"
              style={{ backgroundColor: "var(--logo-strip)" }}
            >
              <h3
                className="uppercase leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "32px",
                  color: "var(--foreground)",
                }}
              >
                Ainda tem <br />dúvidas?
              </h3>
              <div className="max-w-sm">
                <p className="mb-6 text-[14px] font-light" style={{ color: "var(--muted-foreground)" }}>
                  A nossa equipa está disponível para uma consulta personalizada sobre o seu projeto.
                </p>
                <a
                  href="/contacto"
                  className="inline-block border px-10 py-4 text-[12px] font-medium uppercase tracking-[0.18em] transition-all duration-300 hover:bg-foreground hover:text-white"
                  style={{
                    fontFamily: "var(--font-display)",
                    borderColor: "var(--foreground)",
                    color: "var(--foreground)",
                  }}
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
