import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { SectionTitle } from "@/components/site/SectionTitle";
import { SITE } from "@/lib/site-data";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Peça um Orçamento de Casa Modular — DomusTech Porto" },
      {
        name: "description",
        content:
          "Contacte a DomusTech no Porto. Peça um orçamento para a sua casa modular, remodelação ou projeto de interiores. Resposta rápida e personalizada.",
      },
      { property: "og:title", content: "Contacto — DomusTech Porto" },
      { property: "og:description", content: "Fale connosco e peça um orçamento personalizado." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/contacto` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/contacto` }],
  }),
  component: ContactoPage,
});

const DETAILS = [
  { Icon: Phone, label: "Telefone", value: SITE.phone },
  { Icon: Mail, label: "Email", value: SITE.email },
  { Icon: MapPin, label: "Morada", value: SITE.address },
];

function ContactoPage() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <PageHeader
        eyebrow="Fale Connosco"
        titleFirst="ENTRE EM"
        titleSecond="CONTACTO"
        subtitle="Tem um projeto em mente? Conte-nos e respondemos com uma proposta à sua medida."
        image="https://picsum.photos/seed/team1/1600/900"
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Contacto" }]}
      />

      <section className="section-pad">
        <div className="container-1100 grid gap-16 md:grid-cols-2">
          {/* Details */}
          <div>
            <SectionTitle first="DADOS DE" second="CONTACTO" align="left" />
            <div className="mt-10 space-y-8">
              {DETAILS.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-border text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="tracked text-[11px] text-gold">{label}</p>
                    <p className="mt-1 text-[15px] text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10">
            {sent ? (
              <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                <h3 className="font-display text-2xl font-medium text-foreground">Mensagem enviada!</h3>
                <p className="mt-3 text-[15px] text-muted-foreground">
                  Obrigado pelo seu contacto. Responderemos com a maior brevidade.
                </p>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label htmlFor="name" className="tracked text-[11px] text-foreground">
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-[15px] text-foreground outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="tracked text-[11px] text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full border border-border bg-background px-4 py-3 text-[15px] text-foreground outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="tracked text-[11px] text-foreground">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full resize-none border border-border bg-background px-4 py-3 text-[15px] text-foreground outline-none focus:border-gold"
                  />
                </div>
                <button
                  type="submit"
                  className="tracked w-full border border-foreground px-8 py-3 text-[12px] text-foreground transition-colors hover:bg-foreground hover:text-white"
                >
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
