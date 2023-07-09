module.exports = {
name: "channel",
aliases: "channelinfo",
$if: "old",
code: `$author[Information for channel $channelName[$findGuildChannel[$message;true]];$get[authorImage]]
$description[**General**

Channel created since: $creationDate[$findGuildChannel[$message;true]]
Channel type: $channelType[$findGuildChannel[$message;true]]
NSFW: $channelNSFW[$findGuildChannel[$message;true]]

**Other**
Topic: $channelTopic[$findGuildChannel[$message;true]]
Channel id: $findGuildChannel[$message;true]
Channel's Category id: $get[categoryid]
]
$let[authorImage;$replaceText[$replaceText[$checkCondition[$guildIcon!=];false;$userAvatar[$clientID]];true;$guildIcon]]
$let[categoryid;$replaceText[$replaceText[$checkCondition[$channelCategoryID[$findGuildChannel[$message;true]]!=];false;No category has been found];true;$channelCategoryID[$findGuildChannel[$message;true]]]]
$let[slowmode;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getChannelSlowmode[$findGuildChannel[$message;true]];60s;1m];5;5s];600;10m];120s;2m];1800;30m];300;5m];0;0s]]
`
}