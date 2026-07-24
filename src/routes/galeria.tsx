import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { SITE } from "@/lib/site-data";

export const GALLERY_ITEMS = [
  { id: 1, cat: "Exterior", title: "Moradia T3, Entrada e Jardim", year: "2026", image: "/projects/t3-hero.jpg", slug: "moradia-t3-jardim" },
  { id: 2, cat: "Exterior", title: "Moradia T1 · 48 m², Deck e Fachada Branca", year: "2026", image: "/projects/t1-48-ii-hero.jpg", slug: null },
  { id: 3, cat: "Exterior", title: "Moradia T2 · 72 m², Fachada", year: "2025", image: "/projects/t2-72-hero.jpg", slug: "moradia-t2-72" },
  { id: 4, cat: "Exterior", title: "Moradia T2 · 72 m², Piscina e Deck", year: "2025", image: "/projects/t2-72-piscina.jpg", slug: "moradia-t2-72" },
  { id: 5, cat: "Interior", title: "Moradia T2 · 72 m², Cozinha", year: "2025", image: "/projects/t2-72-cozinha.jpg", slug: "moradia-t2-72" },
  { id: 6, cat: "Detalhe", title: "Moradia T2 · 72 m², Terraço", year: "2025", image: "/projects/t2-72-terraco.jpg", slug: "moradia-t2-72" },
  { id: 7, cat: "Exterior", title: "Moradia T1 · 48 m², Volume Principal", year: "2026", image: "/projects/t1-48-hero.jpg", slug: "moradia-t1-48" },
  { id: 8, cat: "Exterior", title: "Moradia T1 · 48 m², Fachada Bitone", year: "2026", image: "/projects/t1-48-fachada.jpg", slug: "moradia-t1-48" },
  { id: 9, cat: "Estrutura", title: "Moradia T1 · 48 m², Estrutura LSF", year: "2026", image: "/projects/t1-48-estrutura.jpg", slug: "moradia-t1-48" },
  { id: 10, cat: "Exterior", title: "Moradia · 100 m², Pátio Coberto", year: "2026", image: "/projects/m100-hero.jpg", slug: "moradia-100" },
  { id: 11, cat: "Estrutura", title: "Moradia · 100 m², Volumetria em L", year: "2026", image: "/projects/m100-exterior.jpg", slug: "moradia-100" },
  { id: 12, cat: "Exterior", title: "Moradia T2 · 92 m², Implantação dos Módulos", year: "2026", image: "/projects/t2-92-hero.jpg", slug: null },
  { id: 13, cat: "Estrutura", title: "Moradia T2 · 92 m², Fundações Pontuais", year: "2026", image: "/projects/t2-92-exterior.jpg", slug: null },
  { id: 14, cat: "Estrutura", title: "Moradia de Dois Pisos, Painéis de Fachada", year: "2026", image: "/projects/dois-pisos-hero.jpg", slug: null },
  { id: 15, cat: "Estrutura", title: "Moradia de Dois Pisos, Instalações Técnicas", year: "2026", image: "/projects/dois-pisos-instalacoes.jpg", slug: null },
  { id: 16, cat: "Estrutura", title: "Moradia de Dois Pisos, Estrutura Interior LSF", year: "2026", image: "/projects/dois-pisos-estrutura.jpg", slug: null },
  { id: 17, cat: "Interior", title: "Acabamentos Interiores, Gesso Cartonado", year: "2026", image: "/projects/interiores-pladur-01.jpg", slug: null },
  { id: 18, cat: "Interior", title: "Acabamentos Interiores, Corredor em Pladur", year: "2026", image: "/projects/interiores-pladur-02.jpg", slug: null },
];

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria de Imagens | Projectos EsDomusTech, Porto" },
      { name: "description", content: "Galeria de imagens dos projectos de arquitectura e construção modular EsDomusTech no Porto." },
      { property: "og:title", content: "Galeria de Imagens | EsDomusTech Porto" },
      { property: "og:description", content: "Galeria de imagens dos projectos de arquitectura e construção modular EsDomusTech no Porto." },
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
            {GALLERY_ITEMS.map((item, i) => {
              const tileContent = (
                <>
                  <img src={item.image} alt={`${item.title}, projeto EsDomusTech`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/55" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 transition-all duration-400 group-hover:opacity-100">
                    <span className="tracked mb-1 text-[10px] font-medium" style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}>
                      {item.cat} · {item.year}
                    </span>
                    <h3 className="text-[14px] text-white" style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                      {item.title}
                    </h3>
                  </div>
                  {item.slug && (
                    <div className="absolute right-3 top-3 flex h-8 w-8 translate-y-2 items-center justify-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" style={{ backgroundColor: "var(--gold)" }}>
                      <ArrowUpRight className="h-3.5 w-3.5 text-white" />
                    </div>
                  )}
                  <span className="tracked absolute left-3 top-3 bg-black/40 px-2 py-1 text-[10px] text-white" style={{ fontFamily: "var(--font-display)" }}>
                    {String(item.id).padStart(2, "0")}
                  </span>
                </>
              );
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className="group relative overflow-hidden"
                  style={{ aspectRatio: "4/3" }}
                >
                  {item.slug ? (
                    <Link to="/projetos/$slug" params={{ slug: item.slug }} className="block h-full w-full cursor-pointer">
                      {tileContent}
                    </Link>
                  ) : (
                    <div className="h-full w-full">{tileContent}</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand title={"Quer o Seu\nProjeto Aqui?"} text="Cada obra é uma história. Deixe-nos contar a sua." label="Iniciar Projeto" />
    </main>
  );
}
