import { SOCIAL } from "./Navbar";

const CONTACT = [
  { label: "Telefone", value: "+351 220 000 000" },
  { label: "Email", value: "ola@domustech.pt" },
  { label: "Morada", value: "Rua das Flores 100, Porto" },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-white">
      <div className="container-1100 py-20">
        <div className="grid gap-10 text-center sm:grid-cols-3 sm:text-left">
          {CONTACT.map((c) => (
            <div key={c.label}>
              <p className="tracked text-[11px] text-gold">{c.label}</p>
              <p className="mt-3 text-[15px] text-foreground">{c.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-1100 flex flex-col items-center gap-6 py-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DomusTech. Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            {SOCIAL.map(({ Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="text-muted-foreground hover:text-gold">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <a href="#" className="text-xs text-muted-foreground hover:text-gold">
            Termos e Condições
          </a>
        </div>
      </div>
    </footer>
  );
}
