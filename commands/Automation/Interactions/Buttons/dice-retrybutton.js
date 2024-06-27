module.exports = {
type: "interaction",
prototype: "button",
code: `

$interactionEdit[{newEmbed:{title:There you go!!}{description:You got a $random[1;6] out of 6!}{color:Red}}{actionRow:{button:Try Again:2:dicetryagain_$authorID:false:🕹️}}]
$wait[3s]
$interactionUpdate[{newEmbed:{title:Rolling...}{color:Red}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==dicetryagain;]


`
}
