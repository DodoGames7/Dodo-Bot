module.exports = {
name: "update",
info: {
    description: "Restarts commands to latest code-edits",
    perms: ["`SendMessages`"],
    dev: "true"
},
aliases: ["restartcmds", "reloadcmds"],
type: "messageCreate",
code: `$onlyIf[$checkContains[$botOwnerID[$getGlobalVar[AllowBotMembers]];$authorID]==true;]
$updateCommands
$title[Reloaded!]
$addField[**Commands**;
* **Prefix**: $commandCount[messageCreate]
* **Interaction**: $commandCount[interactionCreate]
]
$color[$getGlobalVar[embedcolor]]
$let[total;$sum[$commandCount[messageCreate];$commandCount[interactionCreate]]]
$addActionRow
$addButton[veryuselesscustomid;Total: $get[total];Secondary;;true]
`
}