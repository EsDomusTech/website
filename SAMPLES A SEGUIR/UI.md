# UI.md — Bauen "Multi Classic Slider Light"
## Guia completo de fidelidade máxima para recriar no Lovable

**Template original:** webredox.net/demo/wp/bauen-demo/multi-classic-slider-light  
**Design system:** Structural Elegance (Google Stitch)  
**Fontes primárias:** `structural_elegance/DESIGN.md` + todos os `code.html` por página

---

## PARTE I — SISTEMA DE DESIGN BASE

### 1.1 Filosofia

"Minimalist Architecture" — clareza estrutural, editorial de alta qualidade, luxo quieto.  
O espaço negativo é funcional: guia o olhar, cria calma, precisão e autoridade sem esforço.  
Cada elemento tem propósito. Eliminar o supérfluo para revelar o essencial.

### 1.2 Linguagem de Formas

- **Border radius: 0px absolutamente em tudo** — cantos 90°  
- Única exceção: `border-radius: 9999px` para indicadores circulares (play buttons, avatares)  
- **Sem drop shadows** — profundidade via camadas tonais exclusivamente  
- **Sem gradientes** — overlays de imagem são black/30 ou primary/40 flat  
- **Imagens portfolio: grayscale por defeito → cor no hover**

### 1.3 Paleta de Cores

| Token | Hex | Uso |
|---|---|---|
| `background` | `#F9F9F9` | Canvas principal (off-white quente) |
| `primary` | `#000000` | Texto principal, botões primários, linhas estruturais |
| `primary-container` | `#1B1B1B` | Top bar navbar, botão Inquire, secções escuras |
| `architectural-gold` | `#BE9355` | Accent único — eyebrows, hover, CTAs ativos, ícones |
| `on-primary` | `#FFFFFF` | Texto sobre fundos escuros |
| `pure-white` | `#FFFFFF` | Cards flutuantes, texto sobre imagens, botões ghost hover |
| `on-surface` | `#1A1C1C` | Texto principal (variante off-black) |
| `on-surface-variant` | `#444748` | Parágrafos body, texto secundário |
| `muted-gray` | `#999999` | Metadados, números ghost, links footer |
| `on-primary-container` | `#858383` | Texto sobre fundos escuros médios |
| `surface` | `#F9F9F9` | Alias de background |
| `surface-container` | `#EEEEEE` | Footer, secções cinza |
| `surface-container-low` | `#F3F3F3` | Hover de linhas de serviço, secções alternadas |
| `surface-container-high` | `#E8E8E8` | Dividers, bordas |
| `surface-container-highest` | `#E2E2E2` | Números decorativos ghost, separadores de grid |
| `surface-container-lowest` | `#FFFFFF` | Cards com lift sobre background |
| `outline` | `#747878` | Bordas newsletter, elementos médios |
| `outline-variant` | `#C4C7C7` | Dividers subtis, bordas de cards |

**Regra de uso do gold:** Nunca como fundo de secção (exceção: tag "MOST SELECTED" em pricing).  
**Regra do branco puro:** Só para cards ou formulários que precisam elevar visualmente sobre #F9F9F9.

### 1.4 Tipografia

**Fontes Google:**
```
Oswald: wght 200;300;400;500;600;700
Libre Franklin: wght 100;200;300;400;500;600;700
```

**Escala completa:**

| Token | Fonte | Size | Line-height | Letter-spacing | Weight |
|---|---|---|---|---|---|
| `display-lg` | Oswald | 80px | 90px | 0.05em | 400 |
| `headline-lg` | Oswald | 48px | 56px | 0.03em | 400 |
| `headline-lg-mobile` | Oswald | 32px | 40px | 0.03em | 400 |
| `headline-md` | Oswald | 24px | 32px | 0.02em | 400 |
| `body-lg` | Libre Franklin | 18px | 30px | 0.01em | 300 |
| `body-md` | Libre Franklin | 15px | 26px | 0em | 400 |
| `label-caps` | Oswald | 12px | 16px | 0.2em | 500 |

**Regras:**
- Headlines Oswald sempre **UPPERCASE**
- `label-caps` tem tracking exagerado (0.2em) — diferencia de body
- `body-lg` weight 300 (light) para feel "airy"
- Line heights ~1.6-1.7x para layout respirável
- Text selection: `selection:bg-architectural-gold selection:text-white`
- Texto outline decorativo: `-webkit-text-stroke: 1px #1a1c1c; color: transparent`

### 1.5 Layout & Espaçamento

| Token | Valor |
|---|---|
| `container-max` | 1440px |
| `margin-desktop` | 80px |
| `margin-mobile` | 24px |
| `gutter` | 32px |
| `section-padding` | 120px |

- Grid 12 colunas, 32px gutters (`grid grid-cols-12 gap-gutter`)
- Container: `max-w-container-max mx-auto px-margin-desktop`
- Assimetria intencional: 5+7, 7+4, 8+4, etc.
- Mobile section-padding reduz para 64px; colunas colapsam para 12

**Scrollbar customizada (toda a app):**
```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #f9f9f9; }
::-webkit-scrollbar-thumb { background: #1b1b1b; }
/* Variante video gallery: */
::-webkit-scrollbar-thumb { background: #BE9355; }
```

### 1.6 Tailwind Config (colar no Lovable)

