module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `$onlyIf[$customID==changes_$authorID;]


$interactionUpdate[
$title[Changes]
$description[
* First release, nothing much
* You can now reset channel across all feature's settings
* You can now actually preview messages of Welcomer, Leave and Leveling without first enabling them
* Embed color is now dark aqua and more...
]
$if[$getGlobalVar[pre_release]==on;
$footer[Testing is recommended;https://us-east-1.tixte.net/uploads/dodogames.wants.solutions/redwarning.png]
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
$onlyIf[$customID==fixes_$authorID;]

$interactionUpdate[
$title[Bug Fixes]
$description[
*There're no changes in this category currently.*
]
$if[$getGlobalVar[pre_release]==on;
$footer[Testing is recommended;https://us-east-1.tixte.net/uploads/dodogames.wants.solutions/redwarning.png]
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
$onlyIf[$customID==other_$authorID;]

$interactionUpdate[
$title[Other]
$description[
* Sync some changes from Dodo-Bot v2
]
$if[$getGlobalVar[pre_release]==on;
$footer[Testing is recommended;https://us-east-1.tixte.net/uploads/dodogames.wants.solutions/redwarning.png]
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
$onlyIf[$customID==return_$authorID;]

$interactionUpdate[
$title[Dodo-Bot Version]
    $description[
* **Version**: $getGlobalVar[version]
* **Release type**: $getGlobalVar[releaseType]
* **Build created on**: <t:$trunc[$divide[$getGlobalVar[buildDate];1000]]:f>
    ]
$if[$getGlobalVar[pre_release]==on;
$footer[Testing is recommended;https://us-east-1.tixte.net/uploads/dodogames.wants.solutions/redwarning.png]
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
