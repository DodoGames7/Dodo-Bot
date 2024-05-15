module.exports = [{
name: "Ban Logs",
type: "banAdd",
channel: "$getGuildVar[banneduserschannel]",
code: `
$author[Member banned!;$userAvatar;$userAvatar]
$description[
**$toLocaleUpperCase[$get[botchecker]]:** $username <@$authorID>
**Moderator:** $get[moderatorchecker]
**Reason:** $get[reason]
]
$footer[ID: $authorID]
$addTimeStamp
$color[Red]
$let[moderatorchecker;$replaceText[$replaceText[$checkCondition[$hasPerms[$guildID;$clientID;viewauditlog]==true];true;$username[$get[staff]] <@$get[staff]>];false;Unknown]]
$let[reason;$replaceText[$replaceText[$checkCondition[$getAuditLogs[$guildID;;1;22;{reason}]==null||$hasPerms[$guildID;$clientID;viewauditlog]==false];true;None.];false;$getAuditLogs[$guildID;;1;22;{reason}]]]
$let[staff;$getAuditLogs[$guildID;;1;22;{executor.id}]]
$let[botchecker;$replaceText[$replaceText[$checkCondition[$isBot==true];true;bot];false;user]]
$onlyIf[$hasPermsInChannel[$getGuildVar[banneduserschannel];$clientID;viewchannel;sendmessages]==true;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[banneduserschannel]]==true;]
$onlyIf[$getGuildVar[banneduserschannel]!=none;]
$onlyIf[$guildID==$guildID;]

`
},{
    name: "Un-Ban Logs",
    type: "banRemove",
    channel: "$getGuildVar[unbanneduserschannel]",
    code: `$author[Member unbanned!;$userAvatar;$userAvatar]
$description[$username was unbanned from the server! They can now join the server again.]
$footer[Unbanned $get[botchecker] ID: $authorID]
$addTimeStamp
$color[Green]
$let[botchecker;$replaceText[$replaceText[$checkCondition[$isBot==true];true;bot];false;member]]
$onlyIf[$hasPermsInChannel[$getGuildVar[unbanneduserschannel];$clientID;viewchannel;sendmessages]==true;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[unbanneduserschannel]]==true;]
$onlyIf[$getGuildVar[unbanneduserschannel]!=none;]
$onlyIf[$guildID==$guildID;]

`
}]