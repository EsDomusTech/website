import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import { SITE, DISTRITOS_PT } from "@/lib/site-data";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Orçamento de Casa Modular, DomusTech Porto" },
      {
        name: "description",
        content:
          "Contacte a DomusTech no Porto. Peça um orçamento para a sua casa modular ou projeto de interiores. Resposta rápida e personalizada.",
      },
      { property: "og:title", content: "Contacto | DomusTech Porto" },
      { property: "og:description", content: "Fale connosco e peça um orçamento personalizado." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/contacto` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/contacto` }],
  }),
  component: ContactoPage,
});

const SOCIAL_LINKS = [
  { label: "Instagram", Icon: Instagram, href: "https://www.instagram.com/esdomustech_porto" },
  { label: "LinkedIn", Icon: Linkedin, href: "https://www.linkedin.com/company/esdomustech-casas-modulares" },
  { label: "Facebook", Icon: Facebook, href: "https://www.facebook.com/esdomustech/" },
];

type FormData = {
  uso: string;
  tipoTerreno: string;
  credito: string;
  distrito: string;
  tipologia: string;
  nome: string;
  sobrenome: string;
  telefone: string;
  email: string;
};

const USO_OPTIONS = [
  { id: "habitacional", label: "Habitacional" },
  { id: "comercial", label: "Comercial" },
];

const TIPO_TERRENO = [
  { id: "rustico", label: "Terreno Rústico" },
  { id: "urbano", label: "Terreno Urbano" },
  { id: "nao-tenho", label: "Não tenho terreno" },
];

const TIPOLOGIA_OPTIONS = [
  { id: "T0", label: "T0", sub: "a partir de 35 m²" },
  { id: "T1", label: "T1", sub: "a partir de 52 m²" },
  { id: "T2", label: "T2", sub: "a partir de 72 m²" },
  { id: "T3", label: "T3", sub: "a partir de 91 m²" },
  { id: "T4", label: "T4", sub: "a partir de 120 m²" },
  { id: "T5+", label: "T5+", sub: "a partir de 150 m²" },
];

const STEPS = ["Uso", "Terreno", "Crédito", "Localização", "Tipologia", "Contacto"];

const CREDITO_OPTIONS = [
  { id: "sim", label: "Sim" },
  { id: "nao", label: "Não" },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? 40 : -40, opacity: 0 }),
};

