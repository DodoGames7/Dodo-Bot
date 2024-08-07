module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==changes;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[
$title[Changes]
$description[
* Re-added \`coinflip\` (albeit with different implementation)
* Added a new command called \`perms\`
* Added the user's URL in \`userinfo\` and \`say\` command
* Include \`AddReactions\` as required perm in \`suggest\` cmd's info
]
$if[$getGlobalVar[pre_release]==on;
$attachment[./handler/assets/redwarning.png;redwarning.png]
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

$interactionUpdate[
$title[Bug Fixes]
$description[
* Fixed wrong cooldown for \`rank\` command
* Fixed Bot Invitation Message being broken
]
$if[$getGlobalVar[pre_release]==on;
$attachment[./handler/assets/redwarning.png;redwarning.png]
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

$interactionUpdate[
$title[Other]
$description[
* The shutdown command's "Yes" message's design has been slightly updated
* \`shutdown\` command's embed title is now simply "Shutdown"
]
$if[$getGlobalVar[pre_release]==on;
$attachment[./handler/assets/redwarning.png;redwarning.png]
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

$interactionUpdate[
$title[Dodo-Bot Version]
    $description[
* **Version**: $getGlobalVar[version]
* **Release type**: $getGlobalVar[releaseType]
* **Build created on**: <t:$trunc[$divide[$getGlobalVar[buildDate];1000]]:f>
    ]
$if[$getGlobalVar[pre_release]==on;
$attachment[./handler/assets/redwarning.png;redwarning.png]
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
