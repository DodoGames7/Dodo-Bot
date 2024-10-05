module.exports = [{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[{newEmbed:{title:Main}{field:**General commands**:\`ping\`, \`commandinfo\`, \`perms\`, \`settings\`}{field:**Bot related**:\`stats\`, \`version\`, \`invite\`, \`credits\`, \`about\`, \`report\`, \`gitbuilds\`}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:helpmenu_$authorID:Select a module:1:1:false:{stringInput:Main:main:Explore commands from Main module:false}{stringInput:Entertainment:entertainment:Explore commands from Entertainment module:false}{stringInput:Leveling:leveling:Explore commands from Leveling module:false}{stringInput:Util:util:Explore commands from Util module:false}$nonEscape[$get[devmodule]]}}]

$let[devmodule;$if[$checkContains[$clientOwnerIDs[| ];$authorID]==true;{stringInput:Developer:dev:Explore commands from Developer module:false};  ]]
  
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
  {ephemeral}
{interaction}
  ]
$onlyIf[$getSelectMenuValues[all]==main;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==helpmenu;]`
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[{newEmbed:{title:Entertainment}{field:**Games**:\`ftf\`, \`rps\`, \`snake\`, \`matchpairs\`, \`2048\`, \`flood\`, \`minesweeper\`, \`trivia\`, \`c4\`, \`findemoji\`, \`coinflip\`, \`gtp\`, \`wordle\`, \`hangman\`}{field:**Text**:\`say\`, \`howgamer\`, \`fact\`, \`yesorno\`, \`whoasked\`, \`mock\`, \`lulcat\`, \`reverse\`, \`randomtopic\`, \`clap\`, \`8ball\`, \`joke\`}{field:**Images**:\`ad\`, \`comment\`, \`clown\`, \`gun\`, \`nokia\`, \`jail\`, \`uncover\`, \`invert\`, \`wanted\`, \`whereiseveryone\`}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:helpmenu_$authorID:Select a module:1:1:false:{stringInput:Main:main:Explore commands from Main module:false}{stringInput:Entertainment:entertainment:Explore commands from Entertainment module:false}{stringInput:Leveling:leveling:Explore commands from Leveling module:false}{stringInput:Util:util:Explore commands from Util module:false}$nonEscape[$get[devmodule]]}}]

$let[devmodule;$if[$checkContains[$clientOwnerIDs[| ];$authorID]==true;{stringInput:Developer:dev:Explore commands from Developer module:false};  ]]
  
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
  {ephemeral}
{interaction}
  ]
$onlyIf[$getSelectMenuValues[all]==entertainment;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==helpmenu;]
`
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[{newEmbed:{title:Util}{field:**Management**:\`prefix\`, \`reset-prefix\`, \`setup-logs\`, \`suggest-set\`, \`suggest-reset\`, \`poll-set\`, \`poll-reset\`, \`welcomer\`, \`leave\` }{field:**Info**:\`serverinfo\`, \`user\`}{field:**Miscellaneous**:\`avatar\`, \`suggest\`, \`randomcolor\`, \`poll\`}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:helpmenu_$authorID:Select a module:1:1:false:{stringInput:Main:main:Explore commands from Main module:false}{stringInput:Entertainment:entertainment:Explore commands from Entertainment module:false}{stringInput:Leveling:leveling:Explore commands from Leveling module:false}{stringInput:Util:util:Explore commands from Util module:false}$nonEscape[$get[devmodule]]}}]

 $let[devmodule;$if[$checkContains[$clientOwnerIDs[| ];$authorID]==true;{stringInput:Developer:dev:Explore commands from Developer module:false};  ]]

  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
 {ephemeral}
{interaction}
  ]
$onlyIf[$getSelectMenuValues[all]==util;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==helpmenu;]
`
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `


$interactionUpdate[{newEmbed:{title:Leveling}{field:**Commands**: \`leveling\`, \`rank\`, \`leaderboard\`}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:helpmenu_$authorID:Select a module:1:1:false:{stringInput:Main:main:Explore commands from Main module:false}{stringInput:Entertainment:entertainment:Explore commands from Entertainment module:false}{stringInput:Leveling:leveling:Explore commands from Leveling module:false}{stringInput:Util:util:Explore commands from Util module:false}$nonEscape[$get[devmodule]]}}]

$let[devmodule;$if[$checkContains[$clientOwnerIDs[| ];$authorID]==true;{stringInput:Developer:dev:Explore commands from Developer module:false};  ]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
{ephemeral}
{interaction}
]
$onlyIf[$getSelectMenuValues[all]==leveling;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==helpmenu;]
`
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `


$interactionUpdate[{newEmbed:{title:Developer}{description:The following commands are currently available for developers#COLON#

\`eval\`, \`jseval\`, \`shutdown\`, \`readfile\`, \`exec\`, \`dev-panel\`, \`setcustomstatus\`, \`update\`}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:helpmenu_$authorID:Select a module:1:1:false:{stringInput:Main:main:Explore commands from Main module:false}{stringInput:Entertainment:entertainment:Explore commands from Entertainment module:false}{stringInput:Leveling:leveling:Explore commands from Leveling module:false}{stringInput:Util:util:Explore commands from Util module:false}$nonEscape[$get[devmodule]]}}]

$let[devmodule;$if[$checkContains[$clientOwnerIDs[| ];$authorID]==true;{stringInput:Developer:dev:Explore commands from Developer module:false};  ]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
{ephemeral}
{interaction}
]
$onlyIf[$getSelectMenuValues[all]==dev;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==helpmenu;]
`
}]
