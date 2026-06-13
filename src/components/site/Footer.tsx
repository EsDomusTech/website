import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/site-data";

const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/esdomustech_porto" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/esdomustech-casas-modulares" },
  { label: "Facebook", href: "https://www.facebook.com/esdomustech/" },
];

const NAV_LINKS = [
  { label: "Início", to: "/" },
  { label: "Empresa", to: "/empresa" },
  { label: "Sistema Construtivo", to: "/sistema-construtivo" },
  { label: "Serviços", to: "/servicos" },
  { label: "Projetos", to: "/projetos" },
  { label: "Blog", to: "/blog" },
  { label: "Contacto", to: "/contacto" },
  { label: "Privacidade", to: "/politica-de-privacidade" },
  { label: "Termos", to: "/termos-e-condicoes" },
] as const;

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#eeeeee", paddingBlock: 120 }}>
      <div className="s-wrap grid grid-cols-12 gap-8 lg:gap-12 items-start">

        {/* Col 1 — 4/12: Brand + tagline + sociais */}
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <p className="s-headline-md mb-6" style={{ color: "#000000" }}>
            {SITE.name.toUpperCase()}
          </p>
          <p className="s-body-md mb-8" style={{ color: "#444748", maxWidth: 300 }}>
            Construção modular com identidade própria — design rigoroso, prazos certos, no Porto.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {SOCIAL.map(({ label, href }) => (
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

        {/* Col 2 — 4/12: Contact */}
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0 min-w-0">
          <h4 className="s-headline-md mb-6" style={{ color: "#000000" }}>
            Contacto
          </h4>
          <div className="space-y-4">
            <a
              href={`tel:${SITE.phone}`}
              className="s-body-md flex items-center gap-4 transition-colors hover:text-[#BE9355]"
              style={{ color: "#444748" }}
            >
              <Phone size={16} style={{ color: "#BE9355", flexShrink: 0 }} />
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="s-body-md flex items-center gap-4 min-w-0 transition-colors hover:text-[#BE9355]"
              style={{ color: "#444748" }}
            >
              <Mail size={16} style={{ color: "#BE9355", flexShrink: 0 }} />
              <span className="min-w-0 break-words">{SITE.email}</span>
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="s-body-md flex items-start gap-4 transition-colors hover:text-[#BE9355]"
              style={{ color: "#444748" }}
            >
              <MapPin size={16} style={{ color: "#BE9355", flexShrink: 0, marginTop: 4 }} />
              {SITE.address}
            </a>
            <p className="s-body-md flex items-center gap-4" style={{ color: "#444748" }}>
              <Clock size={16} style={{ color: "#BE9355", flexShrink: 0 }} />
              {SITE.hours}
            </p>
          </div>
        </div>

        {/* Col 3 — 4/12: Quick Links */}
        <div className="col-span-12 md:col-span-4">
          <h4 className="s-headline-md mb-6" style={{ color: "#000000" }}>
            Links Rápidos
          </h4>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="s-body-md transition-colors hover:text-[#BE9355]"
                  style={{ color: "#444748" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom bar */}
        <div
          className="col-span-12 mt-20 flex flex-col items-center gap-4 border-t pt-8 md:flex-row md:justify-between"
          style={{ borderColor: "#c4c7c7" }}
        >
          <p className="s-body-md uppercase tracking-widest" style={{ color: "#444748" }}>
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>
          <p className="s-body-md uppercase tracking-widest" style={{ color: "#444748" }}>
            Porto, Portugal
          </p>
        </div>
      </div>
    </footer>
  );
}
