import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Menu, Phone, Mail, X } from "lucide-react";
import { SITE } from "@/lib/site-data";

const NAV_LINKS = [
  { label: "Início", to: "/" },
  { label: "Empresa", to: "/empresa" },
  { label: "Serviços", to: "/servicos" },
  { label: "Projetos", to: "/projetos" },
  { label: "Blog", to: "/blog" },
  { label: "Contacto", to: "/contacto" },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor" className={className} aria-hidden>
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.1v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.78.12v-3.2a5.78 5.78 0 0 0-.78-.05A5.79 5.79 0 1 0 15.64 15.4V9.01a7.36 7.36 0 0 0 4.36 1.42V7.3a4.28 4.28 0 0 1-3.4-1.48Z" />
    </svg>
  );
}

export const SOCIAL = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: XIcon, label: "X" },
  { Icon: TikTokIcon, label: "TikTok" },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <svg viewBox="0 0 48 48" width={38} height={38} fill="none" aria-hidden>
        <polygon points="24,4 44,20 44,44 4,44 4,20" fill="var(--gold)" opacity="0.15" />
        <path d="M8 22 24 8l16 14M12 20v22h24V20M20 42v-10h8v10" stroke="var(--gold)" strokeWidth={2} strokeLinecap="square" strokeLinejoin="miter" fill="none" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="text-[22px] font-black tracking-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
        >
          DOMUSTECH
        </span>
        <span className="tracked text-[8px]" style={{ color: "var(--muted-foreground)" }}>
          Casas Modulares · Porto
        </span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div
        className="hidden lg:block"
        style={{ backgroundColor: "var(--topbar)" }}
      >
        <div className="container-1100 flex items-center justify-between py-2.5">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 text-[11px] text-white/70 transition-colors hover:text-white"
            >
              <Phone className="h-3 w-3 text-[color:var(--gold)]" />
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2 text-[11px] text-white/70 transition-colors hover:text-white"
            >
              <Mail className="h-3 w-3 text-[color:var(--gold)]" />
              {SITE.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            {SOCIAL.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-white/50 transition-colors hover:text-[color:var(--gold)]"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow ${
          scrolled ? "shadow-md" : "shadow-none border-b border-border"
        }`}
      >
        <nav className="container-1100 flex h-20 items-center justify-between">
          <Logo />

          <ul className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="tracked relative text-[11px] font-bold text-foreground transition-colors hover:text-[color:var(--gold)] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[color:var(--gold)] after:transition-all after:duration-300 hover:after:w-full"
                  activeProps={{
                    className:
                      "tracked relative text-[11px] font-bold text-[color:var(--gold)] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[color:var(--gold)]",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link
              to="/contacto"
              className="tracked inline-block px-6 py-3 text-[11px] font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--gold)", fontFamily: "var(--font-display)" }}
            >
              Pedir Orçamento
            </Link>
          </div>

          <button
            type="button"
            className="text-foreground md:hidden"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-border bg-white md:hidden">
            <ul className="container-1100 flex flex-col py-4">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="tracked block border-b border-border py-3.5 text-[11px] font-bold text-foreground hover:text-[color:var(--gold)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-5">
                <Link
                  to="/contacto"
                  onClick={() => setOpen(false)}
                  className="tracked inline-block px-6 py-3 text-[11px] font-bold text-white"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  Pedir Orçamento
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
