import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { SITE } from "@/lib/site-data";

export const GALLERY_ITEMS = [
  { id: 1, cat: "Exterior", title: "Villa Atlântico — Fachada", year: "2025", image: "https://picsum.photos/seed/gal1/800/600" },
  { id: 2, cat: "Interior", title: "Loft Boavista — Sala Principal", year: "2025", image: "https://picsum.photos/seed/gal2/800/600" },
  { id: 3, cat: "Comercial", title: "Edifício Ribeira — Lobby", year: "2024", image: "https://picsum.photos/seed/gal3/800/600" },
  { id: 4, cat: "Exterior", title: "Moradia Gaia — Vista Aérea", year: "2024", image: "https://picsum.photos/seed/gal4/800/600" },
  { id: 5, cat: "Detalhe", title: "Materiality — Betão e Madeira", year: "2025", image: "https://picsum.photos/seed/gal5/800/600" },
  { id: 6, cat: "Interior", title: "Cotton House — Cozinha", year: "2024", image: "https://picsum.photos/seed/gal6/800/600" },
  { id: 7, cat: "Urbano", title: "Praça Central — Espaço Público", year: "2023", image: "https://picsum.photos/seed/gal7/800/600" },
  { id: 8, cat: "Exterior", title: "Armada Center — Fachada", year: "2024", image: "https://picsum.photos/seed/gal8/800/600" },
  { id: 9, cat: "Interior", title: "Suite Atlântico — Master", year: "2025", image: "https://picsum.photos/seed/gal9/800/600" },
  { id: 10, cat: "Detalhe", title: "Caixilharia — Nó Estrutural", year: "2024", image: "https://picsum.photos/seed/gal10/800/600" },
  { id: 11, cat: "Comercial", title: "Armada Center — Open Space", year: "2024", image: "https://picsum.photos/seed/gal11/800/600" },
  { id: 12, cat: "Urbano", title: "Solar do Douro — Terraço", year: "2023", image: "https://picsum.photos/seed/gal12/800/600" },
];

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria de Imagens | Projectos DomusTech — Porto" },
      { name: "description", content: "Galeria de imagens dos projectos de arquitectura e construção modular DomusTech no Porto." },
      { property: "og:url", content: `${SITE.domain}/galeria` },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/galeria` }],
  }),
  component: GaleriaPage,
});

function GaleriaPage() {
  return (
    <main style={{ backgroundColor: "#f9f9f9" }}>

      {/* Hero — display-lg editorial, sem imagem */}
      <header style={{ paddingTop: 120, paddingBottom: 64 }}>
        <div className="s-wrap">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 md:col-span-8">
              <span className="s-label-caps mb-6 block" style={{ color: "#BE9355", letterSpacing: "0.3em" }}>
                Portfólio Visual
              </span>
              <h1 className="s-display-lg leading-none" style={{ color: "#000000" }}>
                Galeria de <span style={{ color: "#999999" }}>Imagens</span>
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4 pb-4">
              <p className="s-body-lg" style={{ color: "#444748", maxWidth: 300 }}>
                Uma curadoria de imagens que documentam a precisão estrutural e a poesia espacial dos nossos projetos.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section style={{ paddingBottom: 120 }}>
        <div className="s-wrap">
          <div className="grid grid-cols-2 gap-1 lg:grid-cols-3">
            {GALLERY_ITEMS.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="group relative overflow-hidden cursor-pointer"
                style={{ aspectRatio: "4/3" }}
              >
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/55" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 transition-all duration-400 group-hover:opacity-100">
                  <span className="tracked mb-1 text-[10px] font-medium" style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}>
                    {item.cat} · {item.year}
                  </span>
                  <h3 className="text-[14px] text-white" style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                    {item.title}
                  </h3>
                </div>
                <div className="absolute right-3 top-3 flex h-8 w-8 translate-y-2 items-center justify-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" style={{ backgroundColor: "var(--gold)" }}>
                  <ArrowUpRight className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="tracked absolute left-3 top-3 bg-black/40 px-2 py-1 text-[10px] text-white" style={{ fontFamily: "var(--font-display)" }}>
                  {String(item.id).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Quer o Seu\nProjeto Aqui?" text="Cada obra é uma história. Deixe-nos contar a sua." label="Iniciar Projeto" />
    </main>
  );
}