function ContactoPage() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState<FormData>({
    uso: "",
    tipoTerreno: "",
    credito: "",
    distrito: "",
    tipologia: "",
    nome: "",
    sobrenome: "",
    telefone: "",
    email: "",
  });

  const go = (delta: number) => { setDir(delta); setStep((s) => s + delta); };
  const set = (key: keyof FormData, val: string) => setData((d) => ({ ...d, [key]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const webhookUrl = import.meta.env.VITE_MAKE_WEBHOOK_URL as string | undefined;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } catch {
        // show success regardless — don't block user on network error
      }
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <main style={{ backgroundColor: "var(--background)" }}>

      {/* Hero */}
      <header className="pt-16 md:pt-[120px]">
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <h1 className="s-display-lg mb-8" style={{ color: "var(--foreground)" }}>
                Vamos construir algo <br />
                <span style={{ color: "var(--gold)" }}>duradouro</span>.
              </h1>
              <p className="s-body-lg" style={{ color: "var(--muted-foreground)", maxWidth: 560 }}>
                O nosso estúdio está localizado em Vila Nova da Telha, Porto. Recebemos consultas
                para discutir a sua visão de espaço e estrutura.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Body — info + form */}
      <section className="py-16 md:py-[120px]">
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">

            {/* Info col — 4/12 */}
            <div className="col-span-12 md:col-span-4 space-y-16">
              <div>
                <span className="s-label-caps mb-4 block" style={{ color: "var(--label-muted)" }}>O Escritório</span>
                <p className="s-headline-md" style={{ color: "var(--foreground)", lineHeight: 1.5 }}>{SITE.address}</p>
              </div>
              <div>
                <span className="s-label-caps mb-4 block" style={{ color: "var(--label-muted)" }}>Contacto Directo</span>
                <div className="space-y-4">
                  <a href={`tel:${SITE.phone}`} className="s-body-lg block transition-colors hover:text-[#BE9355]" style={{ color: "var(--foreground)" }}>{SITE.phone}</a>
                  <a href={`mailto:${SITE.email}`} className="s-body-lg block transition-colors hover:text-[#BE9355]" style={{ color: "var(--foreground)" }}>{SITE.email}</a>
                </div>
              </div>
              <div>
                <span className="s-label-caps mb-4 block" style={{ color: "var(--label-muted)" }}>Horário</span>
                <p className="s-body-lg" style={{ color: "var(--foreground)" }}>{SITE.hours}</p>
              </div>
              <div>
                <span className="s-label-caps mb-4 block" style={{ color: "var(--label-muted)" }}>Redes Sociais</span>
                <div className="flex items-center gap-5">
                  {SOCIAL_LINKS.map(({ label, Icon, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="transition-colors hover:text-[#BE9355]"
                      style={{ color: "var(--foreground)" }}>
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form col — 8/12 */}
            <div className="col-span-12 md:col-span-8 p-6 md:p-12 lg:p-16" style={{ backgroundColor: "var(--card)" }}>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex h-full min-h-72 flex-col items-center justify-center text-center"
                >
                  <div className="text-5xl mb-6" style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}>✓</div>
                  <h3 className="s-headline-lg mb-4" style={{ color: "var(--foreground)" }}>Pedido enviado!</h3>
                  <p className="s-body-md" style={{ color: "var(--muted-foreground)" }}>
                    Entraremos em contacto em até 48 horas.
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* Progress */}
                  <div className="relative flex justify-between mb-10">
                    <div className="absolute left-0 right-0 h-px" style={{ top: 16, background: "var(--ghost)" }} />
                    <div
                      className="absolute left-0 h-px transition-all duration-400"
                      style={{
                        top: 16,
                        background: "var(--gold)",
                        width: step === 0 ? "0%" : `${(step / (STEPS.length - 1)) * 100}%`,
                      }}
                    />
                    {STEPS.map((label, i) => (
                      <div key={i} className="relative z-10 flex flex-col items-center gap-2">
                        <button
                          type="button"
                          disabled={i >= step}
                          onClick={() => { if (i < step) { setDir(-1); setStep(i); } }}
                          className="w-8 h-8 flex items-center justify-center text-sm font-bold transition-colors duration-300"
                          style={{
                            background: i <= step ? "var(--gold)" : "var(--ghost)",
                            color: i <= step ? "#fff" : "var(--muted-foreground)",
                            fontFamily: "var(--font-display)",
                            cursor: i < step ? "pointer" : "default",
                          }}
                          aria-label={`Voltar ao passo ${i + 1}: ${label}`}
                        >
                          {i + 1}
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Steps */}
                  <div className="overflow-hidden">
                    <AnimatePresence mode="wait" custom={dir}>
                      <motion.div
                        key={step}
                        custom={dir}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        {/* STEP 1 — Uso */}
                        {step === 0 && (
                          <div>
                            <StepTitle n={1} text="Para que fim é a casa?" />
                            <div className="flex flex-col gap-3 mt-6">
                              {USO_OPTIONS.map((opt) => (
                                <OptionBtn key={opt.id} label={opt.label} selected={data.uso === opt.id}
                                  onClick={() => { set("uso", opt.id); setTimeout(() => go(1), 200); }} />
                              ))}
                            </div>
                          </div>
                        )}

                        {/* STEP 2 — Terreno */}
                        {step === 1 && (
                          <div>
                            <StepTitle n={2} text="Que tipo de terreno possui?" />
                            <div className="flex flex-col gap-3 mt-6">
                              {TIPO_TERRENO.map((opt) => (
                                <OptionBtn key={opt.id} label={opt.label} selected={data.tipoTerreno === opt.id}
                                  onClick={() => { set("tipoTerreno", opt.id); setTimeout(() => go(1), 200); }} />
                              ))}
                            </div>
                            <div className="mt-8">
                              <BackBtn onClick={() => go(-1)} />
                            </div>
                          </div>
                        )}

                        {/* STEP 3 — Crédito */}
                        {step === 2 && (
                          <div>
                            <StepTitle n={3} text="Vai recorrer a crédito habitação?" />
                            <div className="flex flex-col gap-3 mt-6">
                              {CREDITO_OPTIONS.map((opt) => (
                                <OptionBtn key={opt.id} label={opt.label} selected={data.credito === opt.id}
                                  onClick={() => { set("credito", opt.id); setTimeout(() => go(1), 200); }} />
                              ))}
                            </div>
                            <div className="mt-8">
                              <BackBtn onClick={() => go(-1)} />
                            </div>
                          </div>
                        )}

                        {/* STEP 4 — Localização */}
                        {step === 3 && (
                          <div>
                            <StepTitle n={4} text="Onde fica o seu terreno?" />
                            <select
                              className="w-full mt-6 px-0 py-3 border-b-2 bg-transparent outline-none text-base"
                              style={{ borderColor: "var(--gold)", fontFamily: "var(--font-body)", color: "var(--foreground)" }}
                              value={data.distrito}
                              onChange={(e) => set("distrito", e.target.value)}
                            >
                              <option value="">Selecionar distrito...</option>
                              {DISTRITOS_PT.map((d) => (
                                <option key={d} value={d}>{d}</option>
                              ))}
                            </select>
                            <NavButtons onBack={() => go(-1)} onNext={() => go(1)} nextDisabled={!data.distrito} />
                          </div>
                        )}

                        {/* STEP 5 — Tipologia */}
                        {step === 4 && (
                          <div>
                            <StepTitle n={5} text="Qual a tipologia pretendida?" />
                            <div className="grid grid-cols-3 gap-3 mt-6 sm:grid-cols-6">
                              {TIPOLOGIA_OPTIONS.map((opt) => (
                                <button
                                  key={opt.id}
                                  type="button"
                                  onClick={() => { set("tipologia", opt.id); setTimeout(() => go(1), 200); }}
                                  className="flex flex-col items-center justify-center px-2 py-4 text-sm transition-colors duration-150"
                                  style={{
                                    fontFamily: "var(--font-display)",
                                    background: data.tipologia === opt.id ? "var(--gold)" : "transparent",
                                    color: data.tipologia === opt.id ? "#fff" : "var(--foreground)",
                                    border: `1.5px solid ${data.tipologia === opt.id ? "var(--gold)" : "var(--ghost)"}`,
                                  }}
                                >
                                  <span style={{ fontSize: "1.05rem", letterSpacing: "0.1em" }}>{opt.label}</span>
                                  <span className="mt-1 text-[10px]"
                                    style={{ color: data.tipologia === opt.id ? "rgba(255,255,255,0.8)" : "var(--muted-foreground)", fontFamily: "var(--font-body)" }}>
                                    {opt.sub}
                                  </span>
                                </button>
                              ))}
                            </div>
                            <div className="mt-8">
                              <BackBtn onClick={() => go(-1)} />
                            </div>
                          </div>
                        )}

                        {/* STEP 6 — Contacto */}
                        {step === 5 && (
                          <form onSubmit={handleSubmit}>
                            <StepTitle n={6} text="Os seus dados de contacto" />
                            <div className="grid grid-cols-2 gap-x-6 gap-y-5 mt-6">
                              <FormField label="Nome" value={data.nome} onChange={(v) => set("nome", v)} required />
                              <FormField label="Sobrenome" value={data.sobrenome} onChange={(v) => set("sobrenome", v)} required />
                              <FormField label="Telefone" value={data.telefone} onChange={(v) => set("telefone", v)} type="tel" required className="col-span-2" />
                              <FormField label="E-mail" value={data.email} onChange={(v) => set("email", v)} type="email" required className="col-span-2" />
                            </div>
                            <div className="flex gap-4 mt-8">
                              <BackBtn onClick={() => go(-1)} />
                              <button
                                type="submit"
                                disabled={submitting}
                                className="s-label-caps flex-1 py-4 text-white transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                                style={{ backgroundColor: "var(--gold)" }}
                                onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.backgroundColor = "var(--foreground)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--gold)"; }}
                              >
                                {submitting ? "A ENVIAR..." : "ENVIAR PEDIDO →"}
                              </button>
                            </div>
                          </form>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

function StepTitle({ n, text }: { n: number; text: string }) {
  return (
    <h2 className="text-xl" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)", letterSpacing: "0.04em" }}>
      <span style={{ color: "var(--gold)", marginRight: 10 }}>{n}.</span>
      {text.toUpperCase()}
    </h2>
  );
}

function OptionBtn({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick}
      className="w-full px-6 py-3 text-left text-sm transition-colors duration-150"
      style={{
        fontFamily: "var(--font-display)",
        letterSpacing: "0.1em",
        background: selected ? "var(--gold)" : "transparent",
        color: selected ? "#fff" : "var(--foreground)",
        border: `1.5px solid ${selected ? "var(--gold)" : "var(--ghost)"}`,
      }}
    >
      {label.toUpperCase()}
    </button>
  );
}

function BackBtn({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick}
      className="s-label-caps px-6 py-3 transition-colors"
      style={{ border: "1px solid var(--foreground)", color: "var(--foreground)", fontFamily: "var(--font-display)" }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--foreground)"; e.currentTarget.style.color = "#fff"; }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--foreground)"; }}
    >
      ← VOLTAR
    </button>
  );
}

function NavButtons({ onBack, onNext, nextDisabled }: { onBack: () => void; onNext: () => void; nextDisabled?: boolean }) {
  return (
    <div className="flex gap-4 mt-8">
      <BackBtn onClick={onBack} />
      <button type="button" onClick={onNext} disabled={nextDisabled}
        className="s-label-caps flex-1 py-4 text-white transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
        style={{ backgroundColor: "var(--gold)" }}
        onMouseEnter={(e) => { if (!nextDisabled) e.currentTarget.style.backgroundColor = "var(--foreground)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--gold)"; }}
      >
        CONTINUAR →
      </button>
    </div>
  );
}

function FormField({ label, value, onChange, type = "text", required, className = "" }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; className?: string;
}) {
  const isTel = type === "tel";
  return (
    <div className={className}>
      <label className="s-label-caps block mb-2" style={{ color: "var(--label-muted)" }}>{label}</label>
      <input
        type={isTel ? "tel" : type}
        inputMode={isTel ? "numeric" : undefined}
        value={value}
        onChange={(e) => {
          const v = isTel ? e.target.value.replace(/\D/g, "") : e.target.value;
          onChange(v);
        }}
        required={required}
        className="w-full border-b outline-none py-3 bg-transparent text-base"
        style={{ borderColor: "var(--gold)", fontFamily: "var(--font-body)", color: "var(--foreground)" }}
      />
    </div>
  );
}
