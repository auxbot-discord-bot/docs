---
home: true
heroImage: /auxbot-logo.png
actions:
    - text: Website
      link: https://www.auxbot.xyz
      type: secondary
    - text: Invite
      link: https://www.auxbot.xyz/redirect/invite
      type: secondary
footer: © Copyright AuxBot 2020-2021
---

## How do I setup the bot?

These are the basic plugins to configure the bot for your server.

### Swearing Detection And Prevention

<ClientOnly>
	<DiscordMessages>
		<DiscordMessage profile="user">
			!a swearing toggle
		</DiscordMessage>
	</DiscordMessages>
</ClientOnly>

This will check every message in your server for profanity and it it is found the bot will delete the message and send an embed with a quote to what the offender said with the swear word hidden.

### Server Welcome Banners

This will set the channel for your new member welcome banners.

<ClientOnly>
	<DiscordMessages>
		<DiscordMessage profile="user">
			!a welcome set &lt;CHANNEL&gt;
		</DiscordMessage>
	</DiscordMessages>
</ClientOnly>

**To test the welcome message you can do**

<ClientOnly>
	<DiscordMessages>
		<DiscordMessage profile="user">
			!a welcome test
		</DiscordMessage>
	</DiscordMessages>
</ClientOnly>

**And you can customize them**

<ClientOnly>
	<DiscordMessages>
		<DiscordMessage profile="user">
			!a welcome message &lt;SENTENCE&gt;<br>!a welcome banner &lt;PNG / JPG / GIF URL&gt;
		</DiscordMessage>
	</DiscordMessages>
</ClientOnly>

### Bump Timer

::: warning
The bump plugin only works with the disboard bot for the moment.
:::

This will set the bump message channel.

<ClientOnly>
	<DiscordMessages>
		<DiscordMessage profile="user">
			!a bump set &lt;CHANNEL&gt;
		</DiscordMessage>
	</DiscordMessages>
</ClientOnly>

**To customize the message sent you can do**

<ClientOnly>
	<DiscordMessages>
		<DiscordMessage profile="user">
			!a bump message &lt;MESSAGE&gt;
		</DiscordMessage>
	</DiscordMessages>
</ClientOnly>

### Logging

This will set the logging channel for your server.

<ClientOnly>
	<DiscordMessages>
		<DiscordMessage profile="user">
			!a logs set &lt;CHANNEL&gt;
		</DiscordMessage>
	</DiscordMessages>
</ClientOnly>

**To customize what events you want toggled do**

<ClientOnly>
	<DiscordMessages>
		<DiscordMessage profile="user">
			!a logs toggle &lt;EVENT&gt;
		</DiscordMessage>
	</DiscordMessages>
</ClientOnly>

**To get a list of the events you can use do**

<ClientOnly>
	<DiscordMessages>
		<DiscordMessage profile="user">
			!a events
		</DiscordMessage>
	</DiscordMessages>
</ClientOnly>

### Levelling

This will enable the level plugin in your server.

<ClientOnly>
	<DiscordMessages>
		<DiscordMessage profile="user">
			!a level toggle
		</DiscordMessage>
	</DiscordMessages>
</ClientOnly>
