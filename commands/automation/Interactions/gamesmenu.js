module.exports = [{
  type: "interaction",
  prototype: "selectMenu",
  code: `
  $interactionReply[Which Game do you want to manage.;;{actionRow:{button:Akinator:1:akinatorbutton:false}{button:Trivia:1:trivbutton:false}{button:Flood:1:floodbutton:false}};;all;true]

  
  $onlyif[$get[authorID]==$interactionData[author.id];
  {newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyif[$get[customId]==settingsmenu;]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_]
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
  name: "akinatorbutton",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[;{newEmbed:{title:Akinator Settings}{description:this settings contains all the available options for the game Akinator!
  
  **type**#COLON# Changes the game mode of akinator
  **color**#COLON# Changes the embed color of akinator
  **Language**#COLON# Changes the current language of Akinator

  **Current Settings**
  **Type**#COLON# \`$getGuildVar[akin_gametype]\`
  **Color**#COLON# \`$getGuildVar[akin_embedcolor]\`

  This Settings is using [Askers](https#COLON#//github.com/DodoGames7/Askers)'s System for Akinator}{color:Blurple}};{actionRow:{button:type:1:akintype:false}{button:color:1:akincolor:false}{button:Language:1:akinlang:false}};;all;true]

$onlyIf[disabled!=disabled;{newEmbed:{title:Uh Oh!}{description:The API that akinator uses to function no longer works.
            
    We have disabled akinator's settings temporary (including it's dedicated command for starting the game as well). You may be able to still manage other games settings normally, but sorry for inconvenience.
  
    **Note**#COLON# Features or commands that are being disabled are subject to be either fixed or removed. We have no eta on when that will happen for these features/commands.}{color:Blurple}}
    {options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]



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
},{
  name: "akintype",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[;{newEmbed:{title:Akinator Game Type}{description:which Game Type do you prefer to use.

  **Animal**#COLON# Starts akinator on animal-related questions
  **Object**#COLON# Starts akinator on object-related questions
  **Character**#COLON# Starts akinator on Character-related questions

    }};{actionRow:{button:Animal:1:animalopt:false}{button:Object:1:objectopt:false}{button:Character:1:characteropt:false}};;all;true]
  
  `
},{
  name: "animalopt",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[Changed akinator's game type to \`Animal\`.;;;;all;true]
  $setGuildVar[akin_gametype;animal]
  
  $onlyIf[$getGuildVar[akin_gametype]!=animal;
  You have already selected animal mode.
  {options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
  `
},{
  name: "objectopt",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[Changed akinator's game type to \`Object\`.;;;;all;true]
  $setGuildVar[akin_gametype;object]
  
  $onlyIf[$getGuildVar[akin_gametype]!=object;
  You have already selected object mode.
  {options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
  `
},{
  name: "characteropt",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[Changed akinator's game type to \`Character\`.;;;;all;true]
  $setGuildVar[akin_gametype;character]
  
  $onlyIf[$getGuildVar[akin_gametype]!=character;
  You have already selected character mode.
  {options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
  `
},{
    name: "akincolor",
    type: "interaction",
    prototype: "button",
    code: ` $interactionModal[Set an Color for Akinator cmd;akincolormodal;
{actionRow:
    {textInput:Hex code for akinator embed color.:1:colorInput:true:example#COLON# #1F1E33:7:7}
  }]

`
},{
    name: "akincolormodal",
    type: "interaction",
    prototype: "modal",
    code: `$setGuildVar[akin_embedcolor;$textInputValue[colorInput]]
$interactionReply[Successfully changed the embed color of akinator command.;;;;all;true]

$onlyIf[$isValidHex[$textInputValue[colorInput]]==true;
Invalid Hex code, Please make sure that you have set an valid hex code!
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$checkContains[$textInputValue[colorInput];#]==true;
Setting an hex code requires \`#\`, example usage: \`#1F1E33\`.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

`
}]