---
description: AuxBot's Music Commands
---

# Music

#### Command Argument Key

> \[Means Optional\]
>
> &lt;Means Required&gt;
>
> \(Means Valid Options\)
>
> This / Or This

#### Command Argument Specifications And Examples:

```text
CHANNEL = discord channel mention name or id:
    #general / general / 665811923970818050
    
MEMBER = discord member mention, username and discriminator or id:
    @Auxtal / Auxtal#0001 / 327745755789918208
    
QUERY = normal text: my serch text
YOUTUBE URL = normal text: https://www.youtube.com/watch?v=bM7SZ5SBzyY
VOLUME = normal number: 50
EQUALIZER = normal text: boost
```

## !a connect \[CHANNEL\]

Makes AuxBot connect to a voice channel.

{% tabs %}
{% tab title="Usage" %}
* !a connect \[CHANNEL\]
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
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a play &lt;QUERY / YOUTUBE URL&gt;

Plays a song from a url or query.

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

## !a volume &lt;NUMBER \(Between 1 - 100.\)&gt;

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

## !a equalizer &lt;EQUALIZER \(flat, boost, metal, piano\)&gt;

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
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a nowplaying

Updates the player controller.

{% hint style="info" %}
If there are 5 or more messages after the controller the bot will delete it and resend it. If there is less then 5 message after the controller it will edit the controller to the latest stats.
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

## !a swapdj \[MEMBER\]

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

