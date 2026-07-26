import { motion } from "framer-motion";

type PageHeaderProps = {
  titleFirst: string;
  titleSecond: string;
  image?: string;
  eyebrow?: string;
  subtitle?: string;
  align?: "left" | "center";
  /** "dark" = current style (dimmed image, white text). "light" = washed-out image fading to solid background, dark text — matches the faded-hero reference. */
  variant?: "dark" | "light";
};

export function PageHeader({ titleFirst, titleSecond, image, eyebrow, subtitle, align = "center", variant = "dark" }: PageHeaderProps) {
  const isCenter = align === "center";
  const isLight = variant === "light";
  return (
    <div className="w-full" style={{ backgroundColor: "var(--background)" }}>
    <section
      className="relative mx-auto max-w-[1440px] overflow-hidden"
      style={{ height: 614, backgroundColor: image ? undefined : isLight ? "var(--background)" : "var(--dark-section)" }}
    >
      {image && (
        <>
          {/* Full-height image — dimmed for dark variant, washed out for light variant */}
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: isLight ? "brightness(1.05)" : "brightness(0.5)" }}
          />

          {/* Light variant — flat, near-opaque white wash over the whole image (uniform ghost texture), plus a bottom fade so the section blends into whatever comes next with no hard edge */}
          {isLight && (
            <>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{ backgroundColor: "rgba(249,249,249,0.88)" }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0"
                style={{ height: "30%", background: "linear-gradient(to bottom, rgba(249,249,249,0) 0%, var(--background) 100%)" }}
              />
            </>
          )}
        </>
      )}

      {/* Content — aligned to bottom */}
      <div
        className={`absolute inset-0 z-10 flex items-end ${isCenter ? "justify-center text-center" : ""}`}
        style={{ paddingBottom: 80 }}
      >
        <div className="s-wrap w-full">
          <div className={`grid grid-cols-12 ${isCenter ? "justify-items-center" : ""}`}>
            <div className={`col-span-12 md:col-span-8 ${isCenter ? "md:col-start-3 text-center" : ""}`}>
              {eyebrow && (
                <motion.span
                  className="s-label-caps mb-6 block"
                  style={{ letterSpacing: "0.5em", color: isLight ? "var(--foreground)" : "#ffffff" }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {eyebrow}
                </motion.span>
              )}
              <motion.h1
                className="s-display-lg"
                style={{ color: isLight ? "var(--foreground)" : "#ffffff" }}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: eyebrow ? 0.1 : 0, ease: "easeOut" }}
              >
                {titleFirst}{" "}
                <span style={{ color: "#BE9355" }}>{titleSecond}</span>
              </motion.h1>
              {subtitle && (
                <motion.p
                  className="s-body-lg mt-6"
                  style={{ maxWidth: 560, color: isLight ? "var(--muted-foreground)" : "rgba(255,255,255,0.9)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: eyebrow ? 0.2 : 0.1, ease: "easeOut" }}
                >
                  {subtitle}
                </motion.p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
