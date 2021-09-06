# Plugins

::: tip
[Means Optional] (Means Valid Options) This / Or This
:::

## Main Plugins

AuxBot's main plugins.

#### Disboard

#### Command Argument Specifications And Examples

| Argument | Example                                                                          |
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

| Argument | Example                                                                          |
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

| Argument    | Example                                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| MEMBER/USER | A discord member mention, username and discriminator or id:<br>@Auxtal / Auxtal#1696 / 327745755789918201 |
| DURATION    | Custom time:<br>12h                                                                                       |
| CASE NUMBER | Number:<br>1                                                                                              |
| NICKNAME    | Text:<br>Owner                                                                                            |
| REASON      | Text:<br>Banned for spamming.                                                                             |
| SENTENCE    | Text:<br>I went to the shop.                                                                              |
| PREFIX      | Text:<br>!a                                                                                               |
| NUMBER      | Number:<br>10                                                                                             |

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

| Argument            | Example                                                                          |
| ------------------- | -------------------------------------------------------------------------------- |
| CHANNEL             | A discord channel mention name or id:<br>#general / general / 665811293970818050 |
| PNG / JPG IMAGE URL | An image url:<br>https://i.imgur.com/nKjYhYw.jpg                                 |
| MESSAGE             | Text:<br>Welcome to the server!                                                  |

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

| Argument | Example                         |
| -------- | ------------------------------- |
| LANGUAGE | Text:<br>python                 |
| CODE     | Text:<br>print('Hello, World!') |

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

| Argument | Example     |
| -------- | ----------- |
| PREFIX   | Text:<br>!a |

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

| Argument      | Example                                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------------------- |
| VOICE CHANNEL | A discord voice channel name or id:<br>general / 665811293970818050                                      |
| MEMBER        | A discord member mention, username and discriminator or id:<br>@Auxtal / Auxtal#001 / 327745755789918201 |
| QUERY         | Text:<br>Never Gonna Give You Up                                                                         |
| YOUTUBE URL   | Text:<br>https://www.youtube.com/watch?v=bM7SZ5SBzyY                                                     |
| VOLUME        | Number:<br>50                                                                                            |
| EQUALIZER     | Text:<br>boost                                                                                           |

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

### Reminder

#### Command Argument Specifications And Examples

| Argument | Example                  |
| -------- | ------------------------ |
| TIME     | Custom time:<br>10m      |
| MESSAGE  | Text:<br>Do my homework. |
| ID       | Number:<br>20            |

#### !a reminder

> Creates a reminder that will remind you of your message.

:::: code-group
::: code-group-item Usage

```
!a reminder <TIME> [MESSAGE]
```

:::
::: code-group-item Aliases

```
timer
remind
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

#### !a reminder list

> Returns the 10 last latest currently running reminders.

:::: code-group
::: code-group-item Usage

```
!a reminder list
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

#### !a reminder delete

> Deletes a reminder by its ID.

:::: code-group
::: code-group-item Usage

```
!a reminder delete <ID>
```

:::
::: code-group-item Aliases

```
remove
cancel
```

:::
::: code-group-item Permissions

```
Reminder Creator
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

#### !a reminder clear

> Clears all reminders that you have set.

:::: code-group
::: code-group-item Usage

```
!a reminder clear
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

### Snipes

#### !a snipe

> Returns the last deleted message in the server.

:::: code-group
::: code-group-item Usage

```
!a snipe
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

#### !a snipe toggle

> Toggles the snipe plugin for the server.

:::: code-group
::: code-group-item Usage

```
!a snipe toggle
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

#### !a editsnipe

> Returns the last edited message in the server.

:::: code-group
::: code-group-item Usage

```
!a editsnipe
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

#### !a editsnipe toggle

> Toggles the edit snipe plugin for the server.

:::: code-group
::: code-group-item Usage

```
!a editsnipe toggle
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

### Tags

#### Command Argument Specifications And Examples

| Argument    | Example                         |
| ----------- | ------------------------------- |
| TAG NAME    | Text:<br>welcome                |
| TAG CONTENT | Text:<br>Welcome to our server! |

#### !a tag

> Returns the created tag.

:::: code-group
::: code-group-item Usage

```
!a tag <TAG NAME>
```

:::
::: code-group-item Aliases

```
tags
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

#### !a tag list

> Returns a list of all the servers tags.

:::: code-group
::: code-group-item Usage

```
!a tag list
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

#### !a tag create

> Creates a tag that you can recall.

:::: code-group
::: code-group-item Usage

