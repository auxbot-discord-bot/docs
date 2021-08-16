# Plugins

::: tip
[Means Optional] (Means Valid Options) This / Or This
:::

## Main Plugins

AuxBot's main plugins.

#### Disboard

#### Command Argument Specifications And Examples

| Argument |                                      Example                                     |
| -------- | -------------------------------------------------------------------------------- |
| CHANNEL  | A discord channel mention name or id:<br>#general / general / 665811293970818050 |
| MESSAGE  | Text:<br>Time to bump the server                                                 |

#### !a disboard

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

#### !a disboard set

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

#### !a disboard test

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

#### !a disboard message

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

#### !a disboard channel

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

#### !a disboard reset

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

### Logs

#### Command Argument Specifications And Examples

| Argument |                                      Example                                     |
| -------- | -------------------------------------------------------------------------------- |
| CHANNEL  | A discord channel mention name or id:<br>#general / general / 665811293970818050 |
| EVENT    | Text:<br>on_member_join                                                          |

#### !a logs

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

#### !a logs set

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

#### !a logs toggle

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

#### !a logs channel

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

#### !a logs reset

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

### Moderation

#### Command Argument Specifications And Examples

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

#### !a changenickname

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

#### !a ban

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

#### !a kick

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

#### !a softban

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

#### !a unban

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

#### !a warn

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

#### !a tempmute

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

#### !a mute

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

#### !a unmute

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

#### !a clearcases

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

#### !a editcase

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

#### !a cases

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

#### !a clear

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

#### !a clear embeds

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

#### !a clear files

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

#### !a clear images

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

#### !a clear member

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

#### !a clear contains

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

#### !a clear bot

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

#### !a clear reactions

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

### Welcomer

#### Command Argument Specifications And Examples

| Argument             |                                      Example                                     |
| -------------------- | -------------------------------------------------------------------------------- |
| CHANNEL              | A discord channel mention name or id:<br>#general / general / 665811293970818050 |
| PNG / JPG IMAGE URL  | An image url:<br>https://i.imgur.com/nKjYhYw.jpg                                 |
| MESSAGE              | Text:<br>Welcome to the server!                                                  |

#### !a welcome

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

#### !a welcome set

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

#### !a welcome test

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

#### !a welcome banner

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

#### !a welcome message

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

#### !a welcome channel

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

#### !a welcome reset

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

## Useful Plugins

AuxBot's useful plugins.

### Code

#### Command Argument Specifications And Examples

| Argument             |                                      Example                                     |
| -------------------- | -------------------------------------------------------------------------------- |
| LANGUAGE             | Text:<br>python                                                                  |
| CODE                 | Text:<br>print('Hello, World!')                                                  |

#### !a run

> Runs code in a chosen language.

:::: code-group
::: code-group-item Usage
```
!a run <LANGUAGE> <CODE>
```
:::
::: code-group-item Aliases
```
code
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

#### !a run repeat

> Runs cached code previously ran by a member.

:::: code-group
::: code-group-item Usage
```
!a run repeat
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

#### !a run languages

> Returns all of the valid languages able to be used.

:::: code-group
::: code-group-item Usage
```
!a run languages
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

### Configuration

#### Command Argument Specifications And Examples

| Argument             |                                      Example                                     |
| -------------------- | -------------------------------------------------------------------------------- |
| PREFIX               | Text:<br>!a                                                                      |

#### !a swearing

> Returns all of the swearing commands.

:::: code-group
::: code-group-item Usage
```
!a swearing
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

#### !a swearing toggle

> Toggles the swearing plugin on and off.

:::: code-group
::: code-group-item Usage
```
!a swearing toggle
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

#### !a prefix

> Returns your servers prefix(es).

:::: code-group
::: code-group-item Usage
```
!a prefix
```
:::
::: code-group-item Aliases
```
prefixes
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

#### !a prefix add

> Adds a prefix the the server.

:::: code-group
::: code-group-item Usage
```
!a prefix add <PREFIX>
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

#### !a prefix remove

> Removes a prefix from the server.

:::: code-group
::: code-group-item Usage
```
!a prefix remove <PREFIX>
```
:::
::: code-group-item Aliases
```
delete
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

#### !a prefix reset

> Resets all server prefixes.

