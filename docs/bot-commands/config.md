---
description: AuxBot's Config Commands.
---

# Config

> Command Key: \[Means Optional\] &lt;Means Required&gt; \(Valid options\) This / Or This

#### Command Argument Specifications And Examples:

```text
CHANNEL ID = discord channel ID | E.G: 665811923970818050
LISTENER = discord event | E.G: on_member_join

MESSAGE = normal text | E.G: this is my message
```

## !a swearing\_toggle

Toggles the swearing detection system.

{% tabs %}
{% tab title="Usage" %}
* !a swearing\_toggle
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

## !a disboard\_set &lt;CHANNEL ID&gt;

Sets the disboard channel for the server.

> What is a channel id?

> Turn on discord developer mode and right click on the channel and press Copy ID

{% tabs %}
{% tab title="Usage" %}
* !a disboard\_set &lt;CHANNEL ID&gt;
{% endtab %}

{% tab title="Aliases" %}
* ds
{% endtab %}

{% tab title="Permissions" %}
* manage server
{% endtab %}

{% tab title="Channel Requirements" %}
* text channel
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a disboard\_toggle

Toggles the disboard system on and off.

> The disboard system has to be enabled for this to work. \| !a disboard\_set &lt;CHANNEL ID&gt;

{% tabs %}
{% tab title="Usage" %}
* !a disboard\_toggle
{% endtab %}

{% tab title="Aliases" %}
* dt
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

## !a disboard\_remove

Removes the current disboard channel for the guild.

> The disboard system has to be enabled for this to work. \| !a disboard\_set &lt;CHANNEL ID&gt;

{% tabs %}
{% tab title="Usage" %}
* !a disboard\_remove
{% endtab %}

{% tab title="Aliases" %}
* dr
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

## !a disboard\_message &lt;MESSAGE&gt;

Sets the disboard timer message.

> The disboard system has to be enabled for this to work. \| !a disboard\_set &lt;CHANNEL ID&gt;

{% tabs %}
{% tab title="Usage" %}
* !a disboard\_message &lt;MESSAGE&gt;
{% endtab %}

{% tab title="Aliases" %}
* dme
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

## !a logs\_set &lt;CHANNEL ID&gt;

Sets the logging channel for the server.

> What is a channel id?

> Turn on discord developer mode and right click on the channel and press Copy ID

{% tabs %}
{% tab title="Usage" %}
* !a logs\_set &lt;CHANNEL ID&gt;
{% endtab %}

{% tab title="Aliases" %}
* ls
{% endtab %}

{% tab title="Permissions" %}
* manage server
{% endtab %}

{% tab title="Channel Requirements" %}
* text channel
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a logs\_toggle \[LISTENER \(!a listeners\)\]

Allows you to toggle the whole log system or just certain events.

> The logging system has to be enabled for this to work. \| !a logs\_set &lt;CHANNEL ID&gt;

{% tabs %}
{% tab title="Usage" %}
* !a logs\_toggle \[LISTENER \(!a listeners\)\]
{% endtab %}

{% tab title="Aliases" %}
* lt
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

## 

## !a warns\_before\_ban &lt;NUMBER \(Max of 50.\)&gt;

Sets the amount of warns before ban.

{% tabs %}
{% tab title="Usage" %}
* !a warns\_before\_ban &lt;NUMBER \(Max of 50.\)&gt;
{% endtab %}

{% tab title="Aliases" %}
* wbb
{% endtab %}

{% tab title="Permissions" %}
* manage roles
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* Can be used once every two seconds per user.
{% endtab %}
{% endtabs %}

## !a nsfw\_toggle

Toggles nsfw commands for the server.

{% tabs %}
{% tab title="Usage" %}
* !a nsfw\_toggle
{% endtab %}

{% tab title="Aliases" %}
* nt
{% endtab %}

{% tab title="Permissions" %}
* manage server
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* Can be used once every two seconds per user.
{% endtab %}
{% endtabs %}

## !a level\_toggle

Toggles the level system for the server.

{% tabs %}
{% tab title="Usage" %}
* !a level\_toggle
{% endtab %}

{% tab title="Aliases" %}
* lvlt
{% endtab %}

{% tab title="Permissions" %}
* manage server
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* Can be used once every two seconds per user.
{% endtab %}
{% endtabs %}

## !a snipe\_toggle

Toggles the snipe system for the server.

{% tabs %}
{% tab title="Usage" %}
* !a snipe\_toggle
{% endtab %}

{% tab title="Aliases" %}
* snit
{% endtab %}

{% tab title="Permissions" %}
* manage server
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* Can be used once every two seconds per user.
{% endtab %}
{% endtabs %}

