module.exports = [{
    name: "ftfresults1",
    type:"interaction",
    prototype: "button",
    $if: "old",
    code:`
$if[$random[1;100]>=38&&$random[1;100]<89]
$interactionFollowUp[{newEmbed:{title:You found the flag!}{description:Nice guess, the flag was on zone 1! 🏳️}{color:DarkGreen}}]


$interactionUpdate[{newEmbed:{title:$get[embedtitle]}{description:$get[embeddescription]}{color:$getVar[embedcolor]}}{actionRow:{button::3:ftf1:true:🏳️}{button::2:ftf2:true:2️⃣}{button::2:ftf3:true:3️⃣}}]

$else
$interactionFollowUp[{newEmbed:{title:Aww.. miss!}{description:Wrong guess... the flag was on zone $randomText[2;3]. 🏴}{color:Red}}]

$interactionUpdate[{newEmbed:{title:$get[embedtitle]}{description:$get[embeddescription]}{color:$getVar[embedcolor]}}{actionRow:{button::4:ftf1:true:1️⃣}{button::2:ftf2:true:2️⃣}{button::2:ftf3:true:3️⃣}}]

$endif


$let[embeddescription;$getEmbed[$channelID;$interactionData[message.id];1;description]]
$let[embedtitle;$getEmbed[$channelID;$interactionData[message.id];1;title]]

`
}, {
     name: "ftfresults2",
    type:"interaction",
    prototype: "button",
    $if: "old",
    code:`
$if[$random[1;100]>=38&&$random[1;100]<89]

$interactionFollowup[{newEmbed:{title:You found the flag!}{description:Nice guess, the flag was on zone 2! 🏳️}{color:DarkGreen}}]

$interactionUpdate[{newEmbed:{title:$get[embedtitle]}{description:$get[embeddescription]}{color:$getVar[embedcolor]}}{actionRow:{button::2:ftf1:true:1️⃣}{button::3:ftf2:true:🏳️}{button::2:ftf3:true:3️⃣}}]

$else

$interactionFollowup[{newEmbed:{title:Aww.. miss!}{description:Wrong guess... the flag was on zone $randomText[1;3]. 🏴}{color:Red}}]

$interactionUpdate[{newEmbed:{title:$get[embedtitle]}{description:$get[embeddescription]}{color:$getVar[embedcolor]}}{actionRow:{button::2:ftf1:true:1️⃣}{button::4:ftf2:true:2️⃣}{button::2:ftf3:true:3️⃣}}]


$endif

$let[embeddescription;$getEmbed[$channelID;$interactionData[message.id];1;description]]
$let[embedtitle;$getEmbed[$channelID;$interactionData[message.id];1;title]]
`
}, {
    name: "ftfresults3",
    type:"interaction",
    prototype: "button",
    $if: "old",
    code:`
$if[$random[1;100]>=38&&$random[1;100]<89]

$interactionFollowup[{newEmbed:{title:You found the flag!}{description:Nice guess, the flag was on zone 3! 🏳️}{color:DarkGreen}}]

$interactionUpdate[{newEmbed:{title:$get[embedtitle]}{description:$get[embeddescription]}{color:$getVar[embedcolor]}}{actionRow:{button::2:ftf1:true:1️⃣}{button::2:ftf2:true:2️⃣}{button::3:ftf3:true:🏳️}}]

$else

$interactionFollowup[{newEmbed:{title:Aww.. miss!}{description:Wrong guess... the flag was on zone $randomText[1;2]. 🏴}{color:Red}}]

$interactionUpdate[{newEmbed:{title:$get[embedtitle]}{description:$get[embeddescription]}{color:$getVar[embedcolor]}}{actionRow:{button::2:ftf1:true:1️⃣}{button::2:ftf2:true:2️⃣}{button::4:ftf3:true:3️⃣}}]


$endif

$let[embeddescription;$getEmbed[$channelID;$interactionData[message.id];1;description]]
$let[embedtitle;$getEmbed[$channelID;$interactionData[message.id];1;title]]

 
 `
}]
