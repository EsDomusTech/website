import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionTitle } from "@/components/site/SectionTitle";
import { SITE } from "@/lib/site-data";

/* Medidas do pacote fiscal 2026 — DL n.º 97/2026 (20 maio 2026) */
const BENEFITS = [
  {
    num: "01",
    title: "IVA a 6% na construção",
    points: [
      "Aplica-se a empreitadas de construção/reabilitação para habitação própria permanente (até 660.982 €) ou arrendamento habitacional (renda até 2.300 €/mês).",
      "Válido para obras iniciadas entre 23/set/2025 e 31/dez/2029, com vigência até 31/dez/2032.",
      "Se for para venda, esta tem de ocorrer no prazo de 24 meses após o início de utilização.",
      "Se for para arrendamento, o imóvel tem de ficar arrendado pelo menos 36 meses nos primeiros 5 anos.",
    ],
  },
  {
    num: "02",
    title: "Isenção / redução de IMT",
    points: [
      "Isenção de IMT para imóveis até 106.346 € (1.º escalão de 2026).",
      "Depende de deliberação da câmara municipal — não é automático em todo o país.",
      "Dedução adicional em Imposto do Selo correspondente ao 1.º escalão de IMT.",
    ],
  },
  {
    num: "03",
    title: "Restituição parcial de IVA na autoconstrução",
    points: [
      "Para particulares fora de atividade empresarial, em obras na própria habitação própria permanente.",
      "Recupera a diferença entre os 23% pagos e os 6% que seriam devidos.",
      "Pedidos abrem em outubro de 2026, com prazo de resposta até 150 dias.",
      "Documentação: contrato de empreitada escrito, faturas, título de utilização e valor do terreno.",
    ],
  },
];

/* Porque a modular se encaixa nos limites do pacote */
const FIT = [
  {
    title: "Custo por m² mais baixo",
    text: "Facilita ficar dentro dos tetos de 660.982 € / renda de 2.300 €, mantendo o projeto elegível ao IVA a 6%.",
  },
  {
    title: "Custos previsíveis desde o início",
    text: "Facilita o planeamento fiscal e o cumprimento de prazos — 24 meses para venda, 36 meses para arrendamento.",
  },
];

/* Licenciamento: o que NÃO muda */
const LICENSING = [
  "Uma casa modular com fundações e ligação à rede segue as mesmas regras RJUE que a construção tradicional (DL 10/2024).",
  "Única exceção: módulos móveis de lazer sem fundações fixas e de uso temporário — não aplicável a habitação permanente.",
  "Vantagem real: a fabricação corre em paralelo com a aprovação camarária, reduzindo o tempo total até habitar.",
];

const FAQS = [
  {
    q: "A casa modular precisa de licença?",
    a: "Sim. Uma casa modular com fundações e ligação à rede segue exatamente as mesmas regras do RJUE que a construção tradicional (DL 10/2024). A única exceção são os módulos móveis de lazer, sem fundações fixas e de uso temporário, que não se aplicam a habitação permanente.",
  },
  {
    q: "O IVA reduzido aplica-se sempre?",
    a: "Não. O IVA a 6% aplica-se a empreitadas de construção ou reabilitação para habitação própria permanente (até 660.982 €) ou arrendamento habitacional (renda até 2.300 €/mês), em obras iniciadas entre 23/set/2025 e 31/dez/2029. No caso de venda, esta tem de ocorrer em 24 meses após o início de utilização; no arrendamento, o imóvel tem de ficar arrendado pelo menos 36 meses nos primeiros 5 anos.",
  },
  {
    q: "Até quando dura este pacote?",
    a: "O IVA a 6% é válido para obras iniciadas entre 23/set/2025 e 31/dez/2029, com vigência até 31/dez/2032. Os pedidos de restituição parcial de IVA para autoconstrução abrem em outubro de 2026, com prazo de resposta até 150 dias.",
  },
];

