import type { APIRoute } from 'astro';
import { SITE, CONTACT, NAP } from '../config/site';
import { PILLARS } from '../config/pillars';

const PILLAR_DESC: Record<string, string> = {
	'marketing-digital': 'Estratégia de marketing digital completa para gerar leads e vendas.',
	'trafego-pago': 'Gestão de tráfego pago (Google Ads e Meta Ads) focada em ROI.',
	seo: 'SEO técnico e de conteúdo para ranquear no Google e nas IAs.',
	'redes-sociais': 'Gestão de redes sociais e conteúdo que gera autoridade.',
	branding: 'Identidade visual e posicionamento de marca.',
	'desenvolvimento-de-sites': 'Criação de sites rápidos e otimizados para conversão.',
	'desenvolvimento-de-sistemas': 'Sistemas web sob medida para o seu negócio.',
	'inteligencia-artificial': 'Soluções de IA aplicadas a marketing e operação.',
	automacao: 'Automação de marketing e de processos comerciais.',
	tecnologia: 'Consultoria e soluções de tecnologia para empresas.',
	'e-commerce': 'Criação e crescimento de lojas virtuais.',
	crm: 'Implantação e gestão de CRM para organizar e escalar vendas.',
	vendas: 'Estruturação de processos de vendas e geração de demanda.',
};

const CIDADES: [string, string, string][] = [
	['marketing-em-londrina', 'Marketing em Londrina', 'Marketing digital e tráfego pago para empresas em Londrina.'],
	['marketing-em-maringa', 'Marketing em Maringá', 'Marketing digital e tráfego pago para empresas em Maringá.'],
	['marketing-em-curitiba', 'Marketing em Curitiba', 'Marketing digital e tráfego pago para empresas em Curitiba.'],
	['marketing-em-cascavel', 'Marketing em Cascavel', 'Marketing digital e tráfego pago para empresas em Cascavel.'],
	['marketing-em-ponta-grossa', 'Marketing em Ponta Grossa', 'Marketing digital e tráfego pago para empresas em Ponta Grossa.'],
	['marketing-em-foz-do-iguacu', 'Marketing em Foz do Iguaçu', 'Marketing digital e tráfego pago para empresas em Foz do Iguaçu.'],
];

const ATENDIMENTO: [string, string, string][] = [
	['agencia-de-marketing-digital-em-londrina', 'Agência de marketing digital em Londrina', 'Agência de marketing digital em Londrina.'],
	['agencia-de-trafego-pago-em-londrina', 'Agência de tráfego pago em Londrina', 'Agência de tráfego pago em Londrina.'],
	['gestor-de-trafego-em-londrina', 'Gestor de tráfego em Londrina', 'Gestor de tráfego para empresas em Londrina.'],
];

const SEGMENTOS: [string, string, string][] = [
	['marketing-para-clinicas-de-estetica', 'Clínicas de estética', 'Marketing para clínicas de estética.'],
	['marketing-para-odontologia', 'Odontologia', 'Marketing para dentistas e clínicas odontológicas.'],
	['marketing-para-restaurantes', 'Restaurantes', 'Marketing para restaurantes e food service.'],
	['marketing-para-advocacia', 'Advocacia', 'Marketing para advogados e escritórios de advocacia.'],
	['marketing-para-imobiliarias', 'Imobiliárias', 'Marketing para imobiliárias e corretores.'],
	['marketing-para-energia-solar', 'Energia solar', 'Marketing para empresas de energia solar.'],
];

const FERRAMENTAS: [string, string, string][] = [
	['ferramentas/simulador-de-roi', 'Simulador de ROI', 'Simulador de ROI de marketing.'],
	['ferramentas/calculadora-de-trafego-pago', 'Calculadora de tráfego pago', 'Calculadora de tráfego pago (orçamento e retorno).'],
	['ferramentas/diagnostico-de-presenca-digital', 'Diagnóstico de presença digital', 'Diagnóstico gratuito de presença digital.'],
	['ferramentas/checklist-google-meu-negocio', 'Checklist Google Meu Negócio', 'Checklist do Google Meu Negócio para SEO local.'],
	['ferramentas/gerador-de-briefing', 'Gerador de briefing', 'Gerador de briefing de projeto.'],
];

export const GET: APIRoute = ({ site }) => {
	const abs = (path: string) => new URL(path, site).href;
	const link = ([path, title, desc]: [string, string, string]) => `- [${title}](${abs(path)}): ${desc}`;

	const lines = [
		`# ${SITE.legalName}`,
		'',
		`> Agência de marketing e tecnologia em ${NAP.city}, ${NAP.regionName}, que ajuda empresas a atrair clientes e vender mais com tráfego pago, SEO, sites e automação. Atende toda a região e o Paraná, com foco em resultado mensurável (leads, vendas e ROI), não em vaidade.`,
		'',
		`Contato: WhatsApp ${CONTACT.whatsappLabel} · E-mail ${CONTACT.email} · Site ${SITE.url}`,
		'',
		'## Serviços',
		...PILLARS.map((p) =>
			`- [${p.name}](${abs('/' + p.slug)}): ${PILLAR_DESC[p.slug] ?? `Serviço de ${p.name} da Matra.`}`,
		),
		'',
		'## Onde atuamos',
		...CIDADES.map(link),
		...ATENDIMENTO.map(link),
		'',
		'## Segmentos atendidos',
		...SEGMENTOS.map(link),
		'',
		'## Ferramentas gratuitas',
		...FERRAMENTAS.map(link),
		'',
		'## Institucional',
		`- [Sobre a Matra](${abs('/sobre')}): quem somos, time e forma de trabalho.`,
		`- [Serviços](${abs('/servicos')}): visão geral de todos os serviços.`,
		`- [Onde atuamos](${abs('/onde-atuamos')}): cidades e regiões atendidas.`,
		`- [Casos de sucesso](${abs('/casos')}): resultados de clientes.`,
		`- [Contato](${abs('/contato')}): fale com a Matra.`,
		'',
		'## Optional',
		`- [Blog](${abs('/blog')}): artigos sobre marketing e tecnologia.`,
		`- [Guias](${abs('/guias')}): guias aprofundados por tema.`,
		`- [Glossário](${abs('/glossario')}): termos de marketing digital explicados.`,
		`- [Sitemap](${abs('/sitemap-index.xml')}): índice completo de páginas.`,
		'',
	];

	return new Response(lines.join('\n'), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
