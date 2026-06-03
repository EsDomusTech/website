import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Services } from "@/components/site/Services";
import { Blog } from "@/components/site/Blog";
import { VideoTestimonials } from "@/components/site/VideoTestimonials";
import { ClientLogos } from "@/components/site/ClientLogos";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DomusTech — Casas Modulares Inteligentes no Porto" },
      {
        name: "description",
        content:
          "Estúdio de arquitetura e design no Porto. Casas modulares inteligentes, design de interiores, planeamento e modelação 3D.",
      },
      { property: "og:title", content: "DomusTech — Arquitetura no Porto" },
      {
        property: "og:description",
        content: "Casas modulares inteligentes e arquitetura moderna no Porto.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Blog />
        <VideoTestimonials />
        <ClientLogos />
        <Footer />
      </main>
    </div>
  );
}
