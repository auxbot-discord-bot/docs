---
description: AuxBot's Utilities Commands.
---

# Utilities

> Command Key: \[Means Optional\] &lt;Means Required&gt; \(Valid Options\) This / Or This

#### Command Argument Specifications And Examples:

```text
MEMBER = a discord member | E.G: @Auxtal
BOT = a discord bot | E.G: @AuxBot
ROLE = a discord role | E.G: @Moderators

CATEGORY ID = a discord category ID | E.G: 665812610985230364
CHANNEL ID = discord channel ID | E.G: 665811923970818050

TIME = custom time | E.G: 10m < ten minutes
COLOUR = colour code | E.G: #<HEX>, 0x<HEX>, 0x#<HEX>
COMMAND = auxbot command name or aliase | E.G add_role, ar

NAME = normal text | E.G: general chat
PREFIX = normal text | E.G: !a
REASON = normal text | E.G: here is my reason
QUERY = normal text | E.G: my serch text
EMOJI = normal emoji | E.G: 👋
SENTENCE = normal text | E.G: this is my sentence
```

## !a setup

Returns the features of AuxBot.

{% tabs %}
{% tab title="Usage" %}
* !a setup
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a ping

Returns the ping of AuxBot.

{% tabs %}
{% tab title="Usage" %}
* !a ping
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a auxbot\_info

Returns the info of AuxBot.

{% tabs %}
{% tab title="Usage" %}
* !a auxbot\_info
{% endtab %}

{% tab title="Aliases" %}
* ai
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a user\_info \[MEMBER\]

Returns the info of a member.

{% tabs %}
{% tab title="Usage" %}
* !a user\_info \[MEMBER\]
{% endtab %}

{% tab title="Aliases" %}
* ui
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a server\_info

Returns the info of a server.

{% tabs %}
{% tab title="Usage" %}
* !a server\_info
{% endtab %}

{% tab title="Aliases" %}
* si
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a add\_role &lt;MEMBER&gt; &lt;ROLE&gt;

Adds a role to a member.

{% tabs %}
{% tab title="Usage" %}
* !a add\_role &lt;MEMBER&gt; &lt;ROLE&gt;
{% endtab %}

{% tab title="Aliases" %}
* ar
{% endtab %}

{% tab title="Permissions" %}
* manage roles
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a remove\_role &lt;MEMBER&gt; &lt;ROLE&gt;

Removes a role from a member.

{% tabs %}
{% tab title="Usage" %}
* !a remove\_role &lt;MEMBER&gt; &lt;ROLE&gt;
{% endtab %}

{% tab title="Aliases" %}
* rr
{% endtab %}

{% tab title="Permissions" %}
* manage roles
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a slowmode \[TIME\]

Changes the slowmode setting for a channel.

> If you do not put a time it disables slowmode.

{% tabs %}
{% tab title="Usage" %}
* !a slowmode \[TIME\]
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* manage channels
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a change\_prefix &lt;PREFIX&gt;

Changes the prefix for the bot in the server.

> If you want the default prefix do \| &lt;!a change\_prefix "!a "&gt;.

> The " " is to recognize the space. This is a discord limitation.

{% tabs %}
{% tab title="Usage" %}
* !a change\_prefix &lt;PREFIX&gt;
{% endtab %}

{% tab title="Aliases" %}
* cp
{% endtab %}

{% tab title="Permissions" %}
* manage server
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a create\_category &lt;ROLE&gt; &lt;NAME&gt;

Creates a new discord category.

{% tabs %}
{% tab title="Usage" %}
* !a create\_category &lt;ROLE&gt; &lt;NAME&gt;
{% endtab %}

{% tab title="Aliases" %}
* cca
{% endtab %}

{% tab title="Permissions" %}
* manage channels
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a create\_channel &lt;ROLE&gt; &lt;NAME&gt;

Creates a new discord channel.

{% tabs %}
{% tab title="Usage" %}
* !a create\_channel &lt;ROLE&gt; &lt;NAME&gt;
{% endtab %}

{% tab title="Aliases" %}
* cch
{% endtab %}

{% tab title="Permissions" %}
* manage channels
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a delete\_category &lt;CATEGORY ID&gt;

Deletes a discord category.

> What is a category id?

> Turn on discord developer mode and right click on the category and press Copy ID

{% tabs %}
{% tab title="Usage" %}
* !a delete\_category &lt;CATEGORY ID&gt;
{% endtab %}

{% tab title="Aliases" %}
* dca
{% endtab %}

{% tab title="Permissions" %}
* manage channels
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a delete\_channel &lt;CHANNEL ID&gt;

Deletes a discord category.

> What is a channel id?

> Turn on discord developer mode and right click on the channel and press Copy ID

{% tabs %}
{% tab title="Usage" %}
* !a delete\_channel &lt;CHANNEL ID&gt;
{% endtab %}

{% tab title="Aliases" %}
* dch
{% endtab %}

{% tab title="Permissions" %}
* manage channels
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a avatar \[MEMBER\]

Returns a members avatar.

{% tabs %}
{% tab title="Usage" %}
* !a avatar \[MEMBER\]
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a add\_bot &lt;BOT&gt; &lt;PREFIX&gt; &lt;REASON&gt;

Gives a bot request in Auxtal's Discord.

{% hint style="warning" %}
This command can only be used in Auxtal's Discord.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a add\_bot &lt;BOT&gt; &lt;PREFIX&gt; &lt;REASON&gt;
{% endtab %}

