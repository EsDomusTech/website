import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { SITE } from "@/lib/site-data";

export const GALLERY_ITEMS = [
  { id: 1, cat: "Exterior", title: "Villa Atlântico, Fachada", year: "2025", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&auto=format&q=80" },
  { id: 2, cat: "Interior", title: "Loft Boavista, Sala Principal", year: "2025", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop&auto=format&q=80" },
  { id: 3, cat: "Comercial", title: "Edifício Ribeira, Lobby", year: "2024", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format&q=80" },
  { id: 4, cat: "Exterior", title: "Moradia Gaia, Vista Aérea", year: "2024", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&auto=format&q=80" },
  { id: 5, cat: "Detalhe", title: "Materiality, Betão e Madeira", year: "2025", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&auto=format&q=80" },
  { id: 6, cat: "Interior", title: "Cotton House, Cozinha", year: "2024", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&auto=format&q=80" },
  { id: 7, cat: "Urbano", title: "Praça Central, Espaço Público", year: "2023", image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&h=600&fit=crop&auto=format&q=80" },
  { id: 8, cat: "Exterior", title: "Armada Center, Fachada", year: "2024", image: "https://images.unsplash.com/photo-1448630358273-1e5ccc24bc87?w=800&h=600&fit=crop&auto=format&q=80" },
  { id: 9, cat: "Interior", title: "Suite Atlântico, Master", year: "2025", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format&q=80" },
  { id: 10, cat: "Detalhe", title: "Caixilharia, Nó Estrutural", year: "2024", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop&auto=format&q=80" },
  { id: 11, cat: "Comercial", title: "Armada Center, Open Space", year: "2024", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format&q=80" },
  { id: 12, cat: "Urbano", title: "Solar do Douro, Terraço", year: "2023", image: "https://images.unsplash.com/photo-1613490493576-4a48d6622a4a?w=800&h=600&fit=crop&auto=format&q=80" },
];

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria de Imagens | Projectos DomusTech, Porto" },
      { name: "description", content: "Galeria de imagens dos projectos de arquitectura e construção modular DomusTech no Porto." },
      { property: "og:title", content: "Galeria de Imagens | DomusTech Porto" },
      { property: "og:description", content: "Galeria de imagens dos projectos de arquitectura e construção modular DomusTech no Porto." },
      { property: "og:type", content: "website" },
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
                Galeria de <span style={{ color: "var(--label-muted)" }}>Imagens</span>
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
                <img src={item.image} alt={`${item.title}, projeto DomusTech no Porto`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

      <CtaBand title={"Quer o Seu\nProjeto Aqui?"} text="Cada obra é uma história. Deixe-nos contar a sua." label="Iniciar Projeto" />
    </main>
  );
}
