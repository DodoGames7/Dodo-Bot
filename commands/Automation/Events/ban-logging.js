module.exports = [{
name: "Ban Logs",
type: "banAdd",
channel: "$getGuildVar[banneduserschannel]",
code: `
$author[Member banned!;$userAvatar;$userAvatar]
$description[$username has been banned from the server!
**Information**
Account age: $creationDate[$authorID;date]

]
$footer[Banned $get[botchecker] ID: $authorID]
$addTimeStamp
$color[Red]
$let[botchecker;$replaceText[$replaceText[$checkCondition[$isBot==true];true;bot];false;member]]
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