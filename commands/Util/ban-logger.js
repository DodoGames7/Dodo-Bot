module.exports = [{
name: "set-banlog",
usage: "set-banlog > open menu > select the channel",
code: `
$title[Select an channel]
$description[Open the select menu to choose an channel to set for ban logging!

Keep in mind that the bot will only display the channels it has access to, so if there's no channel shown there you would like to select, please give the bot access to the channels so it can then display them in the menu.

NOTE: this is currently experimental so it may not work "perfect". As a result, the old permission system check is still being used.]
$color[Blurple]
$addSelectMenu[1;channel;banlogmenu_$authorID;Open The menu.;1;1;false]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]

`
},{
name: "reset-banlog",
code: `$setGuildVar[banneduserschannel;none]
Successfully reset the ban log channel!
$onlyIf[$getGuildVar[banneduserschannel]!=none;There is no channel to reset currently.]
$onlyPerms[managemessages;You do not have \`ManageMessages\` permission to use this.]
`
},{
    name: "set-unbanlog",
    usage: "set-unbanlog > open menu > select the channel",
    code: `

    $title[Select an channel]
$description[Open the select menu to choose an channel to set for unban logging!

Keep in mind that the bot will only display the channels it has access to, so if there's no channel shown there you would like to select, please give the bot access to the channels so it can then display them in the menu.

NOTE: this is currently experimental so it may not work "perfect". As a result, the old permission system check is still being used.]
$color[Blurple]
$addSelectMenu[1;channel;unbanlogmenu_$authorID;Open The menu.;1;1;false]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
    `
    },{
    name: "reset-unbanlog",
    code: `$setGuildVar[unbanneduserschannel;none]
    Successfully reset the un-ban log channel!
    $onlyIf[$getGuildVar[unbanneduserschannel]!=none;There is no channel to reset currently.]
    $onlyPerms[managemessages;You do not have \`ManageMessages\` permission to use this.]`
    }]
