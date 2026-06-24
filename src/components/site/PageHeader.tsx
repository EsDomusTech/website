import { motion } from "framer-motion";

type PageHeaderProps = {
  titleFirst: string;
  titleSecond: string;
  image: string;
  eyebrow?: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function PageHeader({ titleFirst, titleSecond, image, eyebrow, subtitle, align = "center" }: PageHeaderProps) {
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
                <motion.span
                  className="s-label-caps mb-6 block text-white"
                  style={{ letterSpacing: "0.5em" }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {eyebrow}
                </motion.span>
              )}
              <motion.h1
                className="s-display-lg text-white"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: eyebrow ? 0.1 : 0, ease: "easeOut" }}
              >
                {titleFirst}{" "}
                <span style={{ color: "#BE9355" }}>{titleSecond}</span>
              </motion.h1>
              {subtitle && (
                <motion.p
                  className="s-body-lg mt-6 text-white/90"
                  style={{ maxWidth: 560 }}
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
  );
}
