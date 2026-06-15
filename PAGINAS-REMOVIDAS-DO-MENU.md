# Páginas removidas do menu (Navbar)

Limpeza feita no âmbito da auditoria SEO da Lovable. Estas páginas eram variantes de demonstração do template Bauen, duplicavam conteúdo de `/projetos` ou `/galeria`, e tinham labels em inglês sem canonical — confundiam o crawler e diluíam o ranking das páginas principais.

## Removidas do submenu "Portfolio"

| Label antigo | Rota | Estado atual |
|---|---|---|
| Portfolio Grid Filter | `/projetos/filtro` | Rota existe, `noindex, follow` + canonical → `/projetos` |
| Portfolio Fancy | `/projetos/fancy` | Rota existe, `noindex, follow` + canonical → `/projetos` |
| Portfolio Fancy Filter | `/projetos/fancy-filtro` | Rota existe, `noindex, follow` + canonical → `/projetos` |
| Portfolio List | `/projetos/lista` | Rota existe, `noindex, follow` + canonical → `/projetos` |

## Removido o submenu "Galeria" (passou a link direto)

| Label antigo | Rota | Estado atual |
|---|---|---|
| Image Gallery Masonry | `/galeria/masonry` | Rota existe, `noindex, follow` + canonical → `/galeria` |
| Image Gallery Grid | `/galeria` | Continua no menu, agora como link direto "Galeria" |

## Renomeado no submenu "Portfolio"

| Label antigo | Label novo |
|---|---|
| Portfolio Grid | Todos os Projetos |

## Traduções PT no submenu "Páginas"

| Label antigo (EN) | Label novo (PT) |
|---|---|
| Before After | Antes e Depois |
| Pricing | Preços |
| Team | Equipa |
| Testimonials | Testemunhos |
| FAQs | FAQ |

## Nota

As rotas `/projetos/filtro`, `/projetos/fancy`, `/projetos/fancy-filtro`, `/projetos/lista` e `/galeria/masonry` **continuam a existir no código** (não foram apagadas) — só deixaram de estar acessíveis pelo menu e foram marcadas como `noindex` para não competir no Google com `/projetos` e `/galeria`. Podem ser reativadas ou apagadas de vez mais tarde.
