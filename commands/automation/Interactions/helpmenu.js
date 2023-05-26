module.exports = [{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:{title:General}{field:bot-related:\`stats\`, \`ver\`, \`invite\`, \`settings\`, \`credits\`, \`info\`, \`report\`}};{actionRow:{selectMenu:helpmenu_$get[authorID]:Select an Module:1:1:false:{selectMenuOptions:Main:general:explore General Commands:false}{selectMenuOptions:Entertainment:entertainment:explore Fun Commands:false}{selectMenuOptions:Util:util:explore Util Commands:false}}}]


  
  $onlyif[$get[authorID]==$interactionData[author.id];
  {newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyif[$get[customId]==helpmenu;]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_]
$onlyIf[$interactionData[values[0]]==general;]`
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:{title:Entertainment}{field:Games:\`ctf\`, \`rps\`, \`snake\`, \`matchpairs\`, \`2048\`, \`flood\` \`minesweeper\`, \`slots\`, \`trivia\`, \`c4\`, \`findemoji\`, \`coinflip\`, \`akinator\` }{field:General Fun stuff:\`say\`, \`howgamer\`, \`fact\`}{field:Images:\`car\`}};{actionRow:{selectMenu:helpmenu_$get[authorID]:Select an Module:1:1:false:{selectMenuOptions:Main:general:explore General Commands:false}{selectMenuOptions:Entertainment:entertainment:explore Fun Commands:false}{selectMenuOptions:Util:util:explore Util Commands:false}}}]


  
  $onlyif[$get[authorID]==$interactionData[author.id];
  {newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyif[$get[customId]==helpmenu;]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_]
$onlyIf[$interactionData[values[0]]==entertainment;]
`
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:{title:Util}{field:Managing:\`prefix\`,\`reset-prefix\`, \`suggest-set\`, \`suggest-reset\`}{field:Info:\`serverinfo\`}{field:other Util:\`avatar\`, \`suggest\`}{description:**Note**#COLON# \`prefix\` allows you to also change prefix, just make sure your command has arguments on it such as numbers or anything else you like!}};{actionRow:{selectMenu:helpmenu_$get[authorID]:Select an Module:1:1:false:{selectMenuOptions:Main:general:explore General Commands:false}{selectMenuOptions:Entertainment:entertainment:explore Fun Commands:false}{selectMenuOptions:Util:util:explore Util Commands:false}}}]


  
  $onlyif[$get[authorID]==$interactionData[author.id];
  {newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyif[$get[customId]==helpmenu;]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_]
$onlyIf[$interactionData[values[0]]==util;]
`
}]