# Matra — Arquitetura do Portal (Astro)

Portal de conteúdo de marketing + tecnologia. Cidade-hub: **Londrina/PR**, com expansão em camadas para o Paraná. Foco: autoridade, SEO/AEO/GEO, performance máxima.

> Documentos relacionados: [SEO-AEO-GEO](./SEO-AEO-GEO.md) · [SEO-LOCAL-PARANA](./SEO-LOCAL-PARANA.md) · [PLANO-CONTEUDO-12M](./PLANO-CONTEUDO-12M.md) · [COMPONENTES-E-ROADMAP](./COMPONENTES-E-ROADMAP.md)

---

## 1. Princípios de arquitetura

1. **Static-first (SSG).** Todo conteúdo evergreen é gerado no build. Zero JS por padrão (Astro Islands só onde há interação real: busca, filtros, menu). Isso garante Core Web Vitals verde e custo de hospedagem baixo.
2. **Content Layer como fonte de verdade.** Conteúdo em Markdown/MDX versionado no Git (type-safe via Zod). Migração futura para CMS headless (Sanity/Keystatic) sem reescrever templates — só troca o *loader*.
3. **Dados estruturados em toda página.** JSON-LD gerado a partir do mesmo frontmatter que renderiza a página. Uma fonte, nunca dessincroniza.
4. **Escala por composição, não duplicação.** Páginas locais e de serviço nascem de *templates + dados únicos por entidade* — nunca texto "girado". (Ver [SEO-LOCAL-PARANA](./SEO-LOCAL-PARANA.md).)
5. **i18n-ready desde o dia 1.** Estrutura de rotas e collections preparada para `pt-BR` (default) e idiomas futuros, sem refatorar.

---

## 2. Stack técnico

| Camada | Escolha | Motivo |
|---|---|---|
| Framework | **Astro 7** (`output: 'static'`) | SSG, Islands, zero-JS default |
| Estilo | **Tailwind CSS v4** (`@tailwindcss/vite`) | Design system utilitário, purge automático |
| Conteúdo | **Content Layer API** (glob loader + Zod) | Type-safety, escalável a CMS |
| Markdown | **MDX** (`@astrojs/mdx`) | Componentes dentro do conteúdo |
| Busca | **Pagefind** | Índice estático no build, zero backend, ~1 req |
| Sitemap | `@astrojs/sitemap` | Automático, com i18n e prioridades |
| RSS | `@astrojs/rss` | Feed por categoria |
| Imagens | `astro:assets` + **sharp** | AVIF/WebP responsivo, LCP otimizado |
| Fontes | **Fontsource** (self-host) | Sem request a terceiros, `font-display: swap` |
| Transições | **View Transitions** nativas | Navegação SPA-like sem framework |
| Deploy | **Cloudflare Pages** ou **Vercel** | Edge/CDN global, preview por PR |
| Analytics | **Umami** ou **Plausible** | Privacy-first, leve (sem custo de CWV) |

> Na implementação, confirmar sintaxe de cada integração via Context7 (Astro evolui rápido — Content Layer, Tailwind v4 e config de sitemap i18n têm mudanças recentes).

---

## 3. Estrutura de pastas

```
web/
├── astro.config.mjs          # integrations, site URL, i18n, sitemap
├── src/
│   ├── content.config.ts     # definição das collections (Zod schemas)
│   ├── content/
│   │   ├── artigos/          # posts do blog (.md/.mdx)
│   │   ├── guias/            # conteúdo pillar longo
│   │   ├── tutoriais/
│   │   ├── noticias/
│   │   ├── casos/            # estudos de caso / cases de sucesso
│   │   ├── glossario/        # termos (1 arquivo por termo)
│   │   ├── ferramentas/      # descrições das ferramentas/calculadoras
│   │   ├── servicos/         # 1 arquivo por serviço (marketing, seo, dev...)
│   │   ├── autores/          # perfis E-E-A-T dos autores
│   │   ├── categorias/       # metadados de cada pilar de conteúdo
│   │   └── faqs/             # blocos de FAQ reutilizáveis
│   ├── data/
│   │   ├── cidades.ts        # dataset do Paraná (tiers, dados demográficos)
│   │   ├── bairros.ts        # bairros por cidade (só cidades tier 0-1)
│   │   └── navegacao.ts
│   ├── components/
│   │   ├── seo/              # BaseHead, JsonLd, Breadcrumbs, OpenGraph
│   │   ├── content/          # ArticleCard, TOC, RelatedPosts, ShareBar
│   │   ├── local/            # LocalHero, ServiceArea, LocalFAQ
│   │   ├── ui/               # Button, Badge, Callout, Prose
│   │   └── layout/           # Header, Footer, Sidebar
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ArticleLayout.astro   # artigo/guia/tutorial/notícia
│   │   ├── ServiceLayout.astro
│   │   ├── LocalLayout.astro     # landing local (serviço × cidade/bairro)
│   │   └── HubLayout.astro       # páginas de categoria/índice
│   ├── lib/
│   │   ├── seo.ts            # helpers de meta, canonical, hreflang
│   │   ├── schema.ts         # geradores de JSON-LD (Article, FAQ, LocalBusiness...)
│   │   ├── related.ts        # algoritmo de artigos relacionados
│   │   ├── links.ts          # internal linking automático (glossário/serviços)
│   │   └── reading-time.ts
│   ├── pages/                # rotas (ver §4)
│   └── styles/
│       └── global.css        # @import "tailwindcss" + design tokens
└── public/
    ├── logo.svg  logo.png  logo-escrita.svg
    └── og/                   # imagens Open Graph (geradas ou por template)
```

