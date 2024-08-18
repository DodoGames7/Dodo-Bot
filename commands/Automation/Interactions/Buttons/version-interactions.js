module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==versionchanges;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[
$title[Changes]
$description[
* Progress bar has been decreased in size in \`rank\` command
* Lots of changes for the final version
* You can now exclude certain roles/channels from xp in Leveling
* "Reset on Leave" option in \`leveling\` command has been moved to a select menu
* Bot permissions can now be viewed in Integration logs
]
$if[$getGlobalVar[pre_release]==on;
$attachment[./handler/assets/redwarning.png;redwarning.png]
$footer[Testing is recommended;attachment://redwarning.png]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[versionhomebutton_$authorID;Home;Secondary;🏠]
$addButton[versionchanges_$authorID;Changes;Secondary;;true]
$addButton[versionbugfixes_$authorID;Bug Fixes;Secondary]
$addButton[versionother_$authorID;Other;Secondary]
$addActionRow
$addButton[https://github.com/DodoGames7/Dodo-Bot/releases;Version History;Link;📜]
]`
},{
    type:"interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==versionbugfixes;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[
$title[Bug Fixes]
$description[
* Fixed bugs that rendered the previous build unusable
* Fixed Message Delete Logs breaking
* Fixed spelling one of the errors in \`commandinfo\` command
* Anonymous no longer hides bots who took action
* Fixed Leveling message setting being unusable
]
$if[$getGlobalVar[pre_release]==on;
$attachment[./handler/assets/redwarning.png;redwarning.png]
$footer[Testing is recommended;attachment://redwarning.png]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[versionhomebutton_$authorID;Home;Secondary;🏠]
$addButton[versionchanges_$authorID;Changes;Secondary]
$addButton[versionbugfixes_$authorID;Bug Fixes;Secondary;;true]
$addButton[versionother_$authorID;Other;Secondary]
$addActionRow
$addButton[https://github.com/DodoGames7/Dodo-Bot/releases;Version History;Link;📜]
]`
},{
    type:"interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==versionother;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[
$title[Other]
$description[
* Updated the search icon in \`commandinfo\` command
* Server name can now be clicked in \`serverinfo\` command
* Version has been reset to \`1.2.0\` to avoid confusion from the non-Rebase version
]
$if[$getGlobalVar[pre_release]==on;
$attachment[./handler/assets/redwarning.png;redwarning.png]
$footer[Testing is recommended;attachment://redwarning.png]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[versionhomebutton_$authorID;Home;Secondary;🏠]
$addButton[versionchanges_$authorID;Changes;Secondary]
$addButton[versionbugfixes_$authorID;Bug Fixes;Secondary]
$addButton[versionother_$authorID;Other;Secondary;;true]
$addActionRow
$addButton[https://github.com/DodoGames7/Dodo-Bot/releases;Version History;Link;📜]
]`
},{
    type:"interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==versionhomebutton;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[releasedatetype;$replace[$replace[$checkCondition[$getGlobalVar[pre_release]==on];true;Build created on];false;Released on]]

$interactionUpdate[
$title[Dodo-Bot Version]
    $description[
* **Version**: $getGlobalVar[version]
* **Release type**: $getGlobalVar[release_type]
* **$get[releasedatetype]**: <t:$trunc[$divide[$getGlobalVar[buildDate];1000]]:f>
    ]
$if[$getGlobalVar[pre_release]==on;
$attachment[./handler/assets/redwarning.png;redwarning.png]
$footer[Testing is recommended;attachment://redwarning.png]
]
    $color[$getGlobalVar[embedcolor]]
    $addActionRow
    $addButton[versionchanges_$authorID;Changes;Secondary]
    $addButton[versionbugfixes_$authorID;Bug Fixes;Secondary]
    $addButton[versionother_$authorID;Other;Secondary]
$addActionRow
$addButton[https://github.com/DodoGames7/Dodo-Bot/releases;Version History;Link;📜]
]`
}]
