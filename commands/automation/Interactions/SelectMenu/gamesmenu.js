module.exports = [{
  type: "interaction",
  prototype: "selectMenu",
  code: `
  $interactionReply[Which game do you want to manage.;;{actionRow:{button:Trivia:1:trivbutton:false}{button:Flood:1:floodbutton:false}};;all;true]


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
  
  Select the options which you want to customise?
  
  **Current Settings**
  Trivia Type#COLON# \`$getGuildVar[trivia_type]\`
  Trivia Difficulty#COLON# \`$getGuildVar[trivia_difficulty]\`
  
  }{color:Blurple}};{actionRow:{selectMenu:triviasettings:Select an option to view information about.:1:1:false:{selectMenuOptions:Trivia type:triviatype:How should the game start questions?:false}{selectMenuOptions:Difficulty:triviamode:How easy the game can be?:false}}};;all;true]


`
},{
  name: "triviasettings",
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:{title:Trivia type}{description:
    This is the type of questions the game starts with. There're two types#COLON#
    **single**
    **multiple**

    Choosing single will cause the game to start with only answer for each question otherwise, multiple will start the game with multiple answers selection for each question.

  }{color:Blurple}};{actionRow:{selectMenu:triviasettings:Select an option to view information about.:1:1:false:{selectMenuOptions:Trivia type:triviatype:How should the game start questions?:false}{selectMenuOptions:Difficulty:triviamode:How easy the game can be?:false}}}{actionRow:{button:Toggle:1:triviatype:false}}]

$onlyIf[$interactionData[values[0]]==triviatype;]

`
},{
  name: "triviasettings",
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:{title:Trivia Difficulty}{description:
    This option is dedicated to how hard/easy should the game be. There're 3 options#COLON#

  **Easy**
  **Medium**
  **Hard**

  Easy starts the game with questions easy to answer, Medium will start the game with somewhat normal but Medium knowledge about questions you know otherwise, Hard will start the game in questions that're hard to answer.

  }{color:Blurple}};{actionRow:{selectMenu:triviasettings:Select an option to view information about.:1:1:false:{selectMenuOptions:Trivia type:triviatype:How should the game start questions?:false}{selectMenuOptions:Difficulty:triviamode:How easy the game can be?:false}}}{actionRow:{button:Toggle:1:triviatype:false}}{actionRow:{button:Easy:1:triviaopteasy:false}{button:Medium:1:triviaoptmedium:false}{button:Hard:1:triviaopthard:false}}]

$onlyIf[$interactionData[values[0]]==triviamode;]

`
},{
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

  Select the options which you want to customise?

  **Current Settings**
  Difficulty#COLON# $get[type]
    }};{actionRow:{actionRow:{selectMenu:floodsettings:Select an option to view information about.:1:1:false:{selectMenuOptions:Difficulty:floodmode:How easy the game can be?:false}}}{button:Difficulty:1:floodmode:false}};;all;true]

  $let[type;$replaceText[$replaceText[$replaceText[$getGuildVar[flood_difficulty];18;\`Hard\`];13;\`Normal\`];8;\`Easy\`]]
  `
},{
  name: "floodsettings",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{title:Flood difficulty}{description:Which difficulty mode do you prefer to use?

  **Easy**#COLON# Starts with Less blocks
  **Normal**#COLON# Starts with Medium sized blocks
  **Hard**#COLON# Starts with Large amount of blocks

    }};{actionRow:{actionRow:{selectMenu:floodsettings:Select an option to view information about.:1:1:false:{selectMenuOptions:Difficulty:floodmode:How easy the game can be?:false}}}{actionRow:{button:Easy:1:floodopteasy:false}{button:Normal:1:floodoptnormal:false}{button:Hard:1:floodopthard:false}}]
  
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
