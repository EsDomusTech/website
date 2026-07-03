# DomusTech — Site de Casas Modulares no Porto

Site institucional premium para empresa de casas modulares no Porto. Estética **Structural Elegance** (inspirada no tema Bauen, identidade própria). SSR para SEO.

URL de produção: https://domustech.lovable.app

## Stack

- **React 19** + **TypeScript**
- **TanStack Start** + **TanStack Router** (SSR, routing file-based em `src/routes/`)
- **Vite 7**
- **Tailwind CSS v4** + CSS custom properties (design tokens em `src/styles.css`)
- **Framer Motion** (animações)
- **shadcn/ui** (componentes base, uso pontual)
- Deploy: **Lovable**

## Como correr localmente

Pré-requisito: Node 18+ (ou Bun).

```bash
npm install
npm run dev      # arranca o dev server (Vite)
```

Outros comandos:

```bash
npm run build    # build de produção
npm run preview  # serve o build localmente
npm run lint     # ESLint
npm run format   # Prettier
```

## Variáveis de ambiente

O site corre sem variáveis. Para configuração opcional, copia `.env.example` para `.env`:

- `VITE_*` — públicas, expostas ao browser (analytics, URLs). Nunca segredos.
- restantes — server-only, lidas em `src/lib/config.server.ts`.

O `.env` real nunca entra no git.

## Estrutura

```
src/
  routes/            # páginas (file-based routing) + sitemap.xml
  components/site/    # componentes do site (Navbar, Hero, Footer, CtaBand…)
  components/ui/      # primitivos shadcn/ui
  hooks/              # React hooks
  lib/                # site-data.ts (conteúdo), utils, config, api
  styles.css          # design tokens (cores, fontes, utilitários)
```

Convenções e detalhes de design: ver [CLAUDE.md](CLAUDE.md). Estado de tarefas: ver [STATUS.md](STATUS.md).

Regra de conteúdo: todos os dados (serviços, projetos, FAQ, contactos) vivem em `src/lib/site-data.ts` — nunca hardcoded nos componentes.
