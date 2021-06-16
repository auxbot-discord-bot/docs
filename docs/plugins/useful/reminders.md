---
description: AuxBot's Reminders Plugin Commands.
---

# Reminders

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
      <td style="text-align:left">TIME</td>
      <td style="text-align:left">
        <p>Custom time:</p>
        <p>10m</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">MESSAGE</td>
      <td style="text-align:left">
        <p>Text:</p>
        <p>Hey this is my reminder.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">ID</td>
      <td style="text-align:left">
        <p>Number:</p>
        <p>20</p>
      </td>
    </tr>
  </tbody>
</table>

## !a reminder

Creates a reminder that will remind you of your message.

{% tabs %}
{% tab title="Usage" %}
* !a reminder &lt;TIME&gt; \[MESSAGE\]
{% endtab %}

{% tab title="Aliases" %}
* timer
* remind
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

## !a reminder list

Returns the 10 last latest currently running reminders.

{% tabs %}
{% tab title="Usage" %}
* !a reminder list
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

## !a reminder delete

Deletes a remind by its ID.

{% tabs %}
{% tab title="Usage" %}
* !a reminder delete &lt;ID&gt;
{% endtab %}

{% tab title="Aliases" %}
* remove
* cancel
{% endtab %}

{% tab title="Permissions" %}
* reminder creator
{% endtab %}

{% tab title="Channel Requirements" %}
* none
{% endtab %}

{% tab title="Cooldown" %}
* 1 every 2 seconds per user.
{% endtab %}
{% endtabs %}

## !a reminder clear

clears all reminders that you have set.

{% tabs %}
{% tab title="Usage" %}
* !a reminder clear
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

