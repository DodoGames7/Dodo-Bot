module.exports = [{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:{title:General}{field:bot-related:\`stats\`, \`ver\`, \`invite\`, \`settings\`}};{actionRow:{selectMenu:helpmenu_$get[authorID]:Select an Module:1:1:false:{selectMenuOptions:Main:general:explore General Commands:false}{selectMenuOptions:Entertainment:entertainment:explore Fun Commands:false}{selectMenuOptions:Util:util:explore Util Commands:false}{selectMenuOptions:info:info:explore information commands:false}}}]


  
  $onlyif[$get[authorID]==$interactionData[author.id];
  You aren't the author of this interaction.
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
  code: `$interactionUpdate[;{newEmbed:{title:Entertainment}{field:Games:\`ctf\`, \`rps\`, \`snake\`, \`matchpairs\`, \`2048\`, \`flood\` \`minesweeper\`, \`slots\`, \`trivia\`, \`c4\`, \`findemoji\`, \`ctf\` }{field:General Fun stuff:\`say\`, \`howgamer\`}};{actionRow:{selectMenu:helpmenu_$get[authorID]:Select an Module:1:1:false:{selectMenuOptions:Main:general:explore General Commands:false}{selectMenuOptions:Entertainment:entertainment:explore Fun Commands:false}{selectMenuOptions:Util:util:explore Util Commands:false}{selectMenuOptions:info:info:explore information commands:false}}}]


  
  $onlyif[$get[authorID]==$interactionData[author.id];
  You aren't the author of this interaction.
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
  code: `$interactionUpdate[;{newEmbed:{title:Util}{field:Managing:\`prefix\`, \`set-prefix\`}{field:other Util:\`avatar\`}{description:**note**#COLON# \`prefix\` allows you to also change prefix, just make sure your command has arguments on it}};{actionRow:{selectMenu:helpmenu_$get[authorID]:Select an Module:1:1:false:{selectMenuOptions:Main:general:explore General Commands:false}{selectMenuOptions:Entertainment:entertainment:explore Fun Commands:false}{selectMenuOptions:Util:util:explore Util Commands:false}{selectMenuOptions:info:info:explore information commands:false}}}]


  
  $onlyif[$get[authorID]==$interactionData[author.id];
  You aren't the author of this interaction.
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