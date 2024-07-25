module.exports = [{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$and[$customID==helpmenu_$authorID;$selectMenuValues==main]==true;]

    $interactionUpdate[
    $title[Main]
    $addField[**Main commands**;
\`about\`, \`settings\`, \`commandinfo\`
]
    $addField[**About the bot**;
        \`ping\`, \`version\`, \`stats\`, \`credits\`, \`invite\`
    ]
    $color[$getGlobalVar[embedcolor]]
    $addActionRow
    $addStringSelectMenu[helpmenu_$authorID;Select a module;false;1;1]
    $addOption[Main;Main module;main;;false]
    $addOption[Entertainment;Entertainment module;fun;;false]
    $addOption[Leveling;Leveling module;leveling;;false]
   $if[$checkContains[$botOwnerID;$authorID]==true;
    $addOption[Developer;Developer module;dev;;false]
]
    $addOption[Utility;Utility module;util;;false]
    ]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$and[$customID==helpmenu_$authorID;$selectMenuValues==fun]==true;]

    $interactionUpdate[
    $title[Entertainment]
    $addField[**Mini Games**;
\`rps\`, \`ttt\`, \`matchpairs\`, \`findemoji\`, \`snake\`, \`c4\`, \`2048\`, \`minesweeper\`, \`trivia\`, \`flood\`, \`wordle\`, \`gtp\`, \`wyr\`
 ]
   $addField[**Text**;
\`howgamer\`, \`whoasked\`, \`say\`, \`reverse\`, \`randomtopic\`, \`joke\`, \`clap\`, \`mock\`, \`yesorno\`, \`lulcat\`, \`fact\`
]
    $addField[**Images**;
\`gun\`, \`jail\`, \`nokia\`, \`ad\`, \`wanted\`, \`comment\`, \`whereiseveryone\`, \`clown\`
]
    $color[$getGlobalVar[embedcolor]]
    $addActionRow
    $addStringSelectMenu[helpmenu_$authorID;Select a module;false;1;1]
    $addOption[Main;Main module;main;;false]
    $addOption[Entertainment;Entertainment module;fun;;false]
    $addOption[Leveling;Leveling module;leveling;;false]
    $if[$checkContains[$botOwnerID;$authorID]==true;
    $addOption[Developer;Developer module;dev;;false]
]
    $addOption[Utility;Utility module;util;;false]
    ]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$and[$customID==helpmenu_$authorID;$selectMenuValues==leveling]==true;]


    $interactionUpdate[
    $title[Leveling]
    $addField[**Commands**;\`leveling\`, \`rank\`, \`leaderboard\`]
    $color[$getGlobalVar[embedcolor]]
    $addActionRow
    $addStringSelectMenu[helpmenu_$authorID;Select a module;false;1;1]
    $addOption[Main;Main module;main;;false]
    $addOption[Entertainment;Entertainment module;fun;;false]
    $addOption[Leveling;Leveling module;leveling;;false]
    $if[$checkContains[$botOwnerID;$authorID]==true;
    $addOption[Developer;Developer module;dev;;false]
]
    $addOption[Utility;Utility module;util;;false]
    ]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$and[$customID==helpmenu_$authorID;$selectMenuValues==util]==true;]


    $interactionUpdate[
    $title[Utility]
    $addField[**Management**;
\`suggest-setup\`, \`setup-logs\`, \`welcomer\`, \`leave\`, \`prefix\`, \`reset-prefix\`
    ]
$addField[**Info**;
\`userinfo\`, \`serverinfo\`]
$addField[**Miscellaneous**;
\`randomcolor\`, \`avatar\`, \`suggest\`]
    $color[$getGlobalVar[embedcolor]]
    $addActionRow
    $addStringSelectMenu[helpmenu_$authorID;Select a module;false;1;1]
    $addOption[Main;Main module;main;;false]
    $addOption[Entertainment;Entertainment module;fun;;false]
    $addOption[Leveling;Leveling module;leveling;;false]
    $if[$checkContains[$botOwnerID;$authorID]==true;
    $addOption[Developer;Developer module;dev;;false]
]
    $addOption[Utility;Utility module;util;;false]
    ]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$and[$customID==helpmenu_$authorID;$selectMenuValues==dev]==true;]


    $interactionUpdate[
    $title[Developer]
    $addField[**Dev stuff**;
\`eval\`, \`exec\`, \`jseval\`, \`readfile\`
    ]
$addField[**Bot Management**;
\`shutdown\`, \`update\`, \`dev-panel\` \`set-customstatus\`]
    $color[$getGlobalVar[embedcolor]]
    $addActionRow
    $addStringSelectMenu[helpmenu_$authorID;Select a module;false;1;1]
    $addOption[Main;Main module;main;;false]
    $addOption[Entertainment;Entertainment module;fun;;false]
    $addOption[Leveling;Leveling module;leveling;;false]
    $if[$checkContains[$botOwnerID;$authorID]==true;
    $addOption[Developer;Developer module;dev;;false]
]
    $addOption[Utility;Utility module;util;;false]
    ]`
}]
