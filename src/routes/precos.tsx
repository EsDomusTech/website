import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { SITE, AREA_SERVED_NORTE } from "@/lib/site-data";
import { useConsultaModal } from "@/lib/consulta-store";

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
    label: "Plano de pagamento (4 prestações)",
    value: "25% + 25% + 25% + 25% + IVA",
  },
];

type PaymentPhase = { pct: string; label: string; items: string[] };
type FaqPrecos = { q: string; a: string; phases?: PaymentPhase[] };

const PAYMENT_PHASES: PaymentPhase[] = [
  {
    pct: "25%",
    label: "Assinatura do contrato",
    items: [
      "Reuniões de arquitetura para definição do Estudo Prévio",
      "Desenvolvimento dos trabalhos de projeto de arquitetura, engenharia e especialidades",
      "Elaboração de desenhos 3D exteriores",
      "Visita técnica do engenheiro ao terreno",
      "Entrega de toda a documentação junto dos serviços competentes",
    ],
  },
  {
    pct: "25%",
    label: "Início de fabrico",
    items: [
      "Construção das estruturas em fábrica",
      "Execução da base em betão, de acordo com o projeto de arquitetura aprovado",
    ],
  },
  {
    pct: "25%",
    label: "Compra de materiais",
    items: [
      "Aquisição de materiais de estrutura, cobertura e paredes",
      "Aquisição de materiais de acabamentos finos",
    ],
  },
  {
    pct: "25%",
    label: "Entrega final",
    items: [
      "Montagem da cobertura, paredes exteriores e interiores e infraestruturas de especialidades",
      "Instalação de equipamentos de instalações sanitárias, revestimentos, pavimentos, janelas e portadas",
      "Conclusão da obra e entrega da habitação devidamente licenciada",
    ],
  },
];

const FAQS_PRECOS: FaqPrecos[] = [
  {
    q: "Os preços incluem IVA?",
    a: "Não. Os valores de referência (1.350 €/m² chave na mão e 1.150 €/m² na variante estrutura/laje/exterior) são apresentados sem IVA. O orçamento final incluirá sempre a discriminação fiscal completa.",
  },
  {
    q: "Como é feito o pagamento?",
    a: "O pagamento é distribuído por 4 prestações iguais de 25%, associadas ao avanço real da obra:",
    phases: PAYMENT_PHASES,
  },
  {
    q: "Quanto custa, na prática, uma casa EsDomusTech?",
    a: "Nas propostas reais que já fizemos, o investimento total situa-se entre 108.000 € e 230.000 € (sem IVA), conforme a tipologia, a área e as opções de personalização escolhidas.",
  },
  {
    q: "O que está incluído no preço chave na mão?",
    a: "Visita técnica ao terreno, projeto de arquitetura e engenharia, licenciamento camarário, estrutura e fundações, casas de banho completas, isolamento térmico, pavimentos, janelas e portas, eletricidade e canalizações, cobertura, transporte e garantia estrutural de 10 anos.",
  },
  {
    q: "O que fica fora do preço?",
    a: "Taxas camarárias, fiscal de obras, terraplanagem, ligação efetiva às redes de água e energia, instalação efetiva (não a pré-instalação) de ar condicionado, painéis solares e estores, projetos de especialidades orçamentáveis à parte, e extras como cozinha de upgrade, garagem, piscina ou deck.",
  },
];

export const Route = createFileRoute("/precos")({
  head: () => ({
    meta: [
      { title: "Preços | Casas Modulares, EsDomusTech Porto" },
      { name: "description", content: "Consulte os planos e preços da EsDomusTech para projetos de arquitetura e construção modular no Porto. Transparência total, sem surpresas." },
      { property: "og:title", content: "Preços | EsDomusTech" },
      { property: "og:description", content: "Planos e preços EsDomusTech para construção modular no Porto. Transparência total, sem surpresas." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/precos` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/precos` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Casa Modular Chave na Mão — EsDomusTech",
          description: "Construção modular chave na mão: estrutura, licenciamento, acabamentos, entrega. Classe energética A.",
          brand: { "@type": "Brand", name: "EsDomusTech" },
          offers: {
            "@type": "Offer",
            url: `${SITE.domain}/precos`,
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: 1350,
              priceCurrency: "EUR",
              referenceQuantity: {
                "@type": "QuantitativeValue",
                value: 1,
                unitCode: "MTK",
              },
            },
            seller: {
              "@type": "Organization",
              name: SITE.name,
              url: SITE.domain,
            },
            areaServed: AREA_SERVED_NORTE,
          },
        }),
      },
    ],
  }),
  component: PrecosPage,
});

