import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useConsultaModal } from "@/lib/consulta-store";

type SubItem = { label: string; to: string };
type NavLink = { label: string; to?: string; children?: SubItem[] };

const NAV_LINKS: NavLink[] = [
  { label: "Início", to: "/" },
  {
    label: "Empresa",
    to: "/empresa",
    children: [
      { label: "Sobre Nós", to: "/empresa" },
      { label: "Sistema Construtivo", to: "/sistema-construtivo" },
    ],
  },
  { label: "Serviços", to: "/servicos" },
  {
    label: "Portfolio",
    to: "/projetos",
    children: [
      { label: "Todos os Projetos", to: "/projetos" },
      { label: "Galeria", to: "/galeria" },
      { label: "Antes e Depois", to: "/antes-depois" },
    ],
  },
  {
    label: "Preços",
    to: "/precos",
    children: [
      { label: "Preços e Modelos", to: "/precos" },
      { label: "Vantagens Fiscais", to: "/vantagens-fiscais" },
    ],
  },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "Contacto", to: "/contacto" },
];

export const SOCIAL = [
  { Icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/esdomustech/" },
  { Icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/esdomustech_porto" },
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/esdomustech-casas-modulares" },
];

const LANGS = [
  { code: "PT", label: "Português" },
  { code: "EN", label: "English" },
  { code: "ES", label: "Español" },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <svg viewBox="0 0 48 48" width={36} height={36} fill="none" aria-hidden>
        <polygon points="24,4 44,20 44,44 4,44 4,20" fill="var(--gold)" opacity="0.12" />
        <path d="M8 22 24 8l16 14M12 20v22h24V20M20 42v-10h8v10" stroke="var(--gold)" strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="miter" fill="none" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="text-[20px] leading-none"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            letterSpacing: "0.12em",
            color: light ? "#fff" : "var(--foreground)",
            textTransform: "uppercase",
          }}
        >
          DomusTech
        </span>
        <span
          className="tracked mt-1 text-[8px] font-medium"
          style={{ color: light ? "rgba(255,255,255,0.6)" : "var(--muted-foreground)", fontFamily: "var(--font-display)" }}
        >
          Casas Modulares · Porto
        </span>
      </span>
    </Link>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="flex flex-col items-end gap-[8px]" aria-hidden>
      <motion.span
        className="block h-px bg-current"
        style={{ width: 28 }}
        animate={open ? { rotate: 45, y: 9, width: 28 } : { rotate: 0, y: 0, width: 28 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="block h-px bg-current"
        style={{ width: 28 }}
        animate={open ? { rotate: -45, y: -9, width: 28 } : { rotate: 0, y: 0, width: 28 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </span>
  );
}

function DropdownMenu({ items, open }: { items: SubItem[]; open: boolean }) {
  return (
    <div
      role="menu"
      aria-hidden={!open}
      className={`absolute left-0 top-full z-50 min-w-[210px] bg-white py-2 shadow-md transition-[opacity,transform] duration-200 ${
        open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-1"
      }`}
      style={{ borderTop: "2px solid var(--gold)" }}
    >
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to as "/"}
          role="menuitem"
          tabIndex={open ? 0 : -1}
          className="block px-5 py-2.5 text-[11px] font-medium transition-colors hover:bg-[var(--logo-strip)] hover:text-[color:var(--gold)]"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--foreground)" }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

function LangSelector({ light = false, dropUp = false }: { light?: boolean; dropUp?: boolean }) {
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

  const textColor = light ? "#fff" : "var(--foreground)";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-[11px] font-medium transition-colors hover:text-[color:var(--gold)]"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "0.12em", color: textColor }}
        aria-label="Selecionar idioma"
      >
        {active}
        <ChevronDown className={`h-3 w-3 opacity-50 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          className={`absolute right-0 z-50 min-w-[130px] bg-white py-2 shadow-md ${dropUp ? "bottom-full mb-1" : "top-full"}`}
          style={{ borderTop: dropUp ? "none" : "2px solid var(--gold)", borderBottom: dropUp ? "2px solid var(--gold)" : "none" }}
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

const MENU_IMAGE = "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=1000&fit=crop&auto=format&q=80";

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.22, ease: "easeIn" } },
};

const panelVariants = {
  closed: { x: "100%" },
  open: { x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { x: "100%", transition: { duration: 0.28, ease: "easeIn" } },
};

const itemVariants = {
  closed: { opacity: 0, x: -24 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.12 + i * 0.05, duration: 0.3, ease: "easeOut" as const },
  }),
};

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollY } = useScroll();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { open: openConsulta } = useConsultaModal();
  const isHome = pathname === "/";

  useEffect(() => {
    setScrolled(scrollY.get() > 30);
    return scrollY.on("change", (y) => setScrolled(y > 30));
  }, [scrollY]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setOpenSub(null);
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (!openDropdown) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openDropdown]);

  const openDd = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const scheduleDdClose = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${scrolled ? "shadow-sm" : ""}`}
        style={{
          backgroundColor: isHome && !scrolled ? "transparent" : "var(--dark-section)",
          borderBottom: `1px solid ${isHome && !scrolled ? "transparent" : "rgba(255,255,255,0.08)"}`,
        }}
      >
        <nav className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-8 px-6 lg:px-10" style={{ height: scrolled ? 56 : 80, transition: "height 0.4s" }}>
          <Logo light />

          {/* Desktop nav links — Início omitido (o logo já liga a home) */}
          <ul className="hidden items-center gap-5 xl:flex 2xl:gap-6">
            {NAV_LINKS.filter((link) => link.to !== "/").map((link) => (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && openDd(link.label)}
                onMouseLeave={() => link.children && scheduleDdClose()}
                onFocus={() => link.children && openDd(link.label)}
                onBlur={(e) => {
                  if (link.children && !e.currentTarget.contains(e.relatedTarget as Node)) {
                    setOpenDropdown(null);
                  }
                }}
              >
                {link.to ? (
                  <Link
                    to={link.to as "/"}
                    activeOptions={{ exact: link.to === "/" }}
                    aria-haspopup={link.children ? "true" : undefined}
                    aria-expanded={link.children ? openDropdown === link.label : undefined}
                    className="relative flex items-center gap-1 text-[11px] font-medium transition-colors hover:text-[color:var(--gold)] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[color:var(--gold)] after:transition-all after:duration-300 hover:after:w-full"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff" }}
                    activeProps={{
                      className: "relative flex items-center gap-1 text-[11px] font-medium after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-[color:var(--gold)]",
                      style: { fontFamily: "var(--font-display)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)" },
                    }}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown className={`h-3 w-3 opacity-50 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                    )}
                  </Link>
                ) : (
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === link.label}
                    className="flex items-center gap-1 text-[11px] font-medium transition-colors hover:text-[color:var(--gold)]"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff" }}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown className={`h-3 w-3 opacity-50 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                    )}
                  </button>
                )}
                {link.children && (
                  <div onMouseEnter={() => openDd(link.label)} onMouseLeave={scheduleDdClose}>
                    <DropdownMenu items={link.children} open={openDropdown === link.label} />
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {/* Desktop extras */}
            <div className="hidden items-center gap-5 xl:flex">
              <LangSelector light />
              <div className="h-4 w-px" style={{ backgroundColor: "rgba(255,255,255,0.3)" }} />
              <button
                type="button"
                onClick={openConsulta}
                className="tracked inline-block px-6 py-3 text-[11px] font-medium transition-colors cursor-pointer"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.7)",
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--gold)"; e.currentTarget.style.borderColor = "var(--gold)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)"; }}
              >
                Pedir Orçamento
              </button>
            </div>

            {/* Hamburger — visible on all sizes */}
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center transition-colors hover:text-[color:var(--gold)]"
              style={{ color: "#fff" }}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <HamburgerIcon open={menuOpen} />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[200] flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            {/* Left: architectural image — 30% */}
            <motion.div
              className="relative hidden w-[30%] overflow-hidden lg:block"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.15, duration: 0.6, ease: "easeOut" } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <img
                src={MENU_IMAGE}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ filter: "grayscale(100%)" }}
              />
              <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.15)" }} />
            </motion.div>

            {/* Right: nav panel — white, full on mobile, 70% on desktop */}
            <motion.div
              className="relative flex w-full flex-col bg-white lg:w-[70%]"
              initial={{ x: "100%" }}
              animate={{ x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
              exit={{ x: "100%", transition: { duration: 0.28, ease: "easeIn" } }}
            >
              {/* Top bar inside overlay */}
              <div className="flex items-center justify-between px-8 pt-7 pb-0 md:px-14">
                <Logo />
                <div className="flex items-center gap-4">
                  <LangSelector />
                  <button
                    type="button"
                    className="flex h-11 w-11 items-center justify-center transition-colors hover:text-[color:var(--gold)]"
                    style={{ color: "var(--foreground)" }}
                    aria-label="Fechar menu"
                    onClick={() => setMenuOpen(false)}
                  >
                    <HamburgerIcon open={true} />
                  </button>
                </div>
              </div>

              {/* Nav items */}
              <nav className="flex flex-1 flex-col overflow-y-auto px-8 py-10 md:px-14 md:py-16">
                <ul className="space-y-0">
                  {NAV_LINKS.map((link, i) => {
                    const labelClass =
                      "block py-[0.55rem] text-[1.6rem] font-medium uppercase leading-none tracking-[0.2em] transition-colors duration-200 hover:text-[color:var(--gold)] md:text-[2rem]";
                    const labelStyle = { fontFamily: "var(--font-display)", color: "var(--muted-foreground)" } as const;
                    return (
                      <motion.li
                        key={link.label}
                        custom={i}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                      >
                        {link.children ? (
                          <>
                            <div className="flex items-center justify-between gap-3">
                              <button
                                type="button"
                                onClick={() => setOpenSub((v) => (v === link.label ? null : link.label))}
                                className={`${labelClass} flex-1 text-left`}
                                style={labelStyle}
                              >
                                {link.label}
                              </button>
                              <button
                                type="button"
                                aria-label={`Mostrar submenu ${link.label}`}
                                aria-expanded={openSub === link.label}
                                onClick={() => setOpenSub((v) => (v === link.label ? null : link.label))}
                                className="flex h-11 w-11 shrink-0 items-center justify-center transition-colors hover:text-[color:var(--gold)]"
                                style={{ color: "var(--muted-foreground)" }}
                              >
                                <ChevronDown
                                  className={`h-6 w-6 transition-transform duration-300 ${openSub === link.label ? "rotate-180" : ""}`}
                                />
                              </button>
                            </div>
                            <AnimatePresence initial={false}>
                              {openSub === link.label && (
                                <motion.ul
                                  key="sub"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                                  style={{ overflow: "hidden" }}
                                  className="pl-4"
                                >
                                  {link.children.map((sub) => (
                                    <li key={sub.to}>
                                      <Link
                                        to={sub.to as "/"}
                                        onClick={() => setMenuOpen(false)}
                                        className="block py-2 text-base uppercase tracking-[0.18em] transition-colors duration-200 hover:text-[color:var(--gold)]"
                                        style={{ fontFamily: "var(--font-display)", color: "var(--muted-foreground)" }}
                                      >
                                        {sub.label}
                                      </Link>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            to={link.to as "/"}
                            activeOptions={{ exact: link.to === "/" }}
                            onClick={() => setMenuOpen(false)}
                            className={labelClass}
                            style={labelStyle}
                            activeProps={{
                              style: { fontFamily: "var(--font-display)", color: "var(--gold)" },
                            }}
                          >
                            {link.label}
                          </Link>
                        )}
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Bottom bar: socials + lang + CTA */}
              <div
                className="flex items-center justify-between border-t px-8 py-5 md:px-14"
                style={{ borderColor: "var(--logo-strip)" }}
              >
                <div className="flex items-center gap-4">
                  {SOCIAL.map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center text-[color:var(--muted-foreground)] transition-colors hover:text-[color:var(--gold)]"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => { setMenuOpen(false); openConsulta(); }}
                  className="tracked inline-block px-7 py-3 text-[11px] font-medium text-white transition-colors cursor-pointer"
                  style={{ backgroundColor: "#1b1b1b", fontFamily: "var(--font-display)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1b1b1b")}
                >
                  Pedir Orçamento
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