```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        "background": "#f9f9f9",
        "primary": "#000000",
        "on-primary": "#ffffff",
        "primary-container": "#1b1b1b",
        "on-primary-container": "#858383",
        "architectural-gold": "#BE9355",
        "pure-white": "#FFFFFF",
        "muted-gray": "#999999",
        "on-surface": "#1a1c1c",
        "on-surface-variant": "#444748",
        "on-background": "#1a1c1c",
        "surface": "#f9f9f9",
        "surface-bright": "#f9f9f9",
        "surface-container": "#eeeeee",
        "surface-container-low": "#f3f3f3",
        "surface-container-high": "#e8e8e8",
        "surface-container-highest": "#e2e2e2",
        "surface-container-lowest": "#ffffff",
        "surface-dim": "#dadada",
        "surface-tint": "#5f5e5e",
        "surface-variant": "#e2e2e2",
        "outline": "#747878",
        "outline-variant": "#c4c7c7",
        "inverse-surface": "#2f3131",
        "inverse-on-surface": "#f1f1f1",
        "inverse-primary": "#c8c6c5",
        "primary-fixed": "#e5e2e1",
        "primary-fixed-dim": "#c8c6c5",
        "on-primary-fixed": "#1b1b1b",
        "on-primary-fixed-variant": "#474746",
        "secondary": "#7b581f",
        "on-secondary": "#ffffff",
        "secondary-container": "#fdcc89",
        "on-secondary-container": "#78551d",
        "secondary-fixed": "#ffddb2",
        "secondary-fixed-dim": "#eebf7c",
        "on-secondary-fixed": "#291800",
        "on-secondary-fixed-variant": "#604008",
        "tertiary": "#000000",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#1a1c1c",
        "on-tertiary-container": "#838484",
        "tertiary-fixed": "#e3e2e2",
        "tertiary-fixed-dim": "#c7c6c6",
        "on-tertiary-fixed": "#1a1c1c",
        "on-tertiary-fixed-variant": "#464747",
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a"
      },
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "9999px"
      },
      spacing: {
        "container-max": "1440px",
        "section-padding": "120px",
        "gutter": "32px",
        "margin-desktop": "80px",
        "margin-mobile": "24px"
      },
      fontFamily: {
        "display-lg": ["Oswald"],
        "headline-lg": ["Oswald"],
        "headline-lg-mobile": ["Oswald"],
        "headline-md": ["Oswald"],
        "label-caps": ["Oswald"],
        "body-lg": ["Libre Franklin"],
        "body-md": ["Libre Franklin"]
      },
      fontSize: {
        "display-lg": ["80px", { lineHeight:"90px", letterSpacing:"0.05em", fontWeight:"400" }],
        "headline-lg": ["48px", { lineHeight:"56px", letterSpacing:"0.03em", fontWeight:"400" }],
        "headline-lg-mobile": ["32px", { lineHeight:"40px", letterSpacing:"0.03em", fontWeight:"400" }],
        "headline-md": ["24px", { lineHeight:"32px", letterSpacing:"0.02em", fontWeight:"400" }],
        "body-lg": ["18px", { lineHeight:"30px", letterSpacing:"0.01em", fontWeight:"300" }],
        "body-md": ["15px", { lineHeight:"26px", letterSpacing:"0em", fontWeight:"400" }],
        "label-caps": ["12px", { lineHeight:"16px", letterSpacing:"0.2em", fontWeight:"500" }]
      }
    }
  }
}
```

---

## PARTE II — COMPONENTES GLOBAIS

### 2.1 Navbar

**Estrutura:**
```
[Logo / Nome] ——— [HOME] [ABOUT] [PROJECTS] [SERVICES] [CONTACT] ——— [INQUIRE]
```

- Fundo: `bg-background` sticky top-0 z-50
- Padding vertical: `py-8` → `py-4` ao fazer scroll > 50px
- Logo: imagem `h-12 w-auto` OU texto `font-headline-md tracking-widest uppercase`
- Links: `font-label-caps text-label-caps tracking-widest`
- Link ativo: `text-architectural-gold border-b border-architectural-gold pb-1`
- Link hover: `hover:text-architectural-gold transition-colors duration-300` + animação `line-draw`
- Botão Inquire: `bg-primary text-on-primary px-8 py-3 font-label-caps hover:bg-architectural-gold`

**CSS line-draw (hover dos nav links):**
```css
.nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -4px;
    left: 0;
    background-color: #BE9355;
    transition: width 0.3s ease;
}
.nav-link:hover::after { width: 100%; }
```

**Mobile menu (overlay):**
```html
<div class="fixed inset-0 bg-background z-[60] transform translate-x-full 
            transition-transform duration-500 flex flex-col p-8">
  <!-- close icon -->
  <div class="flex flex-col gap-8 mt-12">
    <!-- Links: font-headline-lg, border-b border-surface-container-highest pb-4 -->
    <!-- Link ativo: text-architectural-gold -->
  </div>
</div>
```

**JS scroll:**
```js
window.onscroll = () => {
    if (window.pageYOffset > 50) {
        header.classList.add('py-4', 'shadow-sm');
        header.classList.remove('py-8');
    } else {
        header.classList.add('py-8');
        header.classList.remove('py-4', 'shadow-sm');
    }
};
```

### 2.2 Footer (3 variantes usadas)

**Variante padrão (4 colunas):**
```
bg-surface-container, py-section-padding
grid grid-cols-12 px-margin-desktop gap-gutter

col-span-4: Logo/nome (headline-md) + tagline (body-md muted-gray) + sociais (label-caps)
col-span-4: "CONTACT" — Material icons (text-architectural-gold) + dados (body-md)
col-span-4: "QUICK LINKS" — grid 2 cols body-md muted-gray → hover:text-primary
            OU newsletter (label-caps header + input border-b + submit)

Bottom bar (col-span-12, border-t border-outline-variant, mt-20 pt-8):
  flex justify-between: copyright + policies/language
```

**Input newsletter no footer:**
```html
<div class="flex border-b border-outline-variant py-2">
  <input class="bg-transparent border-none focus:ring-0 w-full font-label-caps 
                text-label-caps placeholder-muted-gray" placeholder="EMAIL ADDRESS" type="email"/>
  <button class="font-label-caps text-label-caps text-primary hover:text-architectural-gold">
    SUBMIT
  </button>
</div>
```

**Variante compacta (2 colunas):**
```
col-span-6: Nome + tagline + sociais
col-span-3: Navegação (label-caps header, body-md muted-gray links)
col-span-3: Social/Connect
Bottom bar: mesmo padrão
```

### 2.3 Botões

| Tipo | Pattern | Hover |
|---|---|---|
| Primary dark | `bg-primary text-on-primary px-8 py-3 font-label-caps tracking-widest` | `hover:bg-architectural-gold` |
| Primary hero | `bg-architectural-gold text-pure-white px-10 py-5 font-label-caps tracking-widest` | `hover:bg-pure-white hover:text-primary` |
| Ghost | `border border-pure-white text-pure-white px-12 py-5 font-label-caps` | `hover:bg-pure-white hover:text-primary` |
| Ghost dark | `border border-primary text-primary px-12 py-5 font-label-caps` | `hover:bg-primary hover:text-on-primary` |
| Text + linha | `font-label-caps border-b border-primary pb-1 tracking-widest` | `hover:text-architectural-gold hover:border-architectural-gold` |
| Text + seta | `inline-flex items-center gap-4 group font-label-caps` | seta `group-hover:translate-x-2` |

