import { defineClientAppEnhance } from '@vuepress/client';
import { DiscordMessages, DiscordMessage, install as DiscordMessageComponents } from '@discord-message-components/vue';
import '@discord-message-components/vue/dist/style.css';

export default defineClientAppEnhance(({ app }) => {
	app.use(DiscordMessageComponents, {
		profiles: {
			user: {
				author: 'Discord User',
				avatar: 'green'
			}
		}
	});

	app.component('DiscordMessage', DiscordMessage);
	app.component('DiscordMessages', DiscordMessages);
});
