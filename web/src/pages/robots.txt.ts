import type { APIRoute } from 'astro';

const AI_CRAWLERS = [
	'GPTBot',
	'OAI-SearchBot',
	'ChatGPT-User',
	'ClaudeBot',
	'Claude-User',
	'PerplexityBot',
	'Perplexity-User',
	'Google-Extended',
	'Applebot-Extended',
	'CCBot',
];

export const GET: APIRoute = ({ site }) => {
	const sitemapUrl = new URL('sitemap-index.xml', site).href;
	const llmsUrl = new URL('llms.txt', site).href;

	const content = [
		'User-agent: *',
		'Allow: /',
		'',
		'# IAs generativas e motores de resposta são bem-vindos (GEO/AEO).',
		...AI_CRAWLERS.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
		`# LLMs: ${llmsUrl}`,
		`Sitemap: ${sitemapUrl}`,
	].join('\n');

	return new Response(content, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
