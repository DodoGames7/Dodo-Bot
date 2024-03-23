module.exports = [{
type: "interaction",
prototype: "button",
code: `

$interactionUpdate[{newEmbed:{title:Leveling}{description:Leveling is a feature that let's members of the server have their levels and xp based on how much they have been active in the server.

To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the "Settings" button.

$get[levelingsystem]}}{actionRow:{button:Toggle:2:enableleveling_$authorID:false:🔄}{button:Settings:4:levelingsetting_$authorID:false}}]


$let[levelingsystem;$replaceText[$replaceText[$checkCondition[$getGuildVar[levelsystem]==on];false;*Leveling is currently disabled*];true;*Leveling is currently enabled*]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelinghomepage;]

`
},{
type: "interaction",
prototype: "button",
code: `$interactionFollowUp[$get[resultmessage];true]

$interactionUpdate[{newEmbed:{title:Leveling}{description:Leveling is a feature that let's members of the server have their levels and xp based on how much they have been active in the server.

To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the "Settings" button.

$get[levelingsystem]}}{actionRow:{button:Toggle:2:enableleveling_$authorID:false:🔄}{button:Settings:4:levelingsetting_$authorID:false}}]


$let[levelingsystem;$replaceText[$replaceText[$checkCondition[$getGuildVar[levelsystem]==on];false;*Leveling is currently disabled*];true;*Leveling is currently enabled*]]
$let[resultmessage;$replaceText[$replaceText[$checkCondition[$getGuildVar[levelsystem]==on];true;Successfully enabled Leveling!];false;Successfully disabled Leveling!]]
$setGuildVar[levelsystem;$get[newtoggledsetting];$guildID]
$let[newtoggledsetting;$replaceText[$replaceText[$checkCondition[$getGuildVar[levelsystem]==on];true;off];false;on]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==enableleveling;]
`
}]
