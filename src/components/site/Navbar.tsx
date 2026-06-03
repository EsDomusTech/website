import { useEffect, useState } from "react";
import { Facebook, Instagram, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Empresa", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Projetos", href: "#projects" },
  { label: "Contacto", href: "#footer" },
];

/** Small inline icons for X (Twitter) and TikTok since lucide lacks current marks. */
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" className={className} aria-hidden>
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
    <a href="#hero" className="flex items-center gap-3">
      <svg viewBox="0 0 48 48" width={36} height={36} fill="none" stroke="currentColor" strokeWidth={1.4} className="text-gold" aria-hidden>
        <path d="M8 22 24 8l16 14M12 20v18h24V20M20 38v-8h8v8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-xl font-semibold tracking-wide text-foreground">DomusTech</span>
        <span className="tracked text-[9px] text-muted-foreground">Casas Modulares Inteligentes no Porto</span>
      </span>
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Vertical social strip on the left edge */}
      <div className="fixed left-0 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-4 bg-transparent pl-3 lg:flex">
        {SOCIAL.map(({ Icon, label }) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            className="text-muted-foreground transition-colors hover:text-gold"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
        <span className="mt-2 h-16 w-px bg-border" />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-40 border-b bg-white transition-shadow ${
          scrolled ? "border-border shadow-sm" : "border-border/60"
        }`}
      >
        <nav className="container-1100 flex h-20 items-center justify-between">
          <Logo />

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="tracked text-[12px] text-foreground transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

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
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="tracked block py-3 text-[12px] text-foreground hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="flex gap-5 pt-4">
                {SOCIAL.map(({ Icon, label }) => (
                  <a key={label} href="#" aria-label={label} className="text-muted-foreground hover:text-gold">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
