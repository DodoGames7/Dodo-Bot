module.exports = [{
name: "msgdeletionlog",
type: "messageDelete",
$if: "old",
channel: "$getGuildVar[msglogdeletedchannel]",
code: `$author[a Message was deleted!;$authorAvatar]
$if[$charCount[$message]>=1024]
$addField[Information:;
Member: <@$authorID>
Channel: <#$channelUsed>]
$description[**Message**:

$message]
$else
$description[
Member: <@$authorID>
Channel: <#$channelUsed>]
$addField[The Message:;$message
$endif
$footer[Message ID: $messageID
]
$addTimestamp
$color[Yellow]
$if[$getGuildVar[includebots]==false]
$onlyIf[$isBot==false;]
$endif
$onlyIf[$message!=;]
$onlyIf[$authorID!=$clientID;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[msglogdeletedchannel]]==true;]
$onlyIf[$getGuildVar[msglogdeletedchannel]!=none;]
$onlyIf[$guildID==$guildID;]

`
},{
    name: "msgeditlog",
    type: "messageUpdate",
    $if: "old",
channel: "$getGuildVar[msglogeditchannel]",
code: `$author[a Message was edited!;$authorAvatar]
$if[$charCount[$message]>=1024||$charCount[$oldMessage]>=1024]
$description[**Before**:
$oldMessage
$messageAttachment
**After**:
$message
$messageAttachment
]
$addField[Information:;
Member: <#$authorID>
Channel: <#$channelUsed>
[Message link]($messageURL[$messageID;$channelUsed])
]
$else
$description[Member: <@$authorID>
Channel: <#$channelUsed>
[Message link]($messageURL[$messageID;$channelUsed])
]
$addField[After:;$message
$messageAttachment]
$addField[Before:;$oldMessage
$messageAttachment]
$endif
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
;log.txt]
$endif
$if[$getGuildVar[includebots]==false]
$onlyIf[$isBot==false;]
$endif
$onlyIf[$oldMessage!=||$message!=;]
$onlyIf[$oldMessage!=$message;]
$onlyIf[$authorID!=$clientID;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[msglogeditchannel]]==true;]
$onlyIf[$getGuildVar[msglogeditchannel]!=none;]
$onlyIf[$guildID==$guildID;]

    `
}]