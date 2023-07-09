module.exports = {
  name: "version",
  executeAt: "both",
  aliases: "ver",
  code: `$title[**⚙️Version: 2.0.0-beta.4 (2023 Jul 9th)**]
  $description[
We have finally entered in public beta stage! Dodo-Bot no longer looks like it lacks of stuff for now (despite the help command stuff).

**Changes**
Added welcome, leave, message deletion log and message edit log! In addition to this, we now support including bots or not in message log features!

Add support for new and old usernames in Discord! Despite user accounts updating to new ones, this is useful for bots for now

Partially finished welcome system (except for autorole). Means you can now switch to text or embed in the feature as well!

**Fixes**
Fixed verify level section in \`serverinfo\` command showing \`0\` if server verify level is set to none
Fixed grammar of \`settings\` command
Fixed mentions being usable as prefix in \`prefix\` command (somehow no one noticed this)

**Note**
There're also a lot of other changes so feel free to check them out!
  ]
  $color[Blurple]
  $cooldown[2s;slow down, don't spam the command]`
}