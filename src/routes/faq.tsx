import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
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

function FaqPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Ajuda"
        titleFirst="PERGUNTAS"
        titleSecond="FREQUENTES"
        subtitle="As respostas às dúvidas mais comuns sobre casas modulares e os nossos serviços."
        image="https://picsum.photos/seed/modular1/1600/900"
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "FAQ" }]}
      />

      <section className="section-pad">
        <div className="container-1100 mx-auto max-w-3xl divide-y divide-border">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-display text-xl font-medium text-foreground">{f.q}</span>
                <span className="text-2xl font-light text-gold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
