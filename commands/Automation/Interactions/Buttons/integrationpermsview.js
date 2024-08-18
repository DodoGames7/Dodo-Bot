module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==viewbotperms;]

$let[botID;$advancedTextSplit[$customID;_;1]]

$onlyIf[$memberExists[$guildID;$get[botID]]==true;
$interactionReply[This bot is no longer in this server.
$ephemeral
]]

$interactionReply[$title[Permissions of this bot]
$description[**$username[$get[botID]]** has the following permissions:


$codeBlock[$memberPerms[$guildID;$get[botID];,];markdown]
]
$color[$getGlobalVar[embedcolor]]
$ephemeral
]
`
}]