export const Route = createFileRoute("/vantagens-fiscais")({
  head: () => ({
    meta: [
      { title: "Vantagens Fiscais | Pacote Fiscal 2026 — DomusTech" },
      {
        name: "description",
        content:
          "IVA a 6% na construção, isenção de IMT e restituição de IVA na autoconstrução: como as casas modulares se encaixam no Pacote Fiscal 2026 (DL n.º 97/2026).",
      },
      { property: "og:title", content: "Vantagens Fiscais — Pacote Fiscal 2026 | DomusTech" },
      { property: "og:description", content: "IVA 6%, IMT e restituição de IVA: o que muda para a sua casa modular em 2026." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/vantagens-fiscais` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/vantagens-fiscais` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: VantagensFiscaisPage,
});

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group border-b" style={{ borderColor: "#eeeeee" }}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex justify-between items-center py-8 text-left focus:outline-none"
      >
        <span className="s-headline-md group-hover:text-[#BE9355] transition-colors" style={{ color: "#000000" }}>
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 s-headline-md"
          style={{ color: "#BE9355" }}
          aria-hidden
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
            style={{ overflow: "hidden" }}
          >
            <div className="pb-12 pr-12">
              <p className="s-body-md" style={{ color: "#444748" }}>{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function VantagensFiscaisPage() {
  return (
    <main style={{ backgroundColor: "#f9f9f9" }}>

      {/* Hero — display-lg, sem imagem */}
      <header style={{ paddingBlock: "120px 0" }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-9">
              <span className="s-label-caps mb-4 block" style={{ color: "#BE9355", letterSpacing: "0.3em" }}>
                Pacote Fiscal 2026
              </span>
              <h1 className="s-display-lg mb-8" style={{ color: "#000000" }}>
                Vantagens<br />
                <span style={{ color: "#BE9355" }}>Fiscais.</span>
              </h1>
              <h2 className="s-headline-lg mb-6" style={{ color: "#000000", maxWidth: 760 }}>
                Casas Modulares e o Pacote Fiscal 2026: o que muda para si
              </h2>
              <p className="s-body-lg" style={{ color: "#444748", maxWidth: 720 }}>
                O Decreto-Lei n.º 97/2026, de 20 de maio de 2026, introduz um conjunto de medidas
                fiscais para a habitação que entram em vigor de forma faseada, com a parte central a
                partir de julho de 2026. Reunimos o essencial e mostramos como a construção modular se
                encaixa neste novo enquadramento.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* As três medidas fiscais */}
      <section style={{ paddingBlock: 120 }}>
        <div className="s-wrap">
          <SectionTitle eyebrow="O Que Muda" first="TRÊS MEDIDAS" second="CHAVE" align="left" className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="bg-white p-10"
                style={{ border: "1px solid #e8e8e8" }}
              >
                <span
                  className="s-headline-lg block mb-6"
                  style={{ color: "#EEEEEE", fontFamily: "var(--font-display)", lineHeight: 1 }}
                >
                  {b.num}
                </span>
                <h3 className="s-headline-md mb-6" style={{ color: "#000000" }}>{b.title}</h3>
                <ul className="space-y-4 border-t pt-6" style={{ borderColor: "#eeeeee" }}>
                  {b.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="block h-px w-5 mt-3 shrink-0" style={{ backgroundColor: "#BE9355" }} />
                      <span className="s-body-md" style={{ color: "#444748" }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Porque a modular se encaixa */}
      <section style={{ paddingBlock: 120, backgroundColor: "#f0f0f0" }}>
        <div className="s-wrap">
          <SectionTitle eyebrow="A Vantagem Modular" first="PORQUE A MODULAR" second="SE ENCAIXA" className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FIT.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-12"
                style={{ border: "1px solid #e8e8e8" }}
              >
                <h3 className="s-headline-md mb-4" style={{ color: "#000000" }}>{f.title}</h3>
                <p className="s-body-md" style={{ color: "#444748" }}>{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Licenciamento: o que NÃO muda */}
      <section style={{ paddingBlock: 120 }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <SectionTitle eyebrow="Esclarecimento" first="LICENCIAMENTO:" second="O QUE NÃO MUDA" align="left" />
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="border-t" style={{ borderColor: "#e8e8e8" }}>
                {LICENSING.map((row, i) => (
                  <motion.div
                    key={row}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-start gap-5 border-b py-6"
                    style={{ borderColor: "#e8e8e8" }}
                  >
                    <span className="block h-px w-6 mt-3 shrink-0" style={{ backgroundColor: "#BE9355" }} />
                    <p className="s-body-md" style={{ color: "#444748" }}>{row}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  to="/sistema-construtivo"
                  className="s-label-caps inline-block transition-colors hover:text-[#BE9355]"
                  style={{ color: "#000000" }}
                >
                  Ver o Sistema Construtivo →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como ajudamos */}
      <section style={{ backgroundColor: "#1a1a1a", paddingBlock: 100 }}>
        <div className="s-wrap text-center">
          <SectionTitle eyebrow="Como Ajudamos" first="DO PROJETO À" second="LIGAÇÃO ÀS REDES" light className="mb-8 items-center" />
          <p className="s-body-lg mt-8 mx-auto" style={{ color: "rgba(255,255,255,0.6)", maxWidth: 680 }}>
            Acompanhamos todo o processo — projeto, licenciamento, construção e ligação às redes — para
            que a sua casa modular cumpra os requisitos do pacote fiscal e os respetivos prazos.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/contacto"
              className="s-label-caps inline-block px-12 py-5 text-white transition-all duration-300"
              style={{ backgroundColor: "var(--gold)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4a968")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
            >
              Pedir Orçamento
            </Link>
            <Link
              to="/precos"
              className="s-label-caps inline-block border border-white px-12 py-5 text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Ver Preços
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ paddingBlock: 120 }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <SectionTitle eyebrow="FAQ" first="PERGUNTAS" second="FREQUENTES" align="left" />
            </div>
            <div className="col-span-12 md:col-span-8">
              {FAQS.map((f) => (
                <AccordionItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>

          {/* Disclaimer legal */}
          <p className="mt-16 mx-auto text-center" style={{ color: "#9a9a9a", fontSize: "12px", lineHeight: 1.6, maxWidth: 760 }}>
            Esta página apresenta informação de carácter geral e não substitui o aconselhamento de um
            contabilista ou advogado. As medidas descritas estão sujeitas a regulamentação adicional e
            a eventuais alterações. Confirme sempre a sua situação específica junto de um profissional
            qualificado e das entidades competentes.
          </p>
        </div>
      </section>

      <CtaBand
        title="Quer Aproveitar\no Pacote Fiscal?"
        text="Fale connosco e descubra como enquadrar a sua casa modular nos benefícios fiscais de 2026."
        label="Pedir Orçamento"
        secondaryLabel="Ver Sistema Construtivo"
        secondaryTo="/sistema-construtivo"
      />
    </main>
  );
}
