import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionTitle } from "@/components/site/SectionTitle";
import { SITE } from "@/lib/site-data";

const PLANS = [
  {
    name: "Consulta",
    label: "Ponto de Partida",
    price: "Gratuito",
    unit: "",
    featured: false,
    description: "Para quem está a explorar as possibilidades e quer perceber o potencial do projeto.",
    features: [
      "Reunião inicial de 60 minutos",
      "Análise do terreno ou espaço",
      "Estimativa de custo orientativa",
      "Apresentação de casos de estudo",
      "Sem compromisso",
    ],
    cta: "Agendar Consulta",
    to: "/contacto",
  },
  {
    name: "Projeto",
    label: "Mais Popular",
    price: "A partir de 3.500€",
    unit: "",
    featured: true,
    description: "Projeto de arquitetura completo, da conceção ao licenciamento, com acompanhamento dedicado.",
    features: [
      "Projeto de arquitetura completo",
      "Renderizações 3D fotorrealistas",
      "Projeto de interiores",
      "Gestão de licenciamento",
      "Caderno de encargos detalhado",
      "Revisões ilimitadas",
    ],
    cta: "Iniciar Projeto",
    to: "/contacto",
  },
  {
    name: "Obra",
    label: "Serviço Completo",
    price: "Sob Consulta",
    unit: "",
    featured: false,
    description: "Serviço chave na mão — do projeto à entrega da obra, com gestão integral de todas as fases.",
    features: [
      "Tudo incluído no plano Projeto",
      "Fabrico modular em fábrica",
      "Gestão de obra completa",
      "Equipas certificadas",
      "Prazos garantidos por contrato",
      "Garantia de 10 anos",
    ],
    cta: "Pedir Orçamento",
    to: "/contacto",
  },
];

const FAQS_PRECOS = [
  {
    q: "Os preços incluem IVA?",
    a: "Todos os valores apresentados são acrescidos de IVA à taxa em vigor. O orçamento final incluirá sempre a discriminação fiscal completa.",
  },
  {
    q: "Como é feito o pagamento?",
    a: "O pagamento é faseado: uma entrada na assinatura do contrato, 50% no início da obra e o restante na entrega. Para projetos, aplicamos condições específicas.",
  },
  {
    q: "O orçamento é vinculativo?",
    a: "Sim. Após aprovação do caderno de encargos, o orçamento fica fixo por contrato, sem surpresas durante a execução.",
  },
];

export const Route = createFileRoute("/precos")({
  head: () => ({
    meta: [
      { title: "Preços | Planos e Orçamentos para Casas Modulares — DomusTech Porto" },
      { name: "description", content: "Consulte os planos e preços da DomusTech para projetos de arquitetura e construção modular no Porto. Transparência total, sem surpresas." },
      { property: "og:title", content: "Preços — DomusTech" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/precos` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/precos` }],
  }),
  component: PrecosPage,
});

function PrecosPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Investimento"
        titleFirst="Planos e"
        titleSecond="Preços"
        subtitle="Transparência total desde o início. Escolha o plano que melhor se adapta ao seu projeto."
        image="https://picsum.photos/seed/pricing-hero/1600/900"
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Preços" }]}
      />

      {/* Plans */}
      <section className="section-pad" style={{ backgroundColor: "var(--background)" }}>
        <div className="container-1100">
          <div className="mb-16 text-center">
            <SectionTitle eyebrow="Planos" first="Escolha o Seu" second="Plano" />
            <p className="mx-auto mt-6 max-w-md text-[15px] font-light leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Cada projeto é único. Estes planos servem como orientação — o orçamento final é sempre personalizado.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative flex flex-col"
                style={{
                  backgroundColor: plan.featured ? "#1b1b1b" : "var(--card)",
                  border: plan.featured ? "none" : "1px solid var(--border)",
                }}
              >
                {plan.featured && (
                  <div
                    className="tracked absolute inset-x-0 top-0 py-2.5 text-center text-[10px] font-medium text-white"
                    style={{ backgroundColor: "var(--gold)", fontFamily: "var(--font-display)" }}
                  >
                    {plan.label}
                  </div>
                )}

                <div className={`flex flex-col flex-1 p-10 ${plan.featured ? "pt-16" : ""}`}>
                  {!plan.featured && (
                    <p
                      className="tracked mb-3 text-[10px] font-medium"
                      style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
                    >
                      {plan.label}
                    </p>
                  )}

                  <h3
                    className="mb-2 text-[22px]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: plan.featured ? "#fff" : "var(--foreground)",
                    }}
                  >
                    {plan.name}
                  </h3>

                  <p
                    className="mb-6 text-[28px] leading-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      color: plan.featured ? "var(--gold)" : "var(--foreground)",
                    }}
                  >
                    {plan.price}
                  </p>

                  <p
                    className="mb-8 text-[14px] font-light leading-relaxed"
                    style={{ color: plan.featured ? "rgba(255,255,255,0.55)" : "var(--muted-foreground)" }}
                  >
                    {plan.description}
                  </p>

                  <ul className="mb-10 flex-1 space-y-3.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: "var(--gold)" }}
                        />
                        <span
                          className="text-[13px] font-light"
                          style={{ color: plan.featured ? "rgba(255,255,255,0.7)" : "var(--muted-foreground)" }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={plan.to as "/contacto"}
                    className="tracked block py-4 text-center text-[11px] font-medium transition-colors"
                    style={{
                      fontFamily: "var(--font-display)",
                      backgroundColor: plan.featured ? "var(--gold)" : "#1b1b1b",
                      color: "#fff",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = plan.featured ? "#d4a968" : "var(--gold)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = plan.featured ? "var(--gold)" : "#1b1b1b";
                    }}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs sobre preços */}
      <section className="section-pad" style={{ backgroundColor: "var(--logo-strip)" }}>
        <div className="container-1100 max-w-3xl">
          <div className="mb-12 text-center">
            <SectionTitle eyebrow="Dúvidas" first="Perguntas" second="Frequentes" />
          </div>
          <div className="space-y-0">
            {FAQS_PRECOS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="border-b py-7"
                style={{ borderColor: "var(--border)" }}
              >
                <h4
                  className="mb-3 text-[15px]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--foreground)" }}
                >
                  {faq.q}
                </h4>
                <p className="text-[14px] font-light leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Pronto para\nComeçar?"
        text="Fale connosco. A primeira consulta é gratuita e sem compromisso."
        label="Consulta Gratuita"
      />
    </main>
  );
}