```
!a tag create <TAG NAME> <TAG CONTENT>
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

#### !a tag edit

> Edits an existing tag.

:::: code-group
::: code-group-item Usage

```
!a tag edit <TAG NAME> <TAG CONTENT>
```

:::
::: code-group-item Aliases

```
None
```

:::
::: code-group-item Permissions

```
Tag Owner
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

#### !a tag delete

> Deletes a tag from the server.

:::: code-group
::: code-group-item Usage

```
!a tag delete <TAG NAME>
```

:::
::: code-group-item Aliases

```
None
```

:::
::: code-group-item Permissions

```
Tag Owner / Manage Server
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

#### !a tag info

> Returns information about a tag.

:::: code-group
::: code-group-item Usage

```
!a tag info <TAG NAME>
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

### Utility

#### Command Argument Specifications And Examples

| Argument    | Example                                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| MEMBER      | A discord member mention, username and discriminator or id:<br>@Auxtal / Auxtal#0001 / 327745755789918201 |
| ROLE        | A discord role mention, name or id:<br>@Moderators / Moderators / 672258502307086337                      |
| TIME        | Custom time:<br>10m                                                                                       |
| COLOUR      | Colour code:<br>#&lt;HEX&gt; / 0x&lt;HEX&gt; / 0x#&lt;HEX&gt;                                             |
| COMMAND     | AuxBot command name or alias:<br>addrole / ar                                                             |
| PLUGIN      | AuxBot plugin:<br>welcome                                                                                 |
| EMOJI       | Emoji:<br>:wave:                                                                                          |
| WEBSITE URL | Text:<br>auxbot.xyz                                                                                       |
| QUERY       | Text:<br>My query                                                                                         |

#### !a help

> Returns help for commands and plugins.

:::: code-group
::: code-group-item Usage

```
!a help [COMMAND / PLUGIN]
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

#### !a ping

> Returns the ping of AuxBot.

:::: code-group
::: code-group-item Usage

```
!a ping
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

#### !a botinfo

> Returns the info of AuxBot.

:::: code-group
::: code-group-item Usage

```
!a botinfo
```

:::
::: code-group-item Aliases

```
bi
bot_info
bot-info
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

#### !a userinfo

> Returns the info of a member.

:::: code-group
::: code-group-item Usage

```
!a userinfo [MEMBER]
```

:::
::: code-group-item Aliases

```
ui
user_info
user-info
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

#### !a serverinfo

> Returns the info of the server.

:::: code-group
::: code-group-item Usage

```
!a serverinfo
```

:::
::: code-group-item Aliases

```
si
server_info
server-info
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

#### !a addrole

> Adds a role to a member.

:::: code-group
::: code-group-item Usage

```
!a addrole <MEMBER> <ROLE>
```

:::
::: code-group-item Aliases

```
ar
add_role
add-role
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
None
```

:::
::::

#### !a removerole

> Removes a role from a member.

:::: code-group
::: code-group-item Usage

```
!a removerole <MEMBER> <ROLE>
```

:::
::: code-group-item Aliases

```
rr
remove_role
remove-role
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
None
```

:::
::::

#### !a slowmode

> Changes the slowmode setting for a channel.

::: tip
If you do not put a time it disables slowmode.
:::

:::: code-group
::: code-group-item Usage

```
!a slowmode [TIME]
```

:::
::: code-group-item Aliases

```
None
```

:::
::: code-group-item Permissions

```
Manage Channels
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

#### !a avatar

> Returns a members avatar.

:::: code-group
::: code-group-item Usage

```
!a avatar
```

:::
::: code-group-item Aliases

```
av
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

#### !a charinfo

> Returns the emoji(s) information.

:::: code-group
::: code-group-item Usage

```
!a charinfo <EMOJI(s)>
```

:::
::: code-group-item Aliases

```
ci
char_info
char-info
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

#### !a commandstats

> Returns command statistics for the server.

:::: code-group
::: code-group-item Usage

```
!a commandstats
```

:::
::: code-group-item Aliases

```
cs
command_stats
command-stats
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
1 every 2 seconds per server.
```

:::
::::

#### !a colour

> Returns the colour in an image.

:::: code-group
::: code-group-item Usage

```
!a colour <COLOUR>
```

:::
::: code-group-item Aliases

```
color
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
1 every 5 seconds per user.
```

:::
::::

#### !a uptime

> Returns the amount of time the bot has been on for.

:::: code-group
::: code-group-item Usage

```
!a uptime
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

#### !a membercount

> Returns the member count for the server.

:::: code-group
::: code-group-item Usage

```
!a membercount
```

:::
::: code-group-item Aliases

```
mc
member_count
member-count
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

#### !a bin

> Returns a link to a sourcebin.

