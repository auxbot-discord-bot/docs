---
description: AuxBot's Moderation Commands.
---

# Moderation

> Command Key: \[Means Optional\] &lt;Means Required&gt; \(Valid options\) This / Or This

#### Command Argument Specifications And Examples:

```text
MEMBER = a discord member | E.G: @Auxtal

TIME = custom time | E.G: 10m < ten minutes
CASENUMBER = normal number | E.G 5

NICKNAME = normal text | E.G: Owner | Auxtal
REASON = normal text | E.G: here is my reason
NUMBER = normal number | E.G 10
```

## !a change\_nickname &lt;MEMBER&gt; &lt;NICKNAME&gt;

Changes a members nickname.

{% tabs %}
{% tab title="Usage" %}
* !a change\_nickname &lt;MEMBER&gt; &lt;NICKNAME&gt;
{% endtab %}

{% tab title="Aliases" %}
* cp
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

## !a ban &lt;MEMBER\(s\)&gt; \[REASON\]

Bans a member\(s\) from the server.

{% tabs %}
{% tab title="Usage" %}
* !a ban &lt;MEMBER\(s\)&gt; \[REASON\]
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

## !a kick &lt;MEMBER\(s\)&gt; \[REASON\]

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

## !a purge &lt;NUMBER \(Max of 70.\)&gt;

Deletes the specified amount of messages.

{% tabs %}
{% tab title="Usage" %}
* !a purge &lt;NUMBER \(Max of 70.\)&gt;
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

## !a soft\_ban &lt;MEMBER\(s\)&gt; \[REASON\]

Soft bans a member\(s\) from the server

{% tabs %}
{% tab title="Usage" %}
* !a soft\_ban &lt;MEMBER\(s\)&gt; \[REASON\]
{% endtab %}

{% tab title="Aliases" %}
* sb
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

## !a unban &lt;MEMBER ID&gt; \[REASON\]

Unbans a user from the server.

{% tabs %}
{% tab title="Usage" %}
* !a unban &lt;MEMBER ID&gt; \[REASON\]
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

## !a warn &lt;MEMBER\(s\)&gt; \[REASON\]

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

## !a clear\_cases &lt;MEMBER&gt; \[CASE NUMBER\]

Clears a members case\(s\) in a server.

{% tabs %}
{% tab title="Usage" %}
* !a clear\_cases &lt;MEMBER&gt; \[CASE NUMBER\]
{% endtab %}

{% tab title="Aliases" %}
* cc
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

## !a cases \[MEMBER\]

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

## !a mute &lt;MEMBER&gt; \[TIME\] \[REASON\]

Mutes a member in the server.

> If you do not put a time you cannot put a reason. Otherwise the bot will think your reason is a time.

{% tabs %}
{% tab title="Usage" %}
* !a mute &lt;MEMBER&gt; \[TIME\] \[REASON\]
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

## !a unmute &lt;MEMBER&gt;

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

