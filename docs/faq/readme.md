# Frequently Asked Questions

## Privacy Policy

### What information does AuxBot store?

AuxBot stores your information into a postgres and or redis database on a secure server. The data that AuxBot stores is all publicly available information and is in no way private.

It is not possible for AuxBot to store your personal information without your permission. Private information such as passwords, OAuth backup codes and emails is all secured by discord and not available for any bot.

### When AuxBot joins a server what data does it store?

Upon adding AuxBot to your server you agree to allowing the bot to store the following information.

- Server ID
- Custom Bot Settings
- Executed Commands
- Server Member ID's
- Deleted Messages (Optional)
- Edited Messages (Optional)

### Who can access the information stored?

The only people that can see your information are the developers of AuxBot. Your information from the database is not publicly available for people that are not apart of the AuxBot development team.

### When AuxBot leaves a server what data does it remove?

When kicking or banning AuxBot from a server or deleting your server all of the servers information and custom settings will be removed from the database instantly. All information removed can be seen [above](#when-auxbot-joins-a-server-what-data-does-it-store).

### Statements

a. The organization of AuxBot is not liable for any information that could be lost or leaked.

::: tip
Please take note that the developers are able to modify the Privacy Policy at anytime.
:::

::: tip
If you would like your data removed from the database, kick or ban AuxBot from your server. Or join our [support server](https://www.auxbot.xyz/redirect/support) and request for your data to be removed.
:::

## Terms Of Use

### Can I self-host AuxBot?

The short answer is no you can not. The reason for this is all of AuxBot's code is private and if anyone manages to gain a copy of AuxBot's source code it is under the provisions of the MIT license.

### Can I self-host [AuxBot.xyz](https://www.auxbot.xyz)?

The short answer is no you can not. The website's source code is private and if anyone manages to gain a copy of [AuxBot.xyz](https://www.auxbot.xyz) source code it is under the provisions of the MIT license.

### MIT License

MIT License

Copyright © AuxBot 2020 - 2021 All Rights Reserved

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

::: tip
Please take note that the developers are able to modify the Terms Of Use at anytime.
:::

## Questions

### Why is AuxBot unresponsive?

- Check to see it the bot is online.
- First make sure that the command your trying to run has all of the correct arguments.
- Do you have a custom prefix(es)? If so reset them to the default by running: `!a prefix reset`.
- The bot is online and you don't have a custom prefix? The bot is probably restarting try again in a few seconds or minutes.
- Still have issues after waiting? Make sure that AuxBot has the correct permissions to view and send messages. It is best to give AuxBot the administrator permission to ensure proper functionality.

### Why did AuxBot not send my welcome banner?

This happens when the welcome background background is to large. This is more prone to happen when you have a GIF background.

### Why is AuxBot offline?

The main reason is for maintenance. This can vary in time. If the bot is ever offline for more then 2 hours then there is a problem.

For support, join our [support server](https://www.auxbot.xyz/redirect/support).

### Why did AuxBot send a "something has gone wrong" message?

This happens from time to time. It means that there is an issue with the code that needs to be resolved. For more support with these messages join our [support server](https://www.auxbot.xyz/redirect/support).

Upon joining the support server go to the AuxBot support channel and tell us you have an error. Please state what command you did that caused this issue and please also send the **Error Id** displayed at the bottom of the message.

These errors are usually fixed within 1 day or so.

### Disboard bump message doesn't send after 2 hours?

This only occurs when AuxBot has been down for longer then 2 hours, once AuxBot comes back online it will send your bump message.

### Why does my reminder not appear in my reminder list?

If your reminder is set to activate in under 1 minute it is put into a cache, hence why the reminder is not in the reminder list command.

### No response from the API, please try again soon?

This occurs when a dependency AuxBot uses does not respond or is offline. Their is nothing we can do about this unfortunately except for wait.