:::: code-group
::: code-group-item Usage
```
!a prefix reset
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

### Music

#### Command Argument Specifications And Examples

| Argument             |                                      Example                                                             |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| VOICE CHANNEL        | A discord voice channel name or id:<br>general / 665811293970818050                                      |
| MEMBER               | A discord member mention, username and discriminator or id:<br>@Auxtal / Auxtal#001 / 327745755789918201 |
| QUERY                | Text:<br>Never Gonna Give You Up                                                                         |
| YOUTUBE URL          | Text:<br>https://www.youtube.com/watch?v=bM7SZ5SBzyY                                                     |
| VOLUME               | Number:<br>50                                                                                            |
| EQUALIZER            | Text:<br>boost                                                                                           |

#### !a connect

> Makes AuxBot connect to a voice channel.

:::: code-group
::: code-group-item Usage
```
!a connect [VOICE CHANNEL]
```
:::
::: code-group-item Aliases
```
c
```
:::
::: code-group-item Permissions
```
None
```
:::
::: code-group-item Channel Requirements
```
Voice Channel
```
:::
::: code-group-item Cooldown
```
None
```
:::
::::

#### !a play

> Plays a song from a URL or query.

:::: code-group
::: code-group-item Usage
```
!a play <QUERY / YOUTUBE URL>
```
:::
::: code-group-item Aliases
```
p
```
:::
::: code-group-item Permissions
```
None
```
:::
::: code-group-item Channel Requirements
```
Voice Channel
```
:::
::: code-group-item Cooldown
```
None
```
:::
::::

#### !a pause

> Pause the currently playing song.

:::: code-group
::: code-group-item Usage
```
!a pause
```
:::
::: code-group-item Aliases
```
pa
```
:::
::: code-group-item Permissions
```
Manage Server / DJ
```
:::
::: code-group-item Channel Requirements
```
Voice Channel
```
:::
::: code-group-item Cooldown
```
None
```
:::
::::

#### !a resume

> Resume a currently paused player.

:::: code-group
::: code-group-item Usage
```
!a resume
```
:::
::: code-group-item Aliases
```
r
```
:::
::: code-group-item Permissions
```
Manage Server / DJ
```
:::
::: code-group-item Channel Requirements
```
Voice Channel
```
:::
::: code-group-item Cooldown
```
None
```
:::
::::

#### !a skip

> Skips the currently playing song.

:::: code-group
::: code-group-item Usage
```
!a skip
```
:::
::: code-group-item Aliases
```
s
```
:::
::: code-group-item Permissions
```
Manage Server / DJ
```
:::
::: code-group-item Channel Requirements
```
Voice Channel
```
:::
::: code-group-item Cooldown
```
None
```
:::
::::

#### !a stop

> Stops the player.

:::: code-group
::: code-group-item Usage
```
!a stop
```
:::
::: code-group-item Aliases
```
st
```
:::
::: code-group-item Permissions
```
Manage Server / DJ
```
:::
::: code-group-item Channel Requirements
```
Voice Channel
```
:::
::: code-group-item Cooldown
```
None
```
:::
::::

#### !a volume

> Changes the volume of the player.

:::: code-group
::: code-group-item Usage
```
!a volume <NUMBER (Between 1 - 100.)>
```
:::
::: code-group-item Aliases
```
v
vol
```
:::
::: code-group-item Permissions
```
Manage Server / DJ
```
:::
::: code-group-item Channel Requirements
```
Voice Channel
```
:::
::: code-group-item Cooldown
```
None
```
:::
::::

#### !a shuffle

> Shuffles the players queue.

:::: code-group
::: code-group-item Usage
```
!a shuffle
```
:::
::: code-group-item Aliases
```
sh
```
:::
::: code-group-item Permissions
```
Manage Server / DJ
```
:::
::: code-group-item Channel Requirements
```
Voice Channel
```
:::
::: code-group-item Cooldown
```
None
```
:::
::::

#### !a equalizer

> Changes the players equalizer.

:::: code-group
::: code-group-item Usage
```
!a equalizer <EQUALIZER (flat, boost, metal, piano)>
```
:::
::: code-group-item Aliases
```
eq
```
:::
::: code-group-item Permissions
```
Manage Server / DJ
```
:::
::: code-group-item Channel Requirements
```
Voice Channel
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

#### !a queue

> Returns the players queued songs.

:::: code-group
::: code-group-item Usage
```
!a queue
```
:::
::: code-group-item Aliases
```
q
```
:::
::: code-group-item Permissions
```
Manage Server / DJ
```
:::
::: code-group-item Channel Requirements
```
Voice Channel
```
:::
::: code-group-item Cooldown
```
None
```
:::
::::

#### !a nowplaying

> Updates the player controller.

::: tip
If there are 5 or more messages after the controller the bot will delete it and resend it. If there is less then 5 messages after the controller the bot will edit the controller to the latest stats.
:::

:::: code-group
::: code-group-item Usage
```
!a nowplaying
```
:::
::: code-group-item Aliases
```
np
now_playing
now-playing
```
:::
::: code-group-item Permissions
```
None
```
:::
::: code-group-item Channel Requirements
```
Voice Channel
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::

#### !a swapdj

> Swap the current DJ to another member.

:::: code-group
::: code-group-item Usage
```
!a swapdj [MEMBER]
```
:::
::: code-group-item Aliases
```
sw
swap_dj
swap-dj
```
:::
::: code-group-item Permissions
```
Manage Server / DJ
```
:::
::: code-group-item Channel Requirements
```
Voice Channel
```
:::
::: code-group-item Cooldown
```
1 every 2 seconds per user.
```
:::
::::
