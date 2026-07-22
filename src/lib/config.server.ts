import process from "node:process";

// Server-only config. The .server.ts suffix prevents Vite from bundling
// this file into the client — values here never reach the browser.
//
// On Cloudflare Workers, env binds at REQUEST time. Module-scope reads
// (e.g. `const x = process.env.X`) resolve to undefined — always read
// process.env INSIDE a function or handler.
//
// When to use which env-access pattern:
//   - .server.ts module (this file): server-only helpers reused across
//     handlers. Wrap reads in a function so they run per-request.
//   - inline process.env inside a createServerFn handler: one-off reads
//     not reused elsewhere.
//   - import.meta.env.VITE_FOO: PUBLIC config readable from both client
//     and server (analytics IDs, public URLs). Define in .env with the
//     VITE_ prefix. Never put secrets here — they ship to the browser.

export function getServerConfig() {
  return {
    nodeEnv: process.env.NODE_ENV,
    resendApiKey: process.env.RESEND_API_KEY,
    // Must be a verified domain/sender in the Resend account, e.g. "EsDomusTech <leads@esdomustech.com>".
    // Falls back to Resend's shared testing address (only deliverable to the Resend account owner).
    resendFromEmail: process.env.RESEND_FROM_EMAIL ?? "EsDomusTech <onboarding@resend.dev>",
    resendToEmail: process.env.RESEND_TO_EMAIL ?? "marketing@esdomustech.com",
    // Google Apps Script Web App URL (see scripts/google-sheets-leads.gs) that appends a row per lead.
    googleSheetsWebhookUrl: process.env.GOOGLE_SHEETS_WEBHOOK_URL,
  };
}
