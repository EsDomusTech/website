import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site-data";

const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/domustech_porto/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/domustech-casas-modulares-546498342/" },
];

const COL_A = [
  { label: "Início", to: "/" },
  { label: "Empresa", to: "/empresa" },
  { label: "Projetos", to: "/projetos" },
] as const;

const COL_B = [
  { label: "Privacidade", to: "/politica-de-privacidade" },
  { label: "Termos", to: "/termos-e-condicoes" },
] as const;

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#eeeeee", paddingBlock: 120 }}>
      <div className="s-wrap grid grid-cols-12 gap-8 items-start">

        {/* Col 1 — 4/12: Brand + tagline + socials */}
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <p className="s-headline-md mb-8" style={{ color: "#000000" }}>
            {SITE.name.toUpperCase()}
          </p>
          <p className="s-body-md mb-8" style={{ color: "#444748", maxWidth: 280 }}>
            Construção modular com identidade própria — design rigoroso, prazos certos, no Porto.
          </p>
          <div className="flex gap-6">
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
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h4 className="s-headline-md mb-8" style={{ color: "#000000" }}>
            Contacto
          </h4>
          <div className="space-y-4">
            <p className="s-body-md flex items-center gap-4" style={{ color: "#444748" }}>
              <Phone size={18} style={{ color: "#BE9355", flexShrink: 0 }} />
              {SITE.phone}
            </p>
            <p className="s-body-md flex items-center gap-4" style={{ color: "#444748" }}>
              <Mail size={18} style={{ color: "#BE9355", flexShrink: 0 }} />
              {SITE.email}
            </p>
            <p className="s-body-md flex items-start gap-4" style={{ color: "#444748" }}>
              <MapPin size={18} style={{ color: "#BE9355", flexShrink: 0, marginTop: 4 }} />
              {SITE.address}
            </p>
          </div>
        </div>

        {/* Col 3 — 4/12: Quick Links */}
        <div className="col-span-12 md:col-span-4">
          <h4 className="s-headline-md mb-8" style={{ color: "#000000" }}>
            Links Rápidos
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-4">
              {COL_A.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="s-body-md uppercase transition-colors hover:text-[#000000]"
                    style={{ color: "#999999" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {COL_B.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="s-body-md uppercase transition-colors hover:text-[#000000]"
                    style={{ color: "#999999" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="col-span-12 mt-20 flex flex-col items-center gap-4 border-t pt-20 md:flex-row md:justify-between"
          style={{ borderColor: "#c4c7c7" }}
        >
          <p className="s-body-md uppercase tracking-widest" style={{ color: "#999999" }}>
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>
          <p className="s-body-md uppercase tracking-widest" style={{ color: "#999999" }}>
            Porto, Portugal
          </p>
        </div>
      </div>
    </footer>
  );
}
