module.exports = [{
name: "ban-logger",
type: "banAdd",
channel: "$getGuildVar[banneduserschannel]",
code: `
$author[$username was banned from the server!;$userAvatar;$userAvatar]
$description[**Information**
Account age: $creationDate[$authorID;date]
]
$footer[Banned $get[botchecker] ID: $authorID]
$addTimeStamp
$color[Red]
$let[botchecker;$replaceText[$replaceText[$checkCondition[$isBot==true];true;bot];false;member]]
$onlyIf[$guildID==$guildID;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[banneduserschannel]]==true;]
$onlyIf[$getGuildVar[banneduserschannel]!=none;]
`
},{
    name: "unban-logger",
    type: "banRemove",
    channel: "$getGuildVar[unbanneduserschannel]",
    code: `$author[$username was unbanned from the server!;$userAvatar;$userAvatar]
$description[They can now join the server again.]
$footer[Unbanned $get[botchecker] ID: $authorID]
$addTimeStamp
$color[Green]
$let[botchecker;$replaceText[$replaceText[$checkCondition[$isBot==true];true;bot];false;member]]
$onlyIf[$guildID==$guildID;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[unbanneduserschannel]]==true;]
$onlyIf[$getGuildVar[unbanneduserschannel]!=none;]
`
}]