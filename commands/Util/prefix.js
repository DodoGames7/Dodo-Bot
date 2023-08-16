module.exports = [{
  name: "prefix",
  executeAt: "guild",
  code: `
  $setGuildVar[prefix;$message]
  Changed prefix from \`$get[oldprefix]\` to \`$get[newprefix]\`.
  $onlyIf[$getGuildVar[prefix]!=$message; This prefix is already in use.]
  $cooldown[2s;slow down, don't spam the command]
  $onlyIf[$charCount[$message]<=5;Prefix can't be longer than 5 characters.]
  $let[newprefix;$message]
  $let[oldprefix;$getGuildVar[prefix]]
  $onlyPerms[manageguild;you need to have \`ManageServer\` perm]
  $onlyIf[$checkContains[$message;<@;<@!;<@&;<#;@;<#!]==false;Why would i do that? I don't want to disturb people! o(TヘTo)]
  $onlyIf[$message!=;Prefix: \`$getGuildVar[prefix]\` 
Usage to change prefix: \`$getGuildVar[prefix]prefix < new prefix here> \`]
  `
},{
    name: "prefix-reset",
    executeAt: "guild",
    aliases: "reset-prefix",
    code: ` $setGuildVar[prefix;]
The prefix has been successfully resetted. <3
$cooldown[2s;slow down, don't spam the command]
$onlyIf[$getGuildVar[prefix]!=$getGuildVar[originalprefix];cannot reset when the prefix is default]
$onlyPerms[manageguild;you need to have \`ManageServer\` perm]`
}]