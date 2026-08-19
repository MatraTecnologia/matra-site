export const SITE = {
  name: 'Matra',
  legalName: 'Matra Tecnologia & Marketing',
  title: 'Matra — Marketing e Tecnologia no Paraná',
  description:
    'Portal de marketing digital, tráfego pago, SEO e tecnologia da Matra. Conteúdo, guias e soluções para empresas em Londrina e todo o Paraná.',
  url: 'https://matratecnologia.com',
  locale: 'pt-BR',
  themeColor: '#000000',
  hubCity: 'Londrina',
  hubState: 'PR',
} as const;

export const CONTACT = {
  whatsapp: '554384778544',
  whatsappLabel: '+55 43 8477-8544',
  email: 'matratecnologia@gmail.com',
  instagram: 'https://instagram.com/matra.marketing',
} as const;

export const NAP = {
  name: SITE.legalName,
  city: 'Londrina',
  region: 'PR',
  regionName: 'Paraná',
  country: 'BR',
  latitude: -23.3200495,
  longitude: -51.150188,
  mapUrl: 'https://maps.app.goo.gl/ho77NyysoAKUm7p3A',
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${CONTACT.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
