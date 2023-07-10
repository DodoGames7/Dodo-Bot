module.exports = [{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:{title:General}{field:Main stuff:\`ping\`, \`settings\`, \`beta\`}{field:bot-related:\`stats\`, \`ver\`, \`invite\`, \`credits\`, \`info\`, \`report\`}};{actionRow:{selectMenu:helpmenu_$get[authorID]:Select an Module:1:1:false:{selectMenuOptions:Main:general:explore General Commands:false}{selectMenuOptions:Entertainment:entertainment:explore Fun Commands:false}{selectMenuOptions:Util:util:explore Util Commands:false}}}]


  
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
  code: `$interactionUpdate[;{newEmbed:{title:Entertainment}{field:Games:\`ctf\`, \`rps\`, \`snake\`, \`matchpairs\`, \`2048\`, \`flood\` \`minesweeper\`, \`slots\`, \`trivia\`, \`c4\`, \`findemoji\`, \`coinflip\`, \`akinator\`, \`fight\` }{field:General Fun stuff:\`say\`, \`howgamer\`, \`fact\`, \`yesorno\`, \`whoasked\`, \`randomtopic\`}{field:Images:\`car\`}};{actionRow:{selectMenu:helpmenu_$get[authorID]:Select an Module:1:1:false:{selectMenuOptions:Main:general:explore General Commands:false}{selectMenuOptions:Entertainment:entertainment:explore Fun Commands:false}{selectMenuOptions:Util:util:explore Util Commands:false}}}]


  
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
  code: `$interactionUpdate[;{newEmbed:{title:Util}{field:Managing:\`prefix\`, \`reset-prefix\`, \`suggest-set\`, \`set-logdelete\`, \`set-logedit\`, \`reset-logedit\`, \`reset-logdelete\` \`poll-set\`, \`welcome\`, \`leave\`}{field:Info:\`serverinfo\`, \`user\`, \`channel\`}{field:other Util:\`avatar\`, \`suggest\`, \`calc\`, \`randomhex\`, \`poll\`}{description:**Note**#COLON# \`prefix\` allows you to also change prefix, just make sure your command has arguments on it such as numbers or anything else you like!}};{actionRow:{selectMenu:helpmenu_$get[authorID]:Select an Module:1:1:false:{selectMenuOptions:Main:general:explore General Commands:false}{selectMenuOptions:Entertainment:entertainment:explore Fun Commands:false}{selectMenuOptions:Util:util:explore Util Commands:false}}}]


  
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
},{
     type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionReply[;{newEmbed:{title:Beta (aka Beta zone)}{field:Latest beta commands:\`set-banlog\`, \`reset-banlog\`, \`comment\`, \`reverse\`}};;;all;true]

$onlyif[$get[authorID]==$interactionData[author.id];
  {newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyif[$get[customId]==helpmenu;]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_]
$onlyIf[$interactionData[values[0]]==beta;]
`
}]