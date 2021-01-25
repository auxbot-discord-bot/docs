---
description: AuxBot Bot Requests Commands
---

# Bot Requests

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
BOT = a discord bot mention, username and discriminator or id:
    @AuxBot / AuxBot#8520 / 701301497501188169

BOT ID = discord bot id: 701301497501188169

PREFIX = normal text: !
REASON = normal text: here is my reason
```

## !a addbot &lt;BOT ID&gt; &lt;PREFIX&gt;

Gives a bot request in Auxtal's Discord.

{% hint style="danger" %}
This command can only be used in Auxtal's Discord server.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a addbot &lt;BOT ID&gt; &lt;PREFIX&gt;
{% endtab %}

{% tab title="Aliases" %}
* ab
* add\_bot
* add-bot
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

## !a addbot accept &lt;BOT ID&gt;

Accepts a bot request.

{% hint style="danger" %}
This command can only be used in Auxtal's Discord server.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a addbot accept &lt;BOT ID&gt;
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

## !a addbot reject &lt;BOT ID&gt; \[REASON\]

Rejects a bot request.

{% hint style="danger" %}
This command can only be used in Auxtal's Discord server.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a addbot reject &lt;BOT ID&gt; \[REASON\]
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

## !a addbot prefix &lt;BOT&gt; &lt;PREFIX&gt;

Changes the prefix for a bot.

{% hint style="danger" %}
This command can only be used in Auxtal's Discord server.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a addbot prefix &lt;BOT ID&gt; &lt;PREFIX&gt;
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

## !a addbot delete &lt;BOT ID&gt;

Deletes a bot request from the database.

{% hint style="danger" %}
This command can only be used in Auxtal's Discord server.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a addbot delete &lt;BOT ID&gt;
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

