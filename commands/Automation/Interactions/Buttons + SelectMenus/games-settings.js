module.exports = [{
  type: "interaction",
  prototype: "selectMenu",
  code: `
  $interactionUpdate[Which game do you want to manage?{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Trivia:2:trivbutton_$authorID:false}{button:Flood:2:floodbutton_$authorID:false}}]


  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  

$onlyIf[$getSelectMenuValues[all]==gamesmenu;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==settingsmenu;]`
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[{newEmbed:{title:Trivia Settings}{description:This settings contains all the available options for the game Trivia!

  Select the options which you want to customise.

  **Current Setting(s)**
  Trivia Type#COLON# \`$getGuildVar[trivia_type]\`
  Trivia Difficulty#COLON# \`$getGuildVar[trivia_difficulty]\`

  }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:triviasettings_$authorID:Select an option to view information about.:1:1:false:{stringInput:Trivia type:triviatype:How should the game start questions?:false}{stringInput:Difficulty:triviamode:How easy the game can be?:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}}]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==trivbutton;]


`
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[{newEmbed:{title:Trivia type}{description:
    This is the type of questions the game starts with. There're two types#COLON#
* **Single**
* **Multiple**

    Choosing single will cause the game to start with only answer for each question, otherwise, multiple will start the game with multiple answers selection for each question.

**Current Setting(s)**
**Trivia type#COLON#** \`$toLocaleUpperCase[$getGuildVar[trivia_type]]\`
  }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:triviasettings_$authorID:Select an option to view information about.:1:1:false:{stringInput:Trivia type:triviatype:How should the game start questions?:false}{stringInput:Difficulty:triviamode:How easy the game can be?:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Toggle:2:triviatypetoggle_$authorID:false}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]


$onlyIf[$getSelectMenuValues[all]==triviatype;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==triviasettings;]
`
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[{newEmbed:{title:Trivia Difficulty}{description:
    This option is dedicated to how hard/easy should the game be. There're 3 options#COLON#

* **Easy**
* **Medium**
* **Hard**

  Easy starts the game with questions easy to answer, Medium will start the game with somewhat normal but with medium knowledge required, Hard will start the game in questions that're hard to answer (unless you're smart).

**Current Setting(s)**
**Difficulty#COLON#** \`$toLocaleUpperCase[$getGuildVar[trivia_difficulty]]\` 
  }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:triviasettings_$authorID:Select an option to view information about.:1:1:false:{stringInput:Trivia type:triviatype:How should the game start questions?:false}{stringInput:Difficulty:triviamode:How easy the game can be?:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Easy:2:triviaopteasy_$authorID:false}{button:Medium:2:triviaoptmedium_$authorID:false}{button:Hard:2:triviaopthard_$authorID:false}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  

$onlyIf[$getSelectMenuValues[all]==triviamode;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==triviasettings;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionFollowUp[$get[resultmessage];true]
$interactionUpdate[{newEmbed:{title:Trivia type}{description:
    This is the type of questions the game starts with. There're two types#COLON#
* **Single**
* **Multiple**

    Choosing single will cause the game to start with only answer for each question, otherwise, multiple will start the game with multiple answers selection for each question.

**Current Setting(s)**
**Trivia type#COLON#** \`$toLocaleUpperCase[$getGuildVar[trivia_type]]\`
  }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:triviasettings_$authorID:Select an option to view information about.:1:1:false:{stringInput:Trivia type:triviatype:How should the game start questions?:false}{stringInput:Difficulty:triviamode:How easy the game can be?:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Toggle:2:triviatypetoggle_$authorID:false}}]


$let[resultmessage;$advancedReplaceText[$checkCondition[$getGuildVar[trivia_type]==single];true;From now on, Trivia will start with only one answer for each question!;false;From now on, Trivia will start with multiple answers for each question!]]
$setGuildVar[trivia_type;$get[newtoggledsetting]]
$let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGuildVar[trivia_type]==single];true;multiple;false;single]]


 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==triviatypetoggle;]

