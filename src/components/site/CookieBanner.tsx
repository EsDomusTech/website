import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { getConsent, setConsent } from "@/lib/cookie-consent";
import { loadGA } from "@/lib/analytics";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
  }, []);

  if (!visible) return null;

  function accept() {
    setConsent("accepted");
    loadGA();
    setVisible(false);
  }

  function reject() {
    setConsent("rejected");
    setVisible(false);
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9998]"
      style={{ backgroundColor: "var(--dark-section)", borderTop: "2px solid var(--gold)" }}
      role="dialog"
      aria-label="Aviso de cookies"
      aria-live="polite"
    >
      <div className="s-wrap flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="s-body-md" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 640 }}>
          Usamos cookies de análise para melhorar a sua experiência. Consulte a nossa{" "}
          <Link
            to="/politica-de-privacidade"
            className="underline transition-colors"
            style={{ color: "rgba(255,255,255,0.75)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
          >
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={reject}
            className="s-label-caps px-6 py-3 transition-colors"
            style={{ color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.15)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            }}
          >
            Rejeitar
          </button>
          <button
            type="button"
            onClick={accept}
            className="s-label-caps px-6 py-3 text-white transition-colors"
            style={{ backgroundColor: "var(--gold)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a67d44")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--gold)")}
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
