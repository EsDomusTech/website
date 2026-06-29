import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "q", title: "Pergunta", type: "string", validation: (R) => R.required() }),
    defineField({ name: "a", title: "Resposta", type: "text", rows: 4, validation: (R) => R.required() }),
  ],
  preview: {
    select: { title: "q" },
  },
});
