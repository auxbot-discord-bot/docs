---
description: AuxBot Logs Commands
---

# Logs

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
    
EVENT = normal text: on_member_ban
```

## !a logs

Returns all of the logs commands.

{% tabs %}
{% tab title="Usage" %}
* !a logs
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

## !a logs set &lt;CHANNEL&gt;

Sets the logging channel for the server.

{% tabs %}
{% tab title="Usage" %}
* !a logs set &lt;CHANNEL&gt;
{% endtab %}

{% tab title="Aliases" %}
* none
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

## !a logs toggle \[EVENT \(!a events\)\]

Allows you to toggle the whole log systems or just certain events.

{% hint style="info" %}
If you do not put an event argument it will toggle the whole system.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a logs toggle \[EVENT \(!a events\)\]
{% endtab %}

{% tab title="Aliases" %}
* none
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

## !a logs channel

Returns the channel and and id for the logging channel.

{% tabs %}
{% tab title="Usage" %}
* !a logs channel
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

## !a logs remove

Removes the current logging channel for the server.

{% tabs %}
{% tab title="Usage" %}
* !a logs remove
{% endtab %}

{% tab title="Aliases" %}
* none
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

