import { Link } from "@tanstack/react-router";
import { SOCIAL } from "./Navbar";
import { SITE, SERVICES } from "@/lib/site-data";

const CONTACT = [
  { label: "Telefone", value: SITE.phone },
  { label: "Email", value: SITE.email },
  { label: "Morada", value: SITE.address },
];

const NAV = [
  { label: "Início", to: "/" },
  { label: "Empresa", to: "/empresa" },
  { label: "Serviços", to: "/servicos" },
  { label: "Projetos", to: "/projetos" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "Contacto", to: "/contacto" },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-white">
      <div className="container-1100 py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Contact */}
          <div className="space-y-6">
            {CONTACT.map((c) => (
              <div key={c.label}>
                <p className="tracked text-[11px] text-gold">{c.label}</p>
                <p className="mt-2 text-[15px] text-foreground">{c.value}</p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div>
            <p className="tracked text-[11px] text-gold">Navegação</p>
            <ul className="mt-4 space-y-3">
              {NAV.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-[15px] text-muted-foreground transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="tracked text-[11px] text-gold">Serviços</p>
            <ul className="mt-4 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/servicos/$slug"
                    params={{ slug: s.slug }}
                    className="text-[15px] text-muted-foreground transition-colors hover:text-gold"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About / CTA */}
          <div>
            <p className="tracked text-[11px] text-gold">DomusTech</p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Estúdio de arquitetura e construção modular no Porto. Casas inteligentes, sustentáveis
              e feitas à sua medida.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-1100 flex flex-col items-center gap-6 py-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            {SOCIAL.map(({ Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="text-muted-foreground hover:text-gold">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="flex gap-6">
            <Link to="/politica-de-privacidade" className="text-xs text-muted-foreground hover:text-gold">
              Política de Privacidade
            </Link>
            <Link to="/termos-e-condicoes" className="text-xs text-muted-foreground hover:text-gold">
              Termos e Condições
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
