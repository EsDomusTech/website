# EsDomusTech — Site de Casas Modulares no Porto

## Objetivo
Site institucional premium para empresa de casas modulares no Porto. Estética **Structural Elegance** — inspirada no tema Bauen mas com identidade própria desenvolvida via Stitch MCP. Referência visual: `SAMPLES A SEGUIR/` (PDFs do demo Bauen).

> **Domínio**: o domínio real é `esdomustech.com` (já adquirido), mas **ainda não foi migrado** para este site. Enquanto não migrar, o `SITE.domain` em `site-data.ts` aponta para `https://domustech.lovable.app`. Quando migrar: atualizar `SITE.domain` para `https://esdomustech.com` e rever todos os canonical/og:url.

---

## Stack
- React + TypeScript + TanStack Router (SSR via Vinxi/Vite)
- Tailwind CSS v4 + CSS custom properties
- Framer Motion (animações)
- Shadcn/ui (componentes base, usados pontualmente)
- Deploy: Lovable

Comandos: `npm run dev` · `npm run build`

---

## Estrutura de ficheiros relevante

```
src/
  styles.css              ← design tokens (cores, fontes, utilitários)
  lib/site-data.ts        ← todos os dados: SERVICES, PROJECTS, BLOG_POSTS, FAQS
  components/site/
    Navbar.tsx            ← top-bar + nav principal + mega menu
    Hero.tsx              ← slider homepage (3 slides, arrows, counter, dots)
    About.tsx             ← secção "Quem Somos" + stats counters
    Services.tsx          ← grid 3×2 de serviços (homepage section)
    Projects.tsx          ← grid 2×2 portfólio (homepage section)
    Blog.tsx              ← grid 3 col notícias (homepage section)
    ClientLogos.tsx       ← strip logos parceiros
    CtaBand.tsx           ← banda CTA "Pedir Orçamento"
    Footer.tsx            ← footer 4 colunas
    PageHeader.tsx        ← banner topo das páginas internas
    SectionTitle.tsx      ← título de secção reutilizável (eyebrow + title)
    BeforeAfterSlider.tsx ← drag slider comparação antes/depois
    Team.tsx              ← cards da equipa
    icons.tsx             ← SERVICE_ICONS + LOGO_ICONS (SVG inline)
  routes/
    index.tsx                   ← homepage
    empresa.tsx                 ← /empresa (Sobre Nós)
    equipa.tsx                  ← /equipa (Team)
    servicos.index.tsx          ← /servicos (listagem)
    servicos.$slug.tsx          ← /servicos/:slug (detalhe)
    projetos.index.tsx          ← /projetos (portfólio grid base)
    projetos.$slug.tsx          ← /projetos/:slug (detalhe)
    projetos.filtro.tsx         ← /projetos/filtro (com filtros de categoria)
    projetos.lista.tsx          ← /projetos/lista (vista lista)
    projetos.fancy.tsx          ← /projetos/fancy (estilo editorial)
    projetos.fancy-filtro.tsx   ← /projetos/fancy-filtro
    galeria.tsx                 ← /galeria (grid uniforme)
    galeria.masonry.tsx         ← /galeria/masonry (grid masonry)
    precos.tsx                  ← /precos (pricing)
    blog.tsx                    ← /blog (listagem)
    faq.tsx                     ← /faq (accordion)
    contacto.tsx                ← /contacto (form + dados)
    politica-de-privacidade.tsx ← /politica-de-privacidade
    termos-e-condicoes.tsx      ← /termos-e-condicoes
    sitemap[.]xml.ts            ← sitemap dinâmico
```

---

## Design tokens (styles.css)

