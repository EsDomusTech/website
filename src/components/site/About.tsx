import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const LOREM =
  "Somos um estúdio especializado em casas modulares inteligentes, com sede no Porto. Combinamos engenharia de precisão, design contemporâneo e tecnologia sustentável para criar habitações únicas, adaptadas às necessidades e sonhos de cada cliente.";

const LOREM2 =
  "Cada projeto começa com uma conversa. Ouvimos, desenhamos e construímos — sempre com rigor técnico, materiais premium e atenção ao menor detalhe, desde o conceito até à entrega das chaves.";

const STATS = [
  { value: 12, label: "Anos de Experiência" },
  { value: 340, label: "Projetos Concluídos" },
  { value: 98, label: "Clientes Satisfeitos" },
  { value: 15, label: "Prémios Ganhos" },
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

export function About() {
  return (
    <section id="about" className="section-pad" style={{ backgroundColor: "var(--background)" }}>
      <div className="container-1100">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionTitle eyebrow="Sobre Nós" first="Quem" second="Somos" align="left" />
            <div className="mt-8 space-y-5 text-[15px] font-light leading-[1.85]" style={{ color: "var(--muted-foreground)" }}>
              <p>{LOREM}</p>
              <p>{LOREM2}</p>
            </div>
            <div className="mt-10">
              <a
                href="/empresa"
                className="tracked inline-flex items-center gap-4 text-[11px] font-medium transition-colors"
                style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
              >
                <span className="block h-px w-8" style={{ backgroundColor: "var(--gold)" }} />
                Conhecer a Empresa
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="https://picsum.photos/seed/office1/700/500"
              alt="Escritório DomusTech no Porto"
              className="w-full object-cover"
            />
            {/* Overlap badge */}
            <div
              className="absolute -bottom-6 -left-6 px-7 py-5"
              style={{ backgroundColor: "var(--gold)" }}
            >
              <p className="tracked text-[9px] font-medium text-white/70">
                Desde 2012
              </p>
              <p
                className="mt-1 text-[22px] text-white"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.04em" }}
              >
                Porto, Portugal
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats row — dark background */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4" style={{ backgroundColor: "var(--dark-section)" }}>
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col items-center justify-center py-12"
              style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
            >
              <span
                className="text-[52px] leading-none text-white"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--gold)" }}
              >
                <Counter target={s.value} />+
              </span>
              <span
                className="tracked mt-3 text-center text-[10px] font-medium"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
