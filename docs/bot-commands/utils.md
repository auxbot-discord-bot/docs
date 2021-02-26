---
description: AuxBot's Utilities Commands.
---

# Utilities

#### Command Argument Key

{% hint style="success" %}
\[Means Optional\]  \(Means Valid Options\) This / Or This
{% endhint %}

#### Command Argument Specifications And Examples:

<table>
  <thead>
    <tr>
      <th style="text-align:left">Argument</th>
      <th style="text-align:left">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">MEMBER</td>
      <td style="text-align:left">
        <p>A discord member mention, username and discriminator or id:</p>
        <p>@Auxtal / Auxtal#001 / 327745755789918201</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">BOT</td>
      <td style="text-align:left">
        <p>A discord bot mention, username and discriminator or id:</p>
        <p>@AuxBot / AuxBot#8520 / 701301497501188169</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">ROLE</td>
      <td style="text-align:left">
        <p>A discord role mention, name or id:</p>
        <p>@Moderators / Moderators / 672258502307086337</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">CATEGORY</td>
      <td style="text-align:left">
        <p>A discord category name or id:</p>
        <p>General Chats / 665811923970818050</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">CHANNEL</td>
      <td style="text-align:left">
        <p>A discord channel mention name or id:</p>
        <p>#general / general / 665811293970818050</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">TIME</td>
      <td style="text-align:left">
        <p>Custom time:</p>
        <p>10m</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">COLOUR</td>
      <td style="text-align:left">
        <p>Colour code:</p>
        <p>#&lt;HEX&gt; / 0x&lt;HEX&gt; / 0x#&lt;HEX&gt;</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">COMMAND</td>
      <td style="text-align:left">
        <p>AuxBot command name or alias:</p>
        <p>addrole / ar</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">NAME</td>
      <td style="text-align:left">
        <p>Text:</p>
        <p>general chat</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">PREFIX</td>
      <td style="text-align:left">
        <p>Text:</p>
        <p>!a</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">REASON</td>
      <td style="text-align:left">
        <p>Text:</p>
        <p>here is my reason</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">QUERY</td>
      <td style="text-align:left">
        <p>Text:</p>
        <p>here is my query</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">EMOJI</td>
      <td style="text-align:left">
        <p>Emoji:</p>
        <p>&#x1F44B;</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">SENTENCE</td>
      <td style="text-align:left">
        <p>Text:</p>
        <p>this is my sentence</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">INPUT</td>
      <td style="text-align:left">
        <p>Mixed:</p>
        <p>1+1</p>
      </td>
    </tr>
  </tbody>
</table>

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

## !a botinfo

Returns the info of AuxBot.

{% tabs %}
{% tab title="Usage" %}
* !a botinfo
{% endtab %}

{% tab title="Aliases" %}
* bi
* bot\_info
* bot-info
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

## !a userinfo \[MEMBER\]

Returns the info of a member.

{% tabs %}
{% tab title="Usage" %}
* !a user\_info \[MEMBER\]
{% endtab %}

{% tab title="Aliases" %}
* ui
* user\_info
* user-info
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

## !a serverinfo

Returns the info of a server.

{% tabs %}
{% tab title="Usage" %}
* !a serverinfo
{% endtab %}

{% tab title="Aliases" %}
* si
* server\_info
* server-info
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

## !a addrole &lt;MEMBER&gt; &lt;ROLE&gt;

Adds a role to a member.

{% tabs %}
{% tab title="Usage" %}
* !a addrole &lt;MEMBER&gt; &lt;ROLE&gt;
{% endtab %}

{% tab title="Aliases" %}
* ar
* add\_role
* add-role
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

## !a removerole &lt;MEMBER&gt; &lt;ROLE&gt;

Removes a role from a member.

{% tabs %}
{% tab title="Usage" %}
* !a removerole &lt;MEMBER&gt; &lt;ROLE&gt;
{% endtab %}

{% tab title="Aliases" %}
* rr
* remove\_role
* remove-role
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

{% hint style="info" %}
If you do not put a time it disables slowmode.
{% endhint %}

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

## !a changeprefix &lt;PREFIX&gt;

Changes the prefix for the bot in the server.

{% hint style="info" %}
If you want the default prefix do \| &lt;!a changeprefix default&gt;.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a changeprefix &lt;PREFIX&gt;
{% endtab %}

{% tab title="Aliases" %}
* cp
* change\_prefix
* change-prefix
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

## !a createcategory &lt;ROLE&gt; &lt;NAME&gt;

Creates a new discord category.

{% tabs %}
{% tab title="Usage" %}
* !a createcategory &lt;ROLE&gt; &lt;NAME&gt;
{% endtab %}

{% tab title="Aliases" %}
* cca
* create\_category
* create-category
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

## !a createchannel &lt;ROLE&gt; &lt;NAME&gt;

Creates a new discord channel.

{% tabs %}
{% tab title="Usage" %}
* !a createchannel &lt;ROLE&gt; &lt;NAME&gt;
{% endtab %}

{% tab title="Aliases" %}
* cch
* create\_channel
* create-channel
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

## !a deletecategory &lt;CATEGORY&gt;

Deletes a discord category.

{% tabs %}
{% tab title="Usage" %}
* !a deletecategory &lt;CATEGORY&gt;
{% endtab %}

{% tab title="Aliases" %}
* dca
* delete\_category
* delete-category
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

## !a deletechannel &lt;CHANNEL&gt;

Deletes a discord category.

{% tabs %}
{% tab title="Usage" %}
* !a deletechannel &lt;CHANNEL&gt;
{% endtab %}

{% tab title="Aliases" %}
* dch
* delete\_channel
* delete-channel
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

## !a docs &lt;QUERY&gt;

Returns docs for the query.

{% hint style="danger" %}
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

## !a charinfo &lt;EMOJI\(s\)&gt;

Returns the emoji\(s\) information.

{% tabs %}
{% tab title="Usage" %}
* !a charinfo &lt;EMOJI\(s\)&gt;
{% endtab %}

{% tab title="Aliases" %}
* ci
* char\_info
* char-info
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

## !a commandstats

Returns command statistics for the server.

{% tabs %}
{% tab title="Usage" %}
* !a commandstats
{% endtab %}

{% tab title="Aliases" %}
* cs
* command\_stats
* command-stats
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

{% hint style="info" %}
This command can only work when the snipe system is setup.
{% endhint %}

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

## !a membercount

Returns the member count for the server.

{% tabs %}
{% tab title="Usage" %}
* !a membercount
{% endtab %}

{% tab title="Aliases" %}
* mc
* member\_count
* member-count
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

{% hint style="info" %}
This command can only work when the level system is setup.
{% endhint %}

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

## !a docscategories

Returns all of the docs categories.

{% hint style="danger" %}
This command is temporarily disabled for upgrades.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a docscategories
{% endtab %}

{% tab title="Aliases" %}
* dc
* docs\_categories
* docs-categories
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

## !a events

Returns all of the logging events.

{% tabs %}
{% tab title="Usage" %}
* !a events
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

## !a currentwarnsbeforeban

Returns the amount of warns before ban.

{% tabs %}
{% tab title="Usage" %}
* !a currentwarnsbeforeban
{% endtab %}

{% tab title="Aliases" %}
* cwbb
* current\_warns\_before\_ban
* current-warns-before-ban
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

## !a currentnsfwtoggle

Returns the status of nsfw commands.

{% tabs %}
{% tab title="Usage" %}
* !a currentnsfwtoggle
{% endtab %}

{% tab title="Aliases" %}
* cnt
* current\_nsfw\_toggle
* current-nsfw-toggle
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

## !a currentleveltoggle

Returns the status of level system.

{% tabs %}
{% tab title="Usage" %}
* !a currentleveltoggle
{% endtab %}

{% tab title="Aliases" %}
* clvlt
* current\_level\_toggle
* current-level-toggle
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

## !a currentsnipetoggle

Returns the status of snipe system.

{% tabs %}
{% tab title="Usage" %}
* !a currentsnipetoggle
{% endtab %}

{% tab title="Aliases" %}
* csnit
* current\_snipe\_toggle
* current-snipe-toggle
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

## !a texttospeech &lt;SENTENCE&gt;

Returns the sentence as an mp3 file.

{% hint style="info" %}
If you have the swearing system engaged text to speech will also be checked for swearing.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a texttospeech &lt;SENTENCE&gt;
{% endtab %}

{% tab title="Aliases" %}
* tts
* text\_to\_speech
* text-to-speech
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

## !a vote

Takes you AuxBot's top.gg vote page.

{% tabs %}
{% tab title="Usage" %}
* !a vote
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

## !a currenteditsnipetoggle

Returns the status of the edit snipe system.

{% tabs %}
{% tab title="Usage" %}
* !a currenteditsnipetoggle
{% endtab %}

{% tab title="Aliases" %}
* current\_edit\_snipe\_toggle
* current-edit-snipe-toggle
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

## !a calculator &lt;INPUT&gt;

Calculates math equations.

{% tabs %}
{% tab title="Usage" %}
* !a calculator &lt;INPUT&gt;
{% endtab %}

{% tab title="Aliases" %}
* calc
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

## !a voted

Checks if you have voted for the bot.

{% tabs %}
{% tab title="Usage" %}
* !a voted
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

