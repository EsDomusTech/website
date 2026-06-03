import { LOGO_ICONS } from "./icons";

export function ClientLogos() {
  return (
    <section style={{ backgroundColor: "var(--logo-strip)" }}>
      <div className="container-1100 flex flex-wrap items-center justify-center gap-12 py-16 md:justify-between md:gap-6">
        {LOGO_ICONS.map((Icon, i) => (
          <Icon key={i} className="h-14 w-14 text-gold opacity-80" size={56} />
        ))}
      </div>
    </section>
  );
}