:::: code-group
::: code-group-item Usage

```
!a bin
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

#### !a invite

> Returns AuxBot invite links.

:::: code-group
::: code-group-item Usage

```
!a invite
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

#### !a support

> Returns a link to AuxBot's support server.

:::: code-group
::: code-group-item Usage

```
!a support
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

#### !a search

> Searches google for your query.

:::: code-group
::: code-group-item Usage

```
!a search <QUERY>
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

#### !a documentation

> Returns a link to AuxBot docs.

:::: code-group
::: code-group-item Usage

```
!a documentation
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

#### !a events

> Returns all of the logging events.

:::: code-group
::: code-group-item Usage

```
!a events
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

#### !a website

> Returns a link to AuxBot's website.

:::: code-group
::: code-group-item Usage

```
!a website
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

#### !a emojis

> Returns all of the servers emojis.

:::: code-group
::: code-group-item Usage

```
!a emojis
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

#### !a vote

> Takes you AuxBot's top.gg vote page.

:::: code-group
::: code-group-item Usage

```
!a vote
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

#### !a voted

> Checks if you have voted for the bot.

:::: code-group
::: code-group-item Usage

```
!a voted
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

#### !a messagestats

> Returns a graph of the channels message stats.

:::: code-group
::: code-group-item Usage

```
!a messagestats
```

:::
::: code-group-item Aliases

```
ms
message_stats
message-stats
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
1 every 5 seconds per server.
```

:::
::::

#### !a screenshot

> Returns a screenshot of a website.

:::: code-group
::: code-group-item Usage

```
!a screenshot <WEBSITE URL> [--fullscreen]
```

:::
::: code-group-item Aliases

```
ss
screen_shot
screen-shot
```

:::
::: code-group-item Permissions

```
None
```

:::
::: code-group-item Channel Requirements

```
NSFW Channel
```

:::
::: code-group-item Cooldown

```
Once every 5 seconds per server.
```

:::
::::

#### !a id

> Returns a user id.

:::: code-group
::: code-group-item Usage

```
!a id [MEMBER]
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

#### !a id server

> Returns the servers id.

:::: code-group
::: code-group-item Usage

```
!a id server
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

## Fun Plugins

AuxBot's fun plugins.

### Economy

#### Command Argument Specifications And Examples

| Argument | Example                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------- |
| MEMBER   | A discord member mention, username and discriminator or id:<br>@Auxtal / Auxtal#0001 / 327745755789918201 |
| AMOUNT   | Number:<br>100                                                                                            |

#### !a openaccount

> Opens a new bank account for you.

:::: code-group
::: code-group-item Usage

```
!a openaccount
```

:::
::: code-group-item Aliases

```
oa
open_account
open-account
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

#### !a balance

> Checks your account balance.

:::: code-group
::: code-group-item Usage

```
!a balance [MEMBER]
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

#### !a withdraw

> Withdraws an amount of money from you bank to your wallet.

:::: code-group
::: code-group-item Usage

```
!a withdraw <AMOUNT>
```

:::
::: code-group-item Aliases

```
with
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

#### !a deposit

> Deposits an amount of money from you wallet to your bank.

:::: code-group
::: code-group-item Usage

```
!a deposit <AMOUNT>
```

:::
::: code-group-item Aliases

```
dep
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

#### !a beg

> Allows you to beg for money.

:::: code-group
::: code-group-item Usage

```
!a beg
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

### Fun

#### Command Argument Specifications And Examples

| Argument | Example                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------- |
| MEMBER   | A discord member mention, username and discriminator or id:<br>@Auxtal / Auxtal#0001 / 327745755789918201 |
| QUESTION | Text:<br>AuxBot is awesome right?                                                                         |
| SENTENCE | Text:<br>I ate pizza today.                                                                               |
| HEADS    | Text:<br>heads                                                                                            |
| TAILS    | Text:<br>tails                                                                                            |
| NUMBER   | Number:<br>43                                                                                             |
| WORD     | Text:<br>meaning                                                                                          |
| PERSON1  | Text:<br>Rick                                                                                             |
| PERSON2  | Text:<br>Mona                                                                                             |

#### !a 8ball

> Returns a random answer to your question.

:::: code-group
::: code-group-item Usage

```
!a 8ball <QUESTION>
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

#### !a meme

> Returns a random meme.

:::: code-group
::: code-group-item Usage

```
!a meme
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

#### !a say

> Makes AuxBot say what you said.

:::: code-group
::: code-group-item Usage

```
!a say <SENTENCE>
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

#### !a coin

> Makes AuxBot play heads or tails with you.

:::: code-group
::: code-group-item Usage

