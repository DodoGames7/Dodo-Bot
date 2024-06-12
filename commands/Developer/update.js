module.exports = {
name: "update",
info: {
    dev: "true"
  },
aliases: ["restartcmds", "reloadcmds"],
code: `$author[Commands has been reloaded!;$userAvatar[$clientID]]
$addField[Commands;
**Total:** $get[total]
**Prefix:**  $commandsCount
**Awaited:** $commandsCount[awaited]
**Interactions:** $get[interactions]
**Slash:** $commandsCount[slash]
]
$let[total;$sum[$commandsCount;$commandsCount[awaited];$commandsCount[button];$commandsCount[selectMenu];$commandsCount[modal];$commandsCount[slash]]]
$let[interactions;$sum[$commandsCount[button];$commandsCount[selectMenu];$commandsCount[modal]]]
$color[$getVar[embedcolor]]
$updateCommands
$cooldown[5s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;update;$authorID];$dateStamp];1000]]:R>]
$onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
`
}