import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Serviço",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nome", type: "string", validation: (R) => R.required() }),
    defineField({ name: "slug", title: "Slug (URL)", type: "slug", options: { source: "name" }, validation: (R) => R.required() }),
    defineField({ name: "titleFirst", title: "Título — 1ª palavra", type: "string" }),
    defineField({ name: "titleSecond", title: "Título — 2ª palavra", type: "string" }),
    defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
    defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 2 }),
    defineField({ name: "excerpt", title: "Resumo", type: "text", rows: 2 }),
    defineField({ name: "image", title: "Imagem (URL)", type: "url" }),
    defineField({
      name: "intro",
      title: "Introdução (parágrafos)",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "features",
      title: "Features / Destaques",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "process",
      title: "Processo (fases)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "num", type: "string", title: "Número (ex: 01)" }),
            defineField({ name: "title", type: "string", title: "Título da fase" }),
            defineField({ name: "text", type: "text", title: "Descrição", rows: 3 }),
          ],
          preview: { select: { title: "num", subtitle: "title" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "slug.current" },
  },
});
