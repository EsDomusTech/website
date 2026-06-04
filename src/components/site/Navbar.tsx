import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Menu, X, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/site-data";

type SubItem = { label: string; to: string };
type NavLink = { label: string; to?: string; children?: SubItem[] };

const NAV_LINKS: NavLink[] = [
  { label: "Início", to: "/" },
  { label: "Empresa", to: "/empresa" },
  {
    label: "Serviços",
    to: "/servicos",
    children: [
      { label: "Casas Modulares", to: "/servicos/casas-modulares-porto" },
      { label: "Construção Modular", to: "/servicos/construcao-modular" },
      { label: "Design de Interiores", to: "/servicos/design-de-interiores" },
      { label: "Remodelação", to: "/servicos/remodelacao" },
    ],
  },
  {
    label: "Portfolio",
    to: "/projetos",
    children: [
      { label: "Portfolio Grid", to: "/projetos" },
      { label: "Portfolio Grid Filter", to: "/projetos/filtro" },
      { label: "Portfolio Fancy", to: "/projetos/fancy" },
      { label: "Portfolio Fancy Filter", to: "/projetos/fancy-filtro" },
      { label: "Portfolio List", to: "/projetos/lista" },
      { label: "Cotton House", to: "/projetos/cotton-house" },
      { label: "Armada Center", to: "/projetos/armada-center" },
    ],
  },
  {
    label: "Galeria",
    to: "/galeria",
    children: [
      { label: "Image Gallery Grid", to: "/galeria" },
      { label: "Image Gallery Masonry", to: "/galeria/masonry" },
    ],
  },
  {
    label: "Páginas",
    children: [
      { label: "Before After", to: "/antes-depois" },
      { label: "Pricing", to: "/precos" },
      { label: "Team", to: "/equipa" },
      { label: "Testimonials", to: "/testemunhos" },
      { label: "FAQs", to: "/faq" },
    ],
  },
  {
    label: "Blog",
    to: "/blog",
  },
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
      <svg viewBox="0 0 48 48" width={36} height={36} fill="none" aria-hidden>
        <polygon points="24,4 44,20 44,44 4,44 4,20" fill="var(--gold)" opacity="0.12" />
        <path d="M8 22 24 8l16 14M12 20v22h24V20M20 42v-10h8v10" stroke="var(--gold)" strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="miter" fill="none" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="text-[20px] leading-none"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "0.12em", color: "var(--foreground)", textTransform: "uppercase" }}
        >
          DomusTech
        </span>
        <span className="tracked mt-1 text-[8px] font-medium" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-display)" }}>
          Casas Modulares · Porto
        </span>
      </span>
    </Link>
  );
}

function DropdownMenu({ items }: { items: SubItem[] }) {
  return (
    <div
      className="absolute left-0 top-full z-50 min-w-[210px] bg-white py-2 shadow-xl"
      style={{ borderTop: "2px solid var(--gold)" }}
    >
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to as "/"}
          className="block px-5 py-2.5 text-[11px] font-medium transition-colors hover:bg-[var(--logo-strip)] hover:text-[color:var(--gold)]"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--foreground)" }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

const LANGS = [
  { code: "PT", label: "Português" },
  { code: "EN", label: "English" },
  { code: "ES", label: "Español" },
];

function LangSelector() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("PT");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-[11px] font-medium transition-colors hover:text-[color:var(--gold)]"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "0.12em", color: "var(--foreground)" }}
      >
        {active}
        <ChevronDown className={`h-3 w-3 opacity-50 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          className="absolute right-0 top-full z-50 min-w-[130px] bg-white py-2 shadow-xl"
          style={{ borderTop: "2px solid var(--gold)" }}
        >
          {LANGS.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => { setActive(lang.code); setOpen(false); }}
              className="flex w-full items-center gap-3 px-5 py-2.5 text-[11px] font-medium transition-colors hover:bg-[var(--logo-strip)] hover:text-[color:var(--gold)]"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0.1em",
                color: active === lang.code ? "var(--gold)" : "var(--foreground)",
              }}
            >
              <span className="w-7 text-left">{lang.code}</span>
              <span className="text-[10px] font-light opacity-60">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <>
      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all ${scrolled ? "shadow-sm" : "border-b"}`}
        style={{ borderColor: "var(--border)" }}
      >
        <nav className="container-1100 flex h-[72px] items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <ul className="hidden items-center gap-6 xl:flex">
            {NAV_LINKS.map((link) => (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && openMenu(link.label)}
                onMouseLeave={() => link.children && scheduleClose()}
              >
                {link.to ? (
                  <Link
                    to={link.to as "/"}
                    activeOptions={{ exact: link.to === "/" }}
                    className="relative flex items-center gap-1 text-[11px] font-medium transition-colors hover:text-[color:var(--gold)] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[color:var(--gold)] after:transition-all after:duration-300 hover:after:w-full"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--foreground)" }}
                    activeProps={{
                      className: "relative flex items-center gap-1 text-[11px] font-medium text-[color:var(--gold)] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-[color:var(--gold)]",
                      style: { fontFamily: "var(--font-display)", letterSpacing: "0.12em", textTransform: "uppercase" },
                    }}
                  >
                    {link.label}
                    {link.children && <ChevronDown className="h-3 w-3 opacity-50" />}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="flex items-center gap-1 text-[11px] font-medium transition-colors hover:text-[color:var(--gold)]"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--foreground)" }}
                  >
                    {link.label}
                    {link.children && <ChevronDown className="h-3 w-3 opacity-50" />}
                  </button>
                )}

                {link.children && openDropdown === link.label && (
                  <div onMouseEnter={() => openMenu(link.label)} onMouseLeave={scheduleClose}>
                    <DropdownMenu items={link.children} />
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-5 xl:flex">
            <LangSelector />
            <div className="h-4 w-px" style={{ backgroundColor: "var(--border)" }} />
            <Link
              to="/contacto"
              className="tracked inline-block px-6 py-3 text-[11px] font-medium text-white transition-colors"
              style={{ backgroundColor: "#1b1b1b", fontFamily: "var(--font-display)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1b1b1b")}
            >
              Pedir Orçamento
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="text-foreground xl:hidden"
            aria-label="Abrir menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t bg-white xl:hidden" style={{ borderColor: "var(--border)" }}>
            <ul className="container-1100 flex flex-col py-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                        className="flex w-full items-center justify-between border-b py-3.5 text-[11px] font-medium"
                        style={{ fontFamily: "var(--font-display)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--foreground)", borderColor: "var(--border)" }}
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform ${mobileExpanded === link.label ? "rotate-180" : ""}`}
                          style={{ color: "var(--gold)" }}
                        />
                      </button>
                      {mobileExpanded === link.label && (
                        <ul className="py-1 pl-4" style={{ backgroundColor: "var(--logo-strip)" }}>
                          {link.children.map((sub) => (
                            <li key={sub.to}>
                              <Link
                                to={sub.to as "/"}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2.5 text-[11px] font-medium hover:text-[color:var(--gold)]"
                                style={{ fontFamily: "var(--font-display)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted-foreground)" }}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.to as "/"}
                      onClick={() => setMobileOpen(false)}
                      className="block border-b py-3.5 text-[11px] font-medium hover:text-[color:var(--gold)]"
                      style={{ fontFamily: "var(--font-display)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--foreground)", borderColor: "var(--border)" }}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-4">
                <Link
                  to="/contacto"
                  onClick={() => setMobileOpen(false)}
                  className="tracked inline-block px-7 py-3 text-[11px] font-medium text-white"
                  style={{ backgroundColor: "#1b1b1b", fontFamily: "var(--font-display)" }}
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
