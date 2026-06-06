import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { SOCIAL } from "@/components/site/Navbar";

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

const inputClass =
  "w-full border-0 border-b bg-transparent py-4 text-[15px] placeholder-[color:rgba(0,0,0,0.25)] outline-none transition-colors focus:border-[color:var(--gold)]";

function ContactoPage() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      {/* Display-lg heading — no PageHeader */}
      <section className="container-1100 pb-12 pt-24">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-8">
            <h1
              className="mb-6 uppercase leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(48px, 7vw, 80px)",
                letterSpacing: "0.05em",
                color: "var(--foreground)",
                lineHeight: "1.1",
              }}
            >
              Vamos construir<br />
              algo <span style={{ color: "var(--gold)" }}>duradouro</span>.
            </h1>
            <p
              className="max-w-xl text-[18px] font-light leading-[1.7]"
              style={{ color: "var(--muted-foreground)" }}
            >
              O nosso estúdio está localizado no Porto. Recebemos consultas com marcação para
              discutir a sua visão de espaço e estrutura.
            </p>
          </div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="section-pad">
        <div className="container-1100 grid gap-16 md:grid-cols-12">
          {/* Contact info — 4 cols */}
          <div className="space-y-16 md:col-span-4">
            <div>
              <h3
                className="tracked mb-6 text-[11px] uppercase"
                style={{ color: "#999999", fontFamily: "var(--font-display)" }}
              >
                O Escritório
              </h3>
              <p
                className="text-[20px] leading-relaxed"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--foreground)" }}
              >
                {SITE.address}
              </p>
            </div>

            <div>
              <h3
                className="tracked mb-6 text-[11px] uppercase"
                style={{ color: "#999999", fontFamily: "var(--font-display)" }}
              >
                Contacto
              </h3>
              <div className="space-y-4">
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-4 text-[17px] font-light transition-colors hover:text-[color:var(--gold)]"
                  style={{ color: "var(--foreground)" }}
                >
                  <Phone className="h-4 w-4 shrink-0" style={{ color: "var(--gold)" }} />
                  {SITE.phone}
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-4 text-[17px] font-light underline underline-offset-8 transition-colors hover:text-[color:var(--gold)]"
                  style={{
                    color: "var(--foreground)",
                    textDecorationColor: "var(--gold)",
                  }}
                >
                  <Mail className="h-4 w-4 shrink-0" style={{ color: "var(--gold)" }} />
                  {SITE.email}
                </a>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-[17px] font-light transition-colors hover:text-[color:var(--gold)]"
                  style={{ color: "var(--foreground)" }}
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--gold)" }} />
                  {SITE.address}
                </a>
              </div>
            </div>

            <div>
              <h3
                className="tracked mb-6 text-[11px] uppercase"
                style={{ color: "#999999", fontFamily: "var(--font-display)" }}
              >
                Redes Sociais
              </h3>
              <div className="flex gap-8">
                {SOCIAL.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] font-medium uppercase tracking-[0.18em] transition-colors hover:text-[color:var(--gold)]"
                    style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form — 8 cols */}
          <div className="bg-white p-12 md:col-span-8">
            {sent ? (
              <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                <h3
                  className="text-[28px] uppercase"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    letterSpacing: "0.04em",
                    color: "var(--foreground)",
                  }}
                >
                  Mensagem enviada!
                </h3>
                <p className="mt-3 text-[15px] font-light" style={{ color: "var(--muted-foreground)" }}>
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
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="tracked block text-[11px] uppercase transition-colors group-focus-within:text-[color:var(--gold)]"
                      style={{ fontFamily: "var(--font-display)", color: "#999999" }}
                    >
                      Nome Completo
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="João Silva"
                      className={inputClass}
                      style={{ borderColor: "var(--logo-strip)", color: "var(--foreground)" }}
                    />
                  </div>
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="tracked block text-[11px] uppercase transition-colors group-focus-within:text-[color:var(--gold)]"
                      style={{ fontFamily: "var(--font-display)", color: "#999999" }}
                    >
                      Endereço de Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="email@exemplo.com"
                      className={inputClass}
                      style={{ borderColor: "var(--logo-strip)", color: "var(--foreground)" }}
                    />
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="subject"
                    className="tracked block text-[11px] uppercase transition-colors group-focus-within:text-[color:var(--gold)]"
                    style={{ fontFamily: "var(--font-display)", color: "#999999" }}
                  >
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className={inputClass + " appearance-none cursor-pointer"}
                    style={{ borderColor: "var(--logo-strip)", color: "var(--foreground)" }}
                  >
                    <option>Casa Modular</option>
                    <option>Remodelação</option>
                    <option>Design de Interiores</option>
                    <option>Consulta Energética</option>
                    <option>Outro</option>
                  </select>
                </div>

                <div className="group">
                  <label
                    htmlFor="message"
                    className="tracked block text-[11px] uppercase transition-colors group-focus-within:text-[color:var(--gold)]"
                    style={{ fontFamily: "var(--font-display)", color: "#999999" }}
                  >
                    A Sua Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Descreva o seu projeto..."
                    className={inputClass + " resize-none"}
                    style={{ borderColor: "var(--logo-strip)", color: "var(--foreground)" }}
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="flex items-center gap-3 px-12 py-5 text-[12px] font-medium uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[color:var(--gold)]"
                    style={{
                      fontFamily: "var(--font-display)",
                      backgroundColor: "var(--foreground)",
                      color: "white",
                    }}
                  >
                    Enviar Mensagem
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full" style={{ height: "500px", position: "relative" }}>
        <div className="absolute inset-0 bg-[#e8e8e8] overflow-hidden">
          <iframe
            title="Localização DomusTech"
            src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.5) contrast(1.1) opacity(0.7)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        {/* Map pin overlay */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="h-4 w-4 animate-ping rounded-full bg-black absolute" />
          <div className="relative z-10 h-4 w-4 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
          <div
            className="mt-3 flex flex-col items-center p-5 text-center"
            style={{ backgroundColor: "white", maxWidth: "180px", boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}
          >
            <span
              className="tracked mb-1 block text-[11px] uppercase"
              style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
            >
              DomusTech
            </span>
            <span className="text-[10px] uppercase tracking-widest" style={{ color: "#999999" }}>
              Porto, Portugal
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
