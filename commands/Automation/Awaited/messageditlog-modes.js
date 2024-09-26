module.exports = [{
    name: "msgeditlogfilemode",
    type: "awaited",
    code: `$createFile[
Member: <#$authorID>
Channel: <#$channelID>
Message link: $messageURL[$messageID;$channelID]

Before:
$oldMessage

After:
$message

Attachments:
$if[$messageAttachment[1]!=;$messageAttachment[1];None] $if[$messageAttachment[2]!=;

$messageAttachment[2]
] $if[$messageAttachment[3]!=;

$messageAttachment[3]
] $if[$messageAttachment[4]!=;

$messageAttachment[4]
] $if[$messageAttachment[5]!=;

$messageAttachment[5]
]
;msgedit-logs.txt]

$useChannel[$getGuildVar[msglogeditchannel]]`
},{
    name: "msgeditlogembedmode",
    type: "awaited",
    code: `$author[Message Updated!;$authorAvatar]
$description[
**Member:** <@$authorID>
**Channel:** <#$channelID>
**Message:** $messageURL[$messageID;$channelID] ([Jump]($messageURL[$messageID;$channelID]))

**Before**
$oldMessage
$messageAttachment[1]
**After**
$message
$messageAttachment[1]
]
$footer[Message ID: $messageID]
$color[Blue]
$addTimestamp

$useChannel[$getGuildVar[msglogeditchannel]]`
}]
