module.exports = [{
name: "set-messagedeletelog",
aliases: "set-logdelete",
usage: "set-logdelete > open menu > select the channel",
code: `$title[Select an channel]
$description[Open the select menu to choose an channel to set for message delete logging!

Keep in mind that the bot will only display the channels it has access to, so if there's no channel shown there you would like to select, please give the bot access to the channels so it can then display them in the menu.

NOTE: this is currently experimental so it may not work "perfect". As a result, the old permission system check is still being used.]
$color[Blurple]
$addSelectMenu[1;channel;msgdeletelogmenu_$authorID;Open The menu.;1;1;false]
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
$onlyPerms[managemessages;You do not have \`ManageMessages\` permission to use this.]
`

},{
    name: "reset-messagedeletelog",
    aliases: "reset-logdelete",
    code: `$setGuildVar[msglogdeletedchannel;none]
Successfully resetted the message delete log channel!
$onlyIf[$getGuildVar[msglogdeletedchannel]!=none;There is no channel to reset currently.]
$onlyPerms[managemessages;You do not have \`ManageMessages\` permission to use this.]
`
},{
    name: "reset-messageeditlog",
    aliases: "reset-logedit",
    code: `$setGuildVar[msglogeditchannel;none]
Successfully resetted the message edit log channel!
$onlyIf[$getGuildVar[msglogeditchannel]!=none;There is no channel to reset currently.]
$onlyPerms[managemessages;You do not have \`ManageMessages\` permission to use this.]
`
},{
    name: "set-messageeditlog",
    aliases: "set-logedit",
    usage: "set-logedit > open menu > select the channel",
    code: `$title[Select an channel]
$description[Open the select menu to choose an channel to set for message edit logging!

Keep in mind that the bot will only display the channels it has access to, so if there's no channel shown there you would like to select, please give the bot access to the channels so it can then display them in the menu.

NOTE: this is currently experimental so it may not work "perfect". As a result, the old permission system check is still being used.]
$color[Blurple]
$addSelectMenu[1;channel;msgeditlogmenu_$authorID;Open The menu.;1;1;false]
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
$onlyPerms[managemessages;You do not have \`ManageMessages\` permission to use this.]
`

}]
