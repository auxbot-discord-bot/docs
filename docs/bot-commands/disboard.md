---
description: AuxBot's Disboard Commands
---

# Disboard

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
      <td style="text-align:left">CHANNEL</td>
      <td style="text-align:left">
        <p>A discord channel mention name or id:</p>
        <p>#general / general / 665811293970818050</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">MESSAGE</td>
      <td style="text-align:left">
        <p>Text:</p>
        <p>Time to bump the server</p>
      </td>
    </tr>
  </tbody>
</table>

## !a disboard

Returns all of the disboard commands.

{% tabs %}
{% tab title="Usage" %}
* !a disboard
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

## !a disboard set &lt;CHANNEL&gt;

Sets the disboard channel for the server.

{% tabs %}
{% tab title="Usage" %}
* !a disboard set &lt;CHANNEL&gt;
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

## !a disboard test

Tests the disboard channel.

{% hint style="info" %}
This command can only work when the disboard system is setup.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a disboard test
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
* 1 every 5 seconds per server.
{% endtab %}
{% endtabs %}

## !a disboard message &lt;MESSAGE&gt;

Sets the disboard timer message.

{% hint style="info" %}
This command can only work when the disboard system is setup.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a disboard message &lt;MESSAGE&gt;
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

## !a disboard toggle

Toggles the disboard system on and off.

{% hint style="info" %}
This command can only work when the disboard system is setup.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a disboard toggle
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

## !a disboard channel

Returns the channel name and id for the disboard channel.

{% hint style="info" %}
This command can only work when the disboard system is setup.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a disboard channel
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

## !a disboard remove

Removes the current disboard channel for the server.

{% tabs %}
{% tab title="Usage" %}
* !a disboard remove
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