**Regra absoluta:** `border-radius: 0px` em todos os botões.

### 2.4 Padrão Eyebrow + Título

Usado em todas as secções:
```html
<span class="font-label-caps text-label-caps text-architectural-gold 
             tracking-[0.3em] mb-4 block uppercase">
  EYEBROW LABEL
</span>
<h2 class="font-headline-lg text-headline-lg text-primary">
  SECTION TITLE
</h2>
```

### 2.5 Animações & Micro-interações

**Scroll reveal (universal):**
```css
.reveal-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal-on-scroll.visible { opacity: 1; transform: translateY(0); }
```
```js
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
```

**Stagger para múltiplos elementos:**
```css
.stagger-1 { transition-delay: 100ms; }
.stagger-2 { transition-delay: 200ms; }
.stagger-3 { transition-delay: 300ms; }
.stagger-4 { transition-delay: 400ms; }
```

**Image zoom universal:**
```css
.image-zoom-container { overflow: hidden; }
.image-zoom-container img { transition: transform 1.5s ease-out; }
.image-zoom-container:hover img { transform: scale(1.05); }
```

**Material Symbols config:**
```css
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}
```

---

## PARTE III — PÁGINAS

### 3.1 Homepage

**Secção 1 — Hero Slider**
```
h-screen overflow-hidden, relative

Imagem: w-full h-full object-cover
Overlay: bg-black/30 (z-10)

Conteúdo (z-20, px-margin-desktop, alinhado base):
  └── w-full md:w-2/3
       ├── Eyebrow: label-caps, text-pure-white, tracking-[0.5em], uppercase, mb-6
       ├── H1: font-display-lg, text-pure-white, mb-8
       │     palavra accent: italic text-architectural-gold
       ├── Parágrafo: body-lg, text-pure-white/80, max-w-xl, mb-12
       └── Botões: flex gap-8
            ├── "VIEW PROJECTS" → bg-architectural-gold, hover: bg-white text-primary
            └── "LEARN MORE" → text ghost + w-12 h-px bg-white, group-hover:w-16

Contador slider (bottom-right, z-20):
  flex items-center gap-12:
  ├── Número: headline-md, text-pure-white + label-caps /04 text-pure-white/50
  └── Barra: w-32 h-px bg-white/20, fill gold w-1/4
```

**Animação entrada hero:**
```js
heroText.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 1s ease-out ' + (i * 0.2) + 's';
    setTimeout(() => { el.style.opacity='1'; el.style.transform='translateY(0)'; }, 100);
});
```

**Secção 2 — About (homepage)**
```
py-section-padding px-margin-desktop bg-background

grid grid-cols-12 gap-gutter items-start:
├── col-span-5:
│    ├── Eyebrow gold tracking-[0.3em]
│    └── H2 headline-lg
└── col-span-7:
     ├── Parágrafo body-lg text-on-surface-variant
     └── grid grid-cols-2 gap-gutter border-t border-outline-variant py-8
          ├── [headline-md + body-md muted]
          └── [headline-md + body-md muted]
```

**Secção 3 — Projects Grid (homepage)**
```
py-section-padding bg-surface-container-low

Header: px-margin-desktop, flex justify-between items-end, mb-16
  ├── Esquerda: eyebrow + H2 headline-lg
  └── Direita: "VIEW ALL GALLERY →" border-b border-primary hover:gold

Grid 2×2 (px-margin-desktop, grid-cols-1 md:grid-cols-2 gap-gutter):
  Card ímpar: col normal
  Card par:   mt-0 md:mt-24  (stagger vertical)

Cada card (.project-card):
  relative overflow-hidden group aspect-[4/5]
  ├── img: grayscale hover:grayscale-0, transition-transform duration-700 ease-out
  │        .project-card:hover img { transform: scale(1.05); }
  └── .project-overlay: absolute inset-0 bg-black/40 opacity-0
                         .project-card:hover .project-overlay { opacity: 1; }
       flex flex-col justify-end p-12:
       ├── Category: label-caps text-architectural-gold uppercase tracking-widest, mb-2
       ├── Título: headline-md text-pure-white uppercase, mb-6
       └── Linha: w-12 h-px bg-pure-white
```

**Secção 4 — Services Grid (homepage, 3 colunas)**
```
py-section-padding px-margin-desktop bg-background

Grid header: grid-cols-12, título em col-span-6 com eyebrow + H2

Grid 3 serviços (grid-cols-1 md:grid-cols-3 gap-12):
  Cada card (.group):
  border-l border-outline-variant pl-8 pt-4 pb-12
  hover:border-architectural-gold transition-colors duration-500
  
  ├── Número ghost: headline-lg text-surface-container-highest
  │                 group-hover:text-architectural-gold/20 transition 500ms, mb-6
  ├── Título: headline-md uppercase tracking-widest, mb-4
  ├── Texto: body-md text-on-surface-variant, mb-8
  └── Seta: material "arrow_forward" text-architectural-gold text-4xl
             group-hover:translate-x-4 transition-transform duration-500
```

**Secção 5 — Blog Grid (homepage)**
```
py-section-padding px-margin-desktop bg-background

Header: eyebrow + H2 + "VIEW ALL →" link (direita)

Grid 3 colunas (grid-cols-1 md:grid-cols-3 gap-gutter):
  Card (bg-pure-white):
  ├── Imagem topo: aspect-[4/3] overflow-hidden
  ├── Padding interno: p-8
  ├── Meta: "CATEGORY · DATA" em label-caps text-muted-gray, mb-3
  ├── Título: headline-md uppercase, mb-4
  ├── Excerpt: body-md text-on-surface-variant, mb-6
  └── "Ler Mais →": label-caps text-primary border-b border-primary hover:gold
```

**Secção 6 — Video + Testimonials (homepage)**
```
Split 50/50 (grid grid-cols-2):
  ├── Esquerda: vídeo promo (play button circular no centro, bg-primary)
  └── Direita: carousel de testemunhos
       ├── "What Client's Say?" headline-md
       ├── Texto: body-lg italic, mb-6
       └── Autor: headline-md + label-caps text-muted-gray
```

**Secção 7 — ClientLogos Strip**
```
bg-surface-container (ou --logo-strip)
Logos em grayscale, hover:color, transition duration-300
Strip horizontal com padding vertical moderado
```