```
!a coin <HEADS / TAILS>
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

#### !a roll

> Rolls a random number between the number inputted.

:::: code-group
::: code-group-item Usage

```
!a roll <NUMBER>
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

#### !a shutthefuckup

> Tells the chat to shut the fuck up.

:::: code-group
::: code-group-item Usage

```
!a shutthefuckup
```

:::
::: code-group-item Aliases

```
stfu
shut_the_fuck_up
shut-the-fuck-up
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

#### !a lovecalculator

> Calculates love between two names.

:::: code-group
::: code-group-item Usage

```
!a lovecalculator <PERSON1> <PERSON2>
```

:::
::: code-group-item Aliases

```
lovcalc
love_calculator
love-calculator
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

#### !a urban

> Searches the urban dictionary.

:::: code-group
::: code-group-item Usage

```
!a urban <WORD>
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

#### !a hug

> Returns a hug gif with the members name.

:::: code-group
::: code-group-item Usage

```
!a hug [MEMBER]
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

#### !a cuddle

> Returns a cuddle gif with the members name.

:::: code-group
::: code-group-item Usage

```
!a cuddle [MEMBER]
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

#### !a kiss

> Returns a kiss gif with the members name.

:::: code-group
::: code-group-item Usage

```
!a kiss [MEMBER]
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

#### !a pat

> Returns a pat gif with the members name.

:::: code-group
::: code-group-item Usage

```
!a pat [MEMBER]
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

#### !a poke

> Returns a poke gif with the members name.

:::: code-group
::: code-group-item Usage

```
!a poke [MEMBER]
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

#### !a tickle

> Returns a tickle gif with the members name.

:::: code-group
::: code-group-item Usage

```
!a tickle [MEMBER]
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

#### !a slap

> Returns a slap gif with the members name.

:::: code-group
::: code-group-item Usage

```
!a slap [MEMBER]
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

#### !a goose

> Returns a picture of a goose.

:::: code-group
::: code-group-item Usage

```
!a goose
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

#### !a pp

> Returns a random pp size for the member.

:::: code-group
::: code-group-item Usage

```
!a pp [MEMBER]
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

### Image Generation

#### Command Argument Specifications And Examples

| Argument | Example                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------- |
| MEMBER   | A discord member mention, username and discriminator or id:<br>@Auxtal / Auxtal#0001 / 327745755789918201 |
| SENTENCE | Text:<br>I ate pizza today.                                                                               |

#### !a jail

> Returns the members avatar behind bars.

:::: code-group
::: code-group-item Usage

