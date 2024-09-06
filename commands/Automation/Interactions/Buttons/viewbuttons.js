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
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
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


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
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
}]

