module.exports = [{
    type: "messageDelete",
    allowBots: true,
    code: `
    $onlyIf[$oldMessage[content]!=;]
    $onlyIf[$hasEmbeds[$oldMessage[channelID];$oldMessage[id]]==false;]
    $onlyIf[$getGuildVar[msglogdeletechannel]!=;]
    $onlyIf[$guildChannelExists[$guildID;$getGuildVar[msglogdeletechannel]]==true;]
    $onlyIf[$channelHasPerms[$getGuildVar[msglogdeletechannel];$botID;ViewChannel;SendMessages]==true;]
    $if[$getGuildVar[includebots]==off;
$onlyIf[$isBot[$oldMessage[authorID]]==false;]
]
    $sendMessage[$getGuildVar[msglogdeletechannel];
$author[Message deleted!;$userAvatar[$oldMessage[authorID]]]
    $description[
**Member:** <@$oldMessage[authorID]>
**Channel:** <#$oldMessage[channelID]>
    $oldMessage[content]
    ]
   $color[Yellow]
]
`
},{
    type: "messageUpdate",
    allowBots: true,
    code: `
    $onlyIf[$or[$oldMessage[content]==;$newMessage[content]==]==false;]
    $onlyIf[$and[$hasEmbeds[$oldMessage[channelID];$oldMessage[id]]==false;$hasEmbeds[$newMessage[channelID];$newMessage[id]]==false]==true;]
    $onlyIf[$getGuildVar[msglogeditchannel]!=;]
    $onlyIf[$guildChannelExists[$guildID;$getGuildVar[msglogeditchannel]]==true;]
    $onlyIf[$channelHasPerms[$getGuildVar[msglogeditchannel];$botID;ViewChannel;SendMessages]==true;]
$if[$getGuildVar[includebots]==off;
$onlyIf[$isBot[$authorID]==false;]
]
    $if[$and[$charCount[$newMessage[content]]>=2000;$charCount[$oldMessage[content]]>=2000];
$sendMessage[$getGuildVar[msglogeditchannel];
$attachment[
**Member:** <@$authorID>
**Channel:** <#$channelID>
Message Link: $messageLink[$channelID;$newMessage[id]]

**Before**
$oldMessage[content]
**After**
$newMessage[content]
;message-edit-log.txt;true]
]
;

    $sendMessage[$getGuildVar[msglogeditchannel];
    $author[Message edited!;$userAvatar]
    $description[
**Member:** <@$authorID>
**Channel:** <#$channelID>
$hyperlink[Message Link;$messageLink[$channelID;$newMessage[id]]]

**Before**
$oldMessage[content]
**After**
$newMessage[content]
    ]
   $color[Blue]
]
]
`
}]
