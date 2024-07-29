module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==changes;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$attachment[./handler/assets/redwarning.png;redwarning.png]

$interactionUpdate[
$title[Changes]
$description[
* Add the alias \`ci\` for \`commandinfo\`
* Image links have been replaced in favour of local images
* Added new log type for newly added bots
* Backported Leaderboard page support from v2
]
$if[$getGlobalVar[pre_release]==on;
$footer[Testing is recommended;attachment://redwarning.png]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[return_$authorID;Home;Secondary;🏠]
$addButton[changes_$authorID;Changes;Secondary;;true]
$addButton[fixes_$authorID;Bug Fixes;Secondary]
$addButton[other_$authorID;Other;Secondary]
$addActionRow
$addButton[https://github.com/DodoGames7/Dodo-Bot/releases;Version History;Link;📜]
]`
},{
    type:"interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==fixes;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$attachment[./handler/assets/redwarning.png;redwarning.png]

$interactionUpdate[
$title[Bug Fixes]
$description[
* Fixed Embed color missing in \`setup-logs\` options
* (Source Code) Fixed incorrect file name for \`ad\` command
]
$if[$getGlobalVar[pre_release]==on;
$footer[Testing is recommended;attachment://redwarning.png]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[return_$authorID;Home;Secondary;🏠]
$addButton[changes_$authorID;Changes;Secondary]
$addButton[fixes_$authorID;Bug Fixes;Secondary;;true]
$addButton[other_$authorID;Other;Secondary]
$addActionRow
$addButton[https://github.com/DodoGames7/Dodo-Bot/releases;Version History;Link;📜]
]`
},{
    type:"interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==other;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$attachment[./handler/assets/redwarning.png;redwarning.png]

$interactionUpdate[
$title[Other]
$description[
* Author-only errors are back
* Changed Embed color to \`#745446\` and re-added \`gitbuilds\` command
]
$if[$getGlobalVar[pre_release]==on;
$footer[Testing is recommended;attachment://redwarning.png]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[return_$authorID;Home;Secondary;🏠]
$addButton[changes_$authorID;Changes;Secondary]
$addButton[fixes_$authorID;Bug Fixes;Secondary]
$addButton[other_$authorID;Other;Secondary;;true]
$addActionRow
$addButton[https://github.com/DodoGames7/Dodo-Bot/releases;Version History;Link;📜]
]`
},{
    type:"interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==return;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$attachment[./handler/assets/redwarning.png;redwarning.png]

$interactionUpdate[
$title[Dodo-Bot Version]
    $description[
* **Version**: $getGlobalVar[version]
* **Release type**: $getGlobalVar[releaseType]
* **Build created on**: <t:$trunc[$divide[$getGlobalVar[buildDate];1000]]:f>
    ]
$if[$getGlobalVar[pre_release]==on;
$footer[Testing is recommended;attachment://redwarning.png]
]
    $color[$getGlobalVar[embedcolor]]
    $addActionRow
    $addButton[changes_$authorID;Changes;Secondary]
    $addButton[fixes_$authorID;Bug Fixes;Secondary]
    $addButton[other_$authorID;Other;Secondary]
$addActionRow
$addButton[https://github.com/DodoGames7/Dodo-Bot/releases;Version History;Link;📜]
]`
}]
