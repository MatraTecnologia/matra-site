# Matra — Componentes Premium & Roadmap de Implementação

Complementa [ARQUITETURA](./ARQUITETURA.md). Design: dark premium, base preta, acento roxo (`#9B07F0`/`#BF56FC`), toque metálico — referências Notion/Vercel/Stripe (limpeza, performance, UX) + G1 (densidade e organização de portal).

---

## 1. Design system (tokens)

```
Cores
  --bg:        #000000        (base)
  --surface:   #0B0B0F / #14141B  (cards, elevação)
  --roxo:      #9B07F0        (primário / CTA)
  --roxo-2:    #BF56FC        (destaque, gradiente)
  --roxo-3:    #440A69        (fundo profundo)
  --texto:     #FFFFFF / #E5E5EA
  --muted:     #9A9AA5
  --metal:     gradiente #FFEEEE→#CECECE→#737373 (títulos hero)
Tipografia
  Display: fonte geométrica (títulos) — self-host
  Texto:   Inter / geometric sans legível (corpo)
  Escala modular, prose otimizada p/ leitura longa (65–75ch)
Espaçamento: escala 4px. Raio: 12–16px. Sombra sutil + glow roxo em CTAs.
Modo: dark-first (claro opcional no futuro).
```

Base: **Tailwind v4** com tokens via `@theme`. Componente `Prose` para tipografia de artigo.

---

## 2. Componentes (por categoria)

### SEO / infra (invisíveis, críticos)
- `BaseHead` — title, meta, canonical, OG, Twitter, hreflang.
- `JsonLd` — injeta `@graph` Schema.org por página.
- `Breadcrumbs` — visual + `BreadcrumbList`.
- `OpenGraphImage` — geração de imagem OG por template (título + logo).

### Conteúdo / portal
- `ArticleCard` — card de post (imagem, pilar-badge, título, tempo de leitura, autor).
- `FeaturedHero` — destaque estilo portal (G1) na home/hubs.
- `TableOfContents` — sumário sticky com scroll-spy (island leve).
- `ReadingProgress` — barra de progresso.
- `RelatedPosts` — grade de relacionados (algoritmo).
- `AuthorBox` — E-E-A-T ao fim do artigo.
- `ShareBar` — compartilhar (WhatsApp, X, LinkedIn, copiar link).
- `Callout` / `KeyTakeaways` — bloco TL;DR (AEO).
- `FaqAccordion` — FAQ acessível (→ FAQPage).
- `Newsletter` — captura (RSS/e-mail).
- `Pagination` — hubs.

### Local
- `LocalHero`, `ServiceAreaMap` (mapa PR/cidade), `LocalFaq`, `CaseStrip` (casos da cidade), `NeighborhoodList`.

### UI base
- `Button` (variantes: primário roxo com glow, ghost), `Badge`, `Prose`, `Tag`, `Avatar`, `Skeleton`.

### Layout
- `Header` (logo, nav por pilares com mega-menu, busca, CTA WhatsApp), `Footer` (mapa do site, pilares, cidades, social, NAP), `Sidebar` (hubs).

### Interativos (islands — hidratam sob demanda)
- `SearchModal` — Pagefind, `client:idle`.
- `MobileMenu` — `client:media`.
- Ferramentas: `RoiCalculator`, `UtmBuilder`, `SeoChecker` — `client:visible`.

---

## 3. Funcionalidades premium (diferenciais)

1. **Busca instantânea** (Pagefind) — modal com atalho `/`, resultados sem backend.
2. **Ferramentas/calculadoras** — link magnets que geram backlinks e captação.
3. **View Transitions** — navegação suave entre artigos.
4. **Dark mode nativo premium** com glow roxo assinado.
5. **OG images automáticas** por artigo.
6. **`llms.txt`** + feeds — otimização GEO.
7. **Glossário interlinkado** automático no corpo dos textos.
8. **Hub "Onde atuamos"** com mapa interativo do Paraná.
9. **RSS por categoria** + newsletter.
10. **Lighthouse CI** no deploy (guardião de performance).

---

## 4. Roadmap de implementação (fases)

### Fase 0 — Fundação técnica
- Configurar Tailwind v4, design tokens, fontes self-host.
- `astro.config`: `site`, sitemap, i18n-ready, redirects.
- `BaseLayout`, `Header`, `Footer`, `Prose`, `Button`.
- `content.config.ts` com todas as collections + Zod.
- `lib/seo.ts` + `lib/schema.ts` + `JsonLd` + `Breadcrumbs`.

### Fase 1 — Portal de conteúdo
- `ArticleLayout`, `HubLayout`, `TableOfContents`, `RelatedPosts`, `AuthorBox`, `FaqAccordion`.
- Rotas: `/blog`, `/[categoria]`, `/[categoria]/[slug]`, `/guias`, `/tutoriais`, `/noticias`, `/casos`, `/autores/[autor]`, `/tags/[tag]`.
- RSS global + por categoria. Sitemap validado.
- Seed de conteúdo real (5–10 artigos + 2 guias-pilar).

### Fase 2 — Busca, glossário e serviços
- Pagefind + `SearchModal`.
- `/glossario` + interlinking automático (`lib/links.ts`).
- `/servicos` + `/servicos/[servico]` com `Service` schema.
- Home premium (hero metálico + destaques + serviços + CTA).

### Fase 3 — SEO Local
- `cidades.ts`/`bairros.ts` (Londrina completo).
- `LocalLayout` + rotas `/[servico]-em-[cidade](/[bairro])` via `getStaticPaths` curado.
- `/onde-atuamos` + `LocalBusiness` schema + GBP.

### Fase 4 — Premium & GEO
- Ferramentas interativas, OG images automáticas, `llms.txt`.
- View Transitions, newsletter.
- Lighthouse CI + auditoria. Analytics privacy-first.
- Expansão tier 1 local.

---

## 5. Definição de "pronto" por página

Toda página em produção precisa: `<title>`/description únicos, canonical, JSON-LD válido (testado no Rich Results Test), OG image, breadcrumb, ≥3 links internos, Lighthouse ≥95, e sem CLS visível.

---

> Criado em 2026-07-01 15:37 (-03) · Última modificação: 2026-07-01 15:37 (-03)
