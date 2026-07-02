import { SITE, CONTACT, NAP } from '../config/site';

const abs = (path: string) => new URL(path, SITE.url).href;

export const ORG_ID = abs('/#organization');
export const WEBSITE_ID = abs('/#website');

export const organizationSchema = () => ({
	'@type': ['Organization', 'ProfessionalService'],
	'@id': ORG_ID,
	name: SITE.legalName,
	alternateName: SITE.name,
	url: SITE.url,
	logo: abs('/logo.png'),
	image: abs('/logo.png'),
	email: CONTACT.email,
	telephone: CONTACT.whatsappLabel,
	foundingDate: '2020',
	knowsLanguage: SITE.locale,
	areaServed: { '@type': 'State', name: NAP.regionName },
	address: {
		'@type': 'PostalAddress',
		addressLocality: NAP.city,
		addressRegion: NAP.region,
		addressCountry: NAP.country,
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: NAP.latitude,
		longitude: NAP.longitude,
	},
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: CONTACT.whatsappLabel,
		email: CONTACT.email,
		contactType: 'customer service',
		areaServed: NAP.country,
		availableLanguage: 'Portuguese',
	},
	sameAs: [CONTACT.instagram, NAP.mapUrl],
});

export const websiteSchema = () => ({
	'@type': 'WebSite',
	'@id': WEBSITE_ID,
	url: SITE.url,
	name: SITE.name,
	inLanguage: SITE.locale,
	publisher: { '@id': ORG_ID },
});

type ArticleInput = {
	type?: 'Article' | 'BlogPosting' | 'NewsArticle';
	url: string;
	title: string;
	description: string;
	image?: string;
	datePublished: Date;
	dateModified?: Date;
	authorName?: string;
	authorUrl?: string;
};

export const articleSchema = (a: ArticleInput) => ({
	'@type': a.type ?? 'BlogPosting',
	'@id': `${a.url}#article`,
	headline: a.title,
	description: a.description,
	...(a.image ? { image: a.image } : {}),
	datePublished: a.datePublished.toISOString(),
	dateModified: (a.dateModified ?? a.datePublished).toISOString(),
	inLanguage: SITE.locale,
	mainEntityOfPage: a.url,
	publisher: { '@id': ORG_ID },
	author: a.authorName
		? { '@type': 'Person', name: a.authorName, ...(a.authorUrl ? { url: a.authorUrl } : {}) }
		: { '@id': ORG_ID },
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
	'@type': 'BreadcrumbList',
	itemListElement: items.map((it, i) => ({
		'@type': 'ListItem',
		position: i + 1,
		name: it.name,
		item: new URL(it.url, SITE.url).href,
	})),
});

export const faqSchema = (faq: { q: string; a: string }[]) => ({
	'@type': 'FAQPage',
	mainEntity: faq.map((f) => ({
		'@type': 'Question',
		name: f.q,
		acceptedAnswer: { '@type': 'Answer', text: f.a },
	})),
});

export const serviceSchema = (s: { name: string; description: string; url: string; city?: string }) => ({
	'@type': 'Service',
	name: s.name,
	description: s.description,
	url: new URL(s.url, SITE.url).href,
	provider: { '@id': ORG_ID },
	areaServed: s.city
		? { '@type': 'City', name: s.city }
		: { '@type': 'State', name: NAP.regionName },
});

export const personSchema = (p: { name: string; url: string; role?: string; sameAs?: string[]; knowsAbout?: string[] }) => ({
	'@type': 'Person',
	'@id': `${new URL(p.url, SITE.url).href}#person`,
	name: p.name,
	url: new URL(p.url, SITE.url).href,
	...(p.role ? { jobTitle: p.role } : {}),
	...(p.sameAs?.length ? { sameAs: p.sameAs } : {}),
	...(p.knowsAbout?.length ? { knowsAbout: p.knowsAbout } : {}),
	worksFor: { '@id': ORG_ID },
});

export const graph = (...nodes: object[]) => ({
	'@context': 'https://schema.org',
	'@graph': nodes.filter(Boolean),
});
