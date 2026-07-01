// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL || 'https://matratecnologia.com',
	i18n: {
		defaultLocale: 'pt-BR',
		locales: ['pt-BR'],
	},
	integrations: [mdx(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	fonts: [
		{
			name: 'Sora',
			cssVariable: '--font-display',
			provider: fontProviders.google(),
			weights: [600, 700, 800],
			subsets: ['latin'],
			fallbacks: ['sans-serif'],
		},
		{
			name: 'Inter',
			cssVariable: '--font-sans',
			provider: fontProviders.google(),
			weights: [400, 500, 600, 700],
			subsets: ['latin'],
			fallbacks: ['system-ui', 'sans-serif'],
		},
	],
});
