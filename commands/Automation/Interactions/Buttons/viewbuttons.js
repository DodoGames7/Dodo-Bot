module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[{newEmbed:{title:Flags of this command}{description:The following flags is available for this command#COLON#

$get[flags]
    }{color:$getVar[embedcolor]}};all;true]

$let[flags;$advancedReplaceText[$checkCondition[$arrayJoin[flags;, ]==];true;*No flags exist for this command.*;false;$arrayJoin[flags;, ]]]
$createArray[flags;$nonEscape[$get[flagschecker]]]
$let[flagschecker;$advancedReplaceText[$nonEscape[$commandInfo[$get[cmdname];info.flags]];,;#SEMI#]]

$let[cmdname;$advancedTextSplit[$interactionData[customId];_;3]]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
{ephemeral}
{interaction}
    ]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==viewcommandflags;]
`
},{
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[{newEmbed:{title:Description}{description:This server's description reads#COLON#

$guildDescription
    }{color:$getVar[embedcolor]}};all;true]

$onlyIf[$guildDescription!=;
No description has been found for this server.
{ephemeral}
{interaction}
]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
{ephemeral}
{interaction}
    ]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==viewserverdescription;]
`
},{
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[{newEmbed:{title:Permissions of this bot}{description:**$username[$get[botID]]** has the following permissions#COLON#

    \`\`\`$toLocaleUpperCase[$userPerms[$get[botID];, ;$guildID]]\`\`\`
    }{color:$getVar[embedcolor]}};all;true]

$onlyIf[$memberExists[$get[botID];$guildID]==true;
This bot is no longer in this server.
{ephemeral}
{interaction}
]

$let[botID;$advancedTextSplit[$interactionData[customId];_;2]]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==viewbotpermsbutton;]
`
},{
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[{newEmbed:{title:Attachments of this message}{description:The message has the following attachments#COLON#

* $getAttachments[$get[channelID];$get[messageID];1] $if[$get[attachments]>=1;
* $getAttachments[$get[channelID];$get[messageID];2]
] $if[$get[attachments]>=2;
* $getAttachments[$get[channelID];$get[messageID];3]
] $if[$get[attachments]>=3;
* $getAttachments[$get[channelID];$get[messageID];4]
] $if[$get[attachments]>=4;
* $getAttachments[$get[channelID];$get[messageID];5]
]
    }{color:$getVar[embedcolor]}};all;true]


$let[attachments;$djseval[
const channel =  d.util.getChannel(d, "$get[channelID]")
const message = d.util.getMessage(channel, "$get[messageID]")
message.attachments.size;true]]

$onlyIf[$hasAttachment[$get[messageID];$get[channelID]]!=;
This message no longer has attachments included with it.
{ephemeral}
{interaction}
]

$onlyIf[$messageExists[$get[messageID];$get[channelID]]==true;
This message no longer exists.
{ephemeral}
{interaction}
]

$onlyIf[$guildChannelExists[$guildID;$get[channelID]]==true;
The channel the message belongs to no longer exists.
{ephemeral}
{interaction}
]

$let[messageID;$advancedTextSplit[$interactionData[customId];_;3]]
$let[channelID;$advancedTextSplit[$interactionData[customId];_;2]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==viewmsgattachments;]
`
}]

