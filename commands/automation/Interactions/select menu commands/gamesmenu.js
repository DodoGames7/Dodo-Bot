module.exports = [{
  type: "interaction",
  prototype: "selectMenu",
  code: `
  $interactionReply[Which Game do you want to manage.;;{actionRow:{button:Trivia:1:trivbutton:false}{button:Flood:1:floodbutton:false}};;all;true]


  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {options:{ephemeral: true}}
  {extraOptions:{interaction: true}}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==settingsmenu;]

$onlyIf[$interactionData[values[0]]==gamesmenu;]`
},{
  name: "trivbutton",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[;{newEmbed:{title:Trivia Settings}{description:This settings contains all the available options for the game Trivia!
  
  **type**#COLON# Changes the type of Trivia (multiple/single answers)
  **difficulty**#COLON# Changes the difficulty of Trivia
  
  **Current Settings**
  Trivia Type#COLON# \`$getGuildVar[trivia_type]\`
  Trivia Difficulty#COLON# \`$getGuildVar[trivia_difficulty]\`
  
  }{color:Blurple}};{actionRow:{button:type:1:triviatype:false}{button:difficulty:1:triviamode:false}};;all;true]


`
},
{
  name: "triviatype",
  type: "interaction",
  $if: "old",
  prototype: "button",
  code: `$if[$getGuildVar[trivia_type]==multiple]
  $setGuildVar[trivia_type;single;$guildID]
  $interactionReply[Toggled the option \`single\` for Trivia!;;;;all;true]
  $elseif[$getGuildVar[trivia_type]==single]
  $setGuildVar[trivia_type;multiple;$guildID]
  $interactionReply[Toggled the option \`multiple\` for Trivia!;;;;all;true]
  $endelseif
  $endif`

},{
  name: "floodbutton",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[;{newEmbed:{title:Flood Settings}{description:this settings contains all the available options for the game Flood!

  **difficulty**#COLON# Changes the difficulty of Flood

  **Current Settings**
  difficulty#COLON# $get[type]
    }};{actionRow:{button:difficulty:1:floodmode:false}};;all;true]

  $let[type;$replaceText[$replaceText[$replaceText[$getGuildVar[flood_difficulty];18;\`Hard\`];13;\`Normal\`];8;\`Easy\`]]
  `
},{
  name: "floodmode",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[;{newEmbed:{title:Flood difficulty}{description:Which difficulty do you prefer to use.

  **Easy**#COLON# Starts with Less blocks
  **Normal**#COLON# Starts with Medium sized blocks
  **Hard**#COLON# Starts with Large amount of blocks

    }};{actionRow:{button:Easy:1:floodopteasy:false}{button:Normal:1:floodoptnormal:false}{button:Hard:1:floodopthard:false}};;all;true]
  
  `
},{
  name: "floodopteasy",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[Set Flood's difficulty to \`Easy\`.;;;;all;true]
  $setGuildVar[flood_difficulty;8]

  $onlyIf[$getGuildVar[flood_difficulty]!=8;
  You have already selected easy mode.
  {options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
  `
},{
  name: "floodoptnormal",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[Set Flood's difficulty to \`Normal\`.;;;;all;true]
  $setGuildVar[flood_difficulty;13]

  $onlyIf[$getGuildVar[flood_difficulty]!=13;
  You have already selected normal mode.
  {options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
  `
},{
  name: "floodopthard",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[Set Flood's difficulty to \`Hard\`.;;;;all;true]
  $setGuildVar[flood_difficulty;18]

  $onlyIf[$getGuildVar[flood_difficulty]!=18;
  You have already selected hard mode.
  {options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
  `
},{
  name: "triviamode",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[;{newEmbed:{title:Trivia difficulty}{description:Which Difficulty do you prefer to use.

  **Easy**#COLON# Gives you easy questions to answer!
  **Medium**#COLON# Gives you normal questions that requires some of your iq to answer!
  **Hard**#COLON# Gives you hard questions to answer! (for people with high iq at least)

    }};{actionRow:{button:Easy:1:triviaopteasy:false}{button:Medium:1:triviaoptmedium:false}{button:Hard:1:triviaopthard:false}};;all;true]
  
  `
},{
  name: "triviaopteasy",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[Set Trivia's difficulty to \`Easy\`.;;;;all;true]
  $setGuildVar[trivia_difficulty;easy]

  $onlyIf[$getGuildVar[trivia_difficulty]!=easy;
  You have already selected easy mode.
  {options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
  `
},{
  name: "triviaoptmedium",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[Set Trivia's difficulty to \`Medium\`.;;;;all;true]
  $setGuildVar[trivia_difficulty;medium]

  $onlyIf[$getGuildVar[trivia_difficulty]!=medium;
  You have already selected medium mode.
  {options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
  `
},{
  name: "triviaopthard",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[Set Trivia's difficulty to \`Hard\`.;;;;all;true]
  $setGuildVar[trivia_difficulty;hard]

  $onlyIf[$getGuildVar[trivia_difficulty]!=hard;
  You have already selected hard mode.
  {options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
  `
}]