---
description: AuxBot's Moderation Commands.
---

# Moderation

> Key: • \[Optional arg.\] • \(Options for the arg.\) • &lt;This / Or this&gt;

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
* Can be used once every two seconds per user.
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
* Can be used once every two seconds per user.
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
* Can be used once every five seconds per channel
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
* Can be used once every two seconds per user.
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
* Can be used once every two seconds per user.
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
* Can be used once every two seconds per user.
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
* Can be used once every two seconds per user.
{% endtab %}
{% endtabs %}

## !a mute &lt;MEMBER&gt; \[TIME\] \[REASON\]

Mutes a member in the server.

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
* Can be used once every two seconds per user.
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
* Can be used once every two seconds per user.
{% endtab %}
{% endtabs %}

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
* Can be used once every two seconds per user.
{% endtab %}
{% endtabs %}

## !a nsfw\_toggle

Toggles the nsfw commands for the server.

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

## !a current\_level\_toggle

Returns the status of the level system.

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
* Can be used once every two seconds per user.
{% endtab %}
{% endtabs %}

