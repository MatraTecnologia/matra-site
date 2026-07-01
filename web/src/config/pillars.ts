export type Pillar = {
  slug: string;
  name: string;
  group: 'Marketing' | 'Tecnologia' | 'Negócios' | 'Portal';
};

export const PILLARS = [
  { slug: 'marketing-digital', name: 'Marketing Digital', group: 'Marketing' },
  { slug: 'trafego-pago', name: 'Tráfego Pago', group: 'Marketing' },
  { slug: 'seo', name: 'SEO', group: 'Marketing' },
  { slug: 'redes-sociais', name: 'Redes Sociais', group: 'Marketing' },
  { slug: 'branding', name: 'Branding', group: 'Marketing' },
  { slug: 'desenvolvimento-de-sites', name: 'Desenvolvimento de Sites', group: 'Tecnologia' },
  { slug: 'desenvolvimento-de-sistemas', name: 'Desenvolvimento de Sistemas', group: 'Tecnologia' },
  { slug: 'inteligencia-artificial', name: 'Inteligência Artificial', group: 'Tecnologia' },
  { slug: 'automacao', name: 'Automação', group: 'Tecnologia' },
  { slug: 'tecnologia', name: 'Tecnologia', group: 'Tecnologia' },
  { slug: 'e-commerce', name: 'E-commerce', group: 'Negócios' },
  { slug: 'crm', name: 'CRM', group: 'Negócios' },
  { slug: 'vendas', name: 'Vendas', group: 'Negócios' },
] as const satisfies readonly Pillar[];

export const PILLAR_SLUGS = PILLARS.map((p) => p.slug);

export const pillarBySlug = (slug: string) => PILLARS.find((p) => p.slug === slug);

export const CONTENT_SECTIONS = [
  { slug: 'blog', name: 'Blog', href: '/blog' },
  { slug: 'guias', name: 'Guias', href: '/guias' },
  { slug: 'tutoriais', name: 'Tutoriais', href: '/tutoriais' },
  { slug: 'noticias', name: 'Notícias', href: '/noticias' },
  { slug: 'casos', name: 'Casos de Sucesso', href: '/casos' },
  { slug: 'glossario', name: 'Glossário', href: '/glossario' },
  { slug: 'ferramentas', name: 'Ferramentas', href: '/ferramentas' },
] as const;
