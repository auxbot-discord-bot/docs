---
description: AuxBot's Utilities Plugin Commands.
---

# Utilities

### Command Argument Key

{% hint style="success" %}
\[Means Optional\] \(Means Valid Options\) This / Or This
{% endhint %}

### Command Argument Specifications And Examples:

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
      <td style="text-align:left">ROLE</td>
      <td style="text-align:left">
        <p>A discord role mention, name or id:</p>
        <p>@Moderators / Moderators / 672258502307086337</p>
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
      <td style="text-align:left">PLUGIN</td>
      <td style="text-align:left">
        <p>AuxBot plugin:</p>
        <p>welcome</p>
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
      <td style="text-align:left">WEBSITE URL</td>
      <td style="text-align:left">
        <p>Text:</p>
        <p>https://www.auxbot.xyz</p>
      </td>
    </tr>
  </tbody>
</table>

## !a help

Returns help for commands and plugins.

{% tabs %}
{% tab title="Usage" %}
* !a help \[COMMAND / PLUGIN\]
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
* 1 every 2 seconds per user.
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

## !a userinfo

Returns the info of a member.

{% tabs %}
{% tab title="Usage" %}
* !a userinfo \[MEMBER\]
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

Returns the info of the server.

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

## !a addrole

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

## !a removerole

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

## !a slowmode

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

## !a avatar

Returns a members avatar.

{% tabs %}
{% tab title="Usage" %}
* !a avatar \[MEMBER\]
{% endtab %}

{% tab title="Aliases" %}
* av
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

## !a charinfo

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

## !a colour

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

## !a bin

Returns a link to a sourcebin.

{% tabs %}
{% tab title="Usage" %}
* !a bin
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

## !a support

Returns a link to AuxBot's support server.

{% tabs %}
{% tab title="Usage" %}
* !a support
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

## !a search

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

## !a messagestats

Returns a graph of the channels message stats.

{% tabs %}
{% tab title="Usage" %}
* !a messagestats
{% endtab %}

{% tab title="Aliases" %}
* ms
* message\_stats
* message-stats
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 5 seconds per server.
{% endtab %}
{% endtabs %}

## !a screenshot

Returns a screenshot of a website.

{% tabs %}
{% tab title="Usage" %}
* !a screenshot &lt;WEBSITE URL&gt; \[--fullscreen\]
{% endtab %}

{% tab title="Aliases" %}
* ss
* screen\_shot
* screen-shot
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* nsfw channel
{% endtab %}

{% tab title="Cooldown" %}
* Once every 5 seconds per server.
{% endtab %}
{% endtabs %}

## !a id

Returns a user id.

{% tabs %}
{% tab title="Usage" %}
* !a id \[MEMBER\]
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

## !a id server

Returns the servers id.

{% tabs %}
{% tab title="Usage" %}
* !a id server
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

