import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { getServerConfig } from "../config.server";

// Server-side handler for the "Agendar Consulta" modal (ConsultaModal.tsx).
// Best-effort fan-out to Resend (email notification) and a Google Apps Script
// Web App (row appended to a Google Sheet). Neither failure is surfaced to the
// visitor — the modal always shows the success state, same as the previous
// Make.com webhook behavior.

const leadSchema = z.object({
  tipologia: z.string(),
  quando: z.string(),
  situacaoTerreno: z.string(),
  localizacao: z.string(),
  descricao: z.string(),
  formaPagamento: z.string(),
  nome: z.string().min(1),
  email: z.string().email().or(z.literal("")),
  telefone: z.string().regex(/^\+?\d{9,13}$/, "Telefone inválido"),
  timestamp: z.string(),
  honeypot: z.string().optional().default(""),
  openedAt: z.number().optional(),
});

const MIN_FILL_TIME_MS = 4000;

function looksLikeBot(data: z.infer<typeof leadSchema>): boolean {
  if (data.honeypot) return true;
  if (data.openedAt && Date.now() - data.openedAt < MIN_FILL_TIME_MS) return true;
  return false;
}

function leadEmailHtml(lead: z.infer<typeof leadSchema>) {
  const rows: [string, string][] = [
    ["Nome", lead.nome],
    ["Email", lead.email || "—"],
    ["Telefone", lead.telefone],
    ["Tipologia", lead.tipologia],
    ["Quando pretende avançar", lead.quando],
    ["Situação do terreno", lead.situacaoTerreno],
    ["Localização", lead.localizacao],
    ["Forma de pagamento", lead.formaPagamento],
    ["Descrição", lead.descricao || "—"],
  ];
  const body = rows
    .map(([label, value]) => `<tr><td style="padding:6px 12px;color:#666;">${label}</td><td style="padding:6px 12px;font-weight:600;">${value}</td></tr>`)
    .join("");
  return `<table style="font-family:sans-serif;border-collapse:collapse;">${body}</table>`;
}

async function sendResendEmail(lead: z.infer<typeof leadSchema>) {
  const { resendApiKey, resendFromEmail, resendToEmail } = getServerConfig();
  if (!resendApiKey) {
    console.warn("submitConsultaLead: RESEND_API_KEY not set, skipping email");
    return;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify({
      from: resendFromEmail,
      to: [resendToEmail],
      ...(lead.email ? { reply_to: lead.email } : {}),
      subject: `Novo pedido de consulta — ${lead.nome} (${lead.tipologia})`,
      html: leadEmailHtml(lead),
    }),
  });
  if (!res.ok) {
    throw new Error(`Resend ${res.status}: ${await res.text()}`);
  }
}

async function appendToGoogleSheet(lead: z.infer<typeof leadSchema>) {
  const { googleSheetsWebhookUrl } = getServerConfig();
  if (!googleSheetsWebhookUrl) return;
  const res = await fetch(googleSheetsWebhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
  if (!res.ok) {
    throw new Error(`Google Sheets webhook ${res.status}: ${await res.text()}`);
  }
}

export const submitConsultaLead = createServerFn({ method: "POST" })
  .inputValidator(leadSchema)
  .handler(async ({ data }) => {
    if (looksLikeBot(data)) return { ok: true, errors: [] };
    const results = await Promise.allSettled([sendResendEmail(data), appendToGoogleSheet(data)]);
    const errors = results
      .filter((r): r is PromiseRejectedResult => r.status === "rejected")
      .map((r) => String(r.reason));
    for (const e of errors) console.error("submitConsultaLead: fan-out failed —", e);
    return { ok: true, errors };
  });
