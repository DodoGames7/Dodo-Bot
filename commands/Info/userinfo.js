module.exports = {
name: "userinfo",
info: {
description: "Returns information about you (or the user if mentioned).",
perms: "`SendMessages`"
},
type: "messageCreate",
aliases: ["user", "usrinfo"],
disableConsoleErrors: true,
code: `$userCooldown[userinfocmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[userinfocmd]];1000]]:R>]

$let[user;$findUser[$message;true]]
$let[username;$replace[$replace[$checkCondition[$callFunction[hasusertag;$get[user]]==true];true;$userTag[$get[user]]];false;$username[$get[user]]]]
$let[accounttype;$replace[$replace[$checkCondition[$isBot[$get[user]]==true];true;Bot];false;Human]]
$let[dmsstatus;$replace[$replace[$checkCondition[$isUserDMEnabled[$get[user]]==true];true;Enabled];false;Disabled]]

$title[$get[username]'s information]
$addField[**General**;
**Joined Discord on:** <t:$trunc[$divide[$userCreatedAt[$get[user]];1000]]:f>
**Account type:** $get[accounttype]
**ID:** $get[user]
;true]
$addField[**Other**;
**Avatar:** $hyperlink[link;$userAvatar[$get[user]]]
**DMS:** $get[dmsstatus]
;true]
$thumbnail[$userAvatar[$get[user]]]
$color[$getGlobalVar[embedcolor]]
$if[$memberExists[$guildID;$get[user]]==true;
$addActionRow
$addButton[generalmeminfo_$authorID_$get[user];General info;Secondary;;true]
$addButton[memberservinfo_$authorID_$get[user];Member's Server info;Secondary]
]
`
}
