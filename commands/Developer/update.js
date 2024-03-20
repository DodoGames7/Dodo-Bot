module.exports = {
name: "update",
aliases: ["restartcmds", "reloadcmds"],
code: `Successfully updated all commands.
$addButton[1;Total: $commandsCount;2;uselesscustomid;true]
$updateCommands
$cooldown[5s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;update;$authorID];$dateStamp];1000]]:R>]]
$onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
`
}