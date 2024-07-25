module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `$onlyIf[$and[$customID==floodsettings_$authorID;$selectMenuValues==flooddifficultyoption]==true;]

$let[difficulty;$replace[$replace[$replace[$getUserVar[flood_difficulty];18;Hard];13;Normal];8;Easy]]

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
code: `$onlyIf[$customID==floodeasyoption_$authorID;]

$onlyIf[$getUserVar[flood_difficulty]!=8;
$interactionReply[This Difficulty-set is already used 
$ephemeral
]]

$setUserVar[flood_difficulty;8]
$let[difficulty;$replace[$replace[$replace[$getUserVar[flood_difficulty];18;Hard];13;Normal];8;Easy]]


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
Difficulty has been set to Easy!
$ephemeral
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `$onlyIf[$customID==floodmediumoption_$authorID;]

$onlyIf[$getUserVar[flood_difficulty]!=13;
$interactionReply[This Difficulty-set is already used 
$ephemeral
]]

$setUserVar[flood_difficulty;13]
$let[difficulty;$replace[$replace[$replace[$getUserVar[flood_difficulty];18;Hard];13;Normal];8;Easy]]


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
Difficulty has been set to Medium!
$ephemeral
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `$onlyIf[$customID==floodhardoption_$authorID;]

$onlyIf[$getUserVar[flood_difficulty]!=18;
$interactionReply[This Difficulty-set is already used 
$ephemeral
]]

$setUserVar[flood_difficulty;18]
$let[difficulty;$replace[$replace[$replace[$getUserVar[flood_difficulty];18;Hard];13;Normal];8;Easy]]


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
Difficulty has been set to Hard!
$ephemeral
]
`
}]