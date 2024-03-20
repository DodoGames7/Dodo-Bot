module.exports = [{
name: "wyr1-votebutton",
type: "interaction",
$if: "old",
prototype: "button",
code: `$interactionUpdate[{newEmbed:{title:Would you rather...}{field:**Option 1**:$get[wyr1-question]}{field:**Option 2**:$get[wyr2-question]}{color:$getVar[embedcolor]}}{actionRow:{button:$getMessageVar[wyr1_votes;$interactionData[message.id]]:2:wyr1-votebutton:false:1️⃣}{button:$getMessageVar[wyr2_votes;$interactionData[message.id]]:2:wyr2-votebutton:false:2️⃣}}]


$setMessageVar[wyr1_votes;$sum[$getMessageVar[wyr1_votes;$interactionData[message.id]];1];$interactionData[message.id]]
$setMessageVar[wyr-hasuservoted-$authorID;true;$interactionData[message.id]]

$onlyIf[$getMessageVar[wyr-hasuservoted-$authorID;$interactionData[message.id]]==false;
You have already voted.
{interaction}
{ephemeral}
]

$let[wyr2-question;$getEmbed[$channelID;$interactionData[message.id];1;field2.value]]
$let[wyr1-question;$getEmbed[$channelID;$interactionData[message.id];1;field1.value]]
$if[$isVariableExist[wyr-hasuservoted-$authorID;main]==false]
$createTemporaryVar[main;wyr-hasuservoted-$authorID:false]
$endif`
},{
name: "wyr2-votebutton",
type: "interaction",
$if: "old",
prototype: "button",
code: `$interactionUpdate[{newEmbed:{title:Would you rather...}{field:**Option 1**:$get[wyr1-question]}{field:**Option 2**:$get[wyr2-question]}{color:$getVar[embedcolor]}}{actionRow:{button:$getMessageVar[wyr1_votes;$interactionData[message.id]]:2:wyr1-votebutton:false:1️⃣}{button:$getMessageVar[wyr2_votes;$interactionData[message.id]]:2:wyr2-votebutton:false:2️⃣}}]


$setMessageVar[wyr2_votes;$sum[$getMessageVar[wyr2_votes;$interactionData[message.id]];1];$interactionData[message.id]]
$setMessageVar[wyr-hasuservoted-$authorID;true;$interactionData[message.id]]

$onlyIf[$getMessageVar[wyr-hasuservoted-$authorID;$interactionData[message.id]]==false;
You have already voted.
{interaction}
{ephemeral}
]

$let[wyr2-question;$getEmbed[$channelID;$interactionData[message.id];1;field2.value]]
$let[wyr1-question;$getEmbed[$channelID;$interactionData[message.id];1;field1.value]]
$if[$isVariableExist[wyr-hasuservoted-$authorID]==false]
$createTemporaryVar[main;wyr-hasuservoted-$authorID:false]
$endif`
}]