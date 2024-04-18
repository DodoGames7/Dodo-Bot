module.exports = [{
  name: "prefix",
  code: `
  $setGuildVar[prefix;$message]
  Changed prefix from \`$get[oldprefix]\` to \`$get[newprefix]\`.
  $onlyIf[$getGuildVar[prefix]!=$message; This prefix is already in use.]
  $onlyIf[$charCount[$message]<=5;Prefix can't be longer than 5 characters.]
  $let[newprefix;$message]
  $let[oldprefix;$getGuildVar[prefix]]
    $onlyPerms[manageguild;You need to have \`ManageServer\` permission to proceed.]
  $onlyIf[$checkContains[$message;<@;<@!;<@&;<#;@;<#!]==false;Why would i do that? I don't want to disturb people! o(TヘTo)]
  $onlyIf[$message!=;Prefix: \`$getGuildVar[prefix]\` 
Usage to change prefix: \`$getGuildVar[prefix]prefix < new prefix here > \`]
 $cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;prefix;$authorID];$dateStamp];1000]]:R>]
  `
},{
    name: "prefix-reset",
    aliases: "reset-prefix",
    code: ` $setGuildVar[prefix;$getGuildVar[originalprefix]]
The prefix has been successfully reset. <3
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;prefix-reset;$authorID];$dateStamp];1000]]:R>]
$onlyIf[$getGuildVar[prefix]!=$getGuildVar[originalprefix];Cannot reset when the prefix is default.]
$onlyPerms[manageguild;you need to have \`ManageServer\` perm]`
}]
