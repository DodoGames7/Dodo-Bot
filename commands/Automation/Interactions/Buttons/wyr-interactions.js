module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$customID==wyr-ops1;]
$onlyIf[$getMessageVar[wyr-hasuservoted-$authorID;$messageID;no]==no;
$interactionReply[
$ephemeral
You have already voted.
]]

$jsonLoad[wyrdata;$getMessageVar[wyr;$messageID]]
$!jsonSet[wyrdata;upvotes;$sum[$env[wyrdata;upvotes];1]]
$setMessageVar[wyr;$env[wyrdata];$messageID]

$let[wyr1-votes;$env[wyrdata;upvotes]]
$let[wyr2-votes;$env[wyrdata;downvotes]]
$let[ops1;$getEmbeds[$channelID;$messageID;0;fieldValue;0]]
$let[option1name;$getEmbeds[$channelID;$messageID;0;fieldName;0]]
$let[ops2;$getEmbeds[$channelID;$messageID;0;fieldValue;1]]
$let[option2name;$getEmbeds[$channelID;$messageID;0;fieldName;1]]



$interactionUpdate[
$title[Would you rather...]
$addField[$get[option1name];$get[ops1]]
$addField[$get[option2name];$get[ops2]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[wyr-ops1;$get[wyr1-votes];Secondary;1️⃣]
$addButton[wyr-ops2;$get[wyr2-votes];Secondary;2️⃣]
]

$setMessageVar[wyr-hasuservoted-$authorID;yes;$messageID]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$customID==wyr-ops2;]
$onlyIf[$getMessageVar[wyr-hasuservoted-$authorID;$messageID;no]==no;
$interactionReply[
$ephemeral
You have already voted.
]]

$jsonLoad[wyrdata;$getMessageVar[wyr;$messageID]]
$!jsonSet[wyrdata;downvotes;$sum[$env[wyrdata;downvotes];1]]
$setMessageVar[wyr;$env[wyrdata];$messageID]

$let[wyr1-votes;$env[wyrdata;upvotes]]
$let[wyr2-votes;$env[wyrdata;downvotes]]
$let[ops1;$getEmbeds[$channelID;$messageID;0;fieldValue;0]]
$let[option1name;$getEmbeds[$channelID;$messageID;0;fieldName;0]]
$let[ops2;$getEmbeds[$channelID;$messageID;0;fieldValue;1]]
$let[option2name;$getEmbeds[$channelID;$messageID;0;fieldName;1]]



$interactionUpdate[
$title[Would you rather...]
$addField[$get[option1name];$get[ops1]]
$addField[$get[option2name];$get[ops2]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[wyr-ops1;$get[wyr1-votes];Secondary;1️⃣]
$addButton[wyr-ops2;$get[wyr2-votes];Secondary;2️⃣]
]

$setMessageVar[wyr-hasuservoted-$authorID;yes;$messageID]
`
}]
