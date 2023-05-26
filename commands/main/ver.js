module.exports = {
  name: "version",
  executeAt: "both",
  aliases: "ver",
  code: `$title[**⚙️Version: 2.0.0-beta.3 (2023 may 23th)**]
  $description[**changes**
You can now use Suggestion system! To reset a channel use \`suggest-reset\`, to set a channel use \`suggest-set\`.
In case you have setup the suggestion system then you may use \`suggest\` command.
Improved \`serverinfo\` command.
Removed select menu option \`info\` from \`help\` command as it wasn't needed.
Changed small details of some commands.

**fixes**
Fixed incorrect data shown from \`serverinfo\` command.
Fixed embed mode regarding argument with \`say\` command.
Fixed \`invite\` command being having outdated permissions which isn't needed for the bot.
Fixed \`fact\` being returning weird stuff.

**other**
Disable akinator game temporary until it gets fully fixed.
Added \`car\` command (it just returns random car images).
Added auto reply option which makes the bot automatically respond to you by pinging (check \`settings\` cmd for that). Currently it only tells you on what prefix it uses for this server.
  ]
  $color[Blurple]
  $footer[V2 is back again.]
  $cooldown[2s;slow down, don't spam the command]`
}