{% tab title="Aliases" %}
* ab
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a docs &lt;QUERY&gt;

Returns docs for the query.

{% hint style="info" %}
This command is temporarily disabled for upgrades.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a docs &lt;QUERY&gt;
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a char\_info &lt;EMOJI\(s\)&gt;

Returns the emoji\(s\) information.

{% tabs %}
{% tab title="Usage" %}
* !a char\_info &lt;EMOJI\(s\)&gt;
{% endtab %}

{% tab title="Aliases" %}
* ci
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a command\_stats

Returns command statistics for the server.

{% tabs %}
{% tab title="Usage" %}
* !a command\_stats
{% endtab %}

{% tab title="Aliases" %}
* cs
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per server.
{% endtab %}
{% endtabs %}

## !a snipe

Returns the last deleted message in the server.

> The snipe system has to be turned on for this to work. \| !a snipe\_toggle

{% tabs %}
{% tab title="Usage" %}
* !a snipe
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* manage messages
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a colour &lt;COLOUR&gt;

Returns the colour in an image.

{% tabs %}
{% tab title="Usage" %}
* !a colour &lt;COLOUR&gt;
{% endtab %}

{% tab title="Aliases" %}
* color
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 5 seconds per user.
{% endtab %}
{% endtabs %}

## !a uptime

Returns the amount of time the bot has been on for.

{% tabs %}
{% tab title="Usage" %}
* !a uptime
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a member\_count

Returns the member count for the server.

{% tabs %}
{% tab title="Usage" %}
* !a member\_count
{% endtab %}

{% tab title="Aliases" %}
* mc
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a help \[COMMAND\]

Returns help and returns help for commands.

{% tabs %}
{% tab title="Usage" %}
* !a help \[COMMAND\]
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a code

Returns a link to a hastebin.

{% tabs %}
{% tab title="Usage" %}
* !a code
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a invite

Returns AuxBot invite links.

{% tabs %}
{% tab title="Usage" %}
* !a invite
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a prefix

Returns your server prefix.

{% tabs %}
{% tab title="Usage" %}
* !a prefix
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a report

Returns ways to report errors with the bot.

{% tabs %}
{% tab title="Usage" %}
* !a report
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a level \[MEMBER\]

Returns a members level.

> The level system has to be enabled for this to work. \| !a level\_toggle

{% tabs %}
{% tab title="Usage" %}
* !a level \[MEMBER\]
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a search &lt;QUERY&gt;

Searches google for your query.

{% tabs %}
{% tab title="Usage" %}
* !a search &lt;QUERY&gt;
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a documentation

Returns a link to AuxBot docs.

{% tabs %}
{% tab title="Usage" %}
* !a documentation
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a docs\_categories

Returns all of the docs categories.

{% hint style="info" %}
This command is temporarily disabled for upgrades.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a docs\_categories
{% endtab %}

{% tab title="Aliases" %}
* dc
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a listeners

Returns all of the logging listeners.

{% tabs %}
{% tab title="Usage" %}
* !a listeners
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a website

Returns a link to AuxBot's website.

{% tabs %}
{% tab title="Usage" %}
* !a website
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a emojis

Returns all of the servers emojis.

{% tabs %}
{% tab title="Usage" %}
* !a emojis
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a spotify \[MEMBER\]

Returns a members spotify stats.

{% tabs %}
{% tab title="Usage" %}
* !a spotify \[MEMBER\]
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a current\_warns\_before\_ban

Returns the amount of warns before ban.

{% tabs %}
{% tab title="Usage" %}
* !a current\_warns\_before\_ban
{% endtab %}

{% tab title="Aliases" %}
* cwbb
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a current\_nsfw\_toggle

Returns the status of nsfw commands.

{% tabs %}
{% tab title="Usage" %}
* !a current\_nsfw\_toggle
{% endtab %}

{% tab title="Aliases" %}
* cnt
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a current\_level\_toggle

Returns the status of level system.

{% tabs %}
{% tab title="Usage" %}
* !a current\_level\_toggle
{% endtab %}

{% tab title="Aliases" %}
* clvlt
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a current\_snipe\_toggle

Returns the status of snipe system.

{% tabs %}
{% tab title="Usage" %}
* !a current\_snipe\_toggle
{% endtab %}

{% tab title="Aliases" %}
* csnit
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a text\_to\_speech &lt;SENTENCE&gt;

Returns the sentence as an mp3 file.

{% tabs %}
{% tab title="Usage" %}
* !a text\_to\_speech &lt;SENTENCE&gt;
{% endtab %}

{% tab title="Aliases" %}
* tts
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a disboard\_channel

Returns the channel name and id for the disboard channel.

> The disboard system has to be enabled for this to work. \| !a disboard\_set &lt;CHANNEL ID&gt;

{% tabs %}
{% tab title="Usage" %}
* !a disboard\_channel
{% endtab %}

{% tab title="Aliases" %}
* swt
{% endtab %}

{% tab title="Permissions" %}
* manage server
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a disboard\_test

Tests the disboard channel.

> The disboard system has to be enabled for this to work. \| !a disboard\_set &lt;CHANNEL ID&gt;

{% tabs %}
{% tab title="Usage" %}
* !a disboard\_test
{% endtab %}

{% tab title="Aliases" %}
* dte
{% endtab %}

{% tab title="Permissions" %}
* manage server
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 5 seconds per user.
{% endtab %}
{% endtabs %}

## 

