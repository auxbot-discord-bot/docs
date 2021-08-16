# Main Plugins

AuxBot's main plugins.

::: tip
[Means Optional] (Means Valid Options) This / Or This
:::

## Disboard

### Command Argument Specifications And Examples

| Argument |                                      Example                                     |
| -------- | -------------------------------------------------------------------------------- |
| CHANNEL  | A discord channel mention name or id:<br>#general / general / 665811293970818050 |
| MESSAGE  | Text:<br>Time to bump the server                                                 |

### !a disboard

> Returns all of the disboard plugin commands.

:::: code-group
::: code-group-item Usage
```
!a disboard
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
None
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
None
```
:::
::::

### !a disboard set

> Sets the disboard channel for the server.

:::: code-group
::: code-group-item Usage
```
!a disboard set <CHANNEL>
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Server
```
:::
::: code-group-item Channel Requirements
```
Text Channel
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

### !a disboard test

> Tests the disboard channel.

:::: code-group
::: code-group-item Usage
```
!a disboard test
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Server
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 5 seconds per server.
```
:::
::::

### !a disboard message

> Sets the disboard timer message.

:::: code-group
::: code-group-item Usage
```
!a disboard message <MESSAGE>
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Server
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

### !a disboard channel

> Returns the channel for the disboard plugin channel.

:::: code-group
::: code-group-item Usage
```
!a disboard channel
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
None
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

### !a disboard reset

> Resets the current disboard settings for the server.

:::: code-group
::: code-group-item Usage
```
!a disboard reset
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Server
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

## Logs

### Command Argument Specifications And Examples

| Argument |                                      Example                                     |
| -------- | -------------------------------------------------------------------------------- |
| CHANNEL  | A discord channel mention name or id:<br>#general / general / 665811293970818050 |
| EVENT    | Text:<br>on_member_join                                                          |

### !a logs

> Returns all of the logs plugin commands.

:::: code-group
::: code-group-item Usage
```
!a logs
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
None
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
None
```
:::
::::

### !a logs set

> Sets the logging channel for the server.

:::: code-group
::: code-group-item Usage
```
!a logs set <CHANNEL>
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Server
```
:::
::: code-group-item Channel Requirements
```
Text Channel
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

### !a logs toggle

> Allows you to toggle certain events.

::: warning
If you do not put an event argument it will toggle the whole plugin.
:::

:::: code-group
::: code-group-item Usage
```
!a logs toggle <EVENT (!a events)>
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Server
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

### !a logs channel

> Returns the channel and and id for the logging channel.

:::: code-group
::: code-group-item Usage
```
!a logs channel
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
None
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

### !a logs reset

> Resets the current logs settings for the server.

:::: code-group
::: code-group-item Usage
```
!a logs reset
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Server
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

## Moderation

### Command Argument Specifications And Examples

| Argument     |                                      Example                                                              |
| ------------ | --------------------------------------------------------------------------------------------------------- |
| MEMBER/USER  | A discord member mention, username and discriminator or id:<br>@Auxtal / Auxtal#1696 / 327745755789918201 |
| DURATION     | Custom time:<br>12h                                                                                       |
| CASE NUMBER  | Number:<br>1                                                                                              |
| NICKNAME     | Text:<br>Owner | Auxtal                                                                                   |
| REASON       | Text:<br>Banned for spamming.                                                                             |
| SENTENCE     | Text:<br>I went to the shop.                                                                              |
| PREFIX       | Text:<br>!a                                                                                               |
| NUMBER       | Number:<br>10                                                                                             |

### !a changenickname

> Changes a members nickname.

:::: code-group
::: code-group-item Usage
```
!a changenickname <MEMBER> <NICKNAME>
```
:::
::: code-group-item Aliases
```
cn
change_nickname
change-nickname
```
:::
::: code-group-item Permissions
```
Manage Nicknames
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
None
```
:::
::::

### !a ban

> Bans a user from the server.

:::: code-group
::: code-group-item Usage
```
!a ban <USER> [REASON]
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Ban Members
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

### !a kick

> Kicks member(s) from the server.

:::: code-group
::: code-group-item Usage
```
!a kick <MEMBER(s)> [REASON]
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Kick Members
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

### !a softban

> Soft bans member(s) from the server.

:::: code-group
::: code-group-item Usage
```
!a softban <MEMBER(s)> [REASON]
```
:::
::: code-group-item Aliases
```
sb
soft_ban
soft-ban
```
:::
::: code-group-item Permissions
```
Ban Members
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

### !a unban

> Unbans a user from the server.

:::: code-group
::: code-group-item Usage
```
!a unban <USER> [REASON]
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Ban Members
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
None
```
:::
::::

### !a warn

> Warns a member(s) in the server.

:::: code-group
::: code-group-item Usage
```
!a warn <MEMBER(s)> [REASON]
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Messages
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

### !a tempmute

> Temporalily mutes a member in the server.

:::: code-group
::: code-group-item Usage
```
!a tempmute <DURATION> <MEMBER> [REASON]
```
:::
::: code-group-item Aliases
```
tm
temp_mute
temp-mute
```
:::
::: code-group-item Permissions
```
Manage Roles
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

### !a mute

> Mutes a member in the server.

:::: code-group
::: code-group-item Usage
```
!a mute <MEMBER> [REASON]
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Roles
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

### !a unmute

> Unmutes the mentioned member.

