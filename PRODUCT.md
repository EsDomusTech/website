# Product

## Register

brand

## Users

Famílias e proprietários no Porto e Norte de Portugal a considerar construção modular como alternativa a uma casa tradicional. Estão numa fase de pesquisa/comparação: querem perceber se a empresa é credível, ver portfólio de obras feitas, entender o processo, preços indicativos e a equipa por trás. O objetivo final é sentirem-se confiantes para pedir um orçamento.

## Product Purpose

Site institucional de marketing/lead-generation para a DomusTech (casas modulares, Porto). Existe para construir credibilidade ("não é uma construtora qualquer"), mostrar prova social (projetos, testemunhos, antes/depois) e converter visitantes em pedidos de orçamento via CTAs "Pedir Orçamento" e formulário de contacto. Sucesso = visitante percebe em segundos que é uma marca premium e arquitetonicamente rigorosa, e avança para o contacto.

## Brand Personality

**Premium, Arquitetónico, Confiável.** Sistema já nomeado no projeto como "Structural Elegance": gold arquitetónico (#BE9355) sobre off-black/off-white, tipografia Oswald (display, maiúsculas, tracked) + Libre Franklin (corpo), cantos a 90° em todo o lado, sombras quase inexistentes. Tom de voz: direto, técnico mas acessível — fala de precisão, durabilidade e processo, não de "sonhos" genéricos.

## Anti-references

- **AI slop genérico**: fundos SaaS cream/sand, gradient text, cards com `border-radius` grande, eyebrows numerados "01 / 02 / 03" em todas as secções, ghost-cards (border 1px + shadow larga).
- **Estética playful/infantil**: cores vivas saturadas, formas orgânicas, ilustrações soltas/sketch — contraria o posicionamento premium/arquitetónico.
- **Clichés de construtora tradicional**: stock photos de capacetes/obras genéricas, layouts pesados e densos.

## Design Principles

1. **Cantos a 90° sempre** — `border-radius: 0` em toda a UI; precisão arquitetónica em vez de suavidade.
2. **Tokens como única fonte de verdade** — cores sempre via CSS custom properties (`--gold`, `--dark-section`, etc.), nunca hex hardcoded nos componentes.
3. **Ritmo consistente** — `container-1100` / `s-wrap` + `section-pad` (120px) em todas as secções; a grelha não varia por página.
4. **Conteúdo separado de UI** — todo o copy/dados (serviços, projetos, FAQ, equipa, contactos) vive em `site-data.ts`, nunca hardcoded nos componentes.
5. **Acento dourado com moderação** — `--gold` marca CTAs, hovers e estados ativos; não decora secções inteiras.

## Accessibility & Inclusion

WCAG AA como alvo. Já implementado: `focus-visible` com outline dourado para navegação por teclado, `prefers-reduced-motion` desativa animações, labels acessíveis em inputs (`htmlFor` + `aria-label`), correções recentes de contraste (footer, headings). Novo trabalho deve manter texto de corpo ≥4.5:1 e texto grande ≥3:1 contra o fundo, especialmente em secções `--dark-section` e sobre `--gold`.
