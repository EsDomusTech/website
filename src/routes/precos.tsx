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
    label: "FASE 02",
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
    name: "Chave na Mão",
    label: "FASE 03",
    price: "1.350 €/m² + IVA",
    featured: false,
    description: "Construção modular completa: do projeto à entrega da casa pronta a habitar, com gestão integral de todas as fases.",
    features: [
      "Visita técnica, projeto e licenciamento incluídos",
      "Estrutura, casas de banho e cozinha equipadas",
      "Isolamento, pavimentos, janelas e portas",
      "Eletricidade, canalizações e cobertura",
      "Garantia estrutural de 10 anos",
      "Pagamento em 4 prestações de 25% + IVA",
    ],
    cta: "Pedir Orçamento",
    to: "/contacto",
  },
];

const PRICE_NOTES = [
  {
    label: "Variante estrutura/laje/exterior",
    value: "≈ 1.150 €/m² + IVA",
  },
  {
    label: "Faixa real observada (conforme tipologia e opções)",
    value: "≈ 108.000 € a 230.000 € (sem IVA)",
  },
  {
    label: "Plano de pagamento",
    value: "4 prestações de 25% + IVA: assinatura, início de fabrico, compra de materiais, entrega final",
  },
];

const FAQS_PRECOS = [
  {
    q: "Os preços incluem IVA?",
    a: "Não. Os valores de referência (1.350 €/m² chave na mão e 1.150 €/m² na variante estrutura/laje/exterior) são apresentados sem IVA. O orçamento final incluirá sempre a discriminação fiscal completa.",
  },
  {
    q: "Como é feito o pagamento?",
    a: "Em 4 prestações de 25% + IVA, associadas a marcos do projeto: assinatura do contrato, início de fabrico, compra de materiais e entrega final.",
  },
  {
    q: "Quanto custa, na prática, uma casa DomusTech?",
    a: "Nas propostas reais que já fizemos, o investimento total situa-se entre 108.000 € e 230.000 € (sem IVA), conforme a tipologia, a área e as opções de personalização escolhidas.",
  },
  {
    q: "O que está incluído no preço chave na mão?",
    a: "Visita técnica ao terreno, projeto de arquitetura e engenharia, licenciamento camarário, estrutura e fundações, casas de banho completas, isolamento térmico, pavimentos, janelas e portas, eletricidade e canalizações, cobertura, transporte e garantia estrutural de 10 anos.",
  },
  {
    q: "O que fica fora do preço?",
    a: "Taxas camarárias, instalação efetiva (não a pré-instalação) de ar condicionado, painéis solares e estores, projetos de especialidades orçamentáveis à parte, e extras como cozinha de upgrade, garagem, piscina ou deck.",
  },
];

export const Route = createFileRoute("/precos")({
  head: () => ({
    meta: [
      { title: "Preços | Casas Modulares, DomusTech Porto" },
      { name: "description", content: "Consulte os planos e preços da DomusTech para projetos de arquitetura e construção modular no Porto. Transparência total, sem surpresas." },
      { property: "og:title", content: "Preços | DomusTech" },
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
      <header className="pt-16 md:pt-[120px]">
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <span
                className="s-label-caps mb-4 block"
                style={{ color: "var(--muted-foreground)", letterSpacing: "0.3em" }}
              >
                Estrutura de Investimento
              </span>
              <h1 className="s-display-lg mb-8" style={{ color: "#000000" }}>
                Calculado /<br />
                <span style={{ color: "#BE9355" }}>Precisão.</span>
              </h1>
              <p className="s-body-lg" style={{ color: "#444748", maxWidth: 640 }}>
                Transparência total desde o início. Escolha o plano que melhor se adapta ao seu projeto. O orçamento final é sempre personalizado.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Plans — grid 3 colunas */}
      <section className="py-16 md:py-[120px]" style={{ backgroundColor: "#f3f3f3" }}>
        <div className="s-wrap">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:py-4">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`relative flex flex-col h-full${plan.featured ? " md:scale-[1.04]" : ""}`}
                style={{
                  backgroundColor: plan.featured ? "#000000" : "#ffffff",
                  border: plan.featured ? "none" : "1px solid #e8e8e8",
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

                <div className={`flex flex-col flex-1 p-8 lg:p-12 ${plan.featured ? "pt-12 lg:pt-16" : ""}`}>
                  <p
                    className="s-label-caps mb-2"
                    style={{ color: plan.featured ? "#858383" : "var(--muted-foreground)" }}
                  >
                    {plan.label}
                  </p>

                  <h2
                    className="s-headline-lg mb-4"
                    style={{ color: plan.featured ? "#ffffff" : "#000000" }}
                  >
                    {plan.name}
                  </h2>

                  <p
                    className="s-body-md mb-8"
                    style={{ color: plan.featured ? "rgba(255,255,255,0.6)" : "#444748" }}
                  >
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    {plan.price !== "Gratuito" && (
                      <span
                        className="s-label-caps mr-2"
                        style={{ color: plan.featured ? "#858383" : "var(--muted-foreground)" }}
                      >
                        DESDE
                      </span>
                    )}
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

      {/* Notas de preço — valores reais de referência */}
      <section className="py-14 md:py-[100px]">
        <div className="s-wrap">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t pt-12" style={{ borderColor: "#eeeeee" }}>
            {PRICE_NOTES.map((note, i) => (
              <motion.div
                key={note.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <p className="s-headline-md mb-3" style={{ color: "#BE9355" }}>
                  {note.value}
                </p>
                <p className="s-body-md" style={{ color: "#444748" }}>
                  {note.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Imagem atmosférica full-width */}
      <section className="relative overflow-hidden h-[280px] md:h-[480px]">
        <img
          src="https://images.unsplash.com/photo-1510596956-a9fe3d12a62e?w=1920&h=900&fit=crop&auto=format&q=80"
          alt="Casa modular DomusTech entregue no Porto"
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
      <section className="py-16 md:py-[120px]">
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
                  <h3
                    className="s-headline-md mb-4 transition-colors group-hover:text-[#BE9355]"
                    style={{ color: "#000000" }}
                  >
                    {faq.q}
                  </h3>
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
