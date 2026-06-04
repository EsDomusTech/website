type IconProps = { className?: string; size?: number; style?: React.CSSProperties };

const base = (size = 48) => ({
  width: size,
  height: size,
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function IconBlueprint({ className, size, style }: IconProps) {
  return (
    <svg {...base(size)} className={className} style={style} aria-hidden>
      <rect x="10" y="8" width="44" height="48" rx="1" />
      <path d="M10 20h44M22 8v48M22 20l10 12 10-12M22 44h20" />
    </svg>
  );
}

export function IconInterior({ className, size, style }: IconProps) {
  return (
    <svg {...base(size)} className={className} style={style} aria-hidden>
      <path d="M8 44h48M14 44V28l18-12 18 12v16M26 44V32h12v12" />
      <circle cx="46" cy="22" r="3" />
    </svg>
  );
}

export function IconUrban({ className, size, style }: IconProps) {
  return (
    <svg {...base(size)} className={className} style={style} aria-hidden>
      <path d="M8 56V26l12-8 12 8v30M32 56V18l12-8 12 8v38M14 30h4M14 38h4M14 46h4M40 24h4M40 32h4M40 40h4" />
    </svg>
  );
}

export function IconPlanning({ className, size, style }: IconProps) {
  return (
    <svg {...base(size)} className={className} style={style} aria-hidden>
      <rect x="12" y="10" width="40" height="44" rx="1" />
      <path d="M20 22h24M20 32h24M20 42h14" />
    </svg>
  );
}

export function IconModel3d({ className, size, style }: IconProps) {
  return (
    <svg {...base(size)} className={className} style={style} aria-hidden>
      <path d="M32 8l22 12v24L32 56 10 44V20L32 8z" />
      <path d="M32 8v20M32 28L10 20M32 28l22-8M32 28v28" />
    </svg>
  );
}

export function IconDecor({ className, size, style }: IconProps) {
  return (
    <svg {...base(size)} className={className} style={style} aria-hidden>
      <path d="M32 8c8 8 12 16 12 24a12 12 0 0 1-24 0c0-8 4-16 12-24z" />
      <path d="M32 32v18M24 50h16" />
    </svg>
  );
}

export function IconCompass({ className, size, style }: IconProps) {
  return (
    <svg {...base(size)} className={className} style={style} aria-hidden>
      <circle cx="32" cy="32" r="22" />
      <path d="M40 24l-6 14-14 6 6-14 14-6z" />
    </svg>
  );
}

export function IconArch({ className, size, style }: IconProps) {
  return (
    <svg {...base(size)} className={className} style={style} aria-hidden>
      <path d="M14 54V30a18 18 0 0 1 36 0v24M14 54h36M24 54V34a8 8 0 0 1 16 0v20" />
    </svg>
  );
}

export function IconColumns({ className, size, style }: IconProps) {
  return (
    <svg {...base(size)} className={className} style={style} aria-hidden>
      <path d="M10 18h44M12 22h40M20 22v28M32 22v28M44 22v28M10 54h44" />
    </svg>
  );
}

export const SERVICE_ICONS = [
  IconBlueprint,
  IconInterior,
  IconUrban,
  IconPlanning,
  IconModel3d,
  IconDecor,
];

export const LOGO_ICONS = [
  IconArch,
  IconColumns,
  IconCompass,
  IconBlueprint,
  IconModel3d,
];
