import { defineUserConfig } from 'vuepress-vite';
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite';

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
	bundler: '@vuepress/vite',
	lang: 'en-US',
	title: 'AuxBot',
	description: 'AuxBot is a multi use discord bot which has many different things such as logging, moderation, music, memes, fun, and so many more commands.'
});
