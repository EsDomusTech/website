import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Artigo de Blog",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string", validation: (R) => R.required() }),
    defineField({ name: "slug", title: "Slug (URL)", type: "slug", options: { source: "title" }, validation: (R) => R.required() }),
    defineField({ name: "cat", title: "Categoria", type: "string" }),
    defineField({ name: "date", title: "Data (ex: Jul 2026)", type: "string" }),
    defineField({ name: "publishedAt", title: "Data de publicação", type: "datetime" }),
    defineField({ name: "image", title: "Imagem (URL)", type: "url" }),
    defineField({ name: "excerpt", title: "Resumo / Excerto", type: "text", rows: 3 }),
    defineField({ name: "readTime", title: "Tempo de leitura (ex: 7 min)", type: "string" }),
    defineField({
      name: "body",
      title: "Corpo do artigo (parágrafos)",
      type: "array",
      of: [{ type: "text" }],
    }),
  ],
  orderings: [{ name: "publishedAtDesc", title: "Mais recentes", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: {
    select: { title: "title", subtitle: "cat" },
  },
});
