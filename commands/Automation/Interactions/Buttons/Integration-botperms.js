module.exports = {
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
}
