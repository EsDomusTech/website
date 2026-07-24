import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useConsultaModal } from "@/lib/consulta-store";
import { DISTRITOS_PT } from "@/lib/site-data";
import { submitConsultaLead } from "@/lib/api/consulta.functions";

const DISTRITOS = DISTRITOS_PT.filter((d) => d !== "Açores" && d !== "Madeira");

type FormData = {
  tipologia: string;
  quando: string;
  situacaoTerreno: string;
  localizacao: string;
  descricao: string;
  formaPagamento: string;
  nome: string;
  email: string;
  telefone: string;
  aceitoTermos: boolean;
};

const EMPTY: FormData = {
  tipologia: "", quando: "", situacaoTerreno: "",
  localizacao: "", descricao: "", formaPagamento: "",
  nome: "", email: "", telefone: "", aceitoTermos: false,
};

const TIPOLOGIAS = [
  { label: "T0", sub: "a partir de 35 m²" },
  { label: "T1", sub: "a partir de 52 m²" },
  { label: "T2", sub: "a partir de 72 m²" },
  { label: "T3", sub: "a partir de 91 m²" },
  { label: "T4 ou +", sub: "a partir de 120 m²" },
  { label: "Ainda por definir", sub: "" },
];
const QUANDO = ["1 a 2 meses", "2 a 4 meses", "4 a 6 meses", "Mais de 6 meses"];
const SITUACAO_TERRENO = [
  "Já tenho terreno",
  "Estou a negociar / à procura",
  "Ainda não tenho terreno",
  "Preciso de ajuda com o terreno",
];
const FORMA_PAGAMENTO = [
  "Capital próprio",
  "Financiamento bancário",
  "Capital próprio + financiamento",
  "Ainda estou a avaliar",
];

const slideVariants = {
  enter: (d: number) => ({ x: d > 0 ? 28 : -28, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d < 0 ? 28 : -28, opacity: 0 }),
};

export function ConsultaModal() {
  const { isOpen, close } = useConsultaModal();
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [data, setData] = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const openedAt = useRef<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) openedAt.current = Date.now();
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setStep(0); setSubmitted(false); setData(EMPTY); setHoneypot("");
      }, 350);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const set = (key: keyof FormData, val: string | boolean) =>
    setData((d) => ({ ...d, [key]: val }));

  const go = (delta: number) => { setDir(delta); setStep((s) => s + delta); };

  const step1Valid = !!(data.tipologia && data.quando && data.situacaoTerreno);
  const step2Valid = !!(data.localizacao && data.formaPagamento);
  const step3Valid = !!(data.nome && data.telefone && data.aceitoTermos);

  const isBot = () => {
    if (honeypot) return true;
    const elapsed = openedAt.current ? Date.now() - openedAt.current : 0;
    if (elapsed < 8000) return true;
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!step3Valid) return;
    setSubmitting(true);
    if (!isBot()) {
      try {
        const result = await submitConsultaLead({ data: { ...data, timestamp: new Date().toISOString() } });
        if (result.errors.length) console.error("Lead enviado mas com erros no fan-out:", result.errors);
      } catch (err) { console.error("submitConsultaLead failed:", err); /* still show success to visitor */ }
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200]"
            style={{ backgroundColor: "rgba(0,0,0,0.72)" }}
            onClick={close}
            aria-hidden="true"
          />

          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="consulta-title"
          >
            <div
              className="relative w-full max-w-[520px] max-h-[92vh] overflow-y-auto p-8 md:p-10"
              style={{ backgroundColor: "var(--background)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={close}
                className="absolute top-5 right-5 flex items-center justify-center w-9 h-9 transition-opacity hover:opacity-60"
                style={{ color: "var(--foreground)" }}
                aria-label="Fechar"
              >
                <X size={20} />
              </button>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-16 text-center"
                >
                  <div className="text-5xl mb-6" style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}>✓</div>
                  <h3
                    className="text-2xl mb-4"
                    style={{ fontFamily: "var(--font-display)", color: "var(--foreground)", letterSpacing: "0.04em" }}
                  >
                    PEDIDO RECEBIDO
                  </h3>
                  <p className="text-sm" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}>
                    Entraremos em contacto em até 48 horas para agendar a reunião.
                  </p>
                  <button
                    type="button"
                    onClick={close}
                    className="mt-8 px-10 py-4 text-white text-xs tracking-widest uppercase transition-opacity hover:opacity-80"
                    style={{ backgroundColor: "var(--gold)", fontFamily: "var(--font-display)" }}
                  >
                    FECHAR
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-7 pr-8">
                    <h2
                      id="consulta-title"
                      className="text-[28px] leading-tight"
                      style={{ fontFamily: "var(--font-display)", color: "var(--foreground)", letterSpacing: "0.03em" }}
                    >
                      VAMOS FALAR SOBRE<br />A SUA CASA
                    </h2>
                    <p
                      className="mt-2 text-sm"
                      style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                    >
                      Uma reunião para perceber como acompanhamos a sua obra.
                    </p>
                  </div>

                  {/* Stepper */}
                  <div className="flex items-center mb-7">
                    <StepDot n={1} state={step > 0 ? "done" : step === 0 ? "active" : "idle"} />
                    <StepLine done={step >= 1} />
                    <StepDot n={2} state={step > 1 ? "done" : step === 1 ? "active" : "idle"} />
                    <StepLine done={step >= 2} />
                    <StepDot n={3} state={step === 2 ? "active" : "idle"} />
                  </div>

                  <div className="overflow-hidden">
                    <AnimatePresence mode="wait" custom={dir}>
                      <motion.div
                        key={step}
                        custom={dir}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        {step === 0 && (
                          <div className="space-y-4">
                            <TipologiaField
                              value={data.tipologia}
                              onChange={(v) => set("tipologia", v)}
                            />
                            <SelectField
                              label="Quando pretende avançar"
                              value={data.quando}
                              onChange={(v) => set("quando", v)}
                              options={QUANDO}
                            />
                            <SelectField
                              label="Situação do terreno"
                              value={data.situacaoTerreno}
                              onChange={(v) => set("situacaoTerreno", v)}
                              options={SITUACAO_TERRENO}
                            />
                            <NavBtns isFirst onNext={() => go(1)} nextDisabled={!step1Valid} />
                          </div>
                        )}

                        {step === 1 && (
                          <div className="space-y-4">
                            <SelectField
                              label="Localização"
                              value={data.localizacao}
                              onChange={(v) => set("localizacao", v)}
                              options={DISTRITOS}
                            />
                            <TextareaField
                              label="Descrição do projeto"
                              value={data.descricao}
                              onChange={(v) => set("descricao", v)}
                            />
                            <SelectField
                              label="Forma de pagamento"
                              value={data.formaPagamento}
                              onChange={(v) => set("formaPagamento", v)}
                              options={FORMA_PAGAMENTO}
                            />
                            <NavBtns onBack={() => go(-1)} onNext={() => go(1)} nextDisabled={!step2Valid} />
                          </div>
                        )}

                        {step === 2 && (
                          <form onSubmit={handleSubmit} className="space-y-4">
                            {/* honeypot — bots fill this, humans never see it */}
                            <div style={{ position: "absolute", left: "-9999px", top: "-9999px", width: 1, height: 1, overflow: "hidden" }} aria-hidden="true">
                              <input
                                type="text"
                                name="website"
                                value={honeypot}
                                onChange={(e) => setHoneypot(e.target.value)}
                                tabIndex={-1}
                                autoComplete="off"
                              />
                            </div>
                            <TextField
                              label="Nome"
                              value={data.nome}
                              onChange={(v) => set("nome", v)}
                              required
                            />
                            <TextField
                              label="Email"
                              type="email"
                              value={data.email}
                              onChange={(v) => set("email", v)}
                            />
                            <TextField
                              label="Número telemóvel"
                              type="tel"
                              value={data.telefone}
                              onChange={(v) => set("telefone", v.replace(/\D/g, "").slice(0, 9))}
                              maxLength={9}
                              required
                            />
                            <label className="flex items-start gap-3 cursor-pointer pt-1">
                              <input
                                type="checkbox"
                                checked={data.aceitoTermos}
                                onChange={(e) => set("aceitoTermos", e.target.checked)}
                                className="mt-0.5 shrink-0 w-4 h-4 cursor-pointer"
                                style={{ accentColor: "var(--gold)" }}
                                required
                              />
                              <span
                                className="text-sm leading-snug"
                                style={{ fontFamily: "var(--font-body)", color: "var(--muted-foreground)" }}
                              >
                                Aceito os{" "}
                                <Link
                                  to="/termos-e-condicoes"
                                  className="underline transition-colors hover:text-[color:var(--gold)]"
                                  style={{ color: "var(--foreground)" }}
                                  onClick={close}
                                >
                                  Termos e Condições
                                </Link>
                                .
                              </span>
                            </label>
                            <NavBtns
                              isLast
                              onBack={() => go(-1)}
                              submitting={submitting}
                              submitDisabled={!step3Valid}
                            />
                          </form>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function TipologiaField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <p className="mb-1.5 text-sm font-medium" style={{ fontFamily: "var(--font-body)", color: "var(--foreground)" }}>
        Tipologia
      </p>
      <div className="grid grid-cols-3 gap-2">
        {TIPOLOGIAS.map((opt) => {
          const selected = value === opt.label;
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => onChange(opt.label)}
              className="flex flex-col items-center justify-center px-2 py-3 text-center transition-colors duration-150"
              style={{
                fontFamily: "var(--font-display)",
                backgroundColor: selected ? "var(--foreground)" : "transparent",
                color: selected ? "#fff" : "var(--foreground)",
                border: `1px solid ${selected ? "var(--foreground)" : "var(--ghost)"}`,
              }}
            >
              <span className="text-sm font-bold" style={{ letterSpacing: "0.08em" }}>{opt.label}</span>
              {opt.sub && (
                <span
                  className="text-[10px] mt-0.5"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: selected ? "rgba(255,255,255,0.75)" : "var(--muted-foreground)",
                  }}
                >
                  {opt.sub}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepDot({ n, state }: { n: number; state: "done" | "active" | "idle" }) {
  const filled = state === "done" || state === "active";
  return (
    <div
      className="w-10 h-10 flex items-center justify-center text-sm font-bold shrink-0 transition-colors duration-300"
      style={{
        fontFamily: "var(--font-display)",
        backgroundColor: filled ? "var(--foreground)" : "transparent",
        color: filled ? "#fff" : "var(--muted-foreground)",
        border: filled ? "none" : "1.5px solid var(--ghost)",
      }}
    >
      {n}
    </div>
  );
}

function StepLine({ done }: { done: boolean }) {
  return (
    <div
      className="flex-1 h-px transition-colors duration-300"
      style={{ backgroundColor: done ? "var(--foreground)" : "var(--ghost)" }}
    />
  );
}

function SelectField({
  label, value, onChange, options,
}: { label: string; value: string; onChange: (v: string) => void; options: readonly string[] }) {
  return (
    <div>
      <p className="mb-1.5 text-sm font-medium" style={{ fontFamily: "var(--font-body)", color: "var(--foreground)" }}>
        {label}
      </p>
      <div
        className="relative transition-colors"
        style={{ border: "1px solid var(--ghost)" }}
      >
        <select
          className="w-full px-4 py-[14px] bg-transparent outline-none appearance-none text-sm cursor-pointer"
          style={{
            fontFamily: "var(--font-body)",
            color: value ? "var(--foreground)" : "var(--muted-foreground)",
          }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Selecione</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown
          className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
          size={16}
          style={{ color: "var(--muted-foreground)" }}
        />
      </div>
    </div>
  );
}

function TextField({
  label, value, onChange, type = "text", placeholder, required, maxLength,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; placeholder?: string; required?: boolean; maxLength?: number;
}) {
  return (
    <div>
      <p className="mb-1.5 text-sm font-medium" style={{ fontFamily: "var(--font-body)", color: "var(--foreground)" }}>
        {label}
      </p>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        inputMode={type === "tel" ? "numeric" : undefined}
        className="w-full px-4 py-[14px] bg-transparent outline-none text-sm"
        style={{
          fontFamily: "var(--font-body)",
          color: "var(--foreground)",
          border: "1px solid var(--ghost)",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--ghost)")}
      />
    </div>
  );
}

const DESCRICAO_MAX = 350;

function TextareaField({
  label, value, onChange,
}: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between">
        <p className="text-sm font-medium" style={{ fontFamily: "var(--font-body)", color: "var(--foreground)" }}>
          {label}
        </p>
        <span className="text-xs" style={{ color: value.length >= DESCRICAO_MAX ? "var(--gold)" : "var(--label-muted)" }}>
          {value.length}/{DESCRICAO_MAX}
        </span>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, DESCRICAO_MAX))}
        maxLength={DESCRICAO_MAX}
        rows={4}
        className="w-full px-4 py-[14px] bg-transparent outline-none text-sm resize-none"
        style={{
          fontFamily: "var(--font-body)",
          color: "var(--foreground)",
          border: "1px solid var(--ghost)",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--ghost)")}
      />
    </div>
  );
}

function NavBtns({
  isFirst, isLast, onBack, onNext, nextDisabled, submitting, submitDisabled,
}: {
  isFirst?: boolean; isLast?: boolean;
  onBack?: () => void; onNext?: () => void;
  nextDisabled?: boolean; submitting?: boolean; submitDisabled?: boolean;
}) {
  return (
    <div className={`flex gap-3 pt-1 ${isFirst ? "justify-end" : ""}`}>
      {!isFirst && (
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-4 text-xs tracking-widest uppercase transition-colors"
          style={{
            fontFamily: "var(--font-display)",
            border: "1.5px solid var(--ghost)",
            color: "var(--foreground)",
            backgroundColor: "transparent",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--foreground)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--ghost)"; }}
        >
          ← ANTERIOR
        </button>
      )}
      {isLast ? (
        <button
          type="submit"
          disabled={submitting || submitDisabled}
          className="flex-1 py-4 text-xs tracking-widest uppercase text-white transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ fontFamily: "var(--font-display)", backgroundColor: "var(--gold)" }}
        >
          {submitting ? "A ENVIAR..." : "ENVIAR →"}
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          disabled={nextDisabled}
          className="flex-1 py-4 text-xs tracking-widest uppercase text-white transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            fontFamily: "var(--font-display)",
            backgroundColor: nextDisabled ? "var(--ghost)" : "var(--gold)",
            color: nextDisabled ? "var(--muted-foreground)" : "#fff",
          }}
        >
          PRÓXIMO →
        </button>
      )}
    </div>
  );
}

