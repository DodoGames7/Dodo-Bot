module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==shutdownconfirm;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[$title[Please wait..]
$description[$username[$botID] is shutting down...]
$color[Yellow]
]
$wait[5000]
$interactionFollowUp[Done!]
$wait[4000]
$botDestroy
`},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==shutdowndeny;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[thumbnail;$getEmbeds[$channelID;$messageID;0;thumbnail;0]]
$let[color;$getEmbeds[$channelID;$messageID;0;color;0]]
$interactionUpdate[$title[$get[title]]
$description[$get[description]]
$thumbnail[$get[thumbnail]]
$color[$intToHex[$get[color]]]
$addActionRow
$addButton[shutdownconfirm_$authorID;Yes;Secondary;;true]
$addButton[shutdowndeny_$authorID;No;Secondary;;true]
]
$interactionFollowUp[Alright, the bot will continue to operate then.]
`
}]
