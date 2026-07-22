/**
 * Google Apps Script — Web App que recebe leads do modal "Agendar Consulta"
 * (src/lib/api/consulta.functions.ts) via POST e escreve uma linha na sheet.
 *
 * SETUP:
 * 1. Cria/abre o Google Sheet onde queres os leads.
 * 2. Extensões → Apps Script.
 * 3. Apaga o conteúdo do Code.gs e cola este ficheiro.
 * 4. Implementar → Nova implementação → tipo "Aplicação Web".
 *    - Executar como: Eu
 *    - Quem tem acesso: Qualquer pessoa
 * 5. Autoriza as permissões pedidas (é o teu próprio script, sem risco).
 * 6. Copia o URL da Web App gerado (termina em /exec).
 * 7. Cola esse URL em GOOGLE_SHEETS_WEBHOOK_URL no .env (produção: nas env vars do Lovable).
 * 8. Sempre que editares este script, tens de "Gerir implementações" →
 *    editar (lápis) → Nova versão → Implementar, para o URL /exec refletir as mudanças.
 */

const SHEET_NAME = "Leads"; // nome do separador (tab) dentro do Sheet

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
    || SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp", "Nome", "Email", "Telefone", "Tipologia",
      "Quando", "Situação Terreno", "Localização", "Forma Pagamento", "Descrição",
    ]);
  }

  // e.postData.contents mis-decodes UTF-8 (mojibake on á/ã/ç/ó...) — read raw bytes and decode explicitly.
  const jsonStr = Utilities.newBlob(e.postData.getBytes()).getDataAsString("UTF-8");
  const data = JSON.parse(jsonStr);

  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.nome || "",
    data.email || "",
    data.telefone || "",
    data.tipologia || "",
    data.quando || "",
    data.situacaoTerreno || "",
    data.localizacao || "",
    data.formaPagamento || "",
    data.descricao || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
