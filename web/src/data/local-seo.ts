export const slugify = (s: string) =>
	s
		.normalize('NFD')
		.replace(/[^\x00-\x7f]/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');

// Atendimento na cidade-hub (Londrina) — /[slug]
export const ATENDIMENTO_LONDRINA = [
	{ label: 'Agência de Marketing Digital', href: '/agencia-de-marketing-digital-em-londrina' },
	{ label: 'Agência de Tráfego Pago', href: '/agencia-de-trafego-pago-em-londrina' },
	{ label: 'Agência de Marketing', href: '/agencia-de-marketing-em-londrina' },
	{ label: 'Gestor de Tráfego', href: '/gestor-de-trafego-em-londrina' },
	{ label: 'Para Clínicas', href: '/marketing-para-clinicas-em-londrina' },
	{ label: 'Para Restaurantes', href: '/marketing-para-restaurantes-em-londrina' },
	{ label: 'Para Imobiliárias', href: '/marketing-para-imobiliarias-em-londrina' },
];

// Segmentos — /marketing-para-[segmento]
export const SEGMENTOS = [
	'Odontologia', 'Psicólogos', 'Clínicas de Estética', 'Restaurantes', 'Advocacia',
	'Autoescolas', 'Academias e Studios', 'Fisioterapeutas', 'Nutricionistas',
	'Pet Shops e Veterinários', 'Fotógrafos', 'Ar Condicionado', 'Energia Solar',
	'Lojas de Veículos', 'Imobiliárias', 'Marmorarias', 'Marcenarias', 'Móveis Planejados',
].map((nome) => ({ nome, href: `/marketing-para-${slugify(nome)}` }));

// Cidades e bairros — /marketing-em-[cidade] e /marketing-em-[cidade]/[bairro]
export const CIDADES_BAIRROS = [
	{
		cidade: 'Londrina',
		bairros: [
			'Gleba Palhano', 'Igapó', 'Jardim Champagnat', 'Cidade Industrial', 'Parque Universidade',
			'Jardim Morumbi', 'União da Vitória', 'Heimtal', 'Cinco Conjuntos', 'Jardim dos Alpes',
			'Parque Ouro Verde', 'Jardim Coliseu', 'Jardim Califórnia', 'Gleba Lindóia', 'Jardim Interlagos',
			'Jardim Presidente', 'Alto Cafezal', 'Jardim Olímpico', 'Jardim Leonor', 'Jardim Sabará',
			'Cafezal', 'Jardim Piza', 'Parque Guanabara', 'Jardim Inglaterra', 'Vivendas do Arvoredo',
			'Bela Suíça', 'Jardim Higienópolis', 'Shangri-lá', 'Centro Histórico', 'Boa Vista',
		],
	},
	{ cidade: 'Cambé', bairros: ['Centro', 'Jardim Bandeirantes', 'Jardim das Oliveiras', 'Jardim Alvorada', 'Jardim Gutierrez', 'Vila Real'] },
	{ cidade: 'Ibiporã', bairros: ['Centro', 'Jardim Bela Vista', 'Jardim Paulista', 'Jardim das Cerejeiras'] },
	{ cidade: 'Rolândia', bairros: ['Centro', 'Jardim Panamá', 'Jardim Riviera', 'Vila Operária'] },
	{ cidade: 'Arapongas', bairros: ['Centro', 'Jardim Imperial', 'Jardim Caravelle', 'Jardim Novo Horizonte'] },
	{ cidade: 'Apucarana', bairros: ['Centro', 'Jardim Mazza', 'Jardim Ponta Grossa', 'Núcleo Habitacional'] },
	{ cidade: 'Cornélio Procópio', bairros: ['Centro', 'Jardim Bela Vista', 'Jardim das Palmeiras', 'Jardim Brasil'] },
].map((c) => ({
	...c,
	href: `/marketing-em-${slugify(c.cidade)}`,
	// Bairro é âncora dentro da página da cidade (evita doorway pages / conteúdo thin)
	bairros: c.bairros.map((b) => ({ nome: b, href: `/marketing-em-${slugify(c.cidade)}#${slugify(b)}` })),
}));

// Ferramentas grátis — /ferramentas/[slug]
export const FERRAMENTAS = [
	{ nome: 'Calculadora de Tráfego Pago', href: '/ferramentas/calculadora-de-trafego-pago' },
	{ nome: 'Simulador de ROI de Anúncios', href: '/ferramentas/simulador-de-roi' },
	{ nome: 'Checklist Google Meu Negócio', href: '/ferramentas/checklist-google-meu-negocio' },
	{ nome: 'Diagnóstico de Presença Digital', href: '/ferramentas/diagnostico-de-presenca-digital' },
	{ nome: 'Gerador de Briefing para Anúncios', href: '/ferramentas/gerador-de-briefing' },
];

export const REDES_SOCIAIS = [
	{ nome: 'Google Meu Negócio', href: 'https://maps.app.goo.gl/ho77NyysoAKUm7p3A' },
	{ nome: 'Instagram', href: 'https://instagram.com/matra.marketing' },
	{ nome: 'YouTube', href: '#' },
	{ nome: 'LinkedIn', href: '#' },
];
