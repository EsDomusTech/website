import { describe, expect, it } from "vitest";
import { leadSchema, looksLikeBot } from "./consulta.functions";

const baseLead = {
  tipologia: "T2",
  quando: "Nos próximos 3 meses",
  situacaoTerreno: "Já tenho terreno",
  localizacao: "Porto",
  descricao: "",
  formaPagamento: "Financiamento bancário",
  nome: "Ana Silva",
  email: "ana@example.com",
  telefone: "912345678",
  timestamp: new Date().toISOString(),
};

describe("leadSchema", () => {
  it("accepts a valid lead", () => {
    expect(leadSchema.safeParse(baseLead).success).toBe(true);
  });

  it("accepts an empty email", () => {
    expect(leadSchema.safeParse({ ...baseLead, email: "" }).success).toBe(true);
  });

  it("rejects an invalid email", () => {
    expect(leadSchema.safeParse({ ...baseLead, email: "not-an-email" }).success).toBe(false);
  });

  it("rejects a phone number that's too short", () => {
    expect(leadSchema.safeParse({ ...baseLead, telefone: "12345" }).success).toBe(false);
  });

  it("accepts a phone number with a country code", () => {
    expect(leadSchema.safeParse({ ...baseLead, telefone: "+351912345678" }).success).toBe(true);
  });

  it("rejects a missing name", () => {
    expect(leadSchema.safeParse({ ...baseLead, nome: "" }).success).toBe(false);
  });
});

describe("looksLikeBot", () => {
  const parsed = () => leadSchema.parse(baseLead);

  it("flags a filled honeypot", () => {
    expect(looksLikeBot({ ...parsed(), honeypot: "spam" })).toBe(true);
  });

  it("flags a submission faster than the min fill time", () => {
    expect(looksLikeBot({ ...parsed(), openedAt: Date.now() - 500 })).toBe(true);
  });

  it("passes a normal, slow, honeypot-free submission", () => {
    expect(looksLikeBot({ ...parsed(), openedAt: Date.now() - 10_000 })).toBe(false);
  });

  it("passes when openedAt is absent", () => {
    expect(looksLikeBot(parsed())).toBe(false);
  });
});
