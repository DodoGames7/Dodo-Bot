module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==floodsettings;$selectMenuValues==flooddifficultyoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


$let[difficulty;$advancedReplace[$getUserVar[flood_difficulty];18;Hard;13;Normal;8;Easy]]

$interactionUpdate[
$title[Difficulty]
$description[This option is dedicated to changing current Difficulty for Flood. Choose a Difficulty-set available below. ]
$addField[Current setting(s);$get[difficulty]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[floodsettings_$authorID;Select a option;false;1;1]
$addOption[Difficulty;How hard the Game should be?;flooddifficultyoption;;false]
$addActionRow
$addButton[floodeasyoption_$authorID;Easy;Secondary]
$addButton[floodmediumoption_$authorID;Medium;Secondary]
$addButton[floodhardoption_$authorID;Hard;Secondary]
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$checkContains[$advancedTextSplit[$customID;_;0];floodeasyoption;floodmediumoption;floodhardoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[difficultychooser;$advancedReplace[$advancedTextSplit[$customID;_;0];floodhardoption;18;floodmediumoption;13;floodeasyoption;8]]

$onlyIf[$get[difficultychooser]!=$getUserVar[flood_difficulty];
$interactionReply[This Difficulty-set is already used 
$ephemeral
]]

$setUserVar[flood_difficulty;$get[difficultychooser]]
$let[difficulty;$advancedReplace[$getUserVar[flood_difficulty];18;Hard;13;Normal;8;Easy]]


$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[difficulty]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[floodsettings_$authorID;Select a option;false;1;1]
$addOption[Difficulty;How hard the Game should be?;flooddifficultyoption;;false]
$addActionRow
$addButton[floodeasyoption_$authorID;Easy;Secondary]
$addButton[floodmediumoption_$authorID;Medium;Secondary]
$addButton[floodhardoption_$authorID;Hard;Secondary]

]

$interactionFollowUp[
Difficulty has been set to $get[difficulty]!
$ephemeral
]
`
}]
