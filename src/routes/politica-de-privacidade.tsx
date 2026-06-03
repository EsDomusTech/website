import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { SITE } from "@/lib/site-data";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — DomusTech" },
      {
        name: "description",
        content:
          "Política de Privacidade da DomusTech: como recolhemos, utilizamos e protegemos os seus dados pessoais.",
      },
      { property: "og:title", content: "Política de Privacidade — DomusTech" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/politica-de-privacidade` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/politica-de-privacidade` }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Legal"
        titleFirst="POLÍTICA DE"
        titleSecond="PRIVACIDADE"
        image="https://picsum.photos/seed/legal1/1600/900"
        breadcrumbs={[{ label: "Início", to: "/" }, { label: "Política de Privacidade" }]}
      />

      <section className="section-pad">
        <div className="container-1100 mx-auto max-w-3xl space-y-8 text-[15px] leading-relaxed text-muted-foreground">
          <div>
            <h2 className="font-display text-2xl font-medium text-foreground">1. Responsável pelo tratamento</h2>
            <p className="mt-3">
              A {SITE.name}, com sede em {SITE.address}, é responsável pelo tratamento dos dados
              pessoais recolhidos através deste website.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-medium text-foreground">2. Dados que recolhemos</h2>
            <p className="mt-3">
              Recolhemos os dados que nos fornece voluntariamente através dos formulários de contacto,
              nomeadamente nome, email e mensagem, com o objetivo de responder aos seus pedidos.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-medium text-foreground">3. Finalidade do tratamento</h2>
            <p className="mt-3">
              Os dados são utilizados exclusivamente para gerir a comunicação consigo, elaborar
              propostas e prestar os serviços solicitados. Não partilhamos os seus dados com terceiros
              sem o seu consentimento.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-medium text-foreground">4. Os seus direitos</h2>
            <p className="mt-3">
              Tem o direito de aceder, retificar, apagar e limitar o tratamento dos seus dados, bem
              como de se opor ao mesmo. Para exercer estes direitos, contacte-nos através de {SITE.email}.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-medium text-foreground">5. Conservação dos dados</h2>
            <p className="mt-3">
              Os dados são conservados apenas durante o período necessário para cumprir as finalidades
              para as quais foram recolhidos, salvo obrigação legal de conservação por período superior.
            </p>
          </div>
          <p className="text-sm">Última atualização: {new Date().getFullYear()}.</p>
        </div>
      </section>
    </main>
  );
}