**Secção 8 — CTA Band**
```
Variante escura:
py-section-padding bg-primary text-pure-white text-center
  H2: display-lg uppercase, mb-10
  P: body-lg opacity-80, mb-12
  Botões: flex gap-6 justify-center
    ├── bg-architectural-gold text-pure-white px-12 py-5 font-label-caps
    └── border border-pure-white text-pure-white px-12 py-5

Variante gold: bg-architectural-gold text-pure-white
```

**Secção Map/Image CTA:**
```html
<section class="h-[500px] w-full relative overflow-hidden">
  <div class="absolute inset-0 bg-primary/40 z-10"></div>
  <img class="w-full h-full object-cover"/>
  <div class="absolute inset-0 z-20 flex items-center justify-center">
    <div class="text-center">
      <h2 class="font-headline-lg text-pure-white uppercase tracking-[0.2em]">TÍTULO</h2>
      <p class="text-pure-white font-body-lg mb-8 uppercase tracking-widest">MORADA</p>
      <a class="bg-pure-white text-primary px-12 py-4 font-label-caps hover:bg-architectural-gold hover:text-pure-white">GET DIRECTIONS</a>
    </div>
  </div>
</section>
```

---

### 3.2 Página About (/about)

**Hero (70vh, assimétrico):**
```
relative w-full h-[70vh] overflow-hidden mt-8 mb-section-padding

grid grid-cols-12:
├── col-span-7 flex flex-col justify-center z-10:
│    ├── Eyebrow: label-caps gold tracking-[0.3em]
│    ├── H1: display-lg text-primary
│    └── Parágrafo: body-lg text-on-primary-container max-w-lg
└── Imagem: absolute right-0 top-0 w-1/2 h-full (hidden md:block)
     └── .image-zoom-container (overflow-hidden)
          img: transition: transform 1.5s ease-out, hover: scale(1.05)
```

**Secção Filosofia (sticky sidebar):**
```
space-y-section-padding

grid grid-cols-12:
├── col-span-4 sticky top-32:
│    ├── H2: headline-lg
│    └── Barra decorativa: w-20 h-1 bg-architectural-gold
└── col-span-8: texto body-md text-on-surface-variant que faz scroll
```

**Secção Team Preview:**  
Ver padrão completo em `/equipa` abaixo.

**Secção Stats (fundo escuro):**
```
bg-primary-container text-on-primary py-section-padding

grid grid-cols-12:
  Cada stat: col-span-3 text-center
  ├── Número: display-lg text-architectural-gold
  └── Label: label-caps text-on-primary-container
```

---

### 3.3 Página Services (/servicos)

**Hero de página:**
```
relative w-full h-[614px] flex items-end px-margin-desktop pb-20

Imagem: absolute inset-0, filter brightness-50
Conteúdo (z-10, grid grid-cols-12):
  col-span-8:
  ├── H1: display-lg text-pure-white uppercase
  │     palavra accent: <span class="text-architectural-gold">&</span>
  └── Parágrafo: body-lg text-pure-white/90 max-w-xl
```

**Intro (eyebrow + título):**
```
py-section-padding px-margin-desktop bg-background

grid grid-cols-12 gap-gutter mb-24:
  col-span-4:
  ├── Eyebrow: label-caps text-architectural-gold uppercase
  └── H3: headline-lg uppercase leading-tight
```

**Services List (linhas horizontais):**
```
divide-y divide-outline-variant border-t border-outline-variant

Cada linha (.service-row):
  group py-12 grid grid-cols-12 gap-gutter items-center
  cursor-pointer hover:bg-surface-container-low px-4
  transition-all duration-500

  ├── col-span-1: Número (muted-gray → group-hover:primary)
  ├── col-span-4: Título headline-md uppercase
  ├── col-start-6 col-span-5: Descrição body-md text-on-surface-variant
  └── col-span-1 flex justify-end: arrow_forward (.service-arrow)
```

```css
.service-row:hover .service-arrow {
    transform: translateX(10px);
    color: #BE9355;
}
```

**Secção assimétrica intermédia:**
```
py-section-padding bg-surface-container

grid grid-cols-12:
├── col-span-7: Imagem h-[600px] object-cover
└── col-start-9 col-span-4 py-8:
     ├── H3: headline-lg uppercase
     ├── P: body-md text-on-surface-variant mb-10
     └── Link: label-caps border-b border-primary hover:gold + material "north_east"
```

**CTA final (fundo escuro):**
```
py-section-padding bg-primary text-pure-white text-center max-w-3xl mx-auto

H2: display-lg uppercase
P: body-lg opacity-80 mb-12
Botões: flex gap-6 justify-center
  ├── bg-architectural-gold text-pure-white px-12 py-5
  └── border border-pure-white text-pure-white px-12 py-5
```

---

### 3.4 Portfolio Grid (/projetos)

**Hero header (sem imagem de fundo):**
```
pt-24 pb-section-padding px-margin-desktop

grid grid-cols-12:
  col-span-8:
  ├── Eyebrow: label-caps text-architectural-gold uppercase
  ├── H1: display-lg uppercase (pode usar tamanho maior: text-[96px])
  └── P: body-lg text-on-primary-container max-w-2xl
```

**Bento Grid Editorial:**
```
grid grid-cols-12 gap-gutter

Linha 1:
├── col-span-8 group .project-card h-[700px]: card grande (feature)
└── col-span-4 group .project-card h-[700px]: card vertical

Separador de linha (col-span-12 py-12):
  flex justify-between items-center border-y border-surface-container-highest:
  ├── Texto label-caps muted-gray (ex: "ARCHITECTURAL DESIGN & PLANNING")
  ├── Linha: flex-grow h-[1px] mx-12 bg-surface-container-highest
  └── Texto label-caps muted-gray (ex: "GLOBAL PRACTICE")

Linha 2:
├── col-span-6 h-[600px]: card médio
└── col-span-6 h-[600px]: card médio

Pattern card com overlay:
  relative overflow-hidden group .project-card bg-surface-container
  img: grayscale hover:grayscale-0, group-hover:scale-105 duration-700
  .project-overlay: absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100
    flex flex-col justify-end p-10 (ou p-12):
    ├── Meta: label-caps text-pure-white/80 (ex: "RESIDENTIAL | 2024")
    ├── Título: headline-lg (ou headline-md) text-pure-white uppercase
    └── CTA: "VIEW PROJECT" label-caps border-b border-pure-white + arrow_forward
```

