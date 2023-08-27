module.exports = {
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
}