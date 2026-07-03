---
name: DomusTech
description: Casas modulares premium no Porto — sistema "Structural Elegance": gold arquitetónico sobre off-black/off-white, tipografia Oswald + Libre Franklin, cantos a 90°.
colors:
  architectural-gold: "#BE9355"
  canvas-white: "#F9F9F9"
  deep-graphite: "#1A1B1B"
  warm-medium-gray: "#444748"
  structural-black: "#1A1A1A"
  panel-gray: "#F0F0F0"
  ghost-gray: "#EEEEEE"
  hairline-gray: "#E2E2E2"
  topbar-black: "#111111"
typography:
  display:
    fontFamily: "Oswald, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 6vw, 5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.05em"
  headline:
    fontFamily: "Oswald, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "0.03em"
  title:
    fontFamily: "Oswald, Segoe UI, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: "2rem"
    letterSpacing: "0.02em"
  body:
    fontFamily: "Libre Franklin, Helvetica Neue, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 300
    lineHeight: "1.875rem"
    letterSpacing: "0.01em"
  label:
    fontFamily: "Oswald, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: "1rem"
    letterSpacing: "0.2em"
rounded:
  default: "0px"
spacing:
  section: "120px"
  container-max: "1440px"
  gutter: "2rem"
  gutter-fluid: "clamp(1.5rem, 5.5vw, 5rem)"
components:
  button-primary:
    backgroundColor: "{colors.structural-black}"
    textColor: "#FFFFFF"
    typography: "{typography.label}"
    rounded: "{rounded.default}"
    padding: "14px 40px"
  button-primary-hover:
    backgroundColor: "{colors.architectural-gold}"
    textColor: "#FFFFFF"
  button-gold:
    backgroundColor: "{colors.architectural-gold}"
    textColor: "#FFFFFF"
    typography: "{typography.label}"
    rounded: "{rounded.default}"
    padding: "14px 40px"
  button-gold-hover:
    backgroundColor: "#D4A968"
    textColor: "#FFFFFF"
---

# Design System: DomusTech — Structural Elegance

## 1. Overview

**Creative North Star: "Structural Elegance"**

DomusTech vende casas modulares a famílias que estão a comparar construtoras — a interface tem de transmitir, em segundos, "isto é uma marca de arquitetura, não uma construtora genérica". O sistema parte de um plano arquitetónico: linhas a 90°, blocos de cor sólidos (off-black sobre off-white), um único acento dourado (#BE9355) usado com moderação para CTAs e estados de hover, e tipografia Oswald maiúscula e tracked a fazer o papel de "rótulos de planta técnica". O corpo de texto em Libre Franklin Light mantém a leitura humana e acessível por baixo desse rigor.

O sistema rejeita explicitamente o **AI slop genérico**: sem fundos cream/sand SaaS, sem gradient text, sem cards com `border-radius` grande, sem eyebrows numerados "01 / 02 / 03" repetidos em cada secção, sem ghost-cards (`border` 1px + `box-shadow` largo). Rejeita também a **estética playful/infantil** (cores vivas, formas orgânicas, ilustrações soltas) e os **clichés de construtora tradicional** (stock photos de capacetes, layouts pesados).

**Key Characteristics:**
- Cantos a 90° em absolutamente tudo — nenhum `border-radius` > 0.
- Um único acento (`--gold`) usado em ≤10% de qualquer ecrã — CTAs, hovers, sublinhados ativos, números fantasma.
- Blocos de cor sólidos (`--background` ↔ `--dark-section`) criam contraste, não sombras.
- Tipografia em maiúsculas tracked (Oswald) para tudo o que é "label" — títulos, botões, nav, legendas.
- Grelha consistente: `container-1100` / `s-wrap` (1440px) + `section-pad` (120px) em todas as páginas.

## 2. Colors

Paleta restrita: neutros arquitetónicos (off-white a off-black) com um único acento dourado. O dourado nunca compete com o preto — ou um domina a secção, ou o outro.

### Primary
- **Architectural Gold** (`#BE9355`): único acento da marca. CTAs (`btn-gold`, hover de `btn-primary`), sublinhado ativo da navegação, números/ícones decorativos, focus ring. Usado com moderação — nunca como cor de fundo de uma secção inteira.

### Neutral
- **Canvas White** (`#F9F9F9`): fundo base de quase todas as secções claras.
- **Deep Graphite** (`#1A1B1B`): cor do texto `--foreground` e dos headings; também usado como cor de texto em `btn-outline`.
- **Warm Medium Gray** (`#444748`): `--muted-foreground` — corpo de texto sobre `--background`.
- **Structural Black** (`#1A1A1A`): `--dark-section` — fundo das secções escuras (stats, CtaBand default, footer) e cor de fundo de `btn-primary`.
- **Panel Gray** (`#F0F0F0`): `--logo-strip` — fundo de secções secundárias (faixa de logos, hover de itens de menu).
- **Ghost Gray** (`#EEEEEE`): `--ghost` — números decorativos quase invisíveis (ex.: "01" por trás dos cards de serviços).
- **Hairline Gray** (`#E2E2E2`): `--border` / `--input` — divisórias e contornos neutros.
- **Topbar Black** (`#111111`): fundo da top-bar (contactos + redes sociais) da navbar.

### Named Rules
**The One Accent Rule.** `--gold` aparece em CTAs, hovers, estados ativos e detalhes decorativos — nunca como `background-color` de uma secção completa. Se uma secção precisa de destaque forte, usa `--dark-section`, não dourado.

**The No-Hex Rule.** Cores só entram em componentes via custom properties (`var(--gold)`, `var(--dark-section)`, ...). Um hex novo no JSX/CSS é sinal de token em falta, não de exceção.

## 3. Typography

**Display Font:** Oswald (com fallback "Segoe UI", sans-serif)
**Body Font:** Libre Franklin (com fallback "Helvetica Neue", sans-serif)

**Character:** Par de contraste clássico — Oswald é um grotesco condensado, vertical e técnico (usado sempre em maiúsculas, tracked) para tudo o que é estrutura/label; Libre Franklin Light é humanista e respirável para leitura longa. Um é o "desenho técnico", o outro é a "memória descritiva" ao lado.

### Hierarchy
- **Display** (400, `clamp(2rem, 6vw, 5rem)`, line-height 1.1, letter-spacing 0.05em, uppercase): heróis de página, `s-display-lg`. Reservado a 1 por página.
- **Headline** (400, `clamp(2rem, 4vw, 3rem)`, line-height 1.15, letter-spacing 0.03em, uppercase): títulos de secção (`SectionTitle`), `s-headline-lg`.
- **Title** (400, 1.5rem / 2rem, letter-spacing 0.02em, uppercase): títulos de card/subsecção, `s-headline-md`.
- **Body** (300, base 15px / line-height 1.75 no body global; `s-body-lg` 1.125rem/1.875rem para leads): texto corrido, limitar a 65–75ch.
- **Label** (500, 0.75rem, letter-spacing 0.2em, uppercase): botões, nav, legendas, kickers — `s-label-caps`.

### Named Rules
**The All-Caps Label Rule.** Qualquer texto Oswald é maiúsculo e tracked (≥0.02em). Oswald em minúsculas/sem tracking é sinal de erro, não de variação.

**The Single Display Rule.** No máximo um elemento `s-display-lg` por página (o título do Hero/PageHeader). Secções usam `headline` ou `title`, nunca display.

## 4. Elevation

Sistema **flat por defeito** — não há linguagem de sombras. Profundidade vem de blocos de cor sólidos (`--background` vs `--dark-section` vs `--logo-strip`) e de hairlines (`--border`), não de `box-shadow`. Quando uma sombra é mesmo necessária (ex.: dropdown da navbar sobre conteúdo), usa-se no máximo `shadow-md` — nunca sombras largas/difusas tipo "ghost card".

### Named Rules
**The Flat-By-Default Rule.** Superfícies não têm sombra em repouso. Se precisares de separar um elemento do fundo, muda a cor de fundo ou adiciona uma hairline (`border-top`/`border` 1px `--border`), não uma sombra.

**The No Ghost-Card Rule.** Nunca combinar `border: 1px solid` com `box-shadow` de blur ≥16px no mesmo elemento. Escolhe um: hairline OU `shadow-md` pontual.

## 5. Components

### Buttons
- **Shape:** retângulo puro, `border-radius: 0` (`{rounded.default}`).
- **Primary (`btn-primary`):** fundo Structural Black (`#1A1A1A`), texto branco, tipografia `label` (Oswald 500, 11px, 0.2em, uppercase), padding `14px 40px`. Hover: fundo → Architectural Gold (`#BE9355`), transição `0.25s`.
- **Gold (`btn-gold`):** fundo Architectural Gold, texto branco, mesma tipografia/padding. Hover: fundo → `#D4A968` (dourado mais claro).
- **Outline (`btn-outline`):** transparente, `border: 1px solid #1B1B1B`, texto Deep Graphite, padding `13px 39px` (1px a menos para compensar a borda).
- **Outline White (`btn-outline-white`):** para fundos `--dark-section` — `border: 1px solid rgba(255,255,255,0.6)`, texto branco.

### Navigation
- **Links:** Oswald 11px, 0.12em tracked, uppercase. Hover e estado ativo usam `color: var(--gold)` mais um pseudo-elemento `after` de 1px (`height: 1px`) que cresce de `width: 0` para `width: 100%` em 300ms — sublinhado dourado animado. Estado ativo nasce já com `width: 100%`.
- **Mega menu / dropdowns:** painel com `border-top: 2px solid var(--gold)`; itens com hover `background: var(--logo-strip)` + `color: var(--gold)`.
- **Mobile:** labels em Oswald maiúsculo, 1.6rem–2rem, tracking 0.2em, hover/active → `var(--gold)`.

### Cards / Containers
- **Corner Style:** `0px` em todos os cards.
- **Background:** branco (`--card` / `#FFFFFF`) sobre `--background`, ou `--background` simples.
- **Shadow Strategy:** nenhuma por defeito (ver Elevation). Distinção vem de `border-top` ou de mudança de fundo no hover.
- **Border:** sem borda em repouso; estados de hover usam `border-top` 1px que muda de cor (ver Service Card abaixo).

### Inputs / Fields
- **Style:** "underline-style" — sem caixa/borda completa, apenas `border-bottom`, label acima do campo, fundo transparente.
- **Focus:** `outline: 2px solid var(--gold)` com `outline-offset: 2px` (regra global `:focus-visible`).
- **Erro/Disabled:** seguir o mesmo tratamento underline, trocando a cor da borda inferior; não introduzir caixas/sombras de erro.

### Service Card (signature)
Grid 3×2 na homepage/`/servicos`. Cada card tem `border-top: 1px solid var(--border)` em repouso e um número decorativo (`01`, `02`, ...) em `--ghost` (#EEEEEE) no canto superior direito — quase invisível, só legível de perto. No hover, o `border-top` passa a `var(--gold)`, o ícone do serviço ganha fundo dourado, e a seta "→" desliza (`translateX`) com `transition-duration: 500ms`. É o único sítio do sistema onde um "número de secção" é aceitável — porque é decorativo/fantasma, não um eyebrow `01 · About`.

## 6. Do's and Don'ts

### Do:
- **Do** manter `border-radius: 0` em botões, cards, inputs, modais — sem excecões.
- **Do** usar `--gold` apenas em CTAs, hovers, sublinhados ativos e detalhes decorativos (≤10% do ecrã).
- **Do** criar contraste com blocos de cor (`--background` ↔ `--dark-section` ↔ `--logo-strip`), não com sombras.
- **Do** manter toda a tipografia Oswald em maiúsculas + tracking ≥0.02em.
- **Do** ler/escrever conteúdo em `site-data.ts` — nunca strings hardcoded em componentes.

### Don't:
- **Don't** introduzir fundos cream/sand "SaaS", gradient text, ou cards com `border-radius` grande — é o AI slop genérico que este sistema rejeita.
- **Don't** repetir eyebrows numerados "01 / 02 / 03" no topo de cada secção — o único número decorativo aceitável é o "ghost number" dos Service Cards.
- **Don't** combinar `border: 1px solid` com `box-shadow` de blur ≥16px (ghost-card).
- **Don't** usar cores vivas saturadas, formas orgânicas ou ilustrações sketch/doodle — contraria o registo premium/arquitetónico e o anti-reference "playful/infantil".
- **Don't** usar stock photos genéricas de capacetes/obra ou layouts densos típicos de construtora tradicional.