**Paginação / Navegação:**
```
flex justify-between items-end

Botões prev/next:
├── Prev: w-16 h-16 border border-surface-container-highest, hover:bg-primary hover:text-on-primary
└── Next: w-16 h-16 border border-primary bg-primary text-on-primary, hover:bg-architectural-gold

Barra de progresso (texto direita):
  "SCROLL FOR MORE" label-caps muted-gray
  w-32 h-[2px] bg-surface-container-highest, fill gold animate-pulse
```

**JS scroll reveal para cards:**
```js
document.querySelectorAll('.project-card').forEach(card => {
    card.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000', 'ease-out');
    observer.observe(card);
});
```

---

### 3.5 Gallery Grid Modern (/galeria/moderna)

**Hero sem imagem (editorial):**
```
px-margin-desktop py-section-padding

grid grid-cols-12 gap-gutter items-end:
├── col-span-8:
│    ├── Eyebrow: label-caps text-architectural-gold mb-6
│    └── H1: display-lg uppercase leading-none
│         palavra secundária: text-muted-gray (contraste suave)
└── col-span-4 pb-4:
     P: body-lg text-on-surface-variant max-w-xs
```

**Projetos alternados (paired sections):**
```
Odd: bg-surface-container-low
  grid grid-cols-12:
  ├── col-span-7: imagem + tag etiqueta bg-pure-white top-left
  └── col-start-9 col-span-4: eyebrow + H2 + P + link

Even: bg-background
  grid grid-cols-12:
  ├── col-span-4: eyebrow + H2 + P + quote border-l border-gold
  └── col-start-6 col-span-7: imagem + tag etiqueta bg-primary bottom-right

Quote pattern:
  <div class="border-l border-architectural-gold pl-8 py-2">
    <p class="font-body-md italic text-primary">"..."</p>
  </div>
```

**Bento Stats:**
```
grid grid-cols-12 gap-gutter py-section-padding

├── col-span-3 bg-surface-container p-12 flex flex-col justify-between:
│    ├── Número: display-lg leading-none
│    └── Bloco: label-caps text-architectural-gold + body-md mt-4
│
├── col-span-6 bg-primary text-on-primary p-12:
│    H2 headline-lg uppercase + body-lg opacity-80 + botão ghost border-pure-white
│
└── col-span-3 bg-architectural-gold p-12 flex flex-col justify-between:
     ├── Número: display-lg text-pure-white leading-none
     └── Bloco: label-caps text-pure-white + body-md text-pure-white opacity-90
```

**Newsletter inline:**
```html
<form class="max-w-2xl mx-auto flex flex-col md:flex-row gap-0">
  <input class="flex-grow bg-pure-white border-none focus:ring-1 
                focus:ring-architectural-gold font-label-caps px-8 py-5" 
         placeholder="EMAIL ADDRESS" type="email"/>
  <button class="bg-primary text-on-primary px-12 py-5 font-label-caps 
                 hover:bg-architectural-gold transition-colors">
    SUBSCRIBE
  </button>
</form>
```

---

### 3.6 Image Gallery Grid (/galeria)

**Hero:**
```
pt-section-padding pb-16, px-margin-desktop

col-span-8:
├── Eyebrow: label-caps text-architectural-gold tracking-[0.3em] mb-4
└── H1: display-lg uppercase leading-none ("IMAGE GALLERY")
```

**Masonry Assimétrico (sem margin, full-bleed):**
```
Padrão .gallery-image-hover:
  group overflow-hidden relative bg-surface-container
  hover: scale(1.05) na img, opacity-1 no overlay

Overlay:
  .image-overlay absolute inset-0 bg-primary/20 opacity-0
  transition-opacity duration-500 flex items-end p-10
  ├── label-caps (ex: "01 / EXTERIOR")
  └── headline-md uppercase

Rows alternados (grid grid-cols-12 gap-gutter):
  Row 1: col-span-8 h-[600px] + col-span-4 flex flex-col gap-gutter h-full
  Row 2: col-span-4 h-[500px] + col-span-8 h-[500px]
  Row 3: col-span-7 h-[700px] + col-span-5 (texto + imagem aninhada)
  
  Texto dentro de row 3 (col-span-5):
    p-12 pl-gutter border-l border-surface-variant
    body-lg text-on-surface-variant mb-8
    + imagem aninhada h-[400px]

Parallax suave nas imagens:
  .gallery-image-hover img: transform: scale(1.1) translateY(yPos)
```

---

### 3.7 Video Gallery Grid (/galeria/video)

**CSS específico:**
```css
.video-thumbnail:hover .play-icon {
    transform: scale(1.1);
    color: #BE9355;
}
/* Scrollbar gold para esta secção: */
.custom-scrollbar::-webkit-scrollbar-thumb { background: #BE9355; }
```

**Grid de thumbnails:**
```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter

Cada thumbnail (.video-thumbnail):
  relative overflow-hidden group cursor-pointer bg-surface-container
  
  ├── Imagem: w-full h-[300px] object-cover grayscale group-hover:grayscale-0
  ├── Overlay escuro: bg-black/40 absolute inset-0
  └── Play button (.play-icon): absolute inset-0 flex items-center justify-center
       material "play_arrow" text-pure-white text-6xl
       hover: scale(1.1) + text-architectural-gold
```

---

### 3.8 Before/After (/antes-depois)

**Hero:**
```
py-section-padding px-margin-desktop

col-span-8:
├── Eyebrow: label-caps text-architectural-gold
├── H1: display-lg uppercase ("Before / After")
└── P: body-lg text-on-surface-variant max-w-2xl
```

**Slider comparação principal:**
```
mb-section-padding px-margin-desktop

col-span-10 col-start-2:
  .comparison-slider aspect-[16/9] w-full

CSS:
  .comparison-slider { position:relative; overflow:hidden; cursor:ew-resize; }
  .overlay { position:absolute; top:0; left:0; height:100%; width:50%; overflow:hidden; }
  .handle { position:absolute; top:0; bottom:0; left:50%; width:2px; 
            background:white; cursor:ew-resize; transform:translateX(-50%); z-index:10; }
  .handle::after { /* círculo branco 40x40 com SVG arrows */
    width:40px; height:40px; background:white; border-radius:50%;
    box-shadow:0 0 10px rgba(0,0,0,0.2); }

Labels das imagens:
  ├── "FINISHED PROJECT": absolute top-8 left-8 bg-primary/20 backdrop-blur-md px-4 py-2
  │    label-caps text-pure-white
  └── "ORIGINAL STATE": absolute top-8 right-8 z-20 bg-primary/20 backdrop-blur-md

JS:
  slider.addEventListener('mousemove', (e) => {
    const rect = slider.getBoundingClientRect();
    let x = Math.max(0, Math.min(e.pageX - rect.left - window.pageXOffset, rect.width));
    overlay.style.width = (x/rect.width)*100 + '%';
    handle.style.left = (x/rect.width)*100 + '%';
  });
  slider.addEventListener('touchmove', e => moveSlider(e.touches[0]));
```

