module.exports = {
  name: "serverinfo",
  aliases: "server",
  code: `$title[Server Info]
  $addField[verification level;$get[verifylevel]]
  $addField[Roles Count;$roleCount]
  $addField[Emojis Count;$emojiCount[$guildID]]
  $addField[Channels Count;$channelCount]
  $addField[Members Count;$membersCount]
  $thumbnail[$guildIcon]
  $cooldown[2s;slow down, don't spam the command]
  
  $let[verifylevel;$replaceText[$replaceText[$replaceText[$replaceText[$GuildVerificationLevel;1;Low];2;Medium];3;High];4;Very High]]
`
}