module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==triviasettings;$selectMenuValues==triviatypeoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


$interactionUpdate[
$title[Type]
$description[This will decide on how Trivia will start. **Multiple** means the game will start with 4 questions. **Single** means the game will start with a "true" or "false" as the only answer options!]
$addField[Current setting(s);$toTitleCase[$getUserVar[trivia_type]]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[triviasettings_$authorID;Select a option;false;1;1]
$addOption[Type;How the Game should start?;triviatypeoption;;false]
$addOption[Difficulty;How hard the Game should be?;triviadifficultyoption;;false]
$addActionRow
$addButton[triviatypetoggle_$authorID;Toggle;Secondary;🔄]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==triviatypetoggle;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getUserVar[trivia_type]==single];true;multiple;false;single]]
$setUserVar[trivia_type;$get[settingdecide]]


$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$toTitleCase[$getUserVar[trivia_type]]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[triviasettings_$authorID;Select a option;false;1;1]
$addOption[Type;How the Game should start?;triviatypeoption;;false]
$addOption[Difficulty;How hard the Game should be?;triviadifficultyoption;;false]
$addActionRow
$addButton[triviatypetoggle_$authorID;Toggle;Secondary;🔄]
]

$interactionFollowUp[The game will now start in $toTitleCase[$getUserVar[trivia_type]]!
$ephemeral]



`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==triviasettings;$selectMenuValues==triviadifficultyoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


$interactionUpdate[
$title[Difficulty]
$description[This option is dedicated to changing current Difficulty for Trivia. Choose a Difficulty-set available below.]
$addField[Current setting(s);$toTitleCase[$getUserVar[trivia_difficulty]]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[triviasettings_$authorID;Select a option;false;1;1]
$addOption[Type;How the Game should start?;triviatypeoption;;false]
$addOption[Difficulty;How hard the Game should be?;triviadifficultyoption;;false]
$addActionRow
$addButton[triviaeasyoption_$authorID;Easy;Secondary]
$addButton[triviamediumoption_$authorID;Medium;Secondary]
$addButton[triviahardoption_$authorID;Hard;Secondary]
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$checkContains[$advancedTextSplit[$customID;_;0];triviaeasyoption;triviamediumoption;triviahardoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[difficultychooser;$advancedReplace[$advancedTextSplit[$customID;_;0];triviaeasyoption;easy;triviamediumoption;medium;triviahardoption;hard]]

$onlyIf[$get[difficultychooser]!=$getUserVar[trivia_difficulty];
$interactionReply[This Difficulty-set is already used 
$ephemeral
]]

$setUserVar[trivia_difficulty;$get[difficultychooser]]


$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$toTitleCase[$getUserVar[trivia_difficulty]]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[triviasettings_$authorID;Select a option;false;1;1]
$addOption[Type;How the Game should start?;triviatypeoption;;false]
$addOption[Difficulty;How hard the Game should be?;triviadifficultyoption;;false]
$addActionRow
$addButton[triviaeasyoption_$authorID;Easy;Secondary]
$addButton[triviamediumoption_$authorID;Medium;Secondary]
$addButton[triviahardoption_$authorID;Hard;Secondary]
]

$interactionFollowUp[
Difficulty has been set to $toTitleCase[$get[difficultychooser]]!
$ephemeral
]
`
}]
