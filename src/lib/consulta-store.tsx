import { createContext, useContext, useState, type ReactNode } from "react";

type Ctx = { isOpen: boolean; open: () => void; close: () => void };
const ConsultaCtx = createContext<Ctx | null>(null);

export function ConsultaModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ConsultaCtx.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </ConsultaCtx.Provider>
  );
}

export function useConsultaModal() {
  const ctx = useContext(ConsultaCtx);
  if (!ctx) throw new Error("useConsultaModal must be used within ConsultaModalProvider");
  return ctx;
}
