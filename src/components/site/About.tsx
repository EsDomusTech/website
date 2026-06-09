import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const BODY =
  "Casas modulares desenvolvidas em estrutura metálica robusta, com isolamento termoacústico e design moderno — garantindo rapidez na construção e máxima eficiência energética. Acreditamos que a habitação do futuro deve ser personalizada, sustentável e acessível.";

const BODY2 =
  "Cada projeto começa com uma conversa. Personalize, construa, viva: orçamentos claros e sem surpresas, pagamentos facilitados por etapas e projetos modernos e exclusivos à medida do cliente — do conceito até à entrega das chaves.";

const STATS = [
  { value: 23, label: "Casas Entregues" },
  { value: 4, label: "Anos no Mercado" },
  { value: 13, label: "Localizações" },
  { value: 10, label: "Anos de Garantia Estrutural" },
];

const MINI_STATS = [
  { value: "23 casas", label: "Entregues em todo o território nacional, com acompanhamento do conceito à entrega." },
  { value: "Classe A", label: "Eficiência energética garantida pela estrutura em aço galvanizado e isolamento termoacústico." },
];

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}</span>;
}

export function About() {
  return (
    <>
      {/* About section — 5/12 text + 7/12 content */}
      <section id="about" className="section-pad" style={{ backgroundColor: "var(--background)" }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8 items-start">

            {/* Col 5/12 — eyebrow + H2 + link */}
            <motion.div
              className="col-span-12 md:col-span-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span
                className="s-label-caps mb-4 block"
                style={{ color: "var(--gold)", letterSpacing: "0.3em" }}
              >
                Sobre Nós
              </span>
              <h2 className="s-headline-lg mb-10">
                Quem Somos
              </h2>
              <a
                href="/empresa"
                className="s-label-caps inline-flex items-center gap-4 transition-colors"
                style={{ color: "var(--foreground)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
              >
                <span className="block h-px w-8" style={{ backgroundColor: "var(--gold)" }} />
                Conhecer a Empresa
              </a>
            </motion.div>

            {/* Col 7/12 — paragraph + mini stats grid */}
            <motion.div
              className="col-span-12 md:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >
              <p className="s-body-lg mb-6" style={{ color: "var(--muted-foreground)" }}>{BODY}</p>
              <p className="s-body-lg mb-10" style={{ color: "var(--muted-foreground)" }}>{BODY2}</p>

              {/* Mini stats — 2 cols, border-t */}
              <div
                className="grid grid-cols-2 gap-8 border-t pt-8"
                style={{ borderColor: "var(--border)" }}
              >
                {MINI_STATS.map((s) => (
                  <div key={s.value}>
                    <p className="s-headline-md mb-2">{s.value}</p>
                    <p className="s-body-md" style={{ color: "var(--muted-foreground)" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats dark section — separate block */}
      <section style={{ backgroundColor: "var(--dark-section)" }}>
        <div className="s-wrap">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className={[
                  "flex flex-col items-center justify-center py-16",
                  // Mobile (2-col): left column (even index) gets separator
                  i % 2 === 0 ? "border-r border-white/[0.06]" : "",
                  // Desktop (4-col): item 1 also needs separator (odd on mobile, no border there)
                  i === 1 ? "md:border-r md:border-white/[0.06]" : "",
                  // Desktop: last item explicitly no separator
                  i === 3 ? "md:border-r-0" : "",
                ].filter(Boolean).join(" ")}
              >
                <span
                  className="s-headline-lg leading-none"
                  style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
                >
                  <Counter target={s.value} />
                </span>
                <span
                  className="s-label-caps mt-3 text-center"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