| Token | Valor | Uso |
|---|---|---|
| `--gold` / `--primary` | `#BE9355` | Architectural gold — accent principal |
| `--foreground` | `#000000` | Texto principal (preto Stitch) |
| `--muted-foreground` | `#444748` | Texto secundário (warm medium gray) |
| `--label-muted` | `#6B6B6B` | Labels small-caps (AA-safe em `--background`) |
| `--background` | `#F9F9F9` | Fundo off-white canvas |
| `--logo-strip` | `#F0F0F0` | Secções cinza claro |
| `--dark-section` | `#1A1A1A` | Secções escuras |
| `--topbar` | `#111111` | Barra topo navbar |
| `--ghost` | `#EEEEEE` | Elementos quasi-invisíveis (números decorativos) |
| `--font-display` | `"Oswald"` | Títulos, botões, etiquetas |
| `--font-body` | `"Libre Franklin"` | Corpo de texto |

Utilitários CSS:
- `container-1100` — max-width 1140px centrado
- `section-pad` — padding-block 100px
- `tracked` — letter-spacing 0.18em + uppercase
- `btn-primary` / `btn-outline` — estilos de botão reutilizáveis

---

## Estado actual

### ✅ Concluído
- [x] Design system Structural Elegance via Stitch MCP — Oswald + Libre Franklin, gold #BE9355
- [x] Navbar: top-bar (tel + email + sociais) + nav + mega menu + mobile CTA "Pedir Orçamento"
- [x] Navbar: seletor de idiomas **removido** — quando existirem versões PT/EN/ES do site, restaurar `LANGS` + `LangSelector` em `Navbar.tsx` (desktop: junto ao botão "Pedir Orçamento"; mobile overlay: top-bar e bottom-bar)
- [x] Hero slider: 3 slides, texto esquerda, arrows laterais, counter bottom-right, dots
- [x] About section: 2 colunas (texto + imagem), badge "Desde 2012", stats counters animados
- [x] Services grid: 3×2, ícone, título, descrição, número decorativo top-right quasi-fantasma
- [x] Blog section (homepage): flat cards — imagem topo, category · date, título, excerpt, "Ler Mais →"
- [x] `/blog`: grid 2 col + sidebar (Posts Recentes, Categorias) + paginação Prev·1·2·Next
- [x] Projects section (homepage): grid 2×2, hover overlay + ícone `+` centrado, category + título
- [x] ClientLogos: strip logos grayscale + hover color
- [x] CtaBand: banda CTA com título + botão
- [x] Footer: 4 colunas (contacto, nav, serviços, newsletter), barra social, bottom bar
- [x] PageHeader: banner com overlay, título, breadcrumbs (todas as páginas internas)
- [x] BeforeAfterSlider: componente `BeforeAfterSlider.tsx` existe mas página `/antes-depois` **removida** — restaurar rota quando houver imagens reais antes/depois
- [x] Team.tsx: cards de equipa, página `/equipa`
- [x] Rotas: empresa, equipa, serviços, projetos (+ variantes), blog, faq, contacto, galeria, precos, políticas
- [x] SEO: meta tags, canonical, LD+JSON por página, sitemap dinâmico
- [x] Dados reais (contacto, redes sociais, equipa) em `site-data.ts`
- [x] CtaBand: prop `variant="gold"` (fundo `--gold`, botão dark) além da versão dark default
- [x] `/faq`: texto sempre exposto (sem accordion) — SEO-friendly, Google indexa todas as respostas
- [x] `/contacto`: inputs underline (shadcn `Input`/`Textarea`/`Select`), `btn-gold` no submit, iframe Google Maps
- [x] About: stats row com fundo `--dark-section`
- [x] Audit `/impeccable` (12/20 → 10/10 itens): navbar a11y (aria-expanded/haspopup/role=menu, foco/Escape), contraste `--label-muted`, hex sprawl → CSS vars, `MotionConfig reducedMotion="user"`, `shadow-xl`→`shadow-md`, meta `author`/`twitter:site`, Footer `h3`+`<nav aria-label>`, `--radius-*` zerados, `@custom-variant dark` morto removido
- [x] `--foreground` (+ `--card-foreground`/`--popover-foreground`/`--secondary-foreground`) alinhado a `#000000` (Stitch DESIGN.md canónico)
- [x] `PageHeader.tsx`: prop `align?: "left" | "center"` default agora `"center"` (era `"left"`)
- [x] Separadores diagonais (`clip-path`): wedge em `Hero.tsx` (→About) e `CtaBand.tsx` (→Footer)
- [x] `og:image`/`twitter:image`/JSON-LD: `public/og-image.jpg` (1200×630, gerado) referenciado em `__root.tsx`
- [x] Navbar e Footer com fundo `--dark-section` (preto) — sempre, em todos os estados/rotas, para contraste forte com o `--background` off-white do resto da página; lógica `darkHero`/`overHero` removida (texto do header passa a branco fixo)
- [x] **Projetos reais** (2026-07-07): PROJECTS fictícios (Villa Atlântico etc.) e GALLERY_ITEMS Unsplash substituídos por 5 obras reais — fotos de `DomusTech\Trello\Clientes\` otimizadas em `public/projects/` (sharp, 1600px, q80). Nomes anónimos por tipologia ("Moradia T2 · 72 m²"); campo `location` → `spec` (tipologia/área — localizações desconhecidas); `gallery?: string[]` novo no type `Project` renderiza secção "Registo de Obra" no detalhe. Sónia Gaspar (só fotos pladur) ficou apenas na galeria como "Acabamentos Interiores"

---

### 🔴 Por fazer

- [ ] Fotos do estado final de Anderson (T2 92m²), Ema e Quim (100m²) e Ivan Barroso — trocar heros/galerias quando existirem
- [ ] Confirmar tipologia/área de Ivan Barroso e Ema e Quim (dados em falta nas pastas de cliente)
- [ ] 152 vídeos MP4 em `Trello\Clientes\Transporte casa cleila` — potencial vídeo/reel "processo de transporte e montagem"

---

## Convenções de código

- Sem comentários excepto quando o WHY não é óbvio
- Sem `rounded` — bordas sempre a 90° (sharp corners)
- Sem shadows pesadas — só `shadow-md` no máximo quando justificado
- CSS custom properties para todas as cores (nunca hex hardcoded nos components)
- `container-1100` em todas as secções (max-width 1140px)
- `section-pad` para padding vertical uniforme (100px top/bottom)
- Dados de conteúdo sempre em `src/lib/site-data.ts` — nunca hardcoded nos components
- **Sem testemunhos** — secção removida deliberadamente (sem testemunhos reais disponíveis); não adicionar VideoTestimonials, carousels de reviews, ou rota `/testemunhos`
- **Blog: 3 placeholders** em `site-data.ts` (`artigo-1/2/3`) — slugs/títulos/categorias/conteúdo a definir pelo utilizador antes do lançamento; CATEGORIES em `blog.tsx` derivadas dinamicamente de `BLOG_POSTS`
- **FAQ: texto sempre exposto** — sem accordion/dropdown; conteúdo sempre no DOM para indexação por crawlers
- **Cartões de fases removidos de `/precos`** — secção "Plans — editorial rows" (FASE 01 Consulta / FASE 02 Projeto / FASE 03 Chave na Mão) removida a pedido. Para repor, adicionar antes da secção "Estimativas por Tipologia" (linha `{/* Estimativas por Tipologia */}`):

<details>
<summary>Código das fases (colar em precos.tsx)</summary>

```tsx
// Constante PLANS — colar antes de PRICE_NOTES
const PLANS = [
  {
    name: "Consulta",
    label: "FASE 01",
    price: "Gratuito",
    featured: false,
    description: "Para quem está a explorar as possibilidades e quer perceber o potencial do projeto.",
    features: [
      "Reunião inicial de 60 minutos",
      "Análise do terreno ou espaço",
      "Estimativa de custo orientativa",
      "Apresentação de casos de estudo",
      "Sem compromisso",
    ],
    cta: "Agendar Consulta",
    to: "/contacto",
  },
  {
    name: "Projeto",
    label: "FASE 02",
    price: "A partir de 3.500€",
    featured: true,
    description: "Projeto de arquitetura completo, da conceção ao licenciamento, com acompanhamento dedicado.",
    features: [
      "Projeto de arquitetura completo",
      "Renderizações 3D fotorrealistas",
      "Projeto de interiores",
      "Gestão de licenciamento",
      "Caderno de encargos detalhado",
      "Revisões ilimitadas",
    ],
    cta: "Iniciar Projeto",
    to: "/contacto",
  },
  {
    name: "Chave na Mão",
    label: "FASE 03",
    price: "1.350 €/m² + IVA",
    featured: false,
    description: "Construção modular completa: do projeto à entrega da casa pronta a habitar, com gestão integral de todas as fases.",
    features: [
      "Visita técnica, projeto e licenciamento incluídos",
      "Estrutura, casas de banho e cozinha equipadas",
      "Isolamento, pavimentos, janelas e portas",
      "Eletricidade, canalizações e cobertura",
      "Garantia estrutural de 10 anos",
      "Pagamento em 4 prestações de 25% + IVA",
    ],
    cta: "Pedir Orçamento",
    to: "/contacto",
  },
];

