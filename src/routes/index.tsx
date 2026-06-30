import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Blog } from "@/components/site/Blog";
import { SITE } from "@/lib/site-data";
import { fetchProjects, fetchBlogPosts } from "@/lib/sanity-queries";

export const Route = createFileRoute("/")({
  loader: async () => {
    const [projects, posts] = await Promise.all([fetchProjects(), fetchBlogPosts()]);
    return { projects, posts };
  },
  head: () => ({
    meta: [
      { title: "EsDomusTech | Casas Modulares Inteligentes no Porto" },
      {
        name: "description",
        content:
          "Casas modulares tecnológicas no Porto. Estrutura em aço galvanizado, classe A, chave-na-mão a 1.350 €/m². Construção em todo o território nacional.",
      },
      { property: "og:title", content: "EsDomusTech | Casas Modulares Tecnológicas no Porto" },
      {
        property: "og:description",
        content: "Casas modulares chave-na-mão no Porto. Classe A, estrutura em aço galvanizado, construção em todo o território nacional.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/` },
    ],
    links: [
      { rel: "canonical", href: `${SITE.domain}/` },
      { rel: "preload", as: "image", href: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&h=900&fit=crop&auto=format&q=80" },
    ],
  }),
  component: Index,
});

function Index() {
  const { projects, posts } = Route.useLoaderData();
  return (
    <main>
      <Hero />
      <About />
      <Projects projects={projects} />
      <Blog posts={posts} />
    </main>
  );
}
