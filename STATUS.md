# DomusTech — Estado do Projeto

## ✅ Concluído

### Design System & Infraestrutura
- Design system **Structural Elegance** — Oswald + Libre Franklin, gold `#BE9355`, preto `#000000`
- CSS tokens em `styles.css` (`--gold`, `--dark-section`, `--logo-strip`, `--topbar`, `--ghost`, `--font-display`, `--font-body`)
- Utilitários: `container-1100`, `section-pad`, `tracked`, `btn-primary`, `btn-outline`, `btn-outline-white`, `btn-gold`
- `focus-visible` ring dourado para navegação por teclado
- `prefers-reduced-motion` — animações desligadas quando pedido pelo sistema
- `border-radius: 0` global — sharp corners em tudo

### Navbar
- Top-bar (telefone + email + redes sociais) — só em XL
- Nav principal com mega menu + dropdowns hover com delay
- Seletor de idioma (PT/EN/ES) sempre visível
- CTA "Pedir Orçamento" + toggle mobile — sempre visíveis em mobile
- Scroll shadow
- Links activos destacados com underline dourado

### Hero
- Slider 3 slides com auto-play (6s)
- Texto animado por slide (Framer Motion, ease custom)
- Arrows laterais com hover gold
- Progress bars bottom (duração visual por slide)
- Contador `01 / 03` bottom-right — confirmado viewport-relative (section `w-full`, gap 40px consistente em 1440/1920)

### About
- 2 colunas: texto + imagem com badge overlap "Desde 2012 · Porto, Portugal"
- Stats row com fundo `--dark-section`: 12+, 340+, 98+, 15+ com contador animado (useInView)

### Services
- Grid 3×2, ícone + número decorativo fantasma top-right
- Hover: border gold top + icon gold background + gap arrow animado
- `<Link>` correto (TanStack Router, sem page reload)

### Projects (homepage section)
- Grid 2×2, overlay hover + ícone `+` centrado, category + título

### Blog (homepage section)
- Flat cards: imagem topo, category · date, título, excerpt, "Ler Mais →"

### `/blog` (página)
- Grid 2 col + sidebar (Posts Recentes, Categorias)
- Paginação Prev · 1 · 2 · Next (condicional, oculta quando 1 página só)

### VideoTestimonials
- Split 50/50: vídeo promo + carousel testemunhos

### ClientLogos
- Strip logos grayscale + hover color

### CtaBand
- Versão dark (default): fundo `--dark-section`, botão gold
- Versão gold (`variant="gold"`): fundo `--gold`, botão dark — prop disponível para usar em qualquer página

### Footer
- 4 colunas (brand + sociais, contacto, navegação, newsletter)
- Label acessível no input newsletter (`htmlFor` + `aria-label`)
- Contraste do texto corrigido (opacidade 0.35 → 0.60)
- Bottom bar com copyright + links legais

### Páginas internas
- `PageHeader` com banner, eyebrow, título bicolor, subtitle, `align="center"` por default (verificado em /projetos, /termos-e-condicoes, /projetos/lista, /servicos/:slug, /politica-de-privacidade)
- `/empresa` — Sobre Nós
- `/equipa` — Team cards
- `/servicos` — Listagem + páginas de detalhe por slug
- `/projetos` + variantes: filtro, lista, fancy, fancy-filtro
- `/galeria` + masonry
- `/antes-depois` — BeforeAfterSlider drag handle
- `/precos` — Pricing
- `/testemunhos`
- `/blog` — Listagem (grid 3 col)
- `/faq` — Accordion Framer Motion (`height: 0 → auto`, ícone `+` roda 45°, `aria-expanded`)
- `/contacto` — Inputs underline, botão `btn-gold`, iframe Google Maps, campos nome/email/telefone/mensagem
- `/politica-de-privacidade` + `/termos-e-condicoes`

### SEO
- Meta tags + OG por página
- `<link rel="canonical">` por página
- LD+JSON: `LocalBusiness`, `Service`, `FAQPage`, `BlogPosting`, `BreadcrumbList`
- `sitemap.xml` dinâmico

### Dados reais (`site-data.ts`)
- Contacto, redes sociais, equipa, serviços, projetos, blog posts, FAQs

### Audit `/impeccable` (Health Score 12/20 → 10/10 itens, 2026-06-15)
- Navbar dropdowns: `aria-expanded`/`aria-haspopup`/`role=menu`, foco/Escape, sem hover-only
- Contraste: token `--label-muted: #6b6b6b` (AA-safe) substitui `#767676` em contacto/Footer/blog/precos/servicos.index/testemunhos/galeria
- Hex sprawl → CSS vars em Footer.tsx + contacto.tsx (`--gold`, `--muted-foreground`, `--muted`, `--card`, `--background`, `--border`)
- `<MotionConfig reducedMotion="user">` no `__root.tsx` (Framer Motion site-wide)
- `shadow-xl` → `shadow-md` no Navbar (DropdownMenu + LangSelector)
- Meta `author`/`twitter:site` Lovable → DomusTech no `__root.tsx`
- Footer: `<h4>` → `<h3>` (Contacto/Links Rápidos) + `<nav aria-label="Links rápidos">`
- contacto.tsx: shadcn `Input`/`Textarea`/`Select` (`FIELD_CLASS` underline, `focus:border-gold`)
- `--radius-*` zerados (`var(--radius)` = 0) — cantos a 90° mesmo com shadcn
- `@custom-variant dark` morto removido de `styles.css`
- `--foreground` (+ `--card-foreground`/`--popover-foreground`/`--secondary-foreground`, todos eram `#1a1b1b`) → `#000000` (Stitch DESIGN.md canónico); os 17 `#000000` hardcoded (13 contacto.tsx + 4 Footer.tsx) já usavam `var(--foreground)`

### Separadores de secção (2026-06-15)
- `Hero.tsx`: wedge diagonal (`clip-path: polygon(0 100%, 100% 0, 100% 100%)`) no canto inferior direito, cor `var(--background)` — transição Hero → About
- `CtaBand.tsx`: mesmo wedge, cor `var(--muted)` — transição CtaBand → Footer (aplica-se a todas as páginas que usam `<CtaBand />`)
- Verificado via screenshot em `/` (Hero→About) e `/blog` (CtaBand→Footer)

### og:image / twitter:image (2026-06-15)
- `public/og-image.jpg` (1200×630) gerado — fundo `--dark-section`, wordmark DomusTech + tagline + wedge dourado (mesmo motivo diagonal dos separadores)
- `__root.tsx`: `og:image`/`twitter:image`/JSON-LD `image` → `${SITE.domain}/og-image.jpg`; `twitter:card` → `summary_large_image`; adicionado `og:image:width`/`height`

---

## 🔴 Por Fazer

_(nenhum item pendente — todas as tarefas do audit `/impeccable` e ajustes visuais concluídas)_

---

## 🗒️ Notas Técnicas

| Item | Detalhe |
|---|---|
| Stack | React + TypeScript + TanStack Router (SSR via Vinxi/Vite) |
| Animações | Framer Motion — usar `viewport={{ once: true }}` em tudo |
| Imagens | Ainda em `picsum.photos` — substituir por imagens reais antes de lançar |
| Google Maps | Iframe embed sem API key — funciona em produção, não carrega em localhost sem internet |
| `btn-gold` | Novo utilitário em `styles.css` — gold background, white text, hover `#d4a968` |
| `--foreground` | `#000000` (Stitch DESIGN.md canónico) — `--card-foreground`/`--popover-foreground`/`--secondary-foreground` alinhados |
| `CtaBand variant="gold"` | Usar em páginas que já têm fundo escuro acima para criar contraste |
| `public/og-image.jpg` | Social image 1200×630 gerado via HTML+Playwright — regenerar se a marca/tagline mudar |
| Deploy | Lovable — `npm run build` antes de push |
