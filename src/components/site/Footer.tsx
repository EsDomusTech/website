import { Link } from "@tanstack/react-router";
import { SOCIAL } from "./Navbar";
import { SITE } from "@/lib/site-data";
import { Phone, Mail, MapPin } from "lucide-react";

const QUICK_LINKS_A = [
  { label: "Início", to: "/" },
  { label: "Empresa", to: "/empresa" },
  { label: "Projetos", to: "/projetos" },
] as const;

const QUICK_LINKS_B = [
  { label: "Privacidade", to: "/politica-de-privacidade" },
  { label: "Termos", to: "/termos-e-condicoes" },
] as const;

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--logo-strip)" }}>
      <div className="container-1100 grid gap-12 py-20 sm:grid-cols-3">
        {/* Col 1: Brand + tagline + socials */}
        <div>
          <p
            className="mb-5 text-[20px] tracking-[0.12em] uppercase"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--foreground)" }}
          >
            {SITE.name}
          </p>
          <p
            className="mb-8 max-w-[240px] text-[14px] font-light leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Construção modular com identidade própria — design rigoroso, prazos certos, no Porto.
          </p>
          <div className="flex gap-6">
            {SOCIAL.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-medium uppercase tracking-[0.18em] transition-colors hover:text-[color:var(--gold)]"
                style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Contact */}
        <div>
          <h4
            className="tracked mb-8 text-[12px] uppercase"
            style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
          >
            Contacto
          </h4>
          <div className="space-y-4">
            {[
              { Icon: Phone, value: SITE.phone, href: `tel:${SITE.phone}` },
              { Icon: Mail, value: SITE.email, href: `mailto:${SITE.email}` },
              { Icon: MapPin, value: SITE.address, href: SITE.mapsUrl },
            ].map(({ Icon, value, href }) => (
              <a
                key={value}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-3 text-[14px] font-light transition-colors hover:text-[color:var(--gold)]"
                style={{ color: "var(--muted-foreground)" }}
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--gold)" }} />
                {value}
              </a>
            ))}
          </div>
        </div>

        {/* Col 3: Quick Links */}
        <div>
          <h4
            className="tracked mb-8 text-[12px] uppercase"
            style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
          >
            Links Rápidos
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-3">
              {QUICK_LINKS_A.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-[14px] font-light uppercase transition-colors hover:text-[color:var(--foreground)]"
                    style={{ color: "#999999" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {QUICK_LINKS_B.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-[14px] font-light uppercase transition-colors hover:text-[color:var(--foreground)]"
                    style={{ color: "#999999" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "var(--border)" }}>
        <div className="container-1100 flex flex-col items-center gap-3 py-5 sm:flex-row sm:justify-between">
          <p
            className="text-[11px] font-light uppercase tracking-[0.14em]"
            style={{ color: "#999999" }}
          >
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>
          <p
            className="text-[11px] font-light uppercase tracking-[0.14em]"
            style={{ color: "#999999" }}
          >
            Desenvolvido com dedicação
          </p>
        </div>
      </div>
    </footer>
  );
}
