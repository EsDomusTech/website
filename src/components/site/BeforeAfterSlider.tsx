import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Estado Original",
  afterLabel = "Projeto Concluído",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (dragging.current) updatePosition(e.clientX); };
    const onUp = () => { dragging.current = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
  }, [updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative select-none overflow-hidden"
      style={{ aspectRatio: "16/9", cursor: "col-resize" }}
      onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
    >
      {/* Before — full */}
      <img src={before} alt={beforeLabel} className="absolute inset-0 h-full w-full object-cover" draggable={false} />

      {/* After — clipped to right of divider */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <img src={after} alt={afterLabel} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      </div>

      {/* Divider */}
      <div
        className="absolute inset-y-0 z-10"
        style={{ left: `${position}%`, transform: "translateX(-50%)", width: 2, backgroundColor: "#fff" }}
      >
        {/* Handle */}
        <button
          type="button"
          aria-label="Arrastar para comparar"
          className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-white shadow-md focus:outline-none"
          style={{ backgroundColor: "var(--gold)" }}
          onMouseDown={() => { dragging.current = true; }}
          onTouchStart={() => { dragging.current = true; }}
          onTouchEnd={() => { dragging.current = false; }}
        >
          <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path d="M8 4l-4 8 4 8M16 4l4 8-4 8" />
          </svg>
        </button>
      </div>

      {/* Labels */}
      <span
        className="tracked absolute left-4 top-4 bg-black/50 px-3 py-1.5 text-[10px] text-white"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {beforeLabel}
      </span>
      <span
        className="tracked absolute right-4 top-4 bg-black/50 px-3 py-1.5 text-[10px] text-white"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {afterLabel}
      </span>
    </div>
  );
}
