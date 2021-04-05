---
description: AuxBot's Moderation Plugin Commands.
---

# Moderation

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
        <p>@Auxtal / Auxtal#1696 / 327745755789918201</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">MEMBER ID</td>
      <td style="text-align:left">
        <p>A discord member id:</p>
        <p>701301497501188169</p>
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
      <td style="text-align:left">CASENUMBER</td>
      <td style="text-align:left">
        <p>Number:</p>
        <p>5</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">NICKNAME</td>
      <td style="text-align:left">
        <p>Text:</p>
        <p>Owner | Auxtal</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">REASON</td>
      <td style="text-align:left">
        <p>Text:</p>
        <p>Banned for spamming</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">SENTENCE</td>
      <td style="text-align:left">
        <p>Text:</p>
        <p>I went to the shops</p>
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
      <td style="text-align:left">NUMBER</td>
      <td style="text-align:left">
        <p>Number:</p>
        <p>10</p>
      </td>
    </tr>
  </tbody>
</table>

## !a changenickname

Changes a members nickname.

{% tabs %}
{% tab title="Usage" %}
* !a changenickname &lt;MEMBER&gt; &lt;NICKNAME&gt;
{% endtab %}

{% tab title="Aliases" %}
* cn
* change\_nickname
* change-nickname
{% endtab %}

{% tab title="Permissions" %}
* manage nicknames
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a ban

Bans a member from the server.

{% tabs %}
{% tab title="Usage" %}
* !a ban &lt;MEMBER&gt; \[REASON\]
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* ban members
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a kick

Kicks a member\(s\) from the server.

{% tabs %}
{% tab title="Usage" %}
* !a kick &lt;MEMBER\(s\)&gt; \[REASON\]
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* kick members
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a softban

Soft bans a member\(s\) from the server.

{% tabs %}
{% tab title="Usage" %}
* !a softban &lt;MEMBER\(s\)&gt; \[REASON\]
{% endtab %}

{% tab title="Aliases" %}
* sb
* soft\_ban
* soft-ban
{% endtab %}

{% tab title="Permissions" %}
* ban members
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
*  1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a unban

Unbans a user from the server.

{% tabs %}
{% tab title="Usage" %}
* !a unban &lt;USERNAME AND HASHTAG / ID&gt; \[REASON\]
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* ban members
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a warn

Warns a member\(s\) in the server.

{% tabs %}
{% tab title="Usage" %}
* !a warn &lt;MEMBER\(s\)&gt; \[REASON\]
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

## !a clearcases

Clears a members case\(s\) in a server.

{% tabs %}
{% tab title="Usage" %}
* !a clearcases &lt;MEMBER&gt; \[CASE NUMBER\]
{% endtab %}

{% tab title="Aliases" %}
* cc
* clear\_cases
* clear-cases
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

## !a cases

Returns the cases for a member.

{% tabs %}
{% tab title="Usage" %}
* !a cases \[MEMBER\]
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

## !a tempmute

Temp mutes a member in the server..

{% tabs %}
{% tab title="Usage" %}
* !a tempmute &lt;MEMBER&gt; &lt;TIME&gt; \[REASON\]
{% endtab %}

{% tab title="Aliases" %}
* tm
* temp\_mute
* temp-mute
{% endtab %}

{% tab title="Permissions" %}
* manage roles
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a mute

Mutes a member in the server.

{% tabs %}
{% tab title="Usage" %}
* !a mute &lt;MEMBER&gt; \[REASON\]
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* manage roles
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a unmute

Unmutes the mentioned member.

{% tabs %}
{% tab title="Usage" %}
* !a unmute &lt;MEMBER&gt;
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* manage roles
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
*  1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a clear

Deletes the specified amount of messages.

{% tabs %}
{% tab title="Usage" %}
* !a clear \[NUMBER \(Max of 150.\)\]
{% endtab %}

{% tab title="Aliases" %}
* purge
{% endtab %}

{% tab title="Permissions" %}
* manage messages
{% endtab %}

{% tab title="Channel Requirements" %}
* text channel
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 5 seconds per user.
{% endtab %}
{% endtabs %}

## !a clear embeds

Deletes specified amount of messages containing an embed.

{% tabs %}
{% tab title="Usage" %}
* !a clear embeds \[NUMBER \(Max of 900.\)\]
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* manage messages
{% endtab %}

{% tab title="Channel Requirements" %}
* text channel
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 5 seconds per user.
{% endtab %}
{% endtabs %}

## !a clear files

Deletes specified amount of messages containing a file.

{% tabs %}
{% tab title="Usage" %}
* !a clear files \[NUMBER \(Max of 900.\)\]
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* manage messages
{% endtab %}

{% tab title="Channel Requirements" %}
* text channel
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 5 seconds per user.
{% endtab %}
{% endtabs %}

## !a clear images

Deletes specified amount of messages containing a file or embed.

{% tabs %}
{% tab title="Usage" %}
* !a clear images &lt;NUMBER \(Max of 900.\)&gt;
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* manage messages
{% endtab %}

{% tab title="Channel Requirements" %}
* text channel
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 5 seconds per user.
{% endtab %}
{% endtabs %}

## !a clear member

Deletes specified amount of messages from a member.

{% tabs %}
{% tab title="Usage" %}
* !a clear member &lt;MEMBER&gt; \[NUMBER \(Max of 900.\)\]
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* manage messages
{% endtab %}

{% tab title="Channel Requirements" %}
* text channel
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 5 seconds per user.
{% endtab %}
{% endtabs %}

## !a clear contains

Deletes specified amount of messages that contains the specified content.

{% tabs %}
{% tab title="Usage" %}
* !a clear contains \[NUMBER \(Max of 900.\)\] &lt;SENTENCE&gt;
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* manage messages
{% endtab %}

{% tab title="Channel Requirements" %}
* text channel
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 5 seconds per user.
{% endtab %}
{% endtabs %}

## !a clear bot

Deletes specified amount of messages from a bot.

{% tabs %}
{% tab title="Usage" %}
* !a clear bot \[NUMBER \(Max of 900.\)\] \[PREFIX\]
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* manage messages
{% endtab %}

{% tab title="Channel Requirements" %}
* text channel
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 5 seconds per user.
{% endtab %}
{% endtabs %}

## !a clear reactions

Deletes reactions from messages that have them.

{% tabs %}
{% tab title="Usage" %}
* !a clear reactions \[NUMBER \(Max of 900.\)\]
{% endtab %}

{% tab title="Aliases" %}
* none
{% endtab %}

{% tab title="Permissions" %}
* manage messages
{% endtab %}

{% tab title="Channel Requirements" %}
* text channel
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 5 seconds per user.
{% endtab %}
{% endtabs %}

