import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site-data";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Orçamento de Casa Modular, DomusTech Porto" },
      {
        name: "description",
        content:
          "Contacte a DomusTech no Porto. Peça um orçamento para a sua casa modular ou projeto de interiores. Resposta rápida e personalizada.",
      },
      { property: "og:title", content: "Contacto | DomusTech Porto" },
      { property: "og:description", content: "Fale connosco e peça um orçamento personalizado." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/contacto` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/contacto` }],
  }),
  component: ContactoPage,
});

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/esdomustech_porto" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/esdomustech-casas-modulares" },
  { label: "Facebook", href: "https://www.facebook.com/esdomustech/" },
];

const FIELD_CLASS =
  "w-full h-auto rounded-none border-0 border-b border-muted bg-transparent px-0 py-4 shadow-none text-foreground transition-colors focus-visible:ring-0 focus-visible:border-gold";

function ContactoPage() {
  const [sent, setSent] = useState(false);

  return (
    <main style={{ backgroundColor: "var(--background)" }}>

      {/* Display-lg hero — sem PageHeader, Stitch exacto */}
      <header className="pt-16 md:pt-[120px]">
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <h1 className="s-display-lg mb-8" style={{ color: "var(--foreground)" }}>
                Vamos construir algo <br />
                <span style={{ color: "var(--gold)" }}>duradouro</span>.
              </h1>
              <p className="s-body-lg" style={{ color: "var(--muted-foreground)", maxWidth: 560 }}>
                O nosso estúdio está localizado em Vila Nova da Telha, Porto. Recebemos consultas
                para discutir a sua visão de espaço e estrutura.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Contact body — 4-col info + 8-col form */}
      <section className="py-16 md:py-[120px]">
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">

            {/* Info col — 4/12 */}
            <div className="col-span-12 md:col-span-4 space-y-16">

              {/* Morada */}
              <div>
                <span
                  className="s-label-caps mb-4 block"
                  style={{ color: "var(--label-muted)" }}
                >
                  O Escritório
                </span>
                <p className="s-headline-md" style={{ color: "var(--foreground)", lineHeight: 1.5 }}>
                  {SITE.address}
                </p>
              </div>

              {/* Contacto */}
              <div>
                <span
                  className="s-label-caps mb-4 block"
                  style={{ color: "var(--label-muted)" }}
                >
                  Contacto Directo
                </span>
                <div className="space-y-4">
                  <a
                    href={`tel:${SITE.phone}`}
                    className="s-body-lg block transition-colors hover:text-[#BE9355]"
                    style={{ color: "var(--foreground)" }}
                  >
                    {SITE.phone}
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="s-body-lg block transition-colors hover:text-[#BE9355]"
                    style={{ color: "var(--foreground)" }}
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>

              {/* Horário */}
              <div>
                <span
                  className="s-label-caps mb-4 block"
                  style={{ color: "var(--label-muted)" }}
                >
                  Horário
                </span>
                <p className="s-body-lg" style={{ color: "var(--foreground)" }}>
                  {SITE.hours}
                </p>
              </div>

              {/* Redes sociais */}
              <div>
                <span
                  className="s-label-caps mb-4 block"
                  style={{ color: "var(--label-muted)" }}
                >
                  Redes Sociais
                </span>
                <div className="flex flex-col gap-3">
                  {SOCIAL_LINKS.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="s-label-caps transition-colors hover:text-[#BE9355]"
                      style={{ color: "var(--foreground)" }}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form col — 8/12 */}
            <div
              className="col-span-12 md:col-span-8 p-6 md:p-12 lg:p-16"
              style={{ backgroundColor: "var(--card)" }}
            >
              {sent ? (
                <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
                  <h3
                    className="s-headline-lg mb-4"
                    style={{ color: "var(--foreground)" }}
                  >
                    Mensagem enviada!
                  </h3>
                  <p className="s-body-md" style={{ color: "var(--muted-foreground)" }}>
                    Obrigado pelo seu contacto. Responderemos com a maior brevidade.
                  </p>
                </div>
              ) : (
                <form
                  className="space-y-10"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid gap-10 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="s-label-caps mb-2 block"
                        style={{ color: "var(--label-muted)" }}
                      >
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="João Silva"
                        className={FIELD_CLASS}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="s-label-caps mb-2 block"
                        style={{ color: "var(--label-muted)" }}
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="email@exemplo.com"
                        className={FIELD_CLASS}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="s-label-caps mb-2 block"
                      style={{ color: "var(--label-muted)" }}
                    >
                      Serviço
                    </label>
                    <Select name="subject" defaultValue="Casa Modular">
                      <SelectTrigger id="subject" className={`${FIELD_CLASS} focus:ring-0 focus:border-gold`}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Casa Modular">Casa Modular</SelectItem>
                        <SelectItem value="Construção Modular">Construção Modular</SelectItem>
                        <SelectItem value="Design de Interiores">Design de Interiores</SelectItem>
                        <SelectItem value="Informação Geral">Informação Geral</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="s-label-caps mb-2 block"
                      style={{ color: "var(--label-muted)" }}
                    >
                      Telefone (opcional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+351 900 000 000"
                      className={FIELD_CLASS}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="s-label-caps mb-2 block"
                      style={{ color: "var(--label-muted)" }}
                    >
                      A Sua Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Descreva o seu projeto..."
                      className={`${FIELD_CLASS} resize-none`}
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="s-label-caps w-full inline-flex items-center justify-center gap-3 py-5 text-white transition-colors duration-300"
                      style={{ backgroundColor: "var(--gold)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--foreground)")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
                    >
                      Enviar Mensagem
                      <span aria-hidden>→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
