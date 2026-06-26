import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SERVICES, PROJECTS, BLOG_POSTS, SITE } from "@/lib/site-data";

const BASE_URL = SITE.domain;

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/empresa", changefreq: "monthly", priority: "0.8" },
          { path: "/sistema-construtivo", changefreq: "monthly", priority: "0.9" },
          { path: "/vantagens-fiscais", changefreq: "monthly", priority: "0.8" },
          { path: "/servicos", changefreq: "monthly", priority: "0.9" },
          { path: "/precos", changefreq: "monthly", priority: "0.8" },
          { path: "/projetos", changefreq: "monthly", priority: "0.8" },
          { path: "/galeria", changefreq: "monthly", priority: "0.6" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          { path: "/faq", changefreq: "monthly", priority: "0.7" },
          { path: "/contacto", changefreq: "yearly", priority: "0.7" },
          { path: "/politica-de-privacidade", changefreq: "yearly", priority: "0.3" },
          { path: "/termos-e-condicoes", changefreq: "yearly", priority: "0.3" },
          ...SERVICES.map((s) => ({
            path: `/servicos/${s.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...PROJECTS.map((p) => ({
            path: `/projetos/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
          ...BLOG_POSTS.map((p) => ({
            path: `/blog/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
