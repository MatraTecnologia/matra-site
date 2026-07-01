# Matra — Estratégia de SEO Local (Paraná)

Cidade-hub: **Londrina**. Objetivo: dominar buscas locais de marketing/tecnologia no Paraná **sem cair em penalização por doorway pages / conteúdo thin**.

---

## 1. O risco que precisa ser dito (leia antes de escalar)

Gerar programaticamente `399 municípios × ~10 serviços × N bairros` produziria **dezenas de milhares de páginas quase idênticas**. O Google trata isso como **doorway pages** — [política explícita de spam](https://developers.google.com/search/docs/essentials/spam-policies#doorways) — e o resultado típico é **desindexação do site inteiro**, não só das páginas fracas. IAs generativas também descartam conteúdo padronizado sem sinal de originalidade.

**Portanto a estratégia não é "criar todas as páginas possíveis", e sim "criar cada página só quando ela carrega valor único".** Escala vem de dados reais (casos, bairros, dados locais), não de template girado.

---

## 2. Modelo em camadas (tiers)

Cada cidade recebe um `tier` no dataset `src/data/cidades.ts`. O tier define **quantas** páginas ela gera e **quão profundas** são.

| Tier | Cidades (exemplos) | O que gera | Profundidade |
|---|---|---|---|
| **0 — Hub** | **Londrina** | Página por serviço + páginas de **bairros reais** (Gleba Palhano, Centro, Jardim Bandeirantes…) + casos locais + conteúdo dedicado | Máxima: texto único, fotos, cases, depoimentos, FAQ local, mapa |
| **1 — Estratégicas** | Maringá, Curitiba, Cascavel, Ponta Grossa, Foz do Iguaçu, Apucarana | Página por serviço prioritário; bairros só das capitais/maiores | Alta: contexto econômico da cidade, casos se houver, FAQ próprio |
| **2 — Regionais** | ~30 cidades médias (Arapongas, Toledo, Umuarama, Pato Branco…) | Página por serviço **somente quando houver conteúdo/prova real** | Média: dados locais + oferta, sem inventar |
| **3 — Cauda longa** | Demais municípios | **Nenhuma página dedicada por ora.** Cobertos pela página estadual `/onde-atuamos` e por conteúdo "…no interior do Paraná" | — |

> Regra de ouro: uma combinação `(serviço × local)` só entra no `getStaticPaths()` se tiver `unique: true` no dataset (bloco de conteúdo único preenchido). Sem conteúdo único → não publica.

---

## 3. Decisão de estrutura de URL

Escolhida: **`/[servico]-em-[cidade]`** (ex.: `/agencia-de-marketing-em-londrina`).

Motivo: casa exatamente com a intenção de busca ("agência de marketing em londrina" é a própria query) e mantém a landing local separada do serviço-mãe institucional (`/servicos/marketing`). Bairros como sub-rota: `/[servico]-em-[cidade]/[bairro]` apenas em tier 0–1.

Alternativa `/cidades/[cidade]/[servico]` foi descartada: agrupa por cidade (bom para navegação), mas dilui o match de keyword no path — pior para SEO local puro.

---

## 4. Anti-duplicação: anatomia de uma landing local

Template idêntico, **dados obrigatoriamente únicos por cidade** (vindos do dataset + collections). Blocos:

1. **Hero local** — H1 = `[Serviço] em [Cidade]`, subtítulo com prova ("atendemos [Cidade] e região desde…").
2. **Parágrafo de contexto real da cidade** — dado econômico/mercadológico específico (setor forte, porte, oportunidade). *Curado, não gerado.*
3. **Como atendemos [Cidade]** — presencial/remoto, tempo de resposta, atendimento em português local.
4. **Casos e resultados** — filtra `casos` cuja `city` = cidade (quando existirem). Prova social real é o maior diferenciador anti-thin.
5. **Bairros atendidos** (tier 0–1) — lista com links para sub-páginas onde fizer sentido.
6. **FAQ local** — perguntas específicas ("quanto custa marketing em Londrina?", "vocês atendem presencialmente em Maringá?") → `FAQPage` schema.
7. **Conteúdo relacionado** — artigos do blog úteis para negócios daquela cidade.
8. **CTA WhatsApp** com contexto da cidade.
9. **LocalBusiness/Service JSON-LD** com `areaServed` = cidade/bairro.

O que **NÃO** fazer: trocar só o nome da cidade num texto-modelo; criar bairro sem dado real; publicar cidade tier 3 com página "vazia".

---

## 5. Dataset `cidades.ts` (modelo)

```ts
type Cidade = {
  slug: string;              // 'londrina'
  nome: string;              // 'Londrina'
  regiao: string;            // 'Norte do Paraná'
  tier: 0 | 1 | 2 | 3;
  populacao: number;
  contextoEconomico: string; // texto curado, único
  servicos: ServicoLocalConfig[]; // quais serviços publicar + bloco único de cada
  bairros?: Bairro[];        // só tier 0-1
  casos?: string[];          // slugs de casos vinculados
};
```

Fonte de dados demográficos: IBGE (população, PIB, setores). Isso alimenta o "contexto real" e é conteúdo defensável.

---

## 6. Rollout gradual (evita spam e diz ao Google que o site cresce organicamente)

1. **Fase 1:** Londrina completa (hub) + 6 serviços + 4–6 bairros reais + 3 casos. Página estadual `/onde-atuamos`.
2. **Fase 2:** Tier 1 (5–6 cidades), 1 serviço-âncora cada (marketing/sites), com contexto único.
3. **Fase 3:** Expandir serviços nas tier 1 conforme surgem casos; iniciar tier 2 sob demanda.
4. **Nunca:** publicar centenas de páginas num único deploy.

Ritmo saudável: novas landings locais acompanham a produção de conteúdo e provas — 5 a 15 por mês, não 3.000 de uma vez.

---

## 7. Reforço off-site (essencial para local + GEO)

- **Google Business Profile** otimizado (Londrina) — maior peso em ranking local.
- **NAP consistente** (nome, endereço, telefone) em site, GBP e diretórios.
- Avaliações reais no GBP.
- Citações em diretórios locais confiáveis do PR.

---

> Criado em 2026-07-01 15:37 (-03) · Última modificação: 2026-07-01 15:37 (-03)
