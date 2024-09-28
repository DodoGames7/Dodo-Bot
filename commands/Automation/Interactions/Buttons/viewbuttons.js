module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==viewcmdflags;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[cmdname;$advancedTextSplit[$customID;_;2]]

$let[flags;$advancedReplace[$checkCondition[$callFunction[commandflags;$get[cmdname]]==];true;None;false;$callFunction[commandflags;$get[cmdname]]]]

$interactionReply[
$title[Flags of this command]
$description[The command has the following flags:

$get[flags]
]
$color[$getGlobalVar[embedcolor]]
$ephemeral
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==viewbotperms;]

$let[botID;$advancedTextSplit[$customID;_;1]]

$onlyIf[$memberExists[$guildID;$get[botID]]==true;
$interactionReply[This bot is no longer in this server.
$ephemeral
]]

$onlyIf[$memberPerms[$guildID;$get[botID];,]!=;
$interactionReply[This bot does not seem to have any permissions added to it.
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
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==viewserverdescription;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$onlyIf[$guildDescription!=;
$interactionReply[
This server does not have description set.
$ephemeral
]]

$interactionReply[
$title[Description]
$description[The server's description reads:

$guildDescription
]
$color[$getGlobalVar[embedcolor]]
$ephemeral
]
`
}]
