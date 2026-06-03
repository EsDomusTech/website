## DomusTech — Architecture Landing Page

A single-page, pixel-faithful replica of the Bauen-style architecture site, built on the existing TanStack Start + Tailwind v4 stack. All content in Portuguese as specified, with lorem ipsum body text.

### Design System (src/styles.css)
- Colors as tokens (oklch): `--background` #F5F3F0, `--foreground` #1C1C1C, `--muted-foreground` #6B6B6B, `--accent`/gold #B8965A, dark section #3A3A38, logo strip #F0EEE9, ghost number #EBEBEB.
- Fonts via Google Fonts `<link>` in `__root.tsx` head: Cormorant Garamond (headings), Lato (body). Register `--font-display` and `--font-body` in `@theme`.
- Utility classes: `.section-title` (spaced uppercase, letter-spacing 0.25em, two-word gold-second-word pattern), `.section-pad` (padding: 100px 0), `.container-1100` (max-width 1100px, centered). Smooth scroll via `scroll-behavior: smooth` on html.

### Sections (single home route `src/routes/index.tsx`, composed of components in `src/components/site/`)
1. **Navbar** — fixed white bar, subtle bottom border. Logo left (house icon + "DomusTech" + small-caps tagline). Right nav links (spaced uppercase 12px Lato): Início, Empresa, Serviços, Projetos, Contacto. Vertical social strip (Facebook, Instagram, X, TikTok) fixed to left viewport edge. Mobile: hamburger menu.
2. **Hero** — full-screen slider, 3 slides (picsum seeds arch1/arch2/arch3 at 1600/900), dark overlay, right-aligned vertically-centered text (Cormorant 64px white spaced uppercase headline, 14px Lato subtext, outlined white CTA). Thin circle prev/next arrows + dot pagination. Auto-advance every 5s.
3. **About** — 50/50 split. Left: two-word title + 3 lorem paragraphs. Right: image (seed/office1/700/500) with white corner label tag "PORTO OFFICE".
4. **Projects** — two-word title, 2×2 grid (4 cards), seeds project1–4 (600/400), bottom dark gradient overlay, gold category label + white Cormorant 22px name.
5. **Services** — two-word title, 3-col grid, 6 services (Arquitetura, Design de Interiores, Design Urbano, Planeamento, Modelação 3D, Plano de Décor). Each: thin gold stroke-only SVG icon, spaced uppercase 12px name, lorem description, large ghost number (01–06) bottom-right #EBEBEB 48px.
6. **Blog/News** — two-word title, 2-col cards, seeds news1/news2 (600/400), bottom gradient, gold category+date 11px spaced uppercase, white Cormorant title.
7. **Video + Testimonials** — full-width dark (#3A3A38). Left: gold play-button circle + "VER VÍDEO PROMO". Right: floating white card with "O QUE DIZEM OS CLIENTES?", testimonial paragraph, avatar circle + gold name + gray role, dot pagination.
8. **Client logos** — strip #F0EEE9, 5 evenly-spaced centered thin gold stroke SVG icons.
9. **Footer** — white. Top: 3 columns (Telefone, Email, Morada) gold 11px label + dark value. Bottom: copyright left, centered social icons, "Termos e Condições" right. Minimal.

### Technical
- Images render directly from picsum.photos with the exact seeds (no grey placeholders, no Unsplash).
- Fully responsive: all grids collapse to single column on mobile, hamburger nav, social strip hides/relocates on small screens.
- Nav links smooth-scroll to section ids.
- SVG icons are inline stroke-only (no extra deps); social icons via lucide-react.
- Update `index.tsx` head() with proper title/description/og tags for SEO.

### Notes
- All non-title copy uses lorem ipsum as specified; labels/nav/services use the Portuguese strings given.
- Strictly limited to the four colors plus the dark/strip/ghost shades explicitly named.
