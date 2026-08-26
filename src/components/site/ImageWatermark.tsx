export function ImageWatermark({ size = "md" }: { size?: "sm" | "md" }) {
  const iconSize = size === "sm" ? "h-8 w-8 md:h-10 md:w-10" : "h-10 w-10 md:h-12 md:w-12";
  const textSize = size === "sm" ? "text-[9px] md:text-[10px]" : "text-[11px] md:text-[13px]";
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 opacity-45"
      style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.6))" }}
    >
      <img src="/logo-casinha.png" alt="" aria-hidden="true" className={iconSize} />
      <span
        className={`whitespace-nowrap text-white ${textSize}`}
        style={{ fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase" }}
      >
        EsDomusTech
      </span>
    </div>
  );
}