**Bento de processo:**
```
py-section-padding bg-surface-container

grid grid-cols-12:
├── col-span-4 bg-background border border-surface-container-highest p-10:
│    Material icon text-architectural-gold text-4xl + H3 headline-md + P body-md
│
├── col-span-8 relative h-[400px]:
│    Imagem full + overlay bg-primary/40 + H2 headline-lg text-pure-white lowercase
│
├── col-span-7 h-[500px]:
│    Imagem full (sem overlay)
│
└── col-span-5 bg-primary text-on-primary flex flex-col justify-center p-10:
     label-caps text-architectural-gold + H3 headline-lg + P body-lg opacity-80 + link
```

**Cards estáticos Antes/Depois:**
```
grid grid-cols-1 md:grid-cols-2 gap-16

Cada case study:
  ├── Grid 2 colunas gap-4:
  │    ├── Antes: aspect-square overflow-hidden, img grayscale brightness-75
  │    └── Depois: aspect-square overflow-hidden, img normal
  └── flex justify-between items-start:
       ├── label-caps muted-gray + headline-md uppercase
       └── label-caps text-architectural-gold (cidade)
```

---

### 3.9 Team (/equipa)

**Hero:**
```
px-margin-desktop py-section-padding

grid grid-cols-12:
├── col-span-8:
│    ├── Eyebrow: label-caps text-architectural-gold
│    ├── H1: display-lg uppercase
│    └── P: body-lg text-on-surface-variant max-w-2xl
└── col-span-4 self-end hidden md:block:
     h-px bg-outline-variant w-full mb-8
```

**Team Grid (4 colunas):**
```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter

Cada membro (.group):
  ├── .team-image-container: relative overflow-hidden bg-surface-container aspect-[3/4] mb-6
  │    img: grayscale (permanente), transition-transform duration-700
  │    .team-overlay: absolute inset-0 bg-primary/20 opacity-0 → opacity-1 no hover
  │                   flex items-center justify-center
  │                   ├── Ícone: w-10 h-10 bg-pure-white text-primary, hover:bg-gold
  ├── Nome: headline-md uppercase
  └── Cargo: label-caps text-architectural-gold mt-1

CSS:
  .team-image-container:hover .team-overlay { opacity: 1; }
  .team-image-container:hover img { transform: scale(1.05); }
```

**Secção Expertise (bg-surface-container):**
```
grid grid-cols-12:
├── col-span-5:
│    H2: headline-lg uppercase, palavra em text-architectural-gold
└── col-span-7:
     grid grid-cols-2 gap-8:
     Cada expertise:
     ├── Eyebrow: label-caps "01 / TÍTULO" mb-4
     └── P: body-md text-on-surface-variant
```

**CTA final:**
```
text-center py-section-padding

H2: display-lg uppercase mb-12
Botão: border border-primary text-primary px-16 py-5 font-label-caps
       hover:bg-primary hover:text-on-primary transition 500ms
```

---

### 3.10 Testimonials (/testemunhos)

**Hero com divider específico:**
```
pt-20 pb-16 px-margin-desktop

col-span-8:
├── Eyebrow: label-caps text-architectural-gold
└── H1: display-lg uppercase, palavra deslocada: "ELEVATED / [ml-20] PARTNERSHIPS."

Divider especial (testimonial-divider):
  h-1 bg: linear-gradient(to right, #BE9355 10%, #eeeeee 10%)
```

**Lista de testemunhos (grid 12, gap-y-24 md:gap-y-32):**

**Padrão 1 — Citação com foto (col-span-10 col-start-2):**
```
grid grid-cols-10:
├── col-span-2: Número + label-caps muted-gray ("01 / CASE STUDY")
└── col-span-8:
     ├── Citação: headline-lg italic mb-12
     │    Guillemets decorativos: absolute -left-12 top-0, text-architectural-gold opacity-30
     │    text-8xl font-display-lg pointer-events-none, conteúdo: "  
     └── Rodapé: border-l border-architectural-gold pl-6 py-2
          flex justify-between items-end:
          ├── [headline-md nome + label-caps muted-gray cargo]
          └── Miniatura: w-32 h-20 object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100
```

**Padrão 2 — Assimétrico com imagem (col-span-12):**
```
Separador h-px bg-surface-container mb-24

grid grid-cols-12:
├── col-span-7:
│    ├── Número: label-caps muted-gray mb-8
│    ├── Citação: headline-lg mb-12 (não italic)
│    └── border-l border-architectural-gold pl-6: nome + cargo
└── col-span-4 col-start-9 mt-20:
     Imagem aspect-[4/5] object-cover (sem overlay)
```

**Padrão 3 — Card com logo grid (col-span-12):**
```
bg-surface-container-low p-12 md:p-24 grid grid-cols-12:
├── col-span-6:
│    Material "star_rate" text-architectural-gold text-4xl mb-4
│    H3: headline-md mb-6 + P: body-lg text-muted-gray
└── col-span-6:
     grid grid-cols-2 gap-4:
     4x aspect-square bg-white border border-surface-container:
     headline-md opacity-20 (placeholder logo)
```

**CTA final (bg-primary-container):**
```
py-section-padding text-on-primary text-center

H2: display-lg text-4xl md:text-6xl tracking-widest
Botão: border border-on-primary px-12 py-5 font-label-caps
       hover:bg-architectural-gold hover:border-architectural-gold
       inline-flex items-center gap-4 + arrow_forward
```

---

### 3.11 Pricing (/precos)

**Hero (sem imagem):**
```
px-margin-desktop pt-24 pb-section-padding

col-span-8 md:col-span-8 lg:col-span-8:
├── Eyebrow: label-caps text-architectural-gold ("INVESTMENT STRUCTURE")
├── H1: display-lg uppercase ("Calculated / Precision.")
└── P: body-lg text-on-surface-variant max-w-2xl
```

