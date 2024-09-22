module.exports = [{
    name: "msgeditlogfilemode",
    type: "awaited",
    code: `$createFile[
Member: <#$authorID>
Channel: <#$channelUsed>
Message link: $messageURL[$messageID;$channelUsed]

Before:
$oldMessage
$messageAttachment
After:
$message
$messageAttachment
;msgedit-logs.txt]

$useChannel[$getGuildVar[msglogeditchannel]]`
},{
    name: "msgeditlogembedmode",
    type: "awaited",
    code: `$author[Message Updated!;$authorAvatar]
$description[
**Member:** <@$authorID>
**Channel:** <#$channelUsed>
**Message:** $messageURL[$messageID;$channelUsed] ([Jump]($messageURL[$messageID;$channelUsed]))

**Before**
$oldMessage
$messageAttachment
**After**
$message
$messageAttachment
]
$footer[Message ID: $messageID]
$color[Blue]
$addTimestamp

$useChannel[$getGuildVar[msglogeditchannel]]`
}]
