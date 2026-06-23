# DomusTech — Site de Casas Modulares no Porto

## Objetivo
Site institucional premium para empresa de casas modulares no Porto. Estética **Structural Elegance** — inspirada no tema Bauen mas com identidade própria desenvolvida via Stitch MCP. Referência visual: `SAMPLES A SEGUIR/` (PDFs do demo Bauen).

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
    antes-depois.tsx            ← /antes-depois (BeforeAfterSlider)
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
- [x] BeforeAfterSlider: drag handle central, página `/antes-depois`
- [x] Team.tsx: cards de equipa, página `/equipa`
- [x] Rotas: empresa, equipa, serviços, projetos (+ variantes), blog, faq, contacto, galeria, precos, antes-depois, políticas
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

---

### 🔴 Por fazer

_(nenhum item pendente)_

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