```
!a jail [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a wanted

> Returns the members avatar in a wanted poster.

:::: code-group
::: code-group-item Usage

```
!a wanted [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a brazzers

> Returns the members avatar with a brazzers logo.

:::: code-group
::: code-group-item Usage

```
!a brazzers [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a shit

> Returns the members name on the bottom of a shoe.

:::: code-group
::: code-group-item Usage

```
!a shit [MEMBER / SENTENCE]
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
1 every 5 seconds per user.
```

:::
::::

#### !a dank

> Returns a gif of the members avatar with MLG pictures.

:::: code-group
::: code-group-item Usage

```
!a dank [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a corporate

> Returns the members avatar in a corporate meme.

:::: code-group
::: code-group-item Usage

```
!a corporate [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a dab

> Returns the members avatar doing a dab.

:::: code-group
::: code-group-item Usage

```
!a dab [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a door

> Returns the members avatar looking out a door.

:::: code-group
::: code-group-item Usage

```
!a door [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a egg

> Returns the members avatar as an egg out of a duck.

:::: code-group
::: code-group-item Usage

```
!a egg [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a failure

> Returns the members avatar in a classroom with everyone staring.

:::: code-group
::: code-group-item Usage

```
!a failure [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a fakenews

> Returns the members avatar in a tv.

:::: code-group
::: code-group-item Usage

```
!a fakenews [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a fedora

> Returns the members avatar in a fedora.

:::: code-group
::: code-group-item Usage

```
!a fedora [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a gay

> Returns the members avatar with rainbow colours on it.

:::: code-group
::: code-group-item Usage

```
!a gay [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a goggles

> Returns the members avatar in a science lab.

:::: code-group
::: code-group-item Usage

```
!a goggles [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a hitler

> Returns the members avatar in a worst than hitler meme.

:::: code-group
::: code-group-item Usage

```
!a hitler [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a invert

> Returns the members avatar inverted.

:::: code-group
::: code-group-item Usage

```
!a invert [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a ipad

> Returns the members avatar in an ipad.

:::: code-group
::: code-group-item Usage

```
!a ipad [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a kimborder

> Returns the members avatar on the floor.

:::: code-group
::: code-group-item Usage

```
!a kimborder [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a laid

> Returns the members avatar on a piece of paper.

:::: code-group
::: code-group-item Usage

```
!a laid [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a magik

> Returns the members avatar with magic.

:::: code-group
::: code-group-item Usage

```
!a magik [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a radialblur

> Returns members avatar with a radial blur.

:::: code-group
::: code-group-item Usage

```
!a radialblur [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a youtube

> Returns the members avatar and text in a youtube comment.

:::: code-group
::: code-group-item Usage

```
!a youtube <MEMBER> <SENTENCE>
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
1 every 5 seconds per user.
```

:::
::::

#### !a whothisis

> Returns the members avatar in a whothis meme.

:::: code-group
::: code-group-item Usage

```
!a whothisis <MEMBER> <NAME>
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
1 every 5 seconds per user.
```

:::
::::

#### !a aborted

> Returns the members avatar on a persons head.

:::: code-group
::: code-group-item Usage

```
!a aborted [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a affect

> Returns the members avatar on a monitor.

:::: code-group
::: code-group-item Usage

```
!a affect [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a airpods

> Returns the members avatar with airpods.

:::: code-group
::: code-group-item Usage

```
!a airpods [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a america

> Returns the members avatar on with the American flag on top.

:::: code-group
::: code-group-item Usage

```
!a america [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a bed

> Returns both members avatars on a bed.

:::: code-group
::: code-group-item Usage

```
!a bed <MEMBER> <MEMBER>
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
1 every 5 seconds per user.
```

:::
::::

#### !a bongocat

> Returns the members avatar with a bongocat.

:::: code-group
::: code-group-item Usage

```
!a bongocat [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a cancer

> Returns the members avatar with the words cancer above it.

:::: code-group
::: code-group-item Usage

```
!a cancer [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a communism

> Returns members avatar with a communism flag.

:::: code-group
::: code-group-item Usage

```
!a communism [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a deepfry

> Returns members avatar with a bunch of weird effects.

:::: code-group
::: code-group-item Usage

```
!a deepfry [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a delete

> Returns the members avatar in a delete window.

:::: code-group
::: code-group-item Usage

```
!a delete [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a disability

> Returns the members avatar on a disability poster.

:::: code-group
::: code-group-item Usage

```
!a disability [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a madethis

> Returns the members avatar in a madethis meme.

:::: code-group
::: code-group-item Usage

```
!a madethis <MEMBER> <MEMBER>
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
1 every 5 seconds per user.
```

:::
::::

#### !a rip

> Returns the members avatar on a RIP headstone.

:::: code-group
::: code-group-item Usage

```
!a rip [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a roblox

> Returns the members avatar on a roblox character.

:::: code-group
::: code-group-item Usage

```
!a roblox [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a salty

> Returns the members avatar with a salt shaker.

:::: code-group
::: code-group-item Usage

```
!a salty [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a satan

> Returns the members avatar on satans head.

:::: code-group
::: code-group-item Usage

```
!a satan [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a screams

> Returns the members avatars in a screams meme.

:::: code-group
::: code-group-item Usage

```
!a screams <MEMBER> <MEMBER>
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
1 every 5 seconds per user.
```

:::
::::

#### !a sickban

> Returns the members avatar in a mail segment.

:::: code-group
::: code-group-item Usage

```
!a sickban [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a spank

> Returns one member spanking the other member.

:::: code-group
::: code-group-item Usage

```
!a spank <MEMBER>
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
1 every 5 seconds per user.
```

:::
::::

#### !a trigger

> Returns the members avatar triggered.

:::: code-group
::: code-group-item Usage

```
!a trigger [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a ugly

> Makes you ugly.

:::: code-group
::: code-group-item Usage

```
!a ugly [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

#### !a whodidthis

> Returns the members avatar in a whodidthis meme.

:::: code-group
::: code-group-item Usage

```
!a whodidthis [MEMBER]
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
1 every 5 seconds per user.
```

:::
::::

### Leveling

#### Command Argument Specifications And Examples

| Argument | Example                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------- |
| MEMBER   | A discord member mention, username and discriminator or id:<br>@Auxtal / Auxtal#0001 / 327745755789918201 |

#### !a level

> Returns a members level.

:::: code-group
::: code-group-item Usage

```
!a level [MEMBER]
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

#### !a level toggle

> Toggles the level plugin for the server.

:::: code-group
::: code-group-item Usage

```
!a level toggle
```

:::
::: code-group-item Aliases

```
lvlt
level_toggle
level-toggle
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
