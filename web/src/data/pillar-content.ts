type PillarContent = {
	headline: string;
	intro: string;
	bullets: string[];
};

export const PILLAR_CONTENT: Record<string, PillarContent> = {
	'marketing-digital': {
		headline: 'Marketing digital que gera vendas, não só visibilidade',
		intro:
			'Estratégia, canais e mensuração trabalhando juntos para transformar audiência em clientes. Nada de ações soltas — um plano integrado focado no seu faturamento.',
		bullets: ['Estratégia digital ponta a ponta', 'Funis de aquisição e nutrição', 'Métricas ligadas a receita', 'Otimização contínua por dados'],
	},
	'trafego-pago': {
		headline: 'Tráfego pago com retorno previsível',
		intro:
			'Campanhas no Google e Meta Ads estruturadas para trazer clientes qualificados ao menor custo possível — com ROAS médio de 4,8× nas contas Matra.',
		bullets: ['Google Ads e Meta Ads', 'Segmentação e criativos que convertem', 'Otimização diária de campanhas', 'Relatórios em tempo real no SpotAgência'],
	},
	seo: {
		headline: 'SEO para aparecer no Google e nas respostas de IA',
		intro:
			'Posicionamento orgânico que constrói autoridade e traz tráfego qualificado todos os meses — otimizado também para ChatGPT, Gemini e AI Overviews.',
		bullets: ['SEO técnico e de conteúdo', 'Otimização para IA (AEO/GEO)', 'Estratégia de autoridade', 'Crescimento sustentável de tráfego'],
	},
	'redes-sociais': {
		headline: 'Redes sociais que constroem marca e vendem',
		intro:
			'Presença consistente e conteúdo estratégico que geram autoridade, engajamento e oportunidades reais de negócio — incluindo produção de vídeo profissional.',
		bullets: ['Gestão e planejamento de conteúdo', 'Produção de vídeo e criativos', 'Estratégia por plataforma', 'Comunidade e engajamento'],
	},
	branding: {
		headline: 'Branding que faz sua marca ser lembrada e escolhida',
		intro:
			'Identidade, posicionamento e mensagem alinhados para diferenciar sua empresa e justificar o seu preço no mercado.',
		bullets: ['Posicionamento de marca', 'Identidade visual', 'Mensagem e tom de voz', 'Consistência em todos os canais'],
	},
	'desenvolvimento-de-sites': {
		headline: 'Sites rápidos que transformam visitantes em clientes',
		intro:
			'Sites e landing pages de alta performance, otimizados para SEO e conversão. Velocidade, design e estratégia no mesmo lugar.',
		bullets: ['Sites e landing pages', 'Performance e Core Web Vitals', 'Otimizados para conversão', 'SEO desde a fundação'],
	},
	'desenvolvimento-de-sistemas': {
		headline: 'Sistemas sob medida que escalam sua operação',
		intro:
			'Software, MVPs, APIs e plataformas SaaS desenvolvidos para resolver os gargalos do seu negócio e crescer junto com ele.',
		bullets: ['Software sob medida e MVPs', 'Sistemas web e mobile', 'APIs e integrações', 'Plataformas SaaS'],
	},
	'inteligencia-artificial': {
		headline: 'Inteligência artificial aplicada ao seu negócio',
		intro:
			'IA que economiza tempo, qualifica leads e potencializa vendas — soluções práticas integradas à sua operação, não hype.',
		bullets: ['Atendimento e qualificação com IA', 'Automações inteligentes', 'Análise e insights de dados', 'Integração com seus sistemas'],
	},
	automacao: {
		headline: 'Automação que libera o seu time do trabalho manual',
		intro:
			'Processos automatizados que eliminam tarefas repetitivas, reduzem erros e escalam sua operação sem aumentar o custo.',
		bullets: ['Automação de marketing e vendas', 'Fluxos e integrações', 'Remarketing automatizado', 'Mais eficiência, menos retrabalho'],
	},
	tecnologia: {
		headline: 'Tecnologia como vantagem competitiva',
		intro:
			'Da infraestrutura às plataformas próprias, colocamos tecnologia a serviço do crescimento da sua empresa.',
		bullets: ['Consultoria tecnológica', 'Plataformas próprias', 'Infraestrutura e integrações', 'Inovação aplicada ao negócio'],
	},
	'e-commerce': {
		headline: 'E-commerce que vende mais e converte melhor',
		intro:
			'Da loja à estratégia de tráfego e recuperação de vendas, estruturamos a operação digital para você faturar mais.',
		bullets: ['Loja otimizada para conversão', 'Tráfego pago para e-commerce', 'Recuperação de carrinho', 'Integrações e automações'],
	},
	crm: {
		headline: 'CRM que organiza o funil e fecha mais negócios',
		intro:
			'Com o Matra CRM, cada lead é acompanhado do primeiro contato à venda — integrado ao Meta Ads e ao seu processo comercial.',
		bullets: ['Funil de vendas organizado', 'Integração com Meta Ads', 'Gestão de leads e clientes', 'Previsibilidade comercial'],
	},
	vendas: {
		headline: 'Estrutura de vendas para crescer com previsibilidade',
		intro:
			'Processo, tecnologia e marketing alinhados para transformar leads em receita de forma consistente.',
		bullets: ['Processo comercial estruturado', 'Qualificação de leads', 'Automação de follow-up', 'Métricas e previsibilidade'],
	},
};
