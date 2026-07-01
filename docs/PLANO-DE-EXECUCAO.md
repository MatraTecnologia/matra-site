# Matra — Plano de Execução

Roteiro acionável do projeto. Prioridade: **conversão primeiro**, depois autoridade orgânica (portal). Ordem de entrega pensada para o site já vender antes de estar 100% completo.

Legenda: ✅ feito · 🔜 próximo · ⬜ pendente

---

## Etapa 0 — Fundação técnica ✅
- ✅ Astro + Tailwind v4 + tokens da marca (dark/roxo/metálico)
- ✅ Fontes Sora + Inter (self-host)
- ✅ `config/site.ts` (contato, WhatsApp, NAP) e `config/pillars.ts`
- ✅ `content.config.ts` — 10 collections com Zod
- ✅ `lib/schema.ts` + `JsonLd` + `Breadcrumbs` (Organization/WebSite/@graph global)
- ✅ `BaseLayout` + Header + Footer + View Transitions + scroll-reveal

## Etapa 1 — Home de conversão ✅ (refinamentos pendentes)
- ✅ 16 seções do funil (Hero → CTA final) — ver [PLANO-CONVERSAO-HOME](./PLANO-CONVERSAO-HOME.md)
- ✅ SpotAgência (mockup), Equipe (8), Ecossistema (9 plataformas)
- ✅ Depoimentos em vídeo (reels iframe) + Decol Design
- ✅ Calculadora de ROI de tráfego pago
- ✅ Animações (reveal, marquee, fade-up)
- ⬜ **Fotos reais da equipe** (hoje avatar com iniciais) — pedir ao cliente
- ⬜ **Thumbnails reais dos reels** (ou manter capa on-brand)
- ⬜ Confirmar **nº WhatsApp** e **domínio** definitivos
- ✅ Seção "O que acontece quando você começa hoje" (timeline de transformação)
- ✅ Botão flutuante de WhatsApp (em todas as páginas)
- ⬜ Revisão fina de copy + teste no `npm run dev`

## Etapa 2 — Ferramentas / Calculadoras (lead magnets) 🔜
Ativos de SEO + conversão. Cada uma vira página em `/ferramentas/[slug]`.
- ✅ Calculadora de ROI de tráfego pago (na home)
- ⬜ Página índice `/ferramentas`
- ⬜ Calculadora: "Quanto você perde sem SEO" (tráfego orgânico não capturado)
- ⬜ Calculadora: ROI de automação (horas economizadas × custo/hora)
- ⬜ Calculadora: custo por lead ideal / ponto de equilíbrio de anúncios
- ⬜ Gerador de UTM (ferramenta utilitária → backlinks)
- ⬜ Componente base reutilizável de calculadora (para escalar)

## Etapa 3 — Páginas de serviço/tema (conversão por intenção) 🔜
- ✅ `/servicos` (índice agrupado)
- ✅ 13 páginas de pilar dinâmicas `/[categoria]` com conteúdo único + `Service` schema + Breadcrumbs + CTA
- ✅ Institucionais: `/sobre` (E-E-A-T), `/contato`, `/onde-atuamos`
- ⬜ Aprofundar cada serviço (entregáveis, prova, FAQ dedicada) conforme necessidade

## Etapa 4 — Portal de conteúdo (autoridade + SEO orgânico)
- ⬜ Migrar collection `blog` → `artigos` e limpar template antigo
- ⬜ `ArticleLayout` (TOC, autor, relacionados, share, reading progress)
- ⬜ Hubs `/[categoria]` + rotas guias/tutoriais/notícias/casos
- ⬜ Glossário + interlinking automático
- ⬜ RSS por categoria + busca (Pagefind)
- ⬜ Seed inicial de conteúdo (guias-pilar + artigos) — ver [PLANO-CONTEUDO-12M](./PLANO-CONTEUDO-12M.md)

## Etapa 5 — SEO Local (Paraná, hub Londrina)
- ⬜ Dataset `cidades.ts` (Londrina completo) + `LocalLayout`
- ⬜ Rotas `/[servico]-em-[cidade]` (curadas, anti-doorway) + `/onde-atuamos`
- ⬜ `LocalBusiness` schema + Google Business Profile
- (Estratégia detalhada em [SEO-LOCAL-PARANA](./SEO-LOCAL-PARANA.md))

## Etapa 6 — Lançamento
- ⬜ Páginas institucionais: `/sobre` (E-E-A-T), `/contato`
- ⬜ OG images automáticas, `llms.txt`, robots.txt final
- ⬜ Analytics (Umami/Plausible) + Search Console + Bing
- ⬜ Lighthouse CI ≥95 em todas as métricas
- ⬜ Deploy (Cloudflare/Vercel) + domínio + redirects

---

## Próximos 3 passos sugeridos (ordem)
1. **Fechar a home** — botão flutuante WhatsApp + revisão de copy no navegador.
2. **`/ferramentas` + 2 calculadoras novas** — mais lead magnets e páginas indexáveis.
3. **Páginas de serviço** — capturam quem busca por serviço específico e convertem.

> Criado em 2026-07-01 16:29 (-03) · Última modificação: 2026-07-01 16:29 (-03)
