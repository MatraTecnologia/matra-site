# Matra — Estratégia SEO, AEO e GEO

Cobre SEO técnico, on-page, dados estruturados, otimização para motores de resposta (AEO) e para IAs generativas (GEO), além do internal linking. Complementa [ARQUITETURA](./ARQUITETURA.md) e [SEO-LOCAL-PARANA](./SEO-LOCAL-PARANA.md).

---

## 1. SEO técnico (base)

| Item | Implementação |
|---|---|
| Renderização | SSG — HTML completo servido de CDN (crawlers leem sem JS) |
| Canonical | `<link rel="canonical">` absoluto em toda página (helper `lib/seo.ts`) |
| Sitemap | `@astrojs/sitemap` com `lastmod`, prioridades por tipo, index segmentado |
| robots.txt | Permite tudo relevante, bloqueia `/busca?`, aponta sitemap |
| RSS | Feed global + por categoria (descoberta + GEO) |
| Paginação | `rel=prev/next` lógico + canonical na página 1 dos hubs |
| Breadcrumbs | Visual + `BreadcrumbList` JSON-LD em toda página profunda |
| 404/410 | Página 404 útil (busca + links); 410 para conteúdo removido de propósito |
| Redirects | Mapa central `redirects` no config (nunca quebrar URL indexada) |
| Imagens | AVIF/WebP responsivo, `alt` obrigatório no schema, lazy fora do fold |
| URLs | minúsculas, hífen, sem stopwords supérfluas, sem data, estáveis |

**Sinais de autoridade (E-E-A-T):** todo artigo tem autor real com página `/autores/[autor]` (bio, credenciais, `sameAs`), data de publicação e de atualização visíveis, e citação de fontes. Página `/sobre` com `Organization` schema completo.

---

## 2. SEO on-page (padrão de artigo)

Estrutura obrigatória de cada conteúdo (reforça snippet + AEO):

1. **H1 único** = intenção de busca principal.
2. **Resposta direta nos primeiros 40–60 palavras** (bloco `keyTakeaways` / TL;DR) — o que motores de resposta extraem.
3. **Sumário (TOC)** com âncoras (`#`) — vira sitelinks e facilita jump-links de IA.
4. **Hierarquia H2/H3 semântica**, uma pergunta por H2 quando fizer sentido.
5. **Bloco FAQ** ao final (→ `FAQPage`).
6. **Tabelas, listas e definições** — formatos que o Google e as IAs citam preferencialmente.
7. **Links internos contextuais** (3–8) para pillar, glossário e serviços.
8. **CTA** para WhatsApp/serviço relacionado.

---

## 3. Dados estruturados (Schema.org) — `lib/schema.ts`

Um gerador por tipo, alimentado pelo frontmatter:

| Página | Schema |
|---|---|
| Artigo/Guia | `Article` / `BlogPosting` + `author` + `publisher` |
| Tutorial | `HowTo` (com `steps`) |
| Notícia | `NewsArticle` |
| Bloco FAQ | `FAQPage` |
| Serviço | `Service` + `areaServed` (Paraná/cidade) |
| Serviço × cidade | `Service` + `LocalBusiness`/`ProfessionalService` com `areaServed` |
| Empresa (global) | `Organization` (logo, `sameAs`, contato) no layout base |
| Home / local | `WebSite` + `SearchAction` (sitelinks searchbox) |
| Autor | `Person` (+ `knowsAbout`, `sameAs`) |
| Glossário | `DefinedTerm` / `DefinedTermSet` |
| Breadcrumb | `BreadcrumbList` (todas as páginas profundas) |
| Case | `Article` + `Review`/`resultado` quando aplicável |

Todos aninhados num `@graph` único por página para consistência de entidades (a empresa, o autor e o artigo se referenciam por `@id`).

---

## 4. AEO — Answer Engine Optimization

Objetivo: aparecer em **featured snippets, People Also Ask e AI Overviews**.

