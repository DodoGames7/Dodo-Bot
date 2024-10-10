module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[{newEmbed:{title:Flags of this command}{description:The following flags is available for this command#COLON#

$arrayJoin[flags;, ]
    }{color:$getVar[embedcolor]}};all;true]

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

$onlyIf[$userPerms[$get[botID];, ;$guildID]!=;
This bot does not seem to have any permissions added to it.
{ephemeral}
{interaction}
]

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
    code: `$interactionReply[{newEmbed:{title:Why this exists?}{description:Administrator permission is generally dangerous and should only be given to people you trust. It is always a good idea to only select the required permissions which is why \`perms\` command exists to ensure that this does not happen.

This is also to reduce the chances of raiding in case where the bot gets hacked by having less dangerous permissions.
    }{color:$getVar[embedcolor]}};all;true]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
{ephemeral}
{interaction}
    ]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==whynoadminperm;]
`
}]

