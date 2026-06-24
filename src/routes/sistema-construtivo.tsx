import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionTitle } from "@/components/site/SectionTitle";
import { SITE } from "@/lib/site-data";

/* Anatomia da casa — sequência "Física das Construções" (12 camadas, exterior → interior) */
const LAYERS = [
  { num: "01", title: "Acabamento de piso", text: "Revestimento à escolha: laminado/flutuante ou cerâmico." },
  { num: "02", title: "Placa OSB 22 mm", text: "Base estrutural do piso, fixada sobre a laje." },
  { num: "03", title: "ETICS / EPS 50 mm", text: "Sistema SATE: capoto + tela de fibra de vidro + argamassa." },
  { num: "04", title: "Lã de Rocha", text: "Isolamento térmico e acústico no interior das paredes." },
  { num: "05", title: "Placa OSB 12 mm", text: "Revestimento estrutural da parede." },
  { num: "06", title: "Tubo de aço galvanizado", text: "Estrutura tubular DX51D, 3 mm (parede do tubo). O esqueleto da casa." },
  { num: "07", title: "Guias e montantes", text: "Subestrutura metálica de fixação e alinhamento." },
  { num: "08", title: "Gesso cartonado", text: "Acabamento interior: branco, hidrófugo (WC) ou anti-fogo, conforme a zona." },
  { num: "09", title: "Camada impermeabilizante", text: "Barreira entre a laje e a estrutura, protege da humidade ascendente." },
  { num: "10", title: "Chapa metálica + varão roscado", text: "Ligação mecânica entre a estrutura e o terreno." },
  { num: "11", title: "Laje em betão armado", text: "Fundação contínua, permite ainda a instalação de piso radiante." },
  { num: "12", title: "Cobertura, telha sandwich", text: "5 cm de espessura, com lã de rocha e teto falso em gesso cartonado por baixo." },
];

/* Os dois sistemas construtivos */
const SYSTEMS = [
  {
    name: "Multicamada com Isolamento Tradicional",
    tag: "OSB + ETICS",
    composition:
      "Exterior: placa OSB + sistema SATE (EPS ou lã mineral) + tela de fibra de vidro + argamassa. Interior: lã de rocha + placa OSB + pladur.",
    advantages: [
      "Excelente isolamento térmico e acústico",
      "Maior controlo sobre os materiais interiores",
      "Acabamentos mais robustos",
      "Ideal para climas com grandes variações",
    ],
  },
  {
    name: "Painel Técnico Pré-Fabricado",
    tag: "XPS + Cimentícia",
    composition:
      "Exterior: painel sandwich pré-fabricado, núcleo XPS + 2 placas FBR-ECO, sobre estrutura em aço galvanizado. Interior: lã de rocha + placa OSB + pladur.",
    advantages: [
      "Montagem ultra-rápida, até 120 m² por dia",
      "Elevada resistência à humidade",
      "Mínimo desperdício em obra",
      "Ideal para prazos reduzidos",
    ],
  },
];

/* Ficha de espessuras — modelo base */
const THICKNESS = [
  { item: "Estrutura", spec: "Tubo de aço galvanizado DX51D, 3 mm (parede do tubo), perfis ómega (EN 10346 / EN 10143)" },
  { item: "OSB Parede", spec: "12 mm" },
  { item: "OSB Piso", spec: "22 mm" },
  { item: "Capoto / ETICS (exterior)", spec: "10 cm (EPS 50 mm, pormenor construtivo)" },
  { item: "Isolamento de piso (XPS)", spec: "Placa de Esferovite Azul XPS, 6 cm (apenas no chão)" },
  { item: "Lã de rocha", spec: "10 cm" },
  { item: "Pladur Branco / Hidrófugo / Anti-fogo", spec: "10 mm / 13 mm / 13 mm, conforme a zona" },
  { item: "Telha sandwich (cobertura)", spec: "5 cm, perfil 5 ondas (6 cores) ou imitação telha lusa (1 cor)" },
  { item: "Espessura total, parede externa", spec: "21 cm" },
  { item: "Espessura total, parede interna", spec: "8 cm" },
];

/* Referências reais de produto — personalização via sistema "plafon" */
const REFERENCES = [
  {
    cat: "Casas de Banho",
    note: "Garantia: uma casa de banho completa a cada 40 m² construídos.",
    items: ["Móveis de lavatório: AML Trevi, Essential, Ministone Mármore, Nerea", "Sanitários: NEREA, Sanitana Regina, Essential Sensea", "Cabines e bases de duche: Sensea Essential, Oceania, Sensai, Shimmer"],
  },
  {
    cat: "Cozinha",
    note: "Solução base incluída: lava-loiça + móvel + acessórios + torneira.",
    items: ["Lava-loiças: KILSVIKEN, HAVSEN, FYNDIG", "Bancadas: JARSTORP, EKBACKEN", "Puxadores: BAGGANAS"],
  },
  {
    cat: "Portas e Janelas",
    note: "Garantem conforto, eficiência térmica e luminosidade. Substituíveis via plafon.",
    items: ["Portas de entrada: Drava Vidro, Sevilha", "Portas interiores: Setúbal Branca", "Portas-janela ARTENS e janelas PVC em várias dimensões"],
  },
];

export const Route = createFileRoute("/sistema-construtivo")({
  head: () => ({
    meta: [
      { title: "Sistema Construtivo | Casas Modulares, DomusTech" },
      {
        name: "description",
        content:
          "Sistema construtivo DomusTech: aço galvanizado, isolamento termoacústico, dois sistemas de parede e ficha técnica de materiais.",
      },
      { property: "og:title", content: "Sistema Construtivo | DomusTech" },
      { property: "og:description", content: "Estrutura em aço galvanizado, composição por camada e ficha técnica de materiais." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/sistema-construtivo` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/sistema-construtivo` }],
  }),
  component: SistemaConstrutivoPage,
});

function SistemaConstrutivoPage() {
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
                O Produto
              </span>
              <h1 className="s-display-lg mb-8" style={{ color: "#000000" }}>
                Sistema /<br />
                <span style={{ color: "#BE9355" }}>Construtivo.</span>
              </h1>
              <p className="s-body-lg" style={{ color: "#444748", maxWidth: 640 }}>
                Casas modulares desenvolvidas em estrutura metálica robusta, com isolamento
                termoacústico e design moderno, garantindo rapidez na construção e máxima
                eficiência energética. Estrutura tubular em aço galvanizado DX51D (3 mm de parede, normas
                EN&nbsp;10346 / EN&nbsp;10143), com perfis ómega e dois sistemas construtivos à escolha.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Anatomia da casa — 12 camadas numeradas */}
      <section style={{ paddingBlock: 120 }}>
        <div className="s-wrap">
          <SectionTitle eyebrow="Anatomia da Casa" first="DO EXTERIOR" second="AO INTERIOR" align="left" className="mb-16" />
          <p className="s-body-lg mb-16" style={{ color: "#444748", maxWidth: 720 }}>
            A sequência confirmada no esquema técnico oficial "Física das Construções", pormenor de
            parede, cobertura e ligação ao terreno, numerada de 1 a 12.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {LAYERS.map((layer, i) => (
              <motion.div
                key={layer.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
                className="flex gap-6 border-t pt-6"
                style={{ borderColor: "#e8e8e8" }}
              >
                <span
                  className="s-headline-lg shrink-0"
                  style={{ color: "#EEEEEE", fontFamily: "var(--font-display)", lineHeight: 1 }}
                >
                  {layer.num}
                </span>
                <div>
                  <h3 className="s-headline-md mb-2" style={{ color: "#000000" }}>{layer.title}</h3>
                  <p className="s-body-md" style={{ color: "#444748" }}>{layer.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Os dois sistemas construtivos — comparação */}
      <section style={{ paddingBlock: 120, backgroundColor: "#f0f0f0" }}>
        <div className="s-wrap">
          <SectionTitle eyebrow="Personalização" first="DOIS SISTEMAS," second="UMA ESCOLHA" className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SYSTEMS.map((sys, i) => (
              <motion.div
                key={sys.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="bg-white p-12"
                style={{ border: "1px solid #e8e8e8" }}
              >
                <span className="s-label-caps mb-2 block" style={{ color: "#BE9355", letterSpacing: "0.2em" }}>
                  {sys.tag}
                </span>
                <h3 className="s-headline-lg mb-6" style={{ color: "#000000" }}>{sys.name}</h3>
                <p className="s-body-md mb-8" style={{ color: "#444748" }}>{sys.composition}</p>
                <ul className="space-y-3 border-t pt-6" style={{ borderColor: "#eeeeee" }}>
                  {sys.advantages.map((a) => (
                    <li key={a} className="flex items-start gap-3">
                      <span className="block h-px w-5 mt-3 shrink-0" style={{ backgroundColor: "#BE9355" }} />
                      <span className="s-body-md" style={{ color: "#444748" }}>{a}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ficha de espessuras */}
      <section style={{ paddingBlock: 120 }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <SectionTitle eyebrow="Ficha Técnica" first="ESPESSURAS" second="EXATAS" align="left" />
              <p className="s-body-md mt-8" style={{ color: "#444748", maxWidth: 360 }}>
                Especificações extraídas literalmente da lista de materiais dos catálogos oficiais.
                Um nível de detalhe que a generalidade da concorrência não publica.
              </p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="border-t" style={{ borderColor: "#e8e8e8" }}>
                {THICKNESS.map((row, i) => (
                  <motion.div
                    key={row.item}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="grid grid-cols-12 gap-4 border-b py-5"
                    style={{ borderColor: "#e8e8e8" }}
                  >
                    <span className="col-span-12 sm:col-span-5 s-label-caps" style={{ color: "#000000" }}>
                      {row.item}
                    </span>
                    <span className="col-span-12 sm:col-span-7 s-body-md" style={{ color: "#444748" }}>
                      {row.spec}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desempenho e conformidade */}
      <section style={{ backgroundColor: "#1a1a1a", paddingBlock: 100 }}>
        <div className="s-wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { value: "Classe A", label: "Eficiência energética" },
              { value: "10 anos", label: "Garantia estrutural" },
              { value: "3 mm", label: "Parede do tubo de aço galvanizado" },
              { value: "120 m²/dia", label: "Montagem do painel pré-fabricado" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="s-headline-lg leading-none" style={{ color: "#BE9355" }}>{s.value}</p>
                <p className="s-label-caps mt-3" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
          <p className="s-body-md mt-16 text-center mx-auto" style={{ color: "rgba(255,255,255,0.5)", maxWidth: 720 }}>
            Conformidade legal e técnica: Despacho 6476-H/2021, ITE 50 (LNEC), Eurocódigo 3 e 4, RSA,
            REBAP e SCE. O ponto de orvalho é mantido garantidamente no exterior da parede graças à
            camada ETICS combinada com lã de rocha, e o baixo peso da estrutura em aço favorece o
            comportamento sísmico da casa.
          </p>
        </div>
      </section>

      {/* Referências reais de produto — personalização */}
      <section style={{ paddingBlock: 120 }}>
        <div className="s-wrap">
          <SectionTitle eyebrow="Sistema de Plafon" first="PERSONALIZE" second="CADA DETALHE" className="mb-6" />
          <p className="s-body-lg mb-16 mx-auto text-center" style={{ color: "#444748", maxWidth: 680 }}>
            Substitua qualquer elemento de catálogo (casa de banho, cozinha, portas ou janelas)
            pagando apenas a diferença de valor face ao item standard.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REFERENCES.map((ref, i) => (
              <motion.div
                key={ref.cat}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-10"
                style={{ backgroundColor: "#f0f0f0" }}
              >
                <h3 className="s-headline-md mb-3" style={{ color: "#000000" }}>{ref.cat}</h3>
                <p className="s-body-md mb-6" style={{ color: "#BE9355" }}>{ref.note}</p>
                <ul className="space-y-3">
                  {ref.items.map((it) => (
                    <li key={it} className="s-body-md" style={{ color: "#444748" }}>{it}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
