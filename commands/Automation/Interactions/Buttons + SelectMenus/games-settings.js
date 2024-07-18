module.exports = [{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[{newEmbed:{title:Trivia type}{description:
    This is the type of questions the game starts with. There're two types#COLON#
* **Single**
* **Multiple**

    Choosing single will cause the game to start with only "True" or "False" answer for each question, otherwise, multiple will start the game with multiple answers selection for each question.

**Current Setting(s)**
**Type#COLON#** \`$toLocaleUpperCase[$getGlobalUserVar[trivia_type]]\`
  }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:triviasettings_$authorID:Select a option:1:1:false:{stringInput:Trivia type:triviatype:How the game should start?:false}{stringInput:Difficulty:triviadifficulty:How hard the game will be?:false}}}{actionRow:{button:Toggle:2:triviatypetoggle_$authorID:false}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]


$onlyIf[$getSelectMenuValues[all]==triviatype;]
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

    Choosing single will cause the game to start with only "True" or "False" answer for each question, otherwise, multiple will start the game with multiple answers selection for each question.

**Current Setting(s)**
**Type#COLON#** \`$toLocaleUpperCase[$getGlobalUserVar[trivia_type]]\`
  }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:triviasettings_$authorID:Select a option:1:1:false:{stringInput:Trivia type:triviatype:How the game should start?:false}{stringInput:Difficulty:triviadifficulty:How hard the game will be?:false}}}{actionRow:{button:Toggle:2:triviatypetoggle_$authorID:false}}]


$let[resultmessage;$advancedReplaceText[$checkCondition[$getGlobalUserVar[trivia_type]==single];true;From now on, Trivia will start with only "True" or "False" answer for each question!;false;From now on, Trivia will start with multiple answers for each question!]]
$setGlobalUserVar[trivia_type;$get[newtoggledsetting]]
$let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGlobalUserVar[trivia_type]==single];true;multiple;false;single]]


 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==triviatypetoggle;]

