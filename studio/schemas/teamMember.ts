import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Membro da Equipa",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nome", type: "string", validation: (R) => R.required() }),
    defineField({ name: "role", title: "Cargo / Função", type: "string" }),
    defineField({ name: "image", title: "Foto (URL)", type: "url" }),
  ],
  preview: {
    select: { title: "name", subtitle: "role" },
  },
});
