import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site-data";

const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/domustech_porto/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/domustech-casas-modulares-546498342/" },
  { label: "Facebook", href: "https://www.facebook.com/p/Domustech-61579105953005/" },
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
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer style={{ backgroundColor: "#eeeeee", paddingBlock: 120 }}>
      <div className="s-wrap grid grid-cols-12 gap-8 items-start">

        {/* Col 1 — 3/12: Brand + tagline + sociais */}
        <div className="col-span-12 md:col-span-3 mb-12 md:mb-0">
          <p className="s-headline-md mb-6" style={{ color: "#000000" }}>
            {SITE.name.toUpperCase()}
          </p>
          <p className="s-body-md mb-8" style={{ color: "#444748", maxWidth: 260 }}>
            Construção modular com identidade própria — design rigoroso, prazos certos, no Porto.
          </p>
          <div className="flex flex-col gap-3">
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

        {/* Col 2 — 3/12: Contact */}
        <div className="col-span-12 md:col-span-3 mb-12 md:mb-0">
          <h4 className="s-headline-md mb-6" style={{ color: "#000000" }}>
            Contacto
          </h4>
          <div className="space-y-4">
            <p className="s-body-md flex items-center gap-4" style={{ color: "#444748" }}>
              <Phone size={16} style={{ color: "#BE9355", flexShrink: 0 }} />
              {SITE.phone}
            </p>
            <p className="s-body-md flex items-center gap-4" style={{ color: "#444748" }}>
              <Mail size={16} style={{ color: "#BE9355", flexShrink: 0 }} />
              {SITE.email}
            </p>
            <p className="s-body-md flex items-start gap-4" style={{ color: "#444748" }}>
              <MapPin size={16} style={{ color: "#BE9355", flexShrink: 0, marginTop: 4 }} />
              {SITE.address}
            </p>
          </div>
        </div>

        {/* Col 3 — 3/12: Quick Links */}
        <div className="col-span-12 md:col-span-3 mb-12 md:mb-0">
          <h4 className="s-headline-md mb-6" style={{ color: "#000000" }}>
            Links Rápidos
          </h4>
          <ul className="space-y-3">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="s-body-md transition-colors hover:text-[#000000]"
                  style={{ color: "#999999" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — 3/12: Newsletter */}
        <div className="col-span-12 md:col-span-3">
          <h4 className="s-label-caps mb-6" style={{ color: "#000000" }}>
            Newsletter
          </h4>
          {submitted ? (
            <p className="s-body-md" style={{ color: "#444748" }}>
              Obrigado pela subscrição!
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubmitted(true);
              }}
            >
              <div
                className="flex border-b py-2"
                style={{ borderColor: "#747878" }}
              >
                <label htmlFor="footer-email" className="sr-only">Endereço de email para newsletter</label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENDEREÇO DE EMAIL"
                  className="s-label-caps w-full bg-transparent border-none outline-none placeholder:text-[#999999]"
                  style={{ color: "#000000", fontSize: 11 }}
                />
                <button
                  type="submit"
                  className="s-label-caps shrink-0 transition-colors hover:text-[#BE9355]"
                  style={{ color: "#000000" }}
                  aria-label="Subscrever newsletter"
                >
                  →
                </button>
              </div>
              <p className="s-body-md mt-4" style={{ color: "#999999", fontSize: 12 }}>
                Novidades sobre projetos e tendências de arquitetura modular.
              </p>
            </form>
          )}
        </div>

        {/* Bottom bar */}
        <div
          className="col-span-12 mt-20 flex flex-col items-center gap-4 border-t pt-8 md:flex-row md:justify-between"
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