`

},{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[{newEmbed:{title:Trivia Difficulty}{description:
    This option is dedicated to how hard/easy should the game be. There're 3 options#COLON#

* **Easy**
* **Medium**
* **Hard**

  Easy starts the game with questions easy to answer. Medium will start the game with normal but with medium knowledge required-type questions. Hard will start the game in questions that're hard to answer (unless you're smart)!

**Current Setting(s)**
**Difficulty#COLON#** \`$toLocaleUpperCase[$getGlobalUserVar[trivia_difficulty]]\`
  }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:triviasettings_$authorID:Select a option:1:1:false:{stringInput:Trivia type:triviatype:How the game should start?:false}{stringInput:Difficulty:triviadifficulty:How hard the game will be?:false}}}{actionRow:{button:Easy:2:triviaopteasy_$authorID:false}{button:Medium:2:triviaoptmedium_$authorID:false}{button:Hard:2:triviaopthard_$authorID:false}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  

$onlyIf[$getSelectMenuValues[all]==triviadifficulty;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==triviasettings;]
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

  Easy starts the game with questions easy to answer. Medium will start the game with normal but with medium knowledge required-type questions. Hard will start the game in questions that're hard to answer (unless you're smart)!

**Current Setting(s)**
**Difficulty#COLON#** \`$toLocaleUpperCase[$getGlobalUserVar[trivia_difficulty]]\`
  }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:triviasettings_$authorID:Select a option:1:1:false:{stringInput:Trivia type:triviatype:How the game should start?:false}{stringInput:Difficulty:triviadifficulty:How hard the game will be?:false}}}{actionRow:{button:Easy:2:triviaopteasy_$authorID:false}{button:Medium:2:triviaoptmedium_$authorID:false}{button:Hard:2:triviaopthard_$authorID:false}}]
  $setGlobalUserVar[trivia_difficulty;easy]

  $onlyIf[$getGlobalUserVar[trivia_difficulty]!=easy;
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

  Easy starts the game with questions easy to answer. Medium will start the game with normal but with medium knowledge required-type questions. Hard will start the game in questions that're hard to answer (unless you're smart)!

**Current Setting(s)**
**Difficulty#COLON#** \`$toLocaleUpperCase[$getGlobalUserVar[trivia_difficulty]]\`
  }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:triviasettings_$authorID:Select a option:1:1:false:{stringInput:Trivia type:triviatype:How the game should start?:false}{stringInput:Difficulty:triviadifficulty:How hard the game will be?:false}}}{actionRow:{button:Easy:2:triviaopteasy_$authorID:false}{button:Medium:2:triviaoptmedium_$authorID:false}{button:Hard:2:triviaopthard_$authorID:false}}]
  $setGlobalUserVar[trivia_difficulty;medium]

  $onlyIf[$getGlobalUserVar[trivia_difficulty]!=medium;
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

  Easy starts the game with questions easy to answer. Medium will start the game with normal but with medium knowledge required-type questions. Hard will start the game in questions that're hard to answer (unless you're smart)!

**Current Setting(s)**
**Difficulty#COLON#** \`$toLocaleUpperCase[$getGlobalUserVar[trivia_difficulty]]\`
  }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:triviasettings_$authorID:Select a option:1:1:false:{stringInput:Trivia type:triviatype:How the game should start?:false}{stringInput:Difficulty:triviadifficulty:How hard the game will be?:false}}}{actionRow:{button:Easy:2:triviaopteasy_$authorID:false}{button:Medium:2:triviaoptmedium_$authorID:false}{button:Hard:2:triviaopthard_$authorID:false}}]
  $setGlobalUserVar[trivia_difficulty;hard]

  $onlyIf[$getGlobalUserVar[trivia_difficulty]!=hard;
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
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[{newEmbed:{title:Flood difficulty}{description:Which difficulty do you prefer to use?

* **Easy**#COLON# Starts with Less blocks
* **Normal**#COLON# Starts with Medium sized blocks
* **Hard**#COLON# Starts with Large amount of blocks

**Current Setting(s)**
**Difficulty#COLON#** \`$get[floodmode]\`
    }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:floodsettings_$authorID:Select a option:1:1:false:{stringInput:Difficulty:flooddifficulty:How hard the game will be?:false}}}{actionRow:{button:Easy:2:floodopteasy_$authorID:false}{button:Normal:2:floodoptnormal_$authorID:false}{button:Hard:2:floodopthard_$authorID:false}}]

$let[floodmode;$advancedReplaceText[$getGlobalUserVar[flood_difficulty];18;Hard;13;Normal;8;Easy]]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  
$onlyIf[$getSelectMenuValues[all]==flooddifficulty;]
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
    }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:floodsettings_$authorID:Select a option:1:1:false:{stringInput:Difficulty:flooddifficulty:How hard the game will be?:false}}}{actionRow:{button:Easy:2:floodopteasy_$authorID:false}{button:Normal:2:floodoptnormal_$authorID:false}{button:Hard:2:floodopthard_$authorID:false}}]

$let[floodmode;$advancedReplaceText[$getGlobalUserVar[flood_difficulty];18;Hard;13;Normal;8;Easy]]
  $setGlobalUserVar[flood_difficulty;8]

  $onlyIf[$getGlobalUserVar[flood_difficulty]!=8;
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
    }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:floodsettings_$authorID:Select a option:1:1:false:{stringInput:Difficulty:flooddifficulty:How hard the game will be?:false}}}{actionRow:{button:Easy:2:floodopteasy_$authorID:false}{button:Normal:2:floodoptnormal_$authorID:false}{button:Hard:2:floodopthard_$authorID:false}}]

$let[floodmode;$advancedReplaceText[$getGlobalUserVar[flood_difficulty];18;Hard;13;Normal;8;Easy]]
  $setGlobalUserVar[flood_difficulty;13]

  $onlyIf[$getGlobalUserVar[flood_difficulty]!=13;
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
    }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:floodsettings_$authorID:Select a option:1:1:false:{stringInput:Difficulty:flooddifficulty:How hard the game will be?:false}}}{actionRow:{button:Easy:2:floodopteasy_$authorID:false}{button:Normal:2:floodoptnormal_$authorID:false}{button:Hard:2:floodopthard_$authorID:false}}]

$let[floodmode;$advancedReplaceText[$getGlobalUserVar[flood_difficulty];18;Hard;13;Normal;8;Easy]]
  $setGlobalUserVar[flood_difficulty;18]

  $onlyIf[$getGlobalUserVar[flood_difficulty]!=18;
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
}]
