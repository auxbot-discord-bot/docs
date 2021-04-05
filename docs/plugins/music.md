---
description: AuxBot's Music Plugin Commands.
---

# Music

#### Command Argument Key

{% hint style="success" %}
\[Means Optional\]  \(Means Valid Options\) This / Or This
{% endhint %}

#### Command Argument Specifications And Ex

<table>
  <thead>
    <tr>
      <th style="text-align:left">Argument</th>
      <th style="text-align:left">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">VOICE CHANNEL</td>
      <td style="text-align:left">
        <p>A discord voice channel name or id:</p>
        <p>general / 665811293970818050</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">MEMBER</td>
      <td style="text-align:left">
        <p>A discord member mention, username and discriminator or id:</p>
        <p>@Auxtal / Auxtal#001 / 327745755789918201</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">QUERY</td>
      <td style="text-align:left">
        <p>Text:</p>
        <p>NCS faded</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">YOUTUBE URL</td>
      <td style="text-align:left">
        <p>Text:</p>
        <p>https://www.youtube.com/watch?v=bM7SZ5SBzyY</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">VOLUME</td>
      <td style="text-align:left">
        <p>Number:</p>
        <p>50</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">EQUALIZER</td>
      <td style="text-align:left">
        <p>Text:</p>
        <p>boost</p>
      </td>
    </tr>
  </tbody>
</table>

## !a connect

Makes AuxBot connect to a voice channel.

{% tabs %}
{% tab title="Usage" %}
* !a connect \[VOICE CHANNEL\]
{% endtab %}

{% tab title="Aliases" %}
* c
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* voice channel
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a play

Plays a song from a URL or query.

{% tabs %}
{% tab title="Usage" %}
* !a play &lt;QUERY / YOUTUBE URL&gt;
{% endtab %}

{% tab title="Aliases" %}
* p
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* voice channel
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a pause

Pause the currently playing song.

{% tabs %}
{% tab title="Usage" %}
* !a pause
{% endtab %}

{% tab title="Aliases" %}
* pa
{% endtab %}

{% tab title="Permissions" %}
* manage server / dj
{% endtab %}

{% tab title="Channel Requirements" %}
* voice channel
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a resume

Resume a currently paused player.

{% tabs %}
{% tab title="Usage" %}
* !a resume
{% endtab %}

{% tab title="Aliases" %}
* r
{% endtab %}

{% tab title="Permissions" %}
* manage server / dj
{% endtab %}

{% tab title="Channel Requirements" %}
* voice channel
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a skip

Skips the currently playing song.

{% tabs %}
{% tab title="Usage" %}
* !a skip
{% endtab %}

{% tab title="Aliases" %}
* s
{% endtab %}

{% tab title="Permissions" %}
* manage server / dj
{% endtab %}

{% tab title="Channel Requirements" %}
* voice channel
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a stop

Stops the player.

{% tabs %}
{% tab title="Usage" %}
* !a stop
{% endtab %}

{% tab title="Aliases" %}
* st
{% endtab %}

{% tab title="Permissions" %}
* manage server / dj
{% endtab %}

{% tab title="Channel Requirements" %}
* voice channel
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a volume

Makes AuxBot connect to a voice channel.

{% tabs %}
{% tab title="Usage" %}
* !a volume &lt;NUMBER \(Between 1 - 100.\)&gt;
{% endtab %}

{% tab title="Aliases" %}
* v
* vol
{% endtab %}

{% tab title="Permissions" %}
* manage server / dj
{% endtab %}

{% tab title="Channel Requirements" %}
* voice channel
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a shuffle

Shuffles the players queue.

{% tabs %}
{% tab title="Usage" %}
* !a shuffle
{% endtab %}

{% tab title="Aliases" %}
* sh
{% endtab %}

{% tab title="Permissions" %}
* manage / dj
{% endtab %}

{% tab title="Channel Requirements" %}
* voice channel
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a equalizer

Changes the players equalizer.

{% tabs %}
{% tab title="Usage" %}
* !a equalizer &lt;EQUALIZER \(flat, boost, metal, piano\)&gt;
{% endtab %}

{% tab title="Aliases" %}
* eq
{% endtab %}

{% tab title="Permissions" %}
* manage server / dj
{% endtab %}

{% tab title="Channel Requirements" %}
* voice channel
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a queue

Returns the players queued songs.

{% tabs %}
{% tab title="Usage" %}
* !a queue
{% endtab %}

{% tab title="Aliases" %}
* q
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* voice channel
{% endtab %}

{% tab title="Cooldown" %}
* none
{% endtab %}
{% endtabs %}

## !a nowplaying

Updates the player controller.

{% hint style="info" %}
If there are 5 or more messages after the controller the bot will delete it and resend it. If there is less then 5 message after the controller the bot will edit the controller to the latest stats.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a nowplaying
{% endtab %}

{% tab title="Aliases" %}
* np
* now\_playing
* now-playing
{% endtab %}

{% tab title="Permissions" %}
* none
{% endtab %}

{% tab title="Channel Requirements" %}
* voice channel
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a swapdj

Swap the current DJ to another member.

{% tabs %}
{% tab title="Usage" %}
* !a swapdj \[MEMBER\]
{% endtab %}

{% tab title="Aliases" %}
* sw
* swap\_dj
* swap-dj
{% endtab %}

{% tab title="Permissions" %}
* manage server / dj
{% endtab %}

{% tab title="Channel Requirements" %}
* voice channel
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

