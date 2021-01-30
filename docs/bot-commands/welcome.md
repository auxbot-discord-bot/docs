---
description: AuxBot's Welcome Commands
---

# Welcome

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
      <td style="text-align:left">PNG / JPG IMAGE URL</td>
      <td style="text-align:left">
        <p>A image url:</p>
        <p><a href="https://i.imgur.com/nKjYhYw.jpg">https://i.imgur.com/nKjYhYw.jpg</a>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">RESET</td>
      <td style="text-align:left">
        <p>Normal text:</p>
        <p>reset</p>
      </td>
    </tr>
  </tbody>
</table>

## !a welcome

Returns all of the welcome commands.

{% tabs %}
{% tab title="Usage" %}
* !a welcome
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

## !a welcome set &lt;CHANNEL&gt;

Sets the welcome channel for the server.

{% tabs %}
{% tab title="Usage" %}
* !a welcome set &lt;CHANNEL&gt;
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

## !a welcome test

Tests the welcome channel.

{% hint style="info" %}
This command can only work when the welcome system is setup.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a welcome test
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
* 1 every 5 seconds per user.
{% endtab %}
{% endtabs %}

## !a welcome banner &lt;PNG / JPG IMAGE URL / RESET&gt;

Sets the welcome banner for the server.

{% hint style="info" %}
This command can only work when the welcome system is setup.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a welcome banner &lt;PNG / JPG IMAGE URL / RESET&gt;
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

## !a welcome toggle

Allows you to toggle the whole welcome system.

{% hint style="info" %}
This command can only work when the welcome system is setup.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a welcome toggle
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

## !a welcome channel

Returns the channel name and id for the welcome channel.

{% hint style="info" %}
This command can only work when the welcome system is setup.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a welcome channel
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

## !a welcome remove

Removes the current welcome channel for the server.

{% tabs %}
{% tab title="Usage" %}
* !a welcome remove
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

