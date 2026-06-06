import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
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

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/domustech_porto/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/domustech-casas-modulares-546498342/" },
  { label: "Facebook", href: "https://www.facebook.com/p/Domustech-61579105953005/" },
];

function ContactoPage() {
  const [sent, setSent] = useState(false);

  return (
    <main style={{ backgroundColor: "#f9f9f9" }}>

      {/* Display-lg hero — sem PageHeader, Stitch exacto */}
      <header style={{ paddingBlock: "120px 0" }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <h1 className="s-display-lg mb-8" style={{ color: "#000000" }}>
                Vamos construir algo <br />
                <span style={{ color: "#BE9355" }}>duradouro</span>.
              </h1>
              <p className="s-body-lg" style={{ color: "#444748", maxWidth: 560 }}>
                O nosso estúdio está localizado em Vila Nova da Telha, Porto. Recebemos consultas
                para discutir a sua visão de espaço e estrutura.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Contact body — 4-col info + 8-col form */}
      <section style={{ paddingBlock: 120 }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">

            {/* Info col — 4/12 */}
            <div className="col-span-12 md:col-span-4 space-y-16">

              {/* Morada */}
              <div>
                <span
                  className="s-label-caps mb-4 block"
                  style={{ color: "#999999" }}
                >
                  O Escritório
                </span>
                <p className="s-headline-md" style={{ color: "#000000", lineHeight: 1.5 }}>
                  {SITE.address}
                </p>
              </div>

              {/* Contacto */}
              <div>
                <span
                  className="s-label-caps mb-4 block"
                  style={{ color: "#999999" }}
                >
                  Contacto Directo
                </span>
                <div className="space-y-4">
                  <a
                    href={`tel:${SITE.phone}`}
                    className="s-body-lg block transition-colors hover:text-[#BE9355]"
                    style={{ color: "#000000" }}
                  >
                    {SITE.phone}
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="s-body-lg block transition-colors hover:text-[#BE9355]"
                    style={{ color: "#000000" }}
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>

              {/* Redes sociais */}
              <div>
                <span
                  className="s-label-caps mb-4 block"
                  style={{ color: "#999999" }}
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
                      style={{ color: "#000000" }}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form col — 8/12 */}
            <div
              className="col-span-12 md:col-span-8 p-12 md:p-16"
              style={{ backgroundColor: "#ffffff" }}
            >
              {sent ? (
                <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
                  <h3
                    className="s-headline-lg mb-4"
                    style={{ color: "#000000" }}
                  >
                    Mensagem enviada!
                  </h3>
                  <p className="s-body-md" style={{ color: "#444748" }}>
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
                        style={{ color: "#999999" }}
                      >
                        Nome Completo
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="João Silva"
                        className="w-full border-0 border-b bg-transparent py-4 s-body-md outline-none transition-colors focus:border-b"
                        style={{
                          borderColor: "#eeeeee",
                          color: "#000000",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#BE9355")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "#eeeeee")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="s-label-caps mb-2 block"
                        style={{ color: "#999999" }}
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="email@exemplo.com"
                        className="w-full border-0 border-b bg-transparent py-4 s-body-md outline-none transition-colors"
                        style={{
                          borderColor: "#eeeeee",
                          color: "#000000",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#BE9355")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "#eeeeee")}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="s-label-caps mb-2 block"
                      style={{ color: "#999999" }}
                    >
                      Serviço
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full border-0 border-b bg-transparent py-4 s-body-md outline-none transition-colors appearance-none cursor-pointer"
                      style={{
                        borderColor: "#eeeeee",
                        color: "#000000",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#BE9355")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#eeeeee")}
                    >
                      <option>Casa Modular</option>
                      <option>Construção Modular</option>
                      <option>Design de Interiores</option>
                      <option>Remodelação</option>
                      <option>Informação Geral</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="s-label-caps mb-2 block"
                      style={{ color: "#999999" }}
                    >
                      Telefone (opcional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+351 900 000 000"
                      className="w-full border-0 border-b bg-transparent py-4 s-body-md outline-none transition-colors"
                      style={{
                        borderColor: "#eeeeee",
                        color: "#000000",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#BE9355")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#eeeeee")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="s-label-caps mb-2 block"
                      style={{ color: "#999999" }}
                    >
                      A Sua Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Descreva o seu projeto..."
                      className="w-full border-0 border-b bg-transparent py-4 s-body-md outline-none transition-colors resize-none"
                      style={{
                        borderColor: "#eeeeee",
                        color: "#000000",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#BE9355")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#eeeeee")}
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="s-label-caps w-full inline-flex items-center justify-center gap-3 py-5 text-white transition-colors duration-300"
                      style={{ backgroundColor: "#BE9355" }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#000000")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#BE9355")}
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

      {/* Google Maps embed */}
      <section style={{ height: 500 }}>
        <iframe
          title="Localização DomusTech"
          src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
          width="100%"
          height="100%"
          style={{
            border: 0,
            display: "block",
            filter: "grayscale(0.4) contrast(1.1) opacity(0.8)",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
}
