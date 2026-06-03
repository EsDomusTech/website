import { Link } from "@tanstack/react-router";
import { SOCIAL } from "./Navbar";
import { SITE, SERVICES } from "@/lib/site-data";
import { Phone, Mail, MapPin } from "lucide-react";

const NAV = [
  { label: "Início", to: "/" },
  { label: "Empresa", to: "/empresa" },
  { label: "Serviços", to: "/servicos" },
  { label: "Projetos", to: "/projetos" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "Contacto", to: "/contacto" },
];

const CONTACT_ITEMS = [
  { Icon: Phone, value: SITE.phone, href: `tel:${SITE.phone}` },
  { Icon: Mail, value: SITE.email, href: `mailto:${SITE.email}` },
  { Icon: MapPin, value: SITE.address, href: "#" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--dark-section)" }}>
      {/* Top band */}
      <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container-1100 flex flex-col gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 48 48" width={36} height={36} fill="none" aria-hidden>
                <polygon points="24,4 44,20 44,44 4,44 4,20" fill="var(--gold)" opacity="0.15" />
                <path d="M8 22 24 8l16 14M12 20v22h24V20M20 42v-10h8v10" stroke="var(--gold)" strokeWidth={2} strokeLinecap="square" strokeLinejoin="miter" fill="none" />
              </svg>
              <span
                className="text-[22px] font-black tracking-tight text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                DOMUSTECH
              </span>
            </div>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Estúdio de arquitetura e construção modular no Porto. Casas inteligentes, sustentáveis e feitas à sua medida.
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {SOCIAL.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center border transition-colors hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
                style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="container-1100 grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Contact */}
        <div>
          <h4
            className="tracked mb-6 text-[11px] font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}
          >
            Contacto
          </h4>
          <ul className="space-y-4">
            {CONTACT_ITEMS.map(({ Icon, value, href }) => (
              <li key={value}>
                <a
                  href={href}
                  className="flex items-start gap-3 text-[13px] leading-snug transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.5)" }}
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
            className="tracked mb-6 text-[11px] font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}
          >
            Navegação
          </h4>
          <ul className="space-y-3">
            {NAV.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-[13px] transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4
            className="tracked mb-6 text-[11px] font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}
          >
            Serviços
          </h4>
          <ul className="space-y-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/servicos/$slug"
                  params={{ slug: s.slug }}
                  className="text-[13px] transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4
            className="tracked mb-6 text-[11px] font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}
          >
            Newsletter
          </h4>
          <p className="mb-5 text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Receba as últimas novidades sobre projetos e tendências de arquitetura modular.
          </p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="O seu email"
              className="flex-1 border px-4 py-2.5 text-[12px] text-white placeholder:text-white/30 focus:outline-none focus:ring-1"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.1)",
                ringColor: "var(--gold)",
              }}
            />
            <button
              type="submit"
              className="px-4 py-2.5 text-[11px] font-bold text-white transition-opacity hover:opacity-85"
              style={{ backgroundColor: "var(--gold)", fontFamily: "var(--font-display)" }}
            >
              →
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container-1100 flex flex-col items-center gap-4 py-6 sm:flex-row sm:justify-between">
          <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              to="/politica-de-privacidade"
              className="text-[12px] transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Política de Privacidade
            </Link>
            <Link
              to="/termos-e-condicoes"
              className="text-[12px] transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Termos e Condições
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
