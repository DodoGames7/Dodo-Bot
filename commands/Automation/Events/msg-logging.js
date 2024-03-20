module.exports = [{
name: "Message delete Logs",
type: "messageDelete",
$if: "old",
channel: "$getGuildVar[msglogdeletedchannel]",
code: `$author[Message Deleted!;$authorAvatar]
$description[
**Member:** <@$authorID>
**Channel:** <#$channelUsed>

$message
]
$addTimestamp
$color[Yellow]
$if[$getGuildVar[includebots]==false]
$onlyIf[$isBot==false;]
$endif
$onlyIf[$message!=;]
$onlyIf[$authorID!=$clientID;]
$onlyIf[$hasPermsInChannel[$getGuildVar[msglogdeletedchannel];$clientID;viewchannel;sendmessages]==true;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[msglogdeletedchannel]]==true;]
$onlyIf[$getGuildVar[msglogdeletedchannel]!=none;]
$onlyIf[$guildID==$guildID;]

`
},{
    name: "Message update Logs",
    type: "messageUpdate",
    $if: "old",
channel: "$getGuildVar[msglogeditchannel]",
code: `$author[Message Updated!;$authorAvatar]
$description[
**Member:** <@$authorID>
**Channel:** <#$channelUsed>
[Message link]($messageURL[$messageID;$channelUsed])

**Before**
$oldMessage
$messageAttachment
**After**
$message
$messageAttachment
]
$footer[Message ID: $messageID
]
$color[Blue]
$addTimestamp
$if[$charCount[$message]>=4096||$charCount[$oldMessage]>=4096]
Text is too large to be included in the embed. Sending as a file instead.
$createFile[
Member: <#$authorID>
Channel: <#$channelUsed>
[Message link]($messageURL[$messageID;$channelUsed])

Before:
$oldMessage
$messageAttachment
After:
$message
$messageAttachment
;message-edit-log.txt]
$endif
$if[$getGuildVar[includebots]==false]
$onlyIf[$isBot==false;]
$endif
$onlyIf[$oldMessage!=||$message!=;]
$onlyIf[$oldMessage!=$message;]
$onlyIf[$hasEmbeds[$messageID;$channelID]==false;]
$onlyIf[$authorID!=$clientID;]
$onlyIf[$hasPermsInChannel[$getGuildVar[msglogeditchannel];$clientID;viewchannel;sendmessages]==true;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[msglogeditchannel]]==true;]
$onlyIf[$getGuildVar[msglogeditchannel]!=none;]
$onlyIf[$guildID==$guildID;]

    `
}]
