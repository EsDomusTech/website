import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { SITE } from "@/lib/site-data";

const PLANS = [
  {
    name: "Consulta",
    label: "FASE 01",
    price: "Gratuito",
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
    label: "MAIS POPULAR",
    price: "A partir de 3.500€",
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
    label: "FASE 03",
    price: "Sob Consulta",
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
    <main style={{ backgroundColor: "#f9f9f9" }}>

      {/* Hero — display-lg, sem imagem */}
      <header style={{ paddingBlock: "120px 0" }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <span
                className="s-label-caps mb-4 block"
                style={{ color: "#BE9355", letterSpacing: "0.3em" }}
              >
                Estrutura de Investimento
              </span>
              <h1 className="s-display-lg mb-8" style={{ color: "#000000" }}>
                Calculado /<br />
                <span style={{ color: "#BE9355" }}>Precisão.</span>
              </h1>
              <p className="s-body-lg" style={{ color: "#444748", maxWidth: 640 }}>
                Transparência total desde o início. Escolha o plano que melhor se adapta ao seu projeto — o orçamento final é sempre personalizado.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Plans — grid 3 colunas */}
      <section style={{ backgroundColor: "#f3f3f3", paddingBlock: 120 }}>
        <div className="s-wrap">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative flex flex-col h-full"
                style={{
                  backgroundColor: plan.featured ? "#000000" : "#ffffff",
                  border: plan.featured ? "none" : "1px solid #e8e8e8",
                  transform: plan.featured ? "scale(1.04)" : "none",
                }}
              >
                {plan.featured && (
                  <div
                    className="absolute top-0 right-0 px-4 py-2 s-label-caps text-white"
                    style={{ backgroundColor: "#BE9355", fontSize: 10, letterSpacing: "0.2em" }}
                  >
                    MAIS POPULAR
                  </div>
                )}

                <div className={`flex flex-col flex-1 p-12 ${plan.featured ? "pt-16" : ""}`}>
                  <p
                    className="s-label-caps mb-2"
                    style={{ color: plan.featured ? "#858383" : "#999999" }}
                  >
                    {plan.label}
                  </p>

                  <h3
                    className="s-headline-lg mb-4"
                    style={{ color: plan.featured ? "#ffffff" : "#000000" }}
                  >
                    {plan.name}
                  </h3>

                  <p
                    className="s-body-md mb-8"
                    style={{ color: plan.featured ? "rgba(255,255,255,0.6)" : "#444748" }}
                  >
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    <span
                      className="s-label-caps mr-2"
                      style={{ color: plan.featured ? "#858383" : "#999999" }}
                    >
                      DESDE
                    </span>
                    <span
                      className="s-headline-lg"
                      style={{ color: plan.featured ? "#ffffff" : "#000000" }}
                    >
                      {plan.price}
                    </span>
                  </div>

                  <ul
                    className="flex-1 space-y-6 border-t pt-8"
                    style={{ borderColor: plan.featured ? "rgba(255,255,255,0.1)" : "#e8e8e8" }}
                  >
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: "#BE9355" }}
                        />
                        <span
                          className="s-body-md"
                          style={{ color: plan.featured ? "rgba(255,255,255,0.7)" : "#444748" }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={plan.to as "/contacto"}
                    className="s-label-caps mt-12 block w-full py-5 text-center transition-colors duration-300"
                    style={{
                      backgroundColor: plan.featured ? "#BE9355" : "#000000",
                      color: "#ffffff",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = plan.featured ? "#ffffff" : "#BE9355";
                      (e.currentTarget as HTMLElement).style.color = plan.featured ? "#000000" : "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = plan.featured ? "#BE9355" : "#000000";
                      (e.currentTarget as HTMLElement).style.color = "#ffffff";
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

      {/* Imagem atmosférica full-width */}
      <section className="relative overflow-hidden" style={{ height: 480 }}>
        <img
          src="https://picsum.photos/seed/pricing-atm/1920/900"
          alt="DomusTech projeto modular"
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(0.6) brightness(0.75)" }}
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        >
          <h2 className="s-display-lg mb-8" style={{ color: "#ffffff" }}>
            Cada projeto é único
          </h2>
          <Link
            to="/contacto"
            className="s-label-caps px-12 py-6 text-white transition-colors duration-300"
            style={{ backgroundColor: "#BE9355" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#ffffff"; (e.currentTarget as HTMLElement).style.color = "#000000"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#BE9355"; (e.currentTarget as HTMLElement).style.color = "#ffffff"; }}
          >
            Pedir Orçamento
          </Link>
        </div>
      </section>

      {/* FAQ — grid 4+8 per Stitch spec */}
      <section style={{ paddingBlock: 120 }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <h2 className="s-headline-lg mb-4" style={{ color: "#000000" }}>
                Dúvidas<br />Frequentes
              </h2>
              <p className="s-body-md" style={{ color: "#444748" }}>
                Respostas directas às perguntas mais comuns sobre preços, pagamentos e orçamentos.
              </p>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-12">
              {FAQS_PRECOS.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group border-b pb-8"
                  style={{ borderColor: "#eeeeee" }}
                >
                  <h4
                    className="s-headline-md mb-4 transition-colors group-hover:text-[#BE9355]"
                    style={{ color: "#000000" }}
                  >
                    {faq.q}
                  </h4>
                  <p className="s-body-md" style={{ color: "#444748" }}>
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
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
