import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Services } from "@/components/site/Services";
import { Blog } from "@/components/site/Blog";
import { VideoTestimonials } from "@/components/site/VideoTestimonials";
import { ClientLogos } from "@/components/site/ClientLogos";
import { SITE } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DomusTech | Casas Modulares Inteligentes no Porto" },
      {
        name: "description",
        content:
          "Estúdio de arquitetura e construção modular no Porto. Casas modulares inteligentes, design de interiores, remodelação e modelação 3D.",
      },
      { property: "og:title", content: "DomusTech | Casas Modulares no Porto" },
      {
        property: "og:description",
        content: "Casas modulares inteligentes e arquitetura moderna no Porto.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/` },
    ],
    links: [
      { rel: "canonical", href: `${SITE.domain}/` },
      { rel: "preload", as: "image", href: "https://picsum.photos/seed/arch1/1600/900" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Blog />
      <VideoTestimonials />
      <ClientLogos />
    </main>
  );
}