// Secção JSX — colar antes de {/* Estimativas por Tipologia */}
      {/* Plans — editorial rows */}
      <section className="py-16 md:py-[120px]" style={{ backgroundColor: "#f3f3f3" }}>
        <div className="s-wrap space-y-4">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                backgroundColor: plan.featured ? "#111111" : "#ffffff",
                borderLeft: `4px solid ${plan.featured ? "#BE9355" : "#e8e8e8"}`,
              }}
            >
              <div className="grid grid-cols-12 gap-6 p-8 md:p-10 items-start">
                <div className="col-span-12 md:col-span-3">
                  <span className="s-label-caps block mb-2" style={{ color: "#BE9355", letterSpacing: "0.25em" }}>
                    {plan.label}
                  </span>
                  <h2 className="text-[1.6rem] font-bold uppercase leading-tight" style={{ fontFamily: "var(--font-display)", color: plan.featured ? "#ffffff" : "#000000", letterSpacing: "0.04em" }}>
                    {plan.name}
                  </h2>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <p className="s-body-md mb-5" style={{ color: plan.featured ? "rgba(255,255,255,0.55)" : "#444748" }}>
                    {plan.description}
                  </p>
                  <p className="s-headline-md" style={{ color: plan.featured ? "#BE9355" : "#000000" }}>
                    {plan.price !== "Gratuito" && (
                      <span className="s-label-caps mr-2" style={{ color: plan.featured ? "rgba(255,255,255,0.4)" : "var(--muted-foreground)" }}>DESDE </span>
                    )}
                    {plan.price}
                  </p>
                </div>
                <ul className="col-span-12 md:col-span-4 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#BE9355" }} />
                      <span className="s-body-md" style={{ color: plan.featured ? "rgba(255,255,255,0.65)" : "#444748" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="col-span-12 md:col-span-2 flex md:justify-end md:items-start">
                  <button
                    type="button"
                    onClick={openConsulta}
                    className="s-label-caps inline-block px-8 py-4 text-center transition-colors duration-300 w-full md:w-auto cursor-pointer"
                    style={{ backgroundColor: plan.featured ? "#BE9355" : "#000000", color: "#ffffff" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = plan.featured ? "#ffffff" : "#BE9355"; (e.currentTarget as HTMLElement).style.color = plan.featured ? "#000000" : "#ffffff"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = plan.featured ? "#BE9355" : "#000000"; (e.currentTarget as HTMLElement).style.color = "#ffffff"; }}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
```
</details>
