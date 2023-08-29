module.exports = [{
name: "set-banlog",
usage: "set-banlog channel-name/channel ID or <#channel ID>",
code: `$setGuildVar[banneduserschannel;$findChannel[$message]]
Successfully set <#$findChannel[$message]> as the Ban logs channel.
$onlyIf[$hasPermsInChannel[$findChannel[$message];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have permissions there, please ensure that i have the following for this channel:
\`ViewChannel\`
\`SendMessages\`
]
$onlyIf[$findChannel[$message]!=$getGuildVar[banneduserschannel]; You already have set this channel for Ban logs. Please mention a different one instead.]
$onlyIf[$checkContains[$channelType[$findChannel[$message]];text;announcement]==true;You must set either Text or Announcement channel as a Suggestion channel to use Suggestions feature.]
$onlyIf[$guildChannelExists[$guildID;$findChannel[$message]]==true;Either you have not specified an channel or channel exists but outside of this server. Please mention an valid channel.]
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
$onlyIf[$message!=;Please set an channel.
Usage: \`$getGuildVar[prefix]$nonEscape[$commandInfo[set-banlog;usage]]\`]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
`
},{
name: "reset-banlog",
code: `$setGuildVar[banneduserschannel;none]
Successfully resetted the ban log channel!
$onlyIf[$getGuildVar[banneduserschannel]!=none;There is no channel to reset currently.]
$onlyPerms[managemessages;You do not have \`ManageMessages\` permission to use this.]
`
},{
    name: "set-unbanlog",
    usage: "set-unbanlog channel-name/channel ID or <#channel ID>",
    code: `$setGuildVar[unbanneduserschannel;$findChannel[$message]]
    Successfully set <#$findChannel[$message]> as the un-ban logs channel.
    $onlyIf[$hasPermsInChannel[$findChannel[$message];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have permissions there, please ensure that i have the following for this channel:
    \`ViewChannel\`
    \`SendMessages\`
    ]
    $onlyIf[$findChannel[$message]!=$getGuildVar[unbanneduserschannel]; You already have set this channel for un-ban logs. Please mention a different one instead.]
    $onlyIf[$checkContains[$channelType[$findChannel[$message]];text;announcement]==true;You must set either Text or Announcement channel as a Suggestion channel to use Suggestions feature.]
    $onlyIf[$guildChannelExists[$guildID;$findChannel[$message]]==true;Either you have not specified an channel or channel exists but outside of this server. Please mention an valid channel.]
    $cooldown[5s; Slow down! Don't spam the command!
    Time left: \`%time%\`]
    $onlyIf[$message!=;Please set an channel.
    Usage: \`$getGuildVar[prefix]$nonEscape[$commandInfo[set-unbanlog;usage]]\`]
    $onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]`
    },{
    name: "reset-unbanlog",
    code: `$setGuildVar[unbanneduserschannel;none]
    Successfully resetted the un-ban log channel!
    $onlyIf[$getGuildVar[unbanneduserschannel]!=none;There is no channel to reset currently.]
    $onlyPerms[managemessages;You do not have \`ManageMessages\` permission to use this.]`
    }]