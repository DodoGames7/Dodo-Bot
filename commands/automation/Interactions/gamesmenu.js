module.exports = [{
  type: "interaction",
  prototype: "selectMenu",
  code: `
  $interactionReply[which game you want to manage.;;{actionRow:{button:Akinator:1:akinatorbutton:false}{button:Trivia:1:trivbutton:false}{button:Flood:1:floodbutton:false}};;all;true]

  
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
  code: `$interactionReply[;{newEmbed:{title:Trivia Settings}{description:this settings contains all the available options for the game Trivia!
  
  **type**#COLON# changes the type of Trivia (multiple/single answers)
  **difficulty**#COLON# changes the difficulty of Trivia
  
  **Status**
  trivia type#COLON# \`$getGuildVar[trivia_type]\`
  trivia difficulty#COLON# \`$getGuildVar[trivia_difficulty]\`
  
  }{color:Blurple}};{actionRow:{button:type:1:triviatype:false}{button:difficulty:1:triviamode:false}};;all;true]


`
},
{
  name: "akinatorbutton",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[;{newEmbed:{title:Akinator Settings}{description:this settings contains all the available options for the game Akinator!
  
  **type**#COLON# changes the game mode of akinator
  **color**#COLON# changes the embed color of akinator
  **Language**#COLON# changes the current language of Akinator

  **Status**
  
  this system is using [Askers](https#COLON#//github.com/DodoGames7/Askers)'s Engine}{color:Blurple}};{actionRow:{button:type:1:akintype:false}{button:color:1:akincolor:false}{button:Language:1:akinlang:false}};;all;true]


`
},{
  name: "triviatype",
  type: "interaction",
  $if: "old",
  prototype: "button",
  code: `$if[$getGuildVar[trivia_type]==multiple]
  $setGuildVar[trivia_type;single;$guildID]
  $interactionReply[toggled the option \`single\` for Trivia!;;;;all;true]
  $elseif[$getGuildVar[trivia_type]==single]
  $setGuildVar[trivia_type;multiple;$guildID]
  $interactionReply[toggled the option \`multiple\` for Trivia!;;;;all;true]
  $endelseif
  $endif`

},{
  name: "floodbutton",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[;{newEmbed:{title:Flood Settings}{description:this settings contains all the available options for the game Flood!

  **difficulty**#COLON# changes the difficulty of Flood

  **Status**
  difficulty#COLON# $get[type]
    }};{actionRow:{button:difficulty:1:floodmode:false}};;all;true]

  $let[type;$replaceText[$replaceText[$replaceText[$getGuildVar[flood_difficulty];18;\`Hard\`];13;\`Normal\`];8;\`Easy\`]]
  `
},{
  name: "floodmode",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[;{newEmbed:{title:Flood difficulty}{description:which difficulty do you prefer to use.

  **Easy**#COLON# less blocks
  **Normal**#COLON# start with blocks in the normal average size
  **Hard**#COLON# large amount of blocks

    }};{actionRow:{button:Easy:1:floodopteasy:false}{button:Normal:1:floodoptnormal:false}{button:Hard:1:floodopthard:false}};;all;true]
  
  `
},{
  name: "floodopteasy",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[set Flood's difficulty to \`Easy\`.;;;;all;true]
  $setGuildVar[flood_difficulty;8]

  $onlyIf[$getGuildVar[flood_difficulty]!=8;
  you have already selected easy mode.
  {options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
  `
},{
  name: "floodoptnormal",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[set Flood's difficulty to \`Normal\`.;;;;all;true]
  $setGuildVar[flood_difficulty;13]

  $onlyIf[$getGuildVar[flood_difficulty]!=13;
  you have already selected normal mode.
  {options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
  `
},{
  name: "floodopthard",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[set Flood's difficulty to \`Hard\`.;;;;all;true]
  $setGuildVar[flood_difficulty;18]

  $onlyIf[$getGuildVar[flood_difficulty]!=18;
  you have already selected hard mode.
  {options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
  `
},{
  name: "triviamode",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[;{newEmbed:{title:Trivia difficulty}{description:which difficulty do you prefer to use.

  **Easy**#COLON# gives you easy questions to answer!
  **Medium**#COLON# gives you normal questions that requires some of your iq to answer!
  **Hard**#COLON# gives you hard questions to answer! (for people with high iq at least)

    }};{actionRow:{button:Easy:1:triviaopteasy:false}{button:Medium:1:triviaoptmedium:false}{button:Hard:1:triviaopthard:false}};;all;true]
  
  `
},{
  name: "triviaopteasy",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[set Trivia's difficulty to \`Easy\`.;;;;all;true]
  $setGuildVar[trivia_difficulty;easy]

  $onlyIf[$getGuildVar[trivia_difficulty]!=easy;
  you have already selected easy mode.
  {options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
  `
},{
  name: "triviaoptmedium",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[set Trivia's difficulty to \`Medium\`.;;;;all;true]
  $setGuildVar[trivia_difficulty;medium]

  $onlyIf[$getGuildVar[trivia_difficulty]!=medium;
  you have already selected medium mode.
  {options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
  `
},{
  name: "triviaopthard",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[set Trivia's difficulty to \`Hard\`.;;;;all;true]
  $setGuildVar[trivia_difficulty;hard]

  $onlyIf[$getGuildVar[trivia_difficulty]!=hard;
  you have already selected hard mode.
  {options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
  `
},{
  name: "akintype",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[;{newEmbed:{title:Akinator Game Type}{description:which Game Type do you prefer to use.

  **Animal**#COLON# starts akinator on animal-related questions
  **Object**#COLON# starts akinator on object-related questions
  **Character**#COLON# starts akinator on Character-related questions

    }};{actionRow:{button:Animal:1:animalopt:false}{button:Object:1:objectopt:false}{button:Character:1:characteropt:false}};;all;true]
  
  `
}]