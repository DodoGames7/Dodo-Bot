module.exports = [{
  type: "interaction",
  $if: "old",
  prototype: "button",
  code: `$if[$checkContains[$randomText[heads;tails];heads]==true]
  
  $interactionFollowUp[GG, **$username** The coin landed on **Heads**]
  
  $interactionUpdate[;{newEmbed:{title:Coin Flip}{description:The coin is in the air, choose heads or tails below.}{color:Red}};{actionRow:{button:Heads:3:headsbutton_$authorID:true}{button:Tails:1:tailsbutton_$authorID:true}}]
  $else
  $interactionFollowUp[you lost, The coin landed on **Tails**]
  
  $interactionUpdate[;{newEmbed:{title:Coin Flip}{description:The coin is in the air, choose heads or tails below.}{color:Red}};{actionRow:{button:Heads:4:headsbutton_$authorID:true}{button:Tails:1:tailsbutton_$authorID:true}}]
  $endif
  
  $onlyif[$get[authorID]==$interactionData[author.id];
{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyif[$get[customId]==headsbutton;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_] 
  `
},{
  type: "interaction",
  $if: "old",
  prototype: "button",
  code: `$if[$checkContains[$randomText[heads;tails];tails]==true]
  
  $interactionFollowUp[GG, **$username** The coin landed on **Tails**]
  
  $interactionUpdate[;{newEmbed:{title:Coin Flip}{description:The coin is in the air, choose heads or tails below.}{color:Red}};{actionRow:{button:Heads:4:headsbutton_$authorID:true}{button:Tails:3:tailsbutton_$authorID:true}}]
  $else
  $interactionFollowUp[you lost, The coin landed on **Heads**]
  
  $interactionUpdate[;{newEmbed:{title:Coin Flip}{description:The coin is in the air, choose heads or tails below.}{color:Red}};{actionRow:{button:Heads:1:headsbutton_$authorID:true}{button:Tails:4:tailsbutton_$authorID:true}}]
  $endif
  
  $onlyif[$get[authorID]==$interactionData[author.id];
{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyif[$get[customId]==tailsbutton;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_] 
  `
}]