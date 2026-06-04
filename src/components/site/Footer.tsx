import { Link } from "@tanstack/react-router";
import { SOCIAL } from "./Navbar";
import { SITE, SERVICES } from "@/lib/site-data";
import { Phone, Mail, MapPin } from "lucide-react";

const NAV = [
  { label: "Início", to: "/" },
  { label: "Empresa", to: "/empresa" },
  { label: "Serviços", to: "/servicos" },
  { label: "Projetos", to: "/projetos" },
  { label: "Galeria", to: "/galeria" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "Contacto", to: "/contacto" },
];

const CONTACT_ITEMS = [
  { Icon: Phone, value: SITE.phone, href: `tel:${SITE.phone}` },
  { Icon: Mail, value: SITE.email, href: `mailto:${SITE.email}` },
  { Icon: MapPin, value: SITE.address, href: SITE.mapsUrl },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--dark-section)" }}>
      {/* Main columns */}
      <div className="container-1100 grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        {/* Brand + socials — spans 2 cols */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <svg viewBox="0 0 48 48" width={34} height={34} fill="none" aria-hidden>
              <polygon points="24,4 44,20 44,44 4,44 4,20" fill="var(--gold)" opacity="0.12" />
              <path d="M8 22 24 8l16 14M12 20v22h24V20M20 42v-10h8v10" stroke="var(--gold)" strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="miter" fill="none" />
            </svg>
            <span
              className="text-[20px] text-white"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              DomusTech
            </span>
          </div>

          <p className="mb-6 max-w-xs text-[13px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
            Estúdio de arquitetura e construção modular no Porto. Casas inteligentes, sustentáveis e feitas à sua medida.
          </p>

          {/* Social icons */}
          <div className="flex gap-2">
            {SOCIAL.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center border transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.35)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                  (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)";
                }}
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="tracked mb-6 text-[11px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--gold)" }}
          >
            Contacto
          </h4>
          <ul className="space-y-4">
            {CONTACT_ITEMS.map(({ Icon, value, href }) => (
              <li key={value}>
                <a
                  href={href}
                  className="flex items-start gap-3 text-[13px] font-light leading-snug transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "var(--gold)" }} />
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h4
            className="tracked mb-6 text-[11px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--gold)" }}
          >
            Navegação
          </h4>
          <ul className="space-y-3">
            {NAV.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-[13px] font-light transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4
            className="tracked mb-6 text-[11px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--gold)" }}
          >
            Newsletter
          </h4>
          <p className="mb-5 text-[13px] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
            Receba as últimas novidades sobre projetos e tendências de arquitetura modular.
          </p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="O seu email"
              className="flex-1 border px-4 py-2.5 text-[12px] font-light text-white placeholder:text-white/25 focus:outline-none"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
                fontFamily: "var(--font-body)",
              }}
            />
            <button
              type="submit"
              className="px-4 py-2.5 text-[12px] font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--gold)", fontFamily: "var(--font-display)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4a968")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
            >
              →
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="container-1100 flex flex-col items-center gap-4 py-6 sm:flex-row sm:justify-between">
          <p className="text-[12px] font-light" style={{ color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="/politica-de-privacidade" className="text-[12px] font-light transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.25)" }}>
              Política de Privacidade
            </Link>
            <Link to="/termos-e-condicoes" className="text-[12px] font-light transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.25)" }}>
              Termos e Condições
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
