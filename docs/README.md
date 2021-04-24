---
description: >-
  AuxBot is a multi use discord bot which has many different things such as
  logging, moderation, music, memes, fun, and so many more commands.
---

# AuxBot Docs

![](.gitbook/assets/auxbot-redesign-round-logo.png)

## How do I setup the bot?

These are the basic plugins to configure the bot for your server.

### Swearing Detection And Prevention:

```text
!a swearing toggle
```

This will check every message in your server for profanity and it it is found the bot will delete the message and send an embed with a quote to what the offender said with the swear word hidden.

### Server Welcome Banners:

This will set the channel for your new member welcome banners.

```text
!a welcome set <CHANNEL>
```

**To test the welcome message you can do**:

```text
!a welcome test
```

**And you can customize them**:

```text
!a welcome message <SENTENCE>
```

```text
!a welcome banner <PNG / JPG / GIF URL>
```

### Disboard Timer:

This will set the disboard message channel.

```text
!a disboard set <CHANNEL>
```

**To customize the message sent you can do**:

```text
!a disboard message <MESSAGE>
```

### Logging:

This will set the logging channel for your server.

```text
!a logs set <CHANNEL>
```

**To customize what events you want toggled do**:

```text
!a logs toggle [EVENT]
```

**To get a list of the events you can use do**:

```text
!a events
```

### Levelling:

This will enable the level plugin in your server.

```text
!a level toggle
```

