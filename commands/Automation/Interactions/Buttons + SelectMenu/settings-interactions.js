module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `$onlyIf[$and[$customID==settingsselectlist_$authorID;$selectMenuValues==autoreplypingoption]==true;]

$let[autoreplyping;$replace[$replace[$getGuildVar[autoreplyping];off;Disabled];on;Enabled]]

$interactionUpdate[
$title[AutoReply ping]
$description[This option let's the bot respond by just pinging. Doing so will return the current prefix set in this server.

It is recommended to disable this if it's used for spamming.]
$addField[Current setting(s);$get[autoreplyping]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[settingsselectlist_$authorID;Select a category;false;1;1]
$addOption[AutoReply ping;Automatically respond to ping!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in Message Logs;includebotsoption;;false]
$addOption[Display Message Deleter;Show who deleted a msg in Message Delete logs!;includemessagedeleteroption;;false]
$addOption[Anonymous;Hide moderator name in Ban logs;anonymousoption;;false]
$addActionRow
$addButton[autoreplypingtoggle_$authorID;Toggle;Secondary;🔄]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `$onlyIf[$customID==autoreplypingtoggle_$authorID;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$replace[$replace[$checkCondition[$getGuildVar[autoreplyping]==on];true;off];false;on]]
$setGuildVar[autoreplyping;$get[settingdecide];$guildID]
$let[autoreplyping;$replace[$replace[$getGuildVar[autoreplyping];off;Disabled];on;Enabled]]

