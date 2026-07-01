import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE } from "@/lib/site-data";
import { fetchServices, fetchProjects, fetchBlogPosts } from "@/lib/sanity-queries";

const BASE_URL = SITE.domain;

// Escape XML special characters in CMS-sourced values before template interpolation.
// Prevents XML injection when Sanity (or any future CMS) is wired up.
function escXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  lastmod?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const [SERVICES, PROJECTS, BLOG_POSTS] = await Promise.all([
          fetchServices(), fetchProjects(), fetchBlogPosts(),
        ]);
        const today = new Date().toISOString().split("T")[0];
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
          { path: "/empresa", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/sistema-construtivo", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/vantagens-fiscais", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/servicos", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/precos", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/projetos", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/galeria", changefreq: "monthly", priority: "0.6", lastmod: today },
          { path: "/blog", changefreq: "weekly", priority: "0.7", lastmod: today },
          { path: "/faq", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/contacto", changefreq: "yearly", priority: "0.7", lastmod: today },
          { path: "/politica-de-privacidade", changefreq: "yearly", priority: "0.3", lastmod: today },
          { path: "/termos-e-condicoes", changefreq: "yearly", priority: "0.3", lastmod: today },
          ...SERVICES.map((s) => ({
            path: `/servicos/${s.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
            lastmod: today,
          })),
          ...PROJECTS.map((p) => ({
            path: `/projetos/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
            lastmod: today,
          })),
          ...BLOG_POSTS.map((p) => ({
            path: `/blog/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
            lastmod: (p as { isoDate?: string }).isoDate ?? today,
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${escXml(e.path)}</loc>`,
            e.lastmod ? `    <lastmod>${escXml(e.lastmod)}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${escXml(e.changefreq)}</changefreq>` : null,
            e.priority ? `    <priority>${escXml(e.priority)}</priority>` : null,
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
