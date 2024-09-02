module.exports = [{
  name: "prefix",
  info: {
    description: "View or change current prefix of the bot in this server.",
    perms: ["`SendMessages`", "`ManageGuild` (when changing prefix)"],
    usage: "prefix <new prefix>"
},
  code: `
  $setGuildVar[prefix;$nonEscape[$get[newprefix]]]
  Changed prefix from \`$get[oldprefix]\` to \`$get[newprefix]\`.
  $onlyIf[$getGuildVar[prefix]!=$nonEscape[$get[newprefix]];This prefix is already in use.]
  $onlyIf[$charCount[$nonEscape[$get[newprefix]]]<=5;Prefix can't be longer than 5 characters.]
  $let[newprefix;$message]
  $let[oldprefix;$getGuildVar[prefix]]
    $onlyPerms[manageguild;You need to have \`ManageServer\` permission to proceed.]
  $onlyIf[$checkContains[$message;<@;<@!;<@&;<#;@;<#!]==false;Why would i do that? I don't want to disturb people! o(TヘTo)]
  $onlyIf[$message!=;Prefix: \`$getGuildVar[prefix]\` 
Usage to change prefix: \`$getGuildVar[prefix]$nonEscape[$commandInfo[prefix;info.usage]]\`]
 $cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;prefix;$authorID];$dateStamp];1000]]:R>]
  `
},{
    name: "prefix-reset",
    info: {
      description: "Resets the prefix to it's default state in this server.",
      perms: ["`SendMessages`", "`ManageGuild`"]
  },
    aliases: "reset-prefix",
    code: `$deleteVar[prefix;$guildID;main]
The prefix has been successfully reset. <3
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;prefix-reset;$authorID];$dateStamp];1000]]:R>]
$onlyIf[$getGuildVar[prefix]!=$getGuildVar[originalprefix];Cannot reset when the prefix is default.]
$onlyPerms[manageguild;you need to have \`ManageServer\` perm]`
}]
