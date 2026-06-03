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
    <section id="about" className="section-pad" style={{ backgroundColor: "var(--logo-strip)" }}>
      <div className="container-1100">
        <div className="grid items-center gap-14 md:grid-cols-2">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionTitle eyebrow="Sobre Nós" first="Quem" second="Somos" align="left" />
            <div className="mt-8 space-y-4 text-[15px] leading-[1.8] text-muted-foreground">
              <p>{LOREM}</p>
              <p>{LOREM2}</p>
            </div>
            <div className="mt-8">
              <a
                href="/empresa"
                className="tracked inline-flex items-center gap-3 text-[11px] font-bold transition-colors hover:text-[color:var(--gold)]"
                style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
              >
                <span className="block h-0.5 w-6" style={{ backgroundColor: "var(--gold)" }} />
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
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <img
              src="https://picsum.photos/seed/office1/700/500"
              alt="Escritório DomusTech no Porto"
              className="w-full object-cover"
            />
            <div
              className="absolute -bottom-5 -left-5 p-5 shadow-xl"
              style={{ backgroundColor: "var(--gold)" }}
            >
              <p className="text-[11px] font-bold uppercase tracking-widest text-white">
                Desde 2012
              </p>
              <p className="mt-0.5 text-[22px] font-black text-white" style={{ fontFamily: "var(--font-display)" }}>
                Porto, Portugal
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 gap-0 border border-border bg-white md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col items-center justify-center border-b border-border py-10 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <span
                className="text-[52px] font-black leading-none"
                style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}
              >
                <Counter target={s.value} />+
              </span>
              <span className="tracked mt-2 text-center text-[11px] font-semibold text-muted-foreground">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