:::: code-group
::: code-group-item Usage
```
!a unmute <MEMBER>
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Roles
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

### !a clearcases

> Clears a member's case(s) in a server.

:::: code-group
::: code-group-item Usage
```
!a clearcases <MEMBER> [CASE NUMBER]
```
:::
::: code-group-item Aliases
```
cc
clear_cases
clear-cases
```
:::
::: code-group-item Permissions
```
Manage Messages
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

### !a editcase

> Edits a case reason in a server.

:::: code-group
::: code-group-item Usage
```
!a editcase <CASE NUMBER> [REASON]
```
:::
::: code-group-item Aliases
```
ec
edit_case
edit-case
```
:::
::: code-group-item Permissions
```
Manage Messages
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

### !a cases

> Returns the cases for a member.

:::: code-group
::: code-group-item Usage
```
!a cases [MEMBER]
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
None
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

### !a clear

> Deletes the specified amount of messages.

:::: code-group
::: code-group-item Usage
```
!a clear [NUMBER (Max of 150.)]
```
:::
::: code-group-item Aliases
```
purge
```
:::
::: code-group-item Permissions
```
Manage Messages
```
:::
::: code-group-item Channel Requirements
```
Text Channel
```
:::
::: code-group-item Cooldown
```
1 every 5 seconds per user.
```
:::
::::

### !a clear embeds

> Deletes specified amount of messages containing an embed.

:::: code-group
::: code-group-item Usage
```
!a clear embeds [NUMBER (Max of 900.)]
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Messages
```
:::
::: code-group-item Channel Requirements
```
Text Channel
```
:::
::: code-group-item Cooldown
```
1 every 5 seconds per user.
```
:::
::::

### !a clear files

> Deletes specified amount of messages containing a file.

:::: code-group
::: code-group-item Usage
```
!a clear files [NUMBER (Max of 900.)]
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Messages
```
:::
::: code-group-item Channel Requirements
```
Text Channel
```
:::
::: code-group-item Cooldown
```
1 every 5 seconds per user.
```
:::
::::

### !a clear images

> Deletes specified amount of messages containing a file or embed.

:::: code-group
::: code-group-item Usage
```
!a clear images <NUMBER (Max of 900.)>
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Messages
```
:::
::: code-group-item Channel Requirements
```
Text Channel
```
:::
::: code-group-item Cooldown
```
1 every 5 seconds per user.
```
:::
::::

### !a clear member

> Deletes specified amount of messages from a member.

:::: code-group
::: code-group-item Usage
```
!a clear member <MEMBER> [NUMBER (Max of 900.)]
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Messages
```
:::
::: code-group-item Channel Requirements
```
Text Channel
```
:::
::: code-group-item Cooldown
```
1 every 5 seconds per user.
```
:::
::::

### !a clear contains

> Deletes specified amount of messages that contains the specified content.

:::: code-group
::: code-group-item Usage
```
!a clear contains [NUMBER (Max of 900.)] <SENTENCE>
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Messages
```
:::
::: code-group-item Channel Requirements
```
Text Channel
```
:::
::: code-group-item Cooldown
```
1 every 5 seconds per user.
```
:::
::::

### !a clear bot

> Deletes specified amount of messages from a bot.

:::: code-group
::: code-group-item Usage
```
!a clear bot [NUMBER (Max of 900.)] [PREFIX]
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Messages
```
:::
::: code-group-item Channel Requirements
```
Text Channel
```
:::
::: code-group-item Cooldown
```
1 every 5 seconds per user.
```
:::
::::

### !a clear reactions

> Deletes reactions from messages that have them.

:::: code-group
::: code-group-item Usage
```
!a clear reactions [NUMBER (Max of 900.)]
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Messages
```
:::
::: code-group-item Channel Requirements
```
Text Channel
```
:::
::: code-group-item Cooldown
```
1 every 5 seconds per user.
```
:::
::::

## Welcomer

### Command Argument Specifications And Examples

| Argument             |                                      Example                                     |
| -------------------- | -------------------------------------------------------------------------------- |
| CHANNEL              | A discord channel mention name or id:<br>#general / general / 665811293970818050 |
| PNG / JPG IMAGE URL  | An image url:<br>https://i.imgur.com/nKjYhYw.jpg                                 |
| MESSAGE              | Text:<br>Welcome to the server!                                                  |

### !a welcome

> Returns all of the welcome plugin commands.

:::: code-group
::: code-group-item Usage
```
!a welcome
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
None
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
None
```
:::
::::

### !a welcome set

> Sets the welcome channel for the server.

:::: code-group
::: code-group-item Usage
```
!a welcome set <CHANNEL>
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Server
```
:::
::: code-group-item Channel Requirements
```
Text Channel
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

### !a welcome test

> Tests the welcome channel.

:::: code-group
::: code-group-item Usage
```
!a welcome test
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Server
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 5 seconds per user.
```
:::
::::

### !a welcome banner

> Sets the welcome banner background for the server.

:::: code-group
::: code-group-item Usage
```
!a welcome banner <PNG / JPG / GIF URL>
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Server
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

### !a welcome message

> Sets the welcome message for the server.

:::: code-group
::: code-group-item Usage
```
!a welcome banner <PNG / JPG / GIF URL>
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Server
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

### !a welcome channel

> Returns the channel for the welcome plugin channel.

:::: code-group
::: code-group-item Usage
```
!a welcome channel
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
None
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

### !a welcome reset

> Resets the current welcome settings for the server.

:::: code-group
::: code-group-item Usage
```
!a welcome reset
```
:::
::: code-group-item Aliases
```
None
```
:::
::: code-group-item Permissions
```
Manage Server
```
:::
::: code-group-item Channel Requirements
```
None
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::
