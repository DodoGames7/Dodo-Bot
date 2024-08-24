module.exports = {
name: "avatar",
info: {
        description: "Returns your/users profile picture.",
        perms: "`SendMessages`"
},
type: "messageCreate",
aliases: ["av", "useravatar", "pfp"],
disableConsoleErrors: true,
code: `$userCooldown[avatarcmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[avatarcmd]];1000]]:R>]

$let[user;$findUser[$message;true]]
$let[username;$advancedReplace[$checkCondition[$callFunction[hasusertag;$get[user]]==true];true;$userTag[$get[user]];false;$username[$get[user]]]]
$title[$get[username]'s avatar]
$image[$userAvatar[$get[user];;png]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[$userAvatar[$get[user];;png];Open in browser;Link]

`
}
