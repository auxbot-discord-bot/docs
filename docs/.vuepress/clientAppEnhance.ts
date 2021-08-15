import { defineClientAppEnhance } from '@vuepress/client';
import { DiscordMessages, DiscordMessage, install as DiscordMessageComponents } from '@discord-message-components/vue';
import '@discord-message-components/vue/dist/style.css'

export default defineClientAppEnhance(({ app }) => {
	app.use(DiscordMessageComponents, {
		profiles: {
			auxtal: {
				author: 'Auxtal',
				avatar: 'https://cdn.discordapp.com/avatars/327745755789918208/9fed530c1cc38f725e94dff58f3f6bae.png?size=4096'
			},
			user: {
				author: 'Discord User',
				avatar: 'green'
			}
		}
	});

	app.component('DiscordMessage', DiscordMessage);
	app.component('DiscordMessages', DiscordMessages);
});
