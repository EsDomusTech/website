type PageHeaderProps = {
  titleFirst: string;
  titleSecond: string;
  image: string;
  eyebrow?: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function PageHeader({ titleFirst, titleSecond, image, eyebrow, subtitle, align = "left" }: PageHeaderProps) {
  const isCenter = align === "center";
  return (
    <section className="relative overflow-hidden" style={{ height: 614 }}>
      {/* Full-height image with brightness-50 */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "brightness(0.5)" }}
      />

      {/* Content — aligned to bottom */}
      <div
        className={`absolute inset-0 z-10 flex items-end ${isCenter ? "justify-center text-center" : ""}`}
        style={{ paddingBottom: 80 }}
      >
        <div className="s-wrap w-full">
          <div className={`grid grid-cols-12 ${isCenter ? "justify-items-center" : ""}`}>
            <div className={`col-span-12 md:col-span-8 ${isCenter ? "md:col-start-3 text-center" : ""}`}>
              {eyebrow && (
                <span
                  className="s-label-caps mb-6 block text-white"
                  style={{ letterSpacing: "0.5em" }}
                >
                  {eyebrow}
                </span>
              )}
              <h1 className="s-display-lg text-white">
                {titleFirst}{" "}
                <span style={{ color: "#BE9355" }}>{titleSecond}</span>
              </h1>
              {subtitle && (
                <p
                  className="s-body-lg mt-6 text-white/90"
                  style={{ maxWidth: 560 }}
                >
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
