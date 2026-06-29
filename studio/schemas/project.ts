import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Projeto",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nome", type: "string", validation: (R) => R.required() }),
    defineField({ name: "slug", title: "Slug (URL)", type: "slug", options: { source: "name" }, validation: (R) => R.required() }),
    defineField({ name: "category", title: "Categoria", type: "string" }),
    defineField({ name: "location", title: "Localização", type: "string" }),
    defineField({ name: "year", title: "Ano", type: "string" }),
    defineField({ name: "image", title: "Imagem (URL)", type: "url" }),
    defineField({ name: "summary", title: "Resumo", type: "text", rows: 2 }),
    defineField({
      name: "description",
      title: "Descrição (parágrafos)",
      type: "array",
      of: [{ type: "text" }],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "category" },
  },
});
