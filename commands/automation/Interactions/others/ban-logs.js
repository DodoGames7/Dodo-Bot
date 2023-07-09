module.exports = {
name: "ban-logger",
type: "banAdd",
$if: "old",
channel: "$getGuildVar[banneduserschannel]",
code: `
This is currently in beta stage so not much information is shown.
$author[$username was banned from the server!;$userAvatar;$userAvatar]
$if[$memberExists[$authorID]==true]
$addField[Information;
Account age: $creationDate[$authorID;date]
]
$else
$description[It appears that they were banned while not being a member in this server... No member information will be shown then.]
$endif
$footer[Banned $get[botchecker] ID: $authorID]
$addTimeStamp
$color[Red]
$let[botchecker;$replaceText[$replaceText[$checkCondition[$isBot==true];true;bot];false;member]]
$onlyIf[$guildID==$guildID;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[banneduserschannel]]==true;]
$onlyIf[$getGuildVar[banneduserschannel]!=none;]
`
}