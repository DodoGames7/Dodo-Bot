module.exports = [{
  name:"capturetheflag",
  executeAt: "both",
  aliases:"ctf",
code:`$title[🚩 | Capture the flag!]
      $description[There is a hidden flag somewhere around 1-3, where you think the flag is on?]
      $color[Blurple]
$addButton[1;Three;1;ctf3_$authorID;false]
$addButton[1;Two;1;ctf2_$authorID;false]
$addButton[1;One;1;ctf1_$authorID;false]
$cooldown[2s;slow down, don't spam the command]`
}, {
    type:"interaction",
    prototype: "button",
    $if: "old",
    code:`
$if[$checkContains[$randomText[true;false];true]==true]

$interactionFollowUp[;{newEmbed:{title:You captured the flag!}{description:Nice guess, the flag was on zone 1! 🏳️}{color:Green}}]


$interactionUpdate[;{newEmbed:{title:🚩 | Capture the flag!}{description:There is a hidden flag somewhere around 1-3, where you think the flag is on?}{color:Blurple}};{actionRow:{button:One:3:ctf1_$get[authorID]:true}{button:Two:1:ctf2_$get[authorID]:true}{button:Three:1:ctf3_$get[authorID]:true}}]

$else
$interactionFollowUp[;{newEmbed:{title:Aww.. miss!}{description:Wrong guess... the flag was on zone $randomText[2;3]. 🏴}{color:Red}}]

$interactionUpdate[;{newEmbed:{title:🚩 | Capture the flag!}{description:There is a hidden flag somewhere around 1-3, where you think the flag is on?}{color:Blurple}};{actionRow:{button:One:4:ctf1_$get[authorID]:true}{button:Two:1:ctf2_$get[authorID]:true}{button:Three:1:ctf3_$get[authorID]:true}}]

$endif
$onlyif[$get[authorID]==$interactionData[author.id];
you're not the author of this interaction
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyif[$get[customId]==ctf1;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_] 
`
}, {
    type:"interaction",
    prototype: "button",
    $if: "old",
    code:`
$if[$checkContains[$randomText[true;false];true]==true]

$interactionFollowup[;{newEmbed:{title:You captured the flag!}{description:Nice guess, the flag was on zone 2! 🏳️}{color:Green}}]

$interactionUpdate[;{newEmbed:{title:🚩 | Capture the flag!}{description:There is a hidden flag somewhere around 1-3, where you think the flag is on?}{color:Blurple}};{actionRow:{button:One:1:ctf1_$get[authorID]:true}{button:Two:3:ctf2_$get[authorID]:true}{button:Three:1:ctf3_$get[authorID]:true}}]

$else

$interactionFollowup[;{newEmbed:{title:Aww.. miss!}{description:Wrong guess... the flag was on zone $randomText[1;3]. 🏴}{color:Red}}]

$interactionUpdate[;{newEmbed:{title:🚩 | Capture the flag!}{description:There is a hidden flag somewhere around 1-3, where you think the flag is on?}{color:Blurple}};{actionRow:{button:One:1:ctf1_$get[authorID]:true}{button:Two:4:ctf2_$get[authorID]:true}{button:Three:1:ctf3_$get[authorID]:true}}]


$endif
$onlyif[$get[authorID]==$interactionData[author.id];
you're not the author of this interaction
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyif[$get[customId]==ctf2;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_] `
}, {
    type:"interaction",
    prototype: "button",
    $if: "old",
    code:`
$if[$checkContains[$randomText[true;false];true]==true]

$interactionFollowup[;{newEmbed:{title:You captured the flag!}{description:Nice guess, the flag was on zone 3! 🏳️}{color:Green}}]

$interactionUpdate[;{newEmbed:{title:🚩 | Capture the flag!}{description:There is a hidden flag somewhere around 1-3, where you think the flag is on?}{color:Blurple}};{actionRow:{button:One:1:ctf1_$get[authorID]:true}{button:Two:1:ctf2_$get[authorID]:true}{button:Three:3:ctf3_$get[authorID]:true}}]

$else

$interactionFollowup[;{newEmbed:{title:Aww.. miss!}{description:Wrong guess... the flag was on zone $randomText[1;2]. 🏴}{color:Red}}]

$interactionUpdate[;{newEmbed:{title:🚩 | Capture the flag!}{description:There is a hidden flag somewhere around 1-3, where you think the flag is on?}{color:Blurple}};{actionRow:{button:One:1:ctf1_$get[authorID]:true}{button:Two:1:ctf2_$get[authorID]:true}{button:Three:4:ctf3_$get[authorID]:true}}]


$endif
$onlyif[$get[authorID]==$interactionData[author.id];
you're not the author of this interaction
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyif[$get[customId]==ctf3;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_] `
}]