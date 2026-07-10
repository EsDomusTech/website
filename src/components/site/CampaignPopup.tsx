import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { PRICING } from "@/lib/site-data";

const SEEN_KEY = "domustech_campaign_popup_seen";
const SHOW_DELAY_MS = 700;

export function CampaignPopup() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!PRICING.CAMPAIGN_ACTIVE) return;
    if (pathname !== "/") return;
    if (sessionStorage.getItem(SEEN_KEY)) return;
    const t = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [visible]);

  function dismiss() {
    sessionStorage.setItem(SEEN_KEY, "1");
    setVisible(false);
  }

  if (!PRICING.CAMPAIGN_ACTIVE) return null;

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[210]"
            style={{ backgroundColor: "rgba(0,0,0,0.72)" }}
            onClick={dismiss}
            aria-hidden="true"
          />
          <motion.div
            key="popup"
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
            className="fixed inset-0 z-[211] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="campaign-popup-title"
          >
            <div
              className="relative w-full max-w-[440px] p-8 md:p-10 text-center"
              style={{ backgroundColor: "var(--background)", border: "2px solid var(--gold)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={dismiss}
                className="absolute top-5 right-5 flex items-center justify-center w-9 h-9 transition-opacity hover:opacity-60"
                style={{ color: "var(--foreground)" }}
                aria-label="Fechar"
              >
                <X size={20} />
              </button>

              <span className="s-label-caps block mb-4" style={{ color: "var(--gold)" }}>
                Campanha Ativa
              </span>

              <h2
                id="campaign-popup-title"
                className="text-[26px] leading-tight mb-5"
                style={{ fontFamily: "var(--font-display)", color: "var(--foreground)", letterSpacing: "0.03em" }}
              >
                O PREÇO DO M² BAIXOU
              </h2>

              <div className="flex items-center justify-center gap-3 mb-3">
                <span
                  className="text-xl"
                  style={{ fontFamily: "var(--font-display)", color: "var(--muted-foreground)", textDecoration: "line-through", opacity: 0.6 }}
                >
                  {PRICING.REGULAR.toLocaleString("pt-PT")} €/m²
                </span>
                <span className="text-3xl" style={{ fontFamily: "var(--font-display)", color: "var(--gold)", letterSpacing: "0.02em" }}>
                  {PRICING.CAMPAIGN.toLocaleString("pt-PT")} €/m²
                </span>
              </div>

              <p
                className="text-sm mb-8"
                style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
              >
                Chave-na-mão, por tempo limitado. Consulte os preços já com o desconto aplicado.
              </p>

              <Link
                to="/precos"
                onClick={dismiss}
                className="inline-block w-full py-4 text-xs tracking-widest uppercase text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: "var(--gold)", fontFamily: "var(--font-display)" }}
              >
                VER PREÇOS COM DESCONTO →
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
