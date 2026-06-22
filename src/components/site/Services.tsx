import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site-data";

export function Services() {
  return (
    <section className="section-pad" style={{ backgroundColor: "var(--background)" }}>
      <div className="s-wrap">
        <div className="mb-16">
          <h2 className="s-headline-lg">Os Nossos Serviços</h2>
        </div>

        <div className="border-t" style={{ borderColor: "var(--border)" }}>
          {SERVICES.map((svc, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group grid grid-cols-12 items-center gap-6 border-b py-10 md:gap-8"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="col-span-2 md:col-span-1 select-none text-[40px] leading-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    letterSpacing: "0.03em",
                    color: "var(--ghost)",
                  }}
                  aria-hidden
                >
                  {num}
                </span>

                <h3
                  className="col-span-10 md:col-span-3 s-headline-md transition-colors duration-300 group-hover:text-[color:var(--gold)]"
                  style={{ letterSpacing: "0.1em" }}
                >
                  {svc.name}
                </h3>

                <p className="col-span-12 md:col-span-6 s-body-md" style={{ color: "var(--muted-foreground)" }}>
                  {svc.excerpt}
                </p>

                <div className="col-span-12 md:col-span-2 flex md:justify-end">
                  <Link
                    to="/servicos"
                    className="s-label-caps inline-flex items-center gap-3 transition-all duration-500 group-hover:gap-5"
                    style={{ color: "var(--gold)" }}
                    aria-label={`Ver ${svc.name}`}
                  >
                    Ver Serviço <span aria-hidden>→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
