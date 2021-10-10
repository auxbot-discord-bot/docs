import { defineUserConfig } from 'vuepress-vite';
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite';

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
	bundler: '@vuepress/vite',
	lang: 'en-US',
	title: 'AuxBot Documentation',
	description: 'AuxBot is a multipurpose discord bot with many features.',
	plugins: [
		['@vuepress/plugin-pwa', { skipWaiting: true }],
		['@vuepress/plugin-pwa-popup'],
		['@vuepress/plugin-shiki', { theme: 'dark-plus' }],
		[
			'@vuepress/plugin-docsearch',
			{
				apiKey: process.env.ALGOLIA_KEY,
				indexName: 'auxbot'
			}
		]
	],
	themeConfig: {
		repo: 'AuxBot-Discord-Bot/AuxBot-Docs',
		logo: '/auxbot-logo.png',
		sidebarDepth: 3,
		editLinks: true,
		lastUpdated: true,
		navbar: [
			{
				text: 'Plugins',
				link: '/plugins/'
			},
			{
				text: 'Frequently Asked Questions',
				link: '/faq/'
			}
		]
	},
	head: [
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png'
			}
		],
		[
			'link',
			{
				rel: 'manifest',
				href: '/manifest.webmanifest'
			}
		],
		[
			'meta',
			{
				name: 'application-name',
				content: 'AuxBot Documentation'
			}
		],
		[
			'meta',
			{
				charset: 'utf-8'
			}
		],
		[
			'meta',
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1.0'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				href: '/auxbot-logo.png'
			}
		],
		[
			'meta',
			{
				property: 'og:site_name',
				content: 'docs.auxbot.xyz'
			}
		],
		[
			'meta',
			{
				property: 'og:title',
				content: 'AuxBot Documentation'
			}
		],
		[
			'meta',
			{
				property: 'og:description',
				content: 'This is AuxBot, a powerful discord bot that has many features that will suit any discord server and power your community.'
			}
		],
		[
			'meta',
			{
				property: 'og:url',
				content: 'https://docs.auxbot.xyz/'
			}
		],
		[
			'meta',
			{
				property: 'og:image',
				content: '/auxbot-banner.png'
			}
		],
		[
			'meta',
			{
				property: 'og:type',
				content: 'website'
			}
		],
		[
			'meta',
			{
				name: 'msapplication-TileColor',
				content: '#fa2b38'
			}
		],
		[
			'meta',
			{
				name: 'theme-color',
				content: '#fa2b38'
			}
		],
		[
			'meta',
			{
				property: 'og:locale',
				content: 'en_US'
			}
		]
	]
});