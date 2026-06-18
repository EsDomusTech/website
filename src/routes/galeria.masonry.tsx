import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { SITE } from "@/lib/site-data";
import { GALLERY_ITEMS } from "./galeria";

// Masonry: items with varying aspect ratios
const MASONRY_ITEMS = GALLERY_ITEMS.map((item, i) => ({
  ...item,
  aspect: [4 / 3, 3 / 4, 1, 4 / 3, 3 / 4, 16 / 9, 4 / 3, 3 / 4, 1, 4 / 3, 16 / 9, 3 / 4][i % 12],
}));

export const Route = createFileRoute("/galeria/masonry")({
  head: () => ({
    meta: [
      { title: "Galeria, Vista Masonry | DomusTech" },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Galeria Masonry | DomusTech" },
      { property: "og:description", content: "Composição orgânica de imagens arquitectónicas em disposição masonry." },
      { property: "og:url", content: `${SITE.domain}/galeria/masonry` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/galeria` }],
  }),
  component: GaleriaMasonryPage,
});

function GaleriaMasonryPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Galeria"
        titleFirst="Image Gallery"
        titleSecond="Masonry"
        subtitle="Composição orgânica de imagens arquitectónicas em disposição masonry."
        image="https://picsum.photos/seed/masonry-hero/1600/900"
      />

      <section className="section-pad" style={{ backgroundColor: "var(--background)" }}>
        <div className="container-1100">
          {/* CSS Columns Masonry */}
          <div style={{ columns: "2 300px", columnGap: "4px" }}>
            {MASONRY_ITEMS.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
                className="group relative mb-1 cursor-pointer overflow-hidden"
                style={{ breakInside: "avoid", display: "block" }}
              >
                <div style={{ paddingBottom: `${(1 / item.aspect) * 100}%`, position: "relative" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/50" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 transition-all duration-400 group-hover:opacity-100">
                    <span className="tracked mb-1 text-[10px] font-medium" style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}>
                      {item.cat} · {item.year}
                    </span>
                    <h3 className="text-[13px] text-white" style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title={"Quer o Seu\nProjeto Aqui?"} text="Cada obra é uma história. Deixe-nos contar a sua." label="Iniciar Projeto" />
    </main>
  );
}
