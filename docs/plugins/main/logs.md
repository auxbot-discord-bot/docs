---
description: AuxBot Logs Plugin Commands.
---

# Logs

### Command Argument Key

{% hint style="success" %}
\[Means Optional\] \(Means Valid Options\) This / Or This
{% endhint %}

### Command Argument Specifications And Examples:

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
      <td style="text-align:left">EVENT</td>
      <td style="text-align:left">
        <p>Text:</p>
        <p>on_member_join</p>
      </td>
    </tr>
  </tbody>
</table>

## !a logs

Returns all of the logs plugin commands.

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

## !a logs set

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

## !a logs toggle

Allows you to toggle certain events.

{% hint style="info" %}
If you do not put an event argument it will toggle the whole plugin.
{% endhint %}

{% tabs %}
{% tab title="Usage" %}
* !a logs toggle &lt;EVENT \(!a events\)&gt;
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

## !a logs reset

Resets the current logs settings for the server.

{% tabs %}
{% tab title="Usage" %}
* !a logs reset
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