`

},{
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[{newEmbed:{title:Flood Settings}{description:This Settings contains all the available options for the game Flood!

  Select the options which you want to customise.

  **Current Setting(s)**
  **Difficulty#COLON#** \`$get[type]\`
    }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:floodsettings_$authorID:Select an option to view information about.:1:1:false:{stringInput:Difficulty:floodmode:How easy the game can be?:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}};;all;true]

  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==floodbutton;]


  $let[type;$advancedReplaceText[$getGuildVar[flood_difficulty];18;\`Hard\`;13;\`Normal\`;8;\`Easy\`]]
  `
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[{newEmbed:{title:Flood difficulty}{description:Which difficulty do you prefer to use?

* **Easy**#COLON# Starts with Less blocks
* **Normal**#COLON# Starts with Medium sized blocks
* **Hard**#COLON# Starts with Large amount of blocks

**Current Setting(s)**
**Difficulty#COLON#** \`$get[floodmode]\`
    }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:floodsettings_$authorID:Select an option to view information about.:1:1:false:{stringInput:Difficulty:floodmode:How easy the game can be?:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Easy:2:floodopteasy_$authorID:false}{button:Normal:2:floodoptnormal_$authorID:false}{button:Hard:2:floodopthard_$authorID:false}}]

$let[floodmode;$advancedReplaceText[$getGuildVar[flood_difficulty];18;Hard;13;Normal;8;Easy]]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  
$onlyIf[$getSelectMenuValues[all]==floodmode;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==floodsettings;]

  `
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionFollowUp[Set Flood's difficulty to \`Easy\`!;true]
$interactionUpdate[{newEmbed:{title:Flood difficulty}{description:Which difficulty do you prefer to use?

* **Easy**#COLON# Starts with Less blocks
* **Normal**#COLON# Starts with Medium sized blocks
* **Hard**#COLON# Starts with Large amount of blocks

**Current Setting(s)**
**Difficulty#COLON#** \`$get[floodmode]\`
    }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:floodsettings_$authorID:Select an option to view information about.:1:1:false:{stringInput:Difficulty:floodmode:How easy the game can be?:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Easy:2:floodopteasy_$authorID:false}{button:Normal:2:floodoptnormal_$authorID:false}{button:Hard:2:floodopthard_$authorID:false}}]

$let[floodmode;$advancedReplaceText[$getGuildVar[flood_difficulty];18;Hard;13;Normal;8;Easy]]
  $setGuildVar[flood_difficulty;8]

  $onlyIf[$getGuildVar[flood_difficulty]!=8;
  You have already selected easy mode!
  {ephemeral}
{interaction}
]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==floodopteasy;]



  `
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionFollowUp[Set Flood's difficulty to \`Normal\`!;true]
$interactionUpdate[{newEmbed:{title:Flood difficulty}{description:Which difficulty do you prefer to use?

* **Easy**#COLON# Starts with Less blocks
* **Normal**#COLON# Starts with Medium sized blocks
* **Hard**#COLON# Starts with Large amount of blocks

**Current Setting(s)**
**Difficulty#COLON#** \`$get[floodmode]\`
    }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:floodsettings_$authorID:Select an option to view information about.:1:1:false:{stringInput:Difficulty:floodmode:How easy the game can be?:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Easy:2:floodopteasy_$authorID:false}{button:Normal:2:floodoptnormal_$authorID:false}{button:Hard:2:floodopthard_$authorID:false}}]

$let[floodmode;$advancedReplaceText[$getGuildVar[flood_difficulty];18;Hard;13;Normal;8;Easy]]
  $setGuildVar[flood_difficulty;13]

  $onlyIf[$getGuildVar[flood_difficulty]!=13;
  You have already selected normal mode!
  {ephemeral}
{interaction}
]


 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==floodoptnormal;]

  `
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionFollowUp[Set Flood's difficulty to \`Hard\`!;true]
$interactionUpdate[{newEmbed:{title:Flood difficulty}{description:Which difficulty do you prefer to use?

* **Easy**#COLON# Starts with Less blocks
* **Normal**#COLON# Starts with Medium sized blocks
* **Hard**#COLON# Starts with Large amount of blocks

**Current Setting(s)**
**Difficulty#COLON#** \`$get[floodmode]\`
    }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:floodsettings_$authorID:Select an option to view information about.:1:1:false:{stringInput:Difficulty:floodmode:How easy the game can be?:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Easy:2:floodopteasy_$authorID:false}{button:Normal:2:floodoptnormal_$authorID:false}{button:Hard:2:floodopthard_$authorID:false}}]

$let[floodmode;$advancedReplaceText[$getGuildVar[flood_difficulty];18;Hard;13;Normal;8;Easy]]
  $setGuildVar[flood_difficulty;18]

  $onlyIf[$getGuildVar[flood_difficulty]!=18;
  You have already selected hard mode!
  {ephemeral}
{interaction}
]


 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==floodopthard;]

  `
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionFollowUp[Set Trivia's difficulty to \`Easy\`!;true]
$interactionUpdate[{newEmbed:{title:Trivia Difficulty}{description:
    This option is dedicated to how hard/easy should the game be. There're 3 options#COLON#

* **Easy**
* **Medium**
* **Hard**

  Easy starts the game with questions easy to answer, Medium will start the game with somewhat normal but with medium knowledge required, Hard will start the game in questions that're hard to answer (unless you're smart).

**Current Setting(s)**
**Difficulty#COLON#** \`$toLocaleUpperCase[$getGuildVar[trivia_difficulty]]\` 
  }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:triviasettings_$authorID:Select an option to view information about.:1:1:false:{stringInput:Trivia type:triviatype:How should the game start questions?:false}{stringInput:Difficulty:triviamode:How easy the game can be?:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Easy:2:triviaopteasy_$authorID:false}{button:Medium:2:triviaoptmedium_$authorID:false}{button:Hard:2:triviaopthard_$authorID:false}}]
  $setGuildVar[trivia_difficulty;easy]

  $onlyIf[$getGuildVar[trivia_difficulty]!=easy;
  You have already selected easy mode!
 {ephemeral}
{interaction}
]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==triviaopteasy;]

  `
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionFollowUp[Set Trivia's difficulty to \`Medium\`!;true]
$interactionUpdate[{newEmbed:{title:Trivia Difficulty}{description:
    This option is dedicated to how hard/easy should the game be. There're 3 options#COLON#

* **Easy**
* **Medium**
* **Hard**

  Easy starts the game with questions easy to answer, Medium will start the game with somewhat normal but with medium knowledge required, Hard will start the game in questions that're hard to answer (unless you're smart).

**Current Setting(s)**
**Difficulty#COLON#** \`$toLocaleUpperCase[$getGuildVar[trivia_difficulty]]\` 
  }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:triviasettings_$authorID:Select an option to view information about.:1:1:false:{stringInput:Trivia type:triviatype:How should the game start questions?:false}{stringInput:Difficulty:triviamode:How easy the game can be?:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Easy:2:triviaopteasy_$authorID:false}{button:Medium:2:triviaoptmedium_$authorID:false}{button:Hard:2:triviaopthard_$authorID:false}}]
  $setGuildVar[trivia_difficulty;medium]

  $onlyIf[$getGuildVar[trivia_difficulty]!=medium;
  You have already selected medium mode!
 {ephemeral}
{interaction}
]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==triviaoptmedium;]


  `
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionFollowUp[Set Trivia's difficulty to \`Hard\`!;true]
$interactionUpdate[{newEmbed:{title:Trivia Difficulty}{description:
    This option is dedicated to how hard/easy should the game be. There're 3 options#COLON#

* **Easy**
* **Medium**
* **Hard**

  Easy starts the game with questions easy to answer, Medium will start the game with somewhat normal but with medium knowledge required, Hard will start the game in questions that're hard to answer (unless you're smart).

**Current Setting(s)**
**Difficulty#COLON#** \`$toLocaleUpperCase[$getGuildVar[trivia_difficulty]]\` 
  }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:triviasettings_$authorID:Select an option to view information about.:1:1:false:{stringInput:Trivia type:triviatype:How should the game start questions?:false}{stringInput:Difficulty:triviamode:How easy the game can be?:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Easy:2:triviaopteasy_$authorID:false}{button:Medium:2:triviaoptmedium_$authorID:false}{button:Hard:2:triviaopthard_$authorID:false}}]
  $setGuildVar[trivia_difficulty;hard]

  $onlyIf[$getGuildVar[trivia_difficulty]!=hard;
  You have already selected hard mode!
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==triviaopthard;]


  `
}]
