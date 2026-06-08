import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { SITE } from "@/lib/site-data";

export const Route = createFileRoute("/termos-e-condicoes")({
  head: () => ({
    meta: [
      { title: "Termos e Condições — DomusTech" },
      {
        name: "description",
        content:
          "Termos e Condições de utilização do website e dos serviços da DomusTech, estúdio de arquitetura e construção modular no Porto.",
      },
      { property: "og:title", content: "Termos e Condições — DomusTech" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/termos-e-condicoes` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/termos-e-condicoes` }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Legal"
        titleFirst="TERMOS E"
        titleSecond="CONDIÇÕES"
        image="https://picsum.photos/seed/legal2/1600/900"
      />

      <section className="section-pad">
        <div className="container-1100 mx-auto max-w-3xl space-y-8 text-[15px] leading-relaxed text-muted-foreground">
          <div>
            <h2 className="font-display text-2xl font-medium text-foreground">1. Aceitação dos termos</h2>
            <p className="mt-3">
              Ao aceder e utilizar este website, o utilizador aceita os presentes Termos e Condições.
              Caso não concorde, deverá abster-se de utilizar o site.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-medium text-foreground">2. Utilização do website</h2>
            <p className="mt-3">
              O conteúdo deste website destina-se a fins informativos. A {SITE.name} reserva-se o
              direito de alterar, suspender ou descontinuar qualquer parte do site sem aviso prévio.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-medium text-foreground">3. Propriedade intelectual</h2>
            <p className="mt-3">
              Todos os conteúdos, marcas, logótipos e imagens presentes neste website são propriedade
              da {SITE.name} ou dos seus licenciadores, estando protegidos por lei. É proibida a sua
              reprodução sem autorização prévia.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-medium text-foreground">4. Limitação de responsabilidade</h2>
            <p className="mt-3">
              A {SITE.name} não se responsabiliza por eventuais danos resultantes da utilização ou
              impossibilidade de utilização deste website, nem pela exatidão integral de todo o conteúdo.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-medium text-foreground">5. Lei aplicável</h2>
            <p className="mt-3">
              Os presentes Termos e Condições regem-se pela lei portuguesa. Para a resolução de
              qualquer litígio será competente o foro da comarca do Porto.
            </p>
          </div>
          <p className="text-sm">Última atualização: {new Date().getFullYear()}.</p>
        </div>
      </section>
    </main>
  );
}