---

## 4. Estrutura de rotas

Padrão de URL: **curto, semântico, sem datas** (permite atualizar sem quebrar link — bom para "evergreen SEO").

### Institucional
```
/                         Home (autoridade + últimos conteúdos + serviços)
/sobre                    E-E-A-T da empresa
/contato                  CTA WhatsApp + formulário
/servicos                 Índice de serviços
/servicos/[servico]       Marketing digital, SEO, dev de sites/sistemas, IA...
/busca                    Busca interna (Pagefind)
```

### Conteúdo (portal)
```
/blog                     Feed principal (últimos + destaques)
/[categoria]              Hub do pilar: /seo, /trafego-pago, /marketing-digital...
/[categoria]/[slug]       Artigo
/guias/[slug]             Conteúdo pillar (longo, referência)
/tutoriais/[slug]
/noticias/[slug]
/casos/[slug]             Estudo de caso
/glossario                Índice A-Z
/glossario/[termo]        Termo (ótimo p/ featured snippet e AEO)
/ferramentas             Índice
/ferramentas/[slug]       Calculadora/ferramenta interativa (island)
/tags/[tag]               Índice por tag
/autores/[autor]          Perfil do autor (autoridade E-E-A-T)
/rss.xml  /[categoria]/rss.xml
```

### SEO Local (ver documento dedicado)
```
/onde-atuamos                          Hub estadual (mapa do PR)
/[servico]-em-[cidade]                 Ex: /agencia-de-marketing-em-londrina
/[servico]-em-[cidade]/[bairro]        Só Londrina + tier 1 (bairros reais)
```
> A decisão entre `/servico-em-cidade` (matching de intenção de busca) vs `/cidades/[cidade]/[servico]` está justificada em [SEO-LOCAL-PARANA §3](./SEO-LOCAL-PARANA.md).

### Decisão: rotas locais são **estáticas geradas de dataset curado**, não catch-all ilimitado
`getStaticPaths()` itera apenas sobre combinações `(serviço × cidade)` marcadas como *publicáveis* no `cidades.ts` (tier + conteúdo único disponível). Isso impede a criação acidental de milhares de páginas thin.

---

## 5. Modelo de conteúdo (Content Collections)

Cada collection tem schema Zod em `content.config.ts`. Campos-chave compartilhados pelos tipos editoriais:

```ts
// esqueleto conceitual — sintaxe final confirmada via Context7 na implementação
const base = {
  title: z.string().max(60),          // <title> / H1
  description: z.string().max(160),   // meta description
  slug: z.string().optional(),
  pillar: z.enum(PILARES),            // categoria-mãe (topic cluster)
  tags: z.array(z.string()),
  author: reference('autores'),
  publishDate: z.date(),
  updatedDate: z.date().optional(),   // sinal de frescor p/ Google
  cover: image().optional(),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(), // → FAQPage schema
  keyTakeaways: z.array(z.string()).optional(), // bloco AEO (resposta direta)
  schemaType: z.enum(['Article','NewsArticle','HowTo','FAQPage']).default('Article'),
  relatedSlugs: z.array(z.string()).optional(), // override manual do algoritmo
};
```

Collections:

| Collection | Uso | Schema extra |
|---|---|---|
| `artigos` | posts padrão | `base` |
| `guias` | pillar content | `base` + `sections[]`, `updatedDate` obrigatório |
| `tutoriais` | passo-a-passo | `base` + `steps[]` (→ HowTo schema) |
| `noticias` | atualidades | `base` (schemaType=NewsArticle) |
| `casos` | cases | `base` + `client`, `segment`, `metrics[]`, `city` |
| `glossario` | termos | `term`, `shortDefinition` (≤ 320 char p/ snippet), `relatedTerms[]` |
| `servicos` | serviços | `name`, `benefits[]`, `faq[]`, `priceRange?`, `relatedPillars[]` |
| `autores` | E-E-A-T | `name`, `role`, `bio`, `credentials[]`, `sameAs[]` (LinkedIn etc.) |
| `categorias` | pilares | `name`, `description`, `intro`, `heroImage`, `pillarGuideSlug` |
| `ferramentas` | tools | `name`, `component`, `description`, `faq[]` |

**Cidades e bairros** ficam em `src/data/*.ts` (dados, não conteúdo editorial): tier, nome, região, população, slug, bairros, casos vinculados, texto único curado.

---

## 6. Performance (metas Core Web Vitals)

| Métrica | Meta | Como garantimos |
|---|---|---|
| LCP | < 1,5 s | SSG + imagem `astro:assets` (AVIF, `loading=eager` só no hero), fontes self-host preload |
| INP | < 100 ms | Zero JS default; islands `client:visible`/`client:idle` |
| CLS | < 0,05 | Dimensões explícitas em imagem/embed, `font-display: swap` com fallback métrico |
| TTFB | < 200 ms | HTML estático em CDN edge |
| JS inicial | ~0 KB | Só busca e menu hidratam |

Lighthouse alvo: **95–100** em Performance, SEO, Best Practices, Accessibility.

---

## 7. i18n (preparação)

- `astro.config.mjs` com `i18n: { defaultLocale: 'pt-BR', locales: ['pt-BR'] }` (adicionar `en`/`es` no futuro sem refatorar rotas).
- Sitemap e `hreflang` já emitidos pelo helper de SEO.
- Collections com campo `locale` implícito por pasta quando expandir.

---

> Criado em 2026-07-01 15:37 (-03) · Última modificação: 2026-07-01 15:37 (-03)