$let[statements;$replace[$replace[$checkCondition[$getGuildVar[autoreplyping]==on];true;Successfully enabled AutoReply ping!];false;Successfully disabled AutoReply ping!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[autoreplyping]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[settingsselectlist_$authorID;Select a category;false;1;1]
$addOption[AutoReply ping;Automatically respond to ping!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in Message Logs;includebotsoption;;false]
$addOption[Display Message Deleter;Show who deleted a msg in Message Delete logs!;includemessagedeleteroption;;false]
$addOption[Anonymous;Hide moderator name in Ban logs;anonymousoption;;false]
$addActionRow
$addButton[autoreplypingtoggle_$authorID;Toggle;Secondary;🔄]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `$onlyIf[$and[$customID==settingsselectlist_$authorID;$selectMenuValues==includemessagedeleteroption]==true;]

$let[includemessagedeleter;$replace[$replace[$getGuildVar[includemessagedeleter];off;Disabled];on;Enabled]]

$interactionUpdate[
$title[Display Message Deleter]
$description[This option let's you show the user who deleted a msg in Message Delete logs. By default, it is disabled but you can choose to enable it!

This option requires \`ViewAuditLog\` permission in order to show the message deleter.]
$addField[Current setting(s);$get[includemessagedeleter]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[settingsselectlist_$authorID;Select a category;false;1;1]
$addOption[AutoReply ping;Automatically respond to ping!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in Message Logs;includebotsoption;;false]
$addOption[Display Message Deleter;Show who deleted a msg in Message Delete logs!;includemessagedeleteroption;;false]
$addOption[Anonymous;Hide moderator name in Ban logs;anonymousoption;;false]
$addActionRow
$addButton[includemessagedeletertoggle_$authorID;Toggle;Secondary;🔄]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `$onlyIf[$customID==includemessagedeletertoggle_$authorID;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$replace[$replace[$checkCondition[$getGuildVar[includemessagedeleter]==on];true;off];false;on]]
$setGuildVar[includemessagedeleter;$get[settingdecide];$guildID]
$let[includemessagedeleter;$replace[$replace[$getGuildVar[includemessagedeleter];off;Disabled];on;Enabled]]

$let[statements;$replace[$replace[$checkCondition[$getGuildVar[includemessagedeleter]==on];true;Message Deleter will now be shown!];false;Message Deleter will no longer be shown!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[includemessagedeleter]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[settingsselectlist_$authorID;Select a category;false;1;1]
$addOption[AutoReply ping;Automatically respond to ping!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in Message Logs;includebotsoption;;false]
$addOption[Display Message Deleter;Show who deleted a msg in Message Delete logs!;includemessagedeleteroption;;false]
$addOption[Anonymous;Hide moderator name in Ban logs;anonymousoption;;false]
$addActionRow
$addButton[includemessagedeletertoggle_$authorID;Toggle;Secondary;🔄]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `$onlyIf[$and[$customID==settingsselectlist_$authorID;$selectMenuValues==anonymousoption]==true;]

$let[anonymous;$replace[$replace[$getGuildVar[anonymous];off;Disabled];on;Enabled]]

$interactionUpdate[
$title[Anonymous]
$description[This option allows you to hide the Moderator name in Ban logs! This can be useful to avoid harassment for server staff.

Due to security reasons, this option is only exclusive to Ban logs and will NOT work in Un-Ban logs!]
$addField[Current setting(s);$get[anonymous]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[settingsselectlist_$authorID;Select a category;false;1;1]
$addOption[AutoReply ping;Automatically respond to ping!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in Message Logs;includebotsoption;;false]
$addOption[Display Message Deleter;Show who deleted a msg in Message Delete logs!;includemessagedeleteroption;;false]
$addOption[Anonymous;Hide moderator name in Ban logs;anonymousoption;;false]
$addActionRow
$addButton[anonymoustoggle_$authorID;Toggle;Secondary;🔄]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `$onlyIf[$customID==anonymoustoggle_$authorID;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$replace[$replace[$checkCondition[$getGuildVar[anonymous]==on];true;off];false;on]]
$setGuildVar[anonymous;$get[settingdecide];$guildID]
$let[anonymous;$replace[$replace[$getGuildVar[anonymous];off;Disabled];on;Enabled]]

$let[statements;$replace[$replace[$checkCondition[$getGuildVar[anonymous]==on];true;Moderator names will now be hidden!];false;Moderator names will no longer be shown!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[anonymous]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[settingsselectlist_$authorID;Select a category;false;1;1]
$addOption[AutoReply ping;Automatically respond to ping!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in Message Logs;includebotsoption;;false]
$addOption[Display Message Deleter;Show who deleted a msg in Message Delete logs!;includemessagedeleteroption;;false]
$addOption[Anonymous;Hide moderator name in Ban logs;anonymousoption;;false]
$addActionRow
$addButton[anonymoustoggle_$authorID;Toggle;Secondary;🔄]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `$onlyIf[$and[$customID==settingsselectlist_$authorID;$selectMenuValues==includebotsoption]==true;]

$let[includebots;$replace[$replace[$getGuildVar[includebots];off;Disabled];on;Enabled]]

$interactionUpdate[
$title[Include Bots]
$description[This option allows you to decide on whether or not bots will be included in Message Logs.

Note that disabling this will cause "Display Message Deleter" to be ignored for bots.]
$addField[Current setting(s);$get[includebots]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[settingsselectlist_$authorID;Select a category;false;1;1]
$addOption[AutoReply ping;Automatically respond to ping!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in Message Logs;includebotsoption;;false]
$addOption[Display Message Deleter;Show who deleted a msg in Message Delete logs!;includemessagedeleteroption;;false]
$addOption[Anonymous;Hide moderator name in Ban logs;anonymousoption;;false]
$addActionRow
$addButton[includebotstoggle_$authorID;Toggle;Secondary;🔄]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `$onlyIf[$customID==includebotstoggle_$authorID;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$replace[$replace[$checkCondition[$getGuildVar[includebots]==on];true;off];false;on]]
$setGuildVar[includebots;$get[settingdecide];$guildID]
$let[includebots;$replace[$replace[$getGuildVar[includebots];off;Disabled];on;Enabled]]

$let[statements;$replace[$replace[$checkCondition[$getGuildVar[includebots]==on];true;Bots will now be included in Message Logs!];false;Bots will no longer be included in Message Logs!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[includebots]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[settingsselectlist_$authorID;Select a category;false;1;1]
$addOption[AutoReply ping;Automatically respond to ping!;autoreplypingoption;;false]
$addOption[Include Bots;Whether or not to include bots in Message Logs;includebotsoption;;false]
$addOption[Display Message Deleter;Show who deleted a msg in Message Delete logs!;includemessagedeleteroption;;false]
$addOption[Anonymous;Hide moderator name in Ban logs;anonymousoption;;false]
$addActionRow
$addButton[includebotstoggle_$authorID;Toggle;Secondary;🔄]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]

`
}]