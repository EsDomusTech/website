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
  email: z.string().email(),
  telefone: z.string(),
  timestamp: z.string(),
});

function leadEmailHtml(lead: z.infer<typeof leadSchema>) {
  const rows: [string, string][] = [
    ["Nome", lead.nome],
    ["Email", lead.email],
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
  if (!resendApiKey) return;
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify({
      from: resendFromEmail,
      to: [resendToEmail],
      reply_to: lead.email,
      subject: `Novo pedido de consulta — ${lead.nome} (${lead.tipologia})`,
      html: leadEmailHtml(lead),
    }),
  });
}

async function appendToGoogleSheet(lead: z.infer<typeof leadSchema>) {
  const { googleSheetsWebhookUrl } = getServerConfig();
  if (!googleSheetsWebhookUrl) return;
  await fetch(googleSheetsWebhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
}

export const submitConsultaLead = createServerFn({ method: "POST" })
  .inputValidator(leadSchema)
  .handler(async ({ data }) => {
    const results = await Promise.allSettled([sendResendEmail(data), appendToGoogleSheet(data)]);
    for (const r of results) {
      if (r.status === "rejected") console.error("submitConsultaLead: fan-out failed", r.reason);
    }
    return { ok: true };
  });