**Pricing Cards (3 colunas):**
```
px-margin-desktop py-section-padding bg-surface-container-low

grid grid-cols-1 md:grid-cols-3 gap-gutter

Card normal:
  bg-pure-white p-12 border border-surface-container flex flex-col h-full
  group hover:border-architectural-gold transition 500ms
  
  ├── PHASE 01: label-caps muted-gray mb-2
  ├── Título: headline-lg mb-4 uppercase
  ├── Descrição: body-md text-on-surface-variant mb-8
  ├── Preço: flex items-baseline
  │    ├── "FROM": label-caps mr-2
  │    └── "$4,500": headline-lg
  ├── Lista (border-t border-surface-container pt-8 space-y-6):
  │    ├── material "check" text-architectural-gold shrink-0
  │    └── body-md
  └── Botão: mt-12 w-full py-5 border border-primary font-label-caps
             hover:bg-primary hover:text-on-primary

Card destacado (MOST SELECTED):
  bg-primary p-12 flex flex-col h-full relative z-10 SCALE-105
  (nota: scale-105 cria o efeito "featured" — mais alto que os outros)
  
  ├── Tag: absolute top-0 right-0 bg-architectural-gold px-4 py-2
  │         font-label-caps text-[10px] text-on-primary tracking-widest
  │         conteúdo: "MOST SELECTED"
  ├── Título: headline-lg text-on-primary uppercase
  ├── Preço: text-on-primary
  ├── Lista: border-t border-on-primary-fixed-variant, items em text-on-primary
  └── Botão: bg-architectural-gold text-pure-white hover:bg-pure-white hover:text-primary
```

**Comparison Table:**
```
overflow-x-auto
<table class="w-full border-collapse">
  <thead>
    <tr class="border-b-2 border-primary">
      <th class="py-8 text-left font-label-caps pr-8">SERVICE DELIVERABLE</th>
      <th class="font-label-caps">CONCEPT</th>
      <th class="font-label-caps text-architectural-gold">RESIDENTIAL</th>
      <th class="font-label-caps">COMMERCIAL</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-surface-container">
    <tr>
      <td class="py-8 pr-8 font-headline-md">Discovery Sessions</td>
      <td class="font-body-md">2 Meetings</td>
      <td class="font-body-md">Unlimited</td>
      <td class="font-body-md">Unlimited</td>
    </tr>
    <!-- Células sem valor: text-muted-gray "—" -->
  </tbody>
</table>
```

**Imagem atmosférica full-width:**
```
h-[716px] w-full relative

img: w-full h-full object-cover grayscale brightness-75
overlay: absolute inset-0 bg-primary/20 backdrop-blur-sm
  flex items-center justify-center:
    H2: display-lg text-pure-white uppercase
    Botão: bg-architectural-gold text-on-primary px-12 py-6 hover:bg-pure-white hover:text-primary
```

**FAQ Inline na Pricing:**
```
grid grid-cols-12:
├── col-span-4:
│    H2: headline-lg uppercase + P: body-md text-on-surface-variant
└── col-span-8 space-y-12:
     Cada FAQ (.group border-b border-surface-container pb-8):
     ├── H4: headline-md mb-4 group-hover:text-architectural-gold transition-colors
     └── P: body-md text-on-surface-variant
```

---

### 3.12 FAQ (/faq)

**Hero:**
```
pt-section-padding px-margin-desktop

col-span-8:
├── H1: display-lg uppercase, palavra accent: <span class="text-architectural-gold">
└── P: body-lg text-on-surface-variant max-w-2xl
```

**Layout com Sidebar:**
```
grid grid-cols-12 gap-gutter

col-span-3 (hidden md:block), sticky top-40:
  Eyebrow: label-caps text-architectural-gold mb-6
  Lista de categorias: label-caps hover:text-architectural-gold

col-span-9 space-y-12:
  Por categoria:
  ├── H2: headline-md border-b border-surface-container pb-4 mb-8
  │        format: "01 / DESIGN PROCESS"
  └── Accordion items (.accordion-item border-b border-surface-container):
       Button: flex justify-between py-8:
       ├── Pergunta: headline-md uppercase group-hover:text-architectural-gold
       └── Ícone: material "add" text-architectural-gold .icon-rotate duration-300
       
       .accordion-content:
       <div class="pb-12 pr-12">
         <p class="body-md text-on-surface-variant leading-relaxed">...</p>
       </div>
```

```css
.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
}
.accordion-item.active .accordion-content {
    max-height: 1000px;
    transition: max-height 1s ease-in-out;
}
.accordion-item.active .icon-rotate { transform: rotate(45deg); }
```

---

### 3.13 Contact (/contacto)

**Hero (sem imagem):**
```
px-margin-desktop pt-24 pb-12

col-span-8 .reveal-up:
├── H1: display-lg uppercase, palavra accent: <span class="text-architectural-gold">
│        ex: "Let's build / something enduring."
└── P: body-lg text-on-surface-variant max-w-xl
```

**Grid de contacto:**
```
px-margin-desktop py-section-padding

grid grid-cols-12:
├── col-span-4 space-y-16 .reveal-up (info):
│    Bloco "The Office":
│    ├── H3: label-caps text-muted-gray uppercase mb-6
│    └── P: headline-md leading-relaxed (morada)
│
│    Bloco "Connect":
│    ├── H3: label-caps text-muted-gray uppercase mb-6
│    └── Itens: flex gap-4
│         ├── material icon text-architectural-gold
│         └── body-lg (telefone / email com underline decoration-architectural-gold)
│
│    Bloco "Social":
│    label-caps links hover:text-architectural-gold
│
└── col-span-8 bg-pure-white p-12 .reveal-up (formulário):
     <form class="space-y-12">
       grid grid-cols-2 gap-12 (nome + email)
       
       Campo individual (.relative .group):
       ├── <label> label-caps text-muted-gray mb-2
       │           group-focus-within:text-architectural-gold transition-colors
       └── <input> w-full bg-transparent border-0 border-b border-surface-container py-4
                   focus:ring-0 focus:border-architectural-gold transition-all
       
       Campo select / tipo serviço: mesmo estilo
       Textarea: mesmos estilos, h-auto
       
       Submit: btn-primary bg-architectural-gold text-pure-white w-full py-5
     </form>
```

