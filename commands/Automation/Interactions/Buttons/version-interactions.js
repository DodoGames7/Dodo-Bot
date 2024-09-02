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
* Added a button to view flags for cmds in \`commandinfo\` command
* Re-added \`<member.position>\` for Leave messages
* Migrate to ephemeral interactions for \`setup-logs\` and other commands like \`welcomer\`
* Cpu Usage in \`stats\` has been improved to be actual percentage and no longer goes crazy
* Announcement channels are now supported in Level up messages
]
$if[$getGlobalVar[pre_release]==on;
$attachment[./handlers/assets/redwarning.png;redwarning.png]
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
* Reduced the possibility of interactions failing
* Mentions can no longer be used as prefix
* Fixed embed mode not being usable in \`say\` command
]
$if[$getGlobalVar[pre_release]==on;
$attachment[./handlers/assets/redwarning.png;redwarning.png]
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
* Internal changes to shorten implementation of Settings of Games
* The command descriptions are now actually moved into embed description in \`commandinfo\`
* (Source Code) Setup option \`EnableConsoleErrors\` is now \`disableConsoleErrors\`
* (Source Code) Bumped \`@tryforge/forge.db\` to version 2.0.5
* (Source Code) output checkers are now simpler just like in non Rebase version
]
$if[$getGlobalVar[pre_release]==on;
$attachment[./handlers/assets/redwarning.png;redwarning.png]
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

$let[releasedatetype;$advancedReplace[$checkCondition[$getGlobalVar[pre_release]==on];true;Build created on;false;Released on]]

$interactionUpdate[
$title[Dodo-Bot Version]
    $description[
* **Version**: $getGlobalVar[version]
* **Release type**: $getGlobalVar[release_type]
* **$get[releasedatetype]**: <t:$trunc[$divide[$getGlobalVar[buildDate];1000]]:f>
    ]
$if[$getGlobalVar[pre_release]==on;
$attachment[./handlers/assets/redwarning.png;redwarning.png]
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
