import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { SITE } from "@/lib/site-data";

export const Route = createFileRoute("/termos-e-condicoes")({
  head: () => ({
    meta: [
      { title: "Termos e Condições | EsDomusTech" },
      {
        name: "description",
        content:
          "Termos e Condições de utilização do website e dos serviços da EsDomusTech, estúdio de arquitetura e construção modular no Porto.",
      },
      { property: "og:title", content: "Termos e Condições | EsDomusTech" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/termos-e-condicoes` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/termos-e-condicoes` }],
  }),
  component: TermsPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl font-medium" style={{ color: "var(--foreground)" }}>
        {title}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ color: "var(--muted-foreground)" }}>{children}</p>;
}

function TermsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Legal"
        titleFirst="TERMOS E"
        titleSecond="CONDIÇÕES"
        variant="light"
      />

      <section className="section-pad">
        <div className="container-1100 mx-auto max-w-3xl space-y-10 text-[15px] leading-relaxed">

          {/* --- TERMOS GERAIS --- */}
          <Section title="1. Aceitação dos termos">
            <P>
              Ao aceder e utilizar este website, o utilizador aceita os presentes Termos e Condições.
              Caso não concorde, deverá abster-se de utilizar o site.
            </P>
          </Section>

          <Section title="2. Utilização do website">
            <P>
              O conteúdo deste website destina-se a fins informativos. A {SITE.name} reserva-se o
              direito de alterar, suspender ou descontinuar qualquer parte do site sem aviso prévio.
            </P>
          </Section>

          <Section title="3. Propriedade intelectual">
            <P>
              Todos os conteúdos, marcas, logótipos e imagens presentes neste website são propriedade
              da {SITE.name} ou dos seus licenciadores, estando protegidos por lei. É proibida a sua
              reprodução sem autorização prévia.
            </P>
          </Section>

          <Section title="4. Limitação de responsabilidade">
            <P>
              A {SITE.name} não se responsabiliza por eventuais danos resultantes da utilização ou
              impossibilidade de utilização deste website, nem pela exatidão integral de todo o conteúdo.
            </P>
          </Section>

          {/* --- DADOS PESSOAIS / RGPD --- */}
          <div className="border-t pt-10" style={{ borderColor: "var(--ghost)" }}>
            <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--label-muted)", fontFamily: "var(--font-display)" }}>
              Tratamento de dados pessoais
            </p>

            <div className="space-y-10">
              <Section title="5. Responsável pelo tratamento">
                <P>
                  O responsável pelo tratamento dos dados pessoais recolhidos através deste website é:
                </P>
                <ul className="space-y-1 pl-4" style={{ color: "var(--muted-foreground)" }}>
                  <li><strong style={{ color: "var(--foreground)" }}>Empresa:</strong> {SITE.name}</li>
                  <li><strong style={{ color: "var(--foreground)" }}>Morada:</strong> {SITE.address}</li>
                  <li><strong style={{ color: "var(--foreground)" }}>Email:</strong>{" "}
                    <a href={`mailto:${SITE.email}`} className="underline" style={{ color: "var(--foreground)" }}>
                      {SITE.email}
                    </a>
                  </li>
                  <li><strong style={{ color: "var(--foreground)" }}>Telefone:</strong> {SITE.phone}</li>
                </ul>
              </Section>

              <Section title="6. Dados recolhidos e finalidade">
                <P>
                  Através do formulário de consulta presente neste website, recolhemos os seguintes dados pessoais:
                </P>
                <ul className="list-disc pl-5 space-y-1" style={{ color: "var(--muted-foreground)" }}>
                  <li><strong style={{ color: "var(--foreground)" }}>Identificação:</strong> nome completo</li>
                  <li><strong style={{ color: "var(--foreground)" }}>Contacto:</strong> endereço de e-mail e número de telemóvel</li>
                  <li><strong style={{ color: "var(--foreground)" }}>Dados do projeto:</strong> tipo de projeto, tipologia pretendida, prazo de avanço, situação atual do terreno, localização e descrição livre do projeto</li>
                </ul>
                <P>
                  Estes dados são recolhidos exclusivamente para:
                </P>
                <ul className="list-disc pl-5 space-y-1" style={{ color: "var(--muted-foreground)" }}>
                  <li>Contactar o utilizador para agendar uma reunião de consulta;</li>
                  <li>Preparar uma proposta personalizada para o projeto;</li>
                  <li>Comunicações relacionadas com o pedido submetido.</li>
                </ul>
              </Section>

              <Section title="7. Base legal do tratamento">
                <P>
                  O tratamento dos dados baseia-se no consentimento expresso do titular, prestado
                  no momento do preenchimento e submissão do formulário (art.º 6.º, n.º 1, al. a) do RGPD).
                  O utilizador pode retirar o consentimento a qualquer momento, sem prejuízo da licitude
                  do tratamento efetuado antes da retirada.
                </P>
              </Section>

              <Section title="8. Conservação dos dados">
                <P>
                  Os dados pessoais são conservados pelo período necessário para dar resposta ao pedido
                  e, em caso de relação contratual, durante o prazo legalmente exigido. Não havendo
                  contrato, os dados são eliminados no prazo máximo de 12 meses após a última interação.
                </P>
              </Section>

              <Section title="9. Partilha de dados com terceiros">
                <P>
                  Os dados submetidos através do formulário são processados por ferramentas de
                  automatização de fluxos de trabalho (nomeadamente plataformas de integração como
                  Make / Integromat) unicamente para encaminhamento interno do pedido. Não são
                  vendidos, cedidos ou partilhados com terceiros para fins comerciais.
                </P>
                <P>
                  Todos os subprocessadores contratados garantem níveis de proteção equivalentes
                  ao RGPD.
                </P>
              </Section>

              <Section title="10. Direitos do titular">
                <P>
                  Nos termos do RGPD (Regulamento (UE) 2016/679), o titular dos dados tem direito a:
                </P>
                <ul className="list-disc pl-5 space-y-1" style={{ color: "var(--muted-foreground)" }}>
                  <li><strong style={{ color: "var(--foreground)" }}>Acesso</strong> — saber quais os dados tratados;</li>
                  <li><strong style={{ color: "var(--foreground)" }}>Retificação</strong> — corrigir dados inexatos ou incompletos;</li>
                  <li><strong style={{ color: "var(--foreground)" }}>Apagamento</strong> — solicitar a eliminação dos dados ("direito a ser esquecido");</li>
                  <li><strong style={{ color: "var(--foreground)" }}>Limitação</strong> — restringir o tratamento em determinadas circunstâncias;</li>
                  <li><strong style={{ color: "var(--foreground)" }}>Portabilidade</strong> — receber os dados num formato estruturado;</li>
                  <li><strong style={{ color: "var(--foreground)" }}>Oposição</strong> — opor-se ao tratamento com base em interesses legítimos.</li>
                </ul>
                <P>
                  Para exercer qualquer um destes direitos, o titular pode contactar-nos por e-mail
                  para{" "}
                  <a href={`mailto:${SITE.email}`} className="underline" style={{ color: "var(--foreground)" }}>
                    {SITE.email}
                  </a>
                  , identificando-se e indicando o pedido concreto. Respondemos no prazo máximo de 30 dias.
                </P>
                <P>
                  O titular tem ainda o direito de apresentar reclamação à autoridade de controlo
                  competente — em Portugal, a{" "}
                  <strong style={{ color: "var(--foreground)" }}>CNPD</strong>{" "}
                  (Comissão Nacional de Proteção de Dados — <em>www.cnpd.pt</em>).
                </P>
              </Section>
            </div>
          </div>

          {/* --- LEI APLICÁVEL --- */}
          <Section title="11. Lei aplicável">
            <P>
              Os presentes Termos e Condições regem-se pela lei portuguesa e pelo direito da União
              Europeia, nomeadamente o RGPD. Para a resolução de qualquer litígio será competente
              o foro da comarca do Porto.
            </P>
          </Section>

          <p className="text-sm pt-4" style={{ color: "var(--label-muted)", borderTop: "1px solid var(--ghost)", paddingTop: "1.5rem" }}>
            Última atualização: junho de 2026.
          </p>
        </div>
      </section>
    </main>
  );
}