**Animação .reveal-up:**
```css
.reveal-up {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal-up.active { opacity: 1; transform: translateY(0); }
```

---

### 3.14 Blog (/blog)

**Header:**
```
pt-section-padding px-margin-desktop

col-span-8:
├── Eyebrow: label-caps text-architectural-gold
└── H1: display-lg uppercase
```

**Grid principal (+ sidebar):**
```
grid grid-cols-12 gap-gutter

Artigos (col-span-8 ou col-span-9):
  grid grid-cols-1 md:grid-cols-2 gap-gutter (ou 3 colunas sem sidebar)
  
  Card de artigo (bg-pure-white):
  ├── Imagem: aspect-[4/3] overflow-hidden, img scale 1.05 no hover
  ├── p-8:
  │    ├── Meta: "CATEGORIA · DATA" label-caps muted-gray mb-3
  │    ├── Título: headline-md uppercase mb-4
  │    ├── Excerpt: body-md text-on-surface-variant mb-6
  │    └── "Ler Mais →": label-caps border-b border-primary hover:gold

Sidebar (col-span-4 ou col-span-3):
  ├── Widget "Posts Recentes":
  │    H4: label-caps primary mb-6
  │    Lista: miniatura + título body-md + data label-caps muted-gray
  └── Widget "Categorias":
       H4: label-caps primary mb-6
       Lista: body-md link + count muted-gray

Paginação (rodapé, centrex):
  flex items-center gap-2:
  ├── "Prev": label-caps border border-outline-variant px-4 py-2
  ├── Números: label-caps
  │    ativo: bg-primary text-on-primary
  │    inativo: hover:bg-surface-container
  └── "Next": label-caps border
```

---

## PARTE IV — PADRÕES REUTILIZÁVEIS

### 4.1 Imagens

- Portfolio: `aspect-[4/5]` (retrato) — grayscale default → color hover
- Galeria: variante livre (h-[600px], h-[700px], aspect-square)
- Hero: `w-full h-full object-cover` + overlay escuro
- Team: `aspect-[3/4]` grayscale permanente
- Comparação Before/After: `w-full h-full object-cover` nas duas imagens

### 4.2 Números Decorativos Ghost

```html
<!-- Nos service cards (homepage): -->
<span class="font-headline-lg text-headline-lg text-surface-container-highest 
             group-hover:text-architectural-gold/20 transition-colors duration-500 block mb-6">
  01
</span>

<!-- Nas service rows (página /servicos): -->
<span class="font-headline-md text-headline-md text-muted-gray 
             group-hover:text-primary transition-colors">
  01
</span>
```

### 4.3 Quote com Border-left Gold

```html
<div class="border-l border-architectural-gold pl-6 py-2">
  <p class="font-body-md text-body-md italic text-primary">
    "Texto da citação."
  </p>
</div>
```

### 4.4 Separador Decorativo de Linha

```html
<!-- Usado no portfolio grid entre rows: -->
<div class="col-span-12 py-12 flex justify-between items-center border-y border-surface-container-highest">
  <span class="font-label-caps text-label-caps text-muted-gray">TEXTO ESQUERDA</span>
  <div class="h-[1px] flex-grow mx-12 bg-surface-container-highest"></div>
  <span class="font-label-caps text-label-caps text-muted-gray">TEXTO DIREITA</span>
</div>
```

### 4.5 Tag de Posição em Imagem

```html
<!-- Tag top-left (bg branco sobre imagem): -->
<div class="absolute top-8 left-8 bg-pure-white px-6 py-4">
  <span class="font-label-caps text-label-caps text-primary">01 / VILLA HORIZON</span>
</div>

<!-- Tag bottom-right (bg escuro sobre imagem): -->
<div class="absolute bottom-8 right-8 bg-primary text-on-primary px-6 py-4">
  <span class="font-label-caps text-label-caps">02 / KINETIC URBANISM</span>
</div>

<!-- Tag com blur (sobre imagem, hero slider): -->
<div class="absolute top-8 right-8 bg-primary/20 backdrop-blur-md px-4 py-2 z-20">
  <span class="font-label-caps text-label-caps text-pure-white">ORIGINAL STATE</span>
</div>
```

### 4.6 Guillemets Decorativos (Testemunhos)

```html
<p class="font-headline-lg italic mb-12 relative">
  <span class="absolute -left-12 top-0 text-architectural-gold 
               opacity-30 text-8xl font-display-lg pointer-events-none">
    "
  </span>
  Texto da citação...
</p>
```

### 4.7 Formulário Bottom-Border

```html
<div class="relative group">
  <label class="block font-label-caps text-label-caps text-muted-gray mb-2 
                transition-colors group-focus-within:text-architectural-gold">
    NOME DO CAMPO
  </label>
  <input class="w-full bg-transparent border-0 border-b border-surface-container 
                py-4 focus:ring-0 focus:border-architectural-gold transition-all"
         placeholder="Placeholder" type="text"/>
</div>
```

---

## PARTE V — CHECKLIST DE FIDELIDADE

Antes de entregar cada ecrã:

- [ ] Border-radius 0px em todos os elementos (inputs, botões, cards, imagens)
- [ ] Nenhum drop-shadow visível — só variação tonal
- [ ] Oswald UPPERCASE em todos os headlines, labels e botões
- [ ] letter-spacing correto: 0.2em em label-caps, 0.05em em display-lg, 0.03em em headline-lg
- [ ] Hierarquia tonal respeitada: #F9F9F9 → #F3F3F3 → #EEEEEE → #FFFFFF
- [ ] Gold (#BE9355) só em eyebrows, hover states, CTAs ativos, ícones ativos
- [ ] Section padding 120px em todos os blocos (excepto mobile: 64px)
- [ ] Container max-width 1440px centrado em todas as secções
- [ ] Imagens portfolio com grayscale default + color no hover
- [ ] Nav: item ativo em gold + border-b, hover com line-draw animation
- [ ] Inputs: border-bottom apenas, label label-caps muted-gray → gold no focus
- [ ] Scroll reveal para todos os elementos principais ao entrar no viewport
- [ ] selection:bg-architectural-gold selection:text-white no body
- [ ] Material Symbols com font-variation-settings: FILL 0, wght 300
- [ ] Assimetria no grid — nunca layout puramente simétrico nas secções principais