Táticas:
- **Answer-first:** cada página abre respondendo a query em 1–2 frases, depois aprofunda.
- **Formato pergunta→resposta:** H2 em forma de pergunta com resposta objetiva de 40–55 palavras logo abaixo.
- **Blocos extraíveis:** definições curtas (glossário), listas numeradas (para "como fazer"), tabelas comparativas (para "X vs Y"), passos (HowTo).
- **FAQPage schema** em serviços, guias e páginas locais.
- **Dados e números concretos** (o snippet favorece precisão: "aumento de 127%", "ROAS 4,8x").
- **Linguagem natural** batendo com como as pessoas perguntam ("quanto custa", "vale a pena", "como escolher").

---

## 5. GEO — Generative Engine Optimization

Objetivo: ser **citado por ChatGPT, Claude, Gemini, Perplexity, Google AI Overviews**.

Como IAs escolhem o que citar → conteúdo claro, estruturado, com entidades bem definidas e reputação. Táticas:

1. **Clareza factual e afirmações citáveis.** Frases autocontidas que uma IA pode extrair sem perder contexto ("A Matra atende empresas em Londrina e região desde 2020").
2. **Entidades explícitas.** Nome da empresa, local, serviços e autores como entidades nomeadas e consistentes (reforçado pelo `@graph` Schema.org) — ajuda o *entity grounding* das IAs.
3. **Conteúdo estatístico e original.** IAs citam fontes com dados próprios: pesquisas, benchmarks do mercado paranaense, estudos de caso com métricas. Isso é o maior diferencial competitivo de GEO.
4. **Estrutura semântica** (headings, listas, tabelas, TL;DR) — o mesmo que ajuda AEO ajuda o parsing por LLM.
5. **Presença fora do site (off-page GEO).** Perfis consistentes (Google Business, LinkedIn, diretórios), menções e `sameAs`. IAs cruzam múltiplas fontes.
6. **`llms.txt`** na raiz — arquivo que descreve o site e aponta o conteúdo principal para consumo por LLMs (padrão emergente, baixo custo de manter).
7. **Não bloquear crawlers de IA** relevantes no `robots.txt` (decisão de negócio: para GEO, permitir GPTBot/ClaudeBot/PerplexityBot amplia citação).
8. **Frescor.** IAs com busca ao vivo (Perplexity, AI Overviews) preferem conteúdo atualizado — daí `updatedDate` visível e revisão periódica.

---

## 6. Internal Linking (topic clusters)

Modelo **pillar → cluster**: cada categoria tem um **guia-pilar** (`/guias/[slug]` ou hub `/[categoria]`) que linka para todos os artigos-satélite do tema, e cada satélite linka de volta ao pilar. Isso concentra autoridade e ensina o Google a relação semântica.

Camadas de linkagem (parte automatizada em `lib/links.ts`):

| Tipo | Como |
|---|---|
| Pilar ↔ satélites | `pillar` no frontmatter monta o cluster automaticamente |
| Artigos relacionados | `lib/related.ts`: score por pilar + tags compartilhadas + recência (fallback manual via `relatedSlugs`) |
| Glossário automático | 1ª ocorrência de um termo do glossário no texto vira link para `/glossario/[termo]` (limite por página p/ não poluir) |
| Serviços | Artigos linkam para o serviço do mesmo pilar (rota de conversão) |
| Local ↔ conteúdo | Página local linka para artigos/casos daquela cidade e vice-versa |
| Breadcrumbs | Hierarquia clicável em toda página |
| Hubs | `/[categoria]` e `/onde-atuamos` como nós centrais de distribuição |

Regras: âncoras descritivas (nunca "clique aqui"), 3–8 links internos por artigo, sem link órfão (todo conteúdo alcançável em ≤ 3 cliques da home).

---

## 7. Medição

- **Search Console** (cobertura, queries, CTR, snippets) + **Bing Webmaster**.
- **Analytics** privacy-first (Umami/Plausible) para engajamento.
- Acompanhar aparições em **AI Overviews / Perplexity** manualmente por query-alvo (não há API madura ainda).
- Auditoria técnica trimestral (Lighthouse CI no pipeline de deploy).

---

> Criado em 2026-07-01 15:37 (-03) · Última modificação: 2026-07-01 15:37 (-03)