function PrecosPage() {
  const { open: openConsulta } = useConsultaModal();
  return (
    <main style={{ backgroundColor: "#f9f9f9" }}>

      {/* Hero */}
      <PageHeader
        eyebrow="Estrutura de Investimento"
        titleFirst="Calculado /"
        titleSecond="Precisão."
        subtitle="Transparência total desde o início. Escolha o plano que melhor se adapta ao seu projeto. O orçamento final é sempre personalizado."
        image="/images/hero/page-header-fallback.webp"
        variant="light"
        align="left"
      />

      {/* Estimativas por Tipologia */}
      <section className="py-16 md:py-[100px]">
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8 mb-14">
            <div className="col-span-12 md:col-span-6">
              <span className="s-label-caps block mb-4" style={{ color: "var(--muted-foreground)" }}>
                Estimativas de Investimento
              </span>
              <h2 className="s-headline-lg mb-4" style={{ color: "#000000" }}>
                Quanto custa<br />cada tipologia?
              </h2>
              <p className="s-body-md" style={{ color: "#444748" }}>
                O preço chave-na-mão é de <strong>1.350 €/m²</strong>, sem IVA.
                As áreas abaixo são os mínimos de referência (RGEU) — projetos reais
                são habitualmente maiores.
              </p>
            </div>
          </div>

          {/* Tabela */}
          <div className="border-t" style={{ borderColor: "#e8e8e8" }}>
            {/* Header */}
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 py-4 border-b" style={{ borderColor: "#e8e8e8" }}>
              {["Tipologia", "Área mín.", "1.350 €/m²", "Total s/ IVA"].map((h, hi) => (
                <span key={h} className={`s-label-caps${hi === 2 ? " hidden md:block" : ""}`} style={{ color: "var(--muted-foreground)" }}>{h}</span>
              ))}
            </div>
            {[
              { t: "T0", area: 35,  note: "estúdio / espaço compacto" },
              { t: "T1", area: 52,  note: "1 quarto" },
              { t: "T2", area: 72,  note: "1–2 quartos" },
              { t: "T3", area: 91,  note: "2–3 quartos" },
              { t: "T4", area: 120, note: "3–4 quartos" },
              { t: "T5+", area: 150, note: "sob projeto, área variável" },
            ].map((row, i) => (
              <motion.div
                key={row.t}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="grid grid-cols-3 md:grid-cols-4 gap-4 items-center py-6 border-b group"
                style={{ borderColor: "#e8e8e8" }}
              >
                <div className="flex items-center gap-4">
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#BE9355", letterSpacing: "0.05em" }}>
                    {row.t}
                  </span>
                  <span className="s-label-caps hidden md:block" style={{ color: "var(--muted-foreground)" }}>{row.note}</span>
                </div>
                <span className="s-body-lg" style={{ color: "#444748" }}>
                  {row.t === "T5+" ? `≥ ${row.area} m²` : `${row.area} m²`}
                </span>
                <span className="s-body-md hidden md:block" style={{ color: "#444748" }}>
                  × 1.350 €
                </span>
                <span className="s-headline-md whitespace-nowrap text-[1.05rem] sm:text-[1.5rem]" style={{ color: "#000000" }}>
                  {row.t === "T5+" ? "+" : ""}
                  {(row.area * 1350).toLocaleString("pt-PT")} €
                </span>
              </motion.div>
            ))}
          </div>
          <p className="s-body-sm mt-6" style={{ color: "var(--muted-foreground)" }}>
            * Valores sem IVA, calculados sobre a área mínima de referência. A área final do seu projeto — e por isso o investimento total — é definida em função do terreno e do programa pretendido.
          </p>
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
          src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1920&h=900&fit=crop&auto=format&q=80"
          alt="Casa modular EsDomusTech entregue no Porto"
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
          <button
            type="button"
            onClick={openConsulta}
            className="s-label-caps px-12 py-6 text-white transition-colors duration-300 cursor-pointer"
            style={{ backgroundColor: "#BE9355" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#ffffff"; (e.currentTarget as HTMLElement).style.color = "#000000"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#BE9355"; (e.currentTarget as HTMLElement).style.color = "#ffffff"; }}
          >
            Pedir Orçamento
          </button>
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
                  {faq.phases && (
                    <div className="mt-6 space-y-5">
                      {faq.phases.map((phase) => (
                        <div key={phase.label}>
                          <div className="flex items-baseline gap-3 mb-2">
                            <span style={{ fontFamily: "var(--font-display)", color: "#BE9355", fontSize: "1.05rem", letterSpacing: "0.04em" }}>{phase.pct}</span>
                            <span className="s-body-md" style={{ color: "#000000", fontWeight: 600 }}>{phase.label}</span>
                          </div>
                          <ul className="space-y-1 pl-10">
                            {phase.items.map((item) => (
                              <li key={item} className="s-body-sm flex items-start gap-2" style={{ color: "#444748" }}>
                                <span className="shrink-0 mt-1.5 block h-px w-4" style={{ backgroundColor: "#BE9355" }} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Pronto para Começar?"
        text="Fale connosco. A primeira consulta é gratuita e sem compromisso."
        label="Consulta Gratuita"
      />
    </main>
  );
}
