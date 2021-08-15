---
home: true
heroImage: /auxbot-logo.png
---

## How do I setup the bot?

These are the basic plugins to configure the bot for your server.

### Swearing Detection And Prevention

<DiscordMessages>
	<DiscordMessage profile="user">
		!a swearing toggle
	</DiscordMessage>
</DiscordMessages>

This will check every message in your server for profanity and it it is found the bot will delete the message and send an embed with a quote to what the offender said with the swear word hidden.

### Server Welcome Banners

This will set the channel for your new member welcome banners.

<DiscordMessages>
	<DiscordMessage profile="user">
		!a welcome set &lt;CHANNEL&gt;
	</DiscordMessage>
</DiscordMessages>

**To test the welcome message you can do**

<DiscordMessages>
	<DiscordMessage profile="user">
		!a welcome test
	</DiscordMessage>
</DiscordMessages>

**And you can customize them**

<DiscordMessages>
	<DiscordMessage profile="user">
		!a welcome message &lt;SENTENCE&gt;<br>!a welcome banner &lt;PNG / JPG / GIF URL&gt;
	</DiscordMessage>
</DiscordMessages>

### Disboard Timer

This will set the disboard message channel.

<DiscordMessages>
	<DiscordMessage profile="user">
		!a disboard set &lt;CHANNEL&gt;
	</DiscordMessage>
</DiscordMessages>

**To customize the message sent you can do**

<DiscordMessages>
	<DiscordMessage profile="user">
		!a disboard message &lt;MESSAGE&gt;
	</DiscordMessage>
</DiscordMessages>

### Logging

This will set the logging channel for your server.

<DiscordMessages>
	<DiscordMessage profile="user">
		!a logs set &lt;CHANNEL&gt;
	</DiscordMessage>
</DiscordMessages>

**To customize what events you want toggled do**

<DiscordMessages>
	<DiscordMessage profile="user">
		!a logs toggle &lt;EVENT&gt;
	</DiscordMessage>
</DiscordMessages>

**To get a list of the events you can use do**

<DiscordMessages>
	<DiscordMessage profile="user">
		!a events
	</DiscordMessage>
</DiscordMessages>

### Levelling

This will enable the level plugin in your server.

<DiscordMessages>
	<DiscordMessage profile="user">
		!a level toggle
	</DiscordMessage>
</DiscordMessages>
