import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { useConsultaModal } from "@/lib/consulta-store";

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
  { label: "Instagram", Icon: Instagram, href: "https://www.instagram.com/esdomustech_porto" },
  { label: "LinkedIn", Icon: Linkedin, href: "https://www.linkedin.com/company/esdomustech-casas-modulares" },
  { label: "Facebook", Icon: Facebook, href: "https://www.facebook.com/esdomustech/" },
];

function ContactoPage() {
  const { open: openConsulta } = useConsultaModal();

  return (
    <main style={{ backgroundColor: "var(--background)" }}>

      {/* Hero */}
      <header className="pt-[100px] md:pt-[120px]">
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

      {/* Body — info + CTA */}
      <section className="py-16 md:py-[120px]">
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8 items-start">

            {/* Info col */}
            <div className="col-span-12 md:col-span-4 space-y-16">
              <div>
                <span className="s-label-caps mb-4 block" style={{ color: "var(--label-muted)" }}>O Escritório</span>
                <p className="s-headline-md" style={{ color: "var(--foreground)", lineHeight: 1.5 }}>{SITE.address}</p>
              </div>
              <div>
                <span className="s-label-caps mb-4 block" style={{ color: "var(--label-muted)" }}>Contacto Directo</span>
                <div className="space-y-4">
                  <a href={`tel:${SITE.phone}`} className="s-body-lg block transition-colors hover:text-[#BE9355]" style={{ color: "var(--foreground)" }}>{SITE.phone}</a>
                  <a href={`mailto:${SITE.email}`} className="s-body-lg block transition-colors hover:text-[#BE9355]" style={{ color: "var(--foreground)" }}>{SITE.email}</a>
                </div>
              </div>
              <div>
                <span className="s-label-caps mb-4 block" style={{ color: "var(--label-muted)" }}>Horário</span>
                <p className="s-body-lg" style={{ color: "var(--foreground)" }}>{SITE.hours}</p>
              </div>
              <div>
                <span className="s-label-caps mb-4 block" style={{ color: "var(--label-muted)" }}>Redes Sociais</span>
                <div className="flex items-center gap-5">
                  {SOCIAL_LINKS.map(({ label, Icon, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="transition-colors hover:text-[#BE9355]"
                      style={{ color: "var(--foreground)" }}>
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA col */}
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <div className="p-10 md:p-16" style={{ backgroundColor: "var(--dark-section)" }}>
                <span className="s-label-caps block mb-6" style={{ color: "var(--gold)" }}>
                  Agendar Consulta
                </span>
                <h2 className="s-display-md text-white mb-6" style={{ maxWidth: 400 }}>
                  Conte-nos o seu projeto
                </h2>
                <p className="s-body-md text-white/70 mb-10" style={{ maxWidth: 380 }}>
                  Responda a algumas perguntas sobre o seu projeto e entraremos em contacto em 48 horas para agendar uma reunião sem compromisso.
                </p>
                <button
                  type="button"
                  onClick={openConsulta}
                  className="s-label-caps inline-block px-12 py-5 text-white transition-all duration-300 cursor-pointer"
                  style={{ backgroundColor: "var(--gold)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4a968")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
                >
                  Iniciar Consulta →
                </button>
                <p className="mt-6 text-xs italic" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}>
                  Trabalhamos apenas com orçamentos mínimos de 300 mil.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
