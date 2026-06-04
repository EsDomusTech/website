import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Menu, X, ChevronDown } from "lucide-react";
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
  {
    label: "Rascunho",
    children: [
      { label: "Portfolio Grid Filter", to: "/projetos/filtro" },
      { label: "Portfolio Fancy", to: "/projetos/fancy" },
      { label: "Portfolio Fancy Filter", to: "/projetos/fancy-filtro" },
      { label: "Portfolio List", to: "/projetos/lista" },
      { label: "Gallery Masonry", to: "/galeria/masonry" },
    ],
  },
];

export const SOCIAL = [
  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/p/Domustech-61579105953005/" },
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/domustech_porto/" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/domustech-casas-modulares-546498342/" },
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

          {/* Mobile: lang + CTA + toggle — always visible */}
          <div className="flex items-center gap-4 xl:hidden">
            <LangSelector />
            <Link
              to="/contacto"
              className="tracked inline-flex items-center px-5 py-3 text-[10px] font-medium text-white transition-colors"
              style={{ backgroundColor: "#1b1b1b", fontFamily: "var(--font-display)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1b1b1b")}
            >
              Orçamento
            </Link>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center text-foreground"
              aria-label="Abrir menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
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
            </ul>

            {/* Always-visible bottom bar: lang + CTA */}
            <div
              className="container-1100 flex items-center justify-between border-t py-4"
              style={{ borderColor: "var(--border)" }}
            >
              <LangSelector />
              <Link
                to="/contacto"
                onClick={() => setMobileOpen(false)}
                className="tracked inline-block px-7 py-3 text-[11px] font-medium text-white"
                style={{ backgroundColor: "#1b1b1b", fontFamily: "var(--font-display)" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1b1b1b")}
              >
                Pedir Orçamento
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
