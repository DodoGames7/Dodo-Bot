module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `$onlyIf[$customID==shutdownconfirm_$authorID;]
$interactionUpdate[$title[Please wait..]
$description[Dodo-Bot is shutting down...]
]
$wait[5000]
$interactionFollowUp[Done!]
$wait[4000]
$botDestroy
`},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `$onlyIf[$customID==shutdowndeny_$authorID;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[thumbnail;$getEmbeds[$channelID;$messageID;0;thumbnail;0]]
$interactionUpdate[$title[$get[title]]
$description[$get[description]]
$thumbnail[$get[thumbnail]]
$color[Red]
$addActionRow
$addButton[shutdownconfirm_$authorID;Yes;Secondary;;true]
$addButton[shutdowndeny_$authorID;No;Secondary;;true]
]
$interactionFollowUp[Alright, the bot will continue to operate then.]
`
}]