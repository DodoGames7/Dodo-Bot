module.exports = [{
name: "set-banlog",
info: {
    description: "Setup Ban logs.",
    perms: ["`SendMessages`", "`ManageChannels`"],
    usage: "set-banlog channel-name/channel ID or <#channel ID>"
},
aliases: "set-banlogs",
code: `$setGuildVar[banneduserschannel;$get[channeltarget]]
Successfully set <#$get[channeltarget]> as the Ban logs channel!
$onlyIf[$hasPermsInChannel[$get[channeltarget];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have permissions there, please ensure that i have the following for this channel:
\`ViewChannel\`
\`SendMessages\`
]
$onlyIf[$get[channeltarget]!=$getGuildVar[banneduserschannel]; You already have set this channel for Ban logs. Please mention a different one instead.]
$onlyIf[$checkContains[$channelType[$get[channeltarget]];text;announcement]==true;You must set either Text or Announcement channel as a Suggestion channel to use Suggestions feature.]
$onlyIf[$guildChannelExists[$guildID;$get[channeltarget]]==true;Either you have not specified an channel or channel exists but outside of this server. Please mention an valid channel.]

$let[channeltarget;$findGuildChannel[$message;false]]
$onlyIf[$message!=;Please set an channel.
Usage: \`$getGuildVar[prefix]$nonEscape[$commandInfo[set-banlog;info.usage]]\`]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;set-banlog;$authorID];$dateStamp];1000]]:R>]
`
},{
name: "reset-banlog",
info: {
    description: "Reset current channel used for Ban logs.",
    perms: ["`SendMessages`", "`ManageChannels`"]
},
aliases: "reset-banlogs",
code: `$deleteVar[banneduserschannel;$guildID;main]
Successfully reset the ban log channel!
$onlyIf[$getGuildVar[banneduserschannel]!=none;There is no channel to reset currently.]
$cooldown[2s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;reset-banlog;$authorID];$dateStamp];1000]]:R>]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
`
},{
    name: "set-unbanlog",
    info: {
        description: "Setup un-ban logs.",
        perms: ["`SendMessages`", "`ManageChannels`"],
        usage: "set-unbanlog channel-name/channel ID or <#channel ID>",
    },
    aliases: "set-unbanlogs",
    code: `$setGuildVar[unbanneduserschannel;$get[channeltarget]]
    Successfully set <#$get[channeltarget]> as the un-ban logs channel!
    $onlyIf[$hasPermsInChannel[$get[channeltarget];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have permissions there, please ensure that i have the following for this channel:
    \`ViewChannel\`
    \`SendMessages\`
    ]
    $onlyIf[$get[channeltarget]!=$getGuildVar[unbanneduserschannel]; You already have set this channel for un-ban logs. Please mention a different one instead.]
    $onlyIf[$checkContains[$channelType[$get[channeltarget]];text;announcement]==true;You must set either Text or Announcement channel as a Suggestion channel to use Suggestions feature.]
    $onlyIf[$guildChannelExists[$guildID;$get[channeltarget]]==true;Either you have not specified an channel or channel exists but outside of this server. Please mention an valid channel.]

    $let[channeltarget;$findGuildChannel[$message;false]]
    $onlyIf[$message!=;Please set an channel.
    Usage: \`$getGuildVar[prefix]$nonEscape[$commandInfo[set-unbanlog;info.usage]]\`]
    $onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
    $cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;set-unbanlog;$authorID];$dateStamp];1000]]:R>]`
    },{
    name: "reset-unbanlog",
    info: {
        description: "Reset current channel used for un-ban logs.",
        perms: ["`SendMessages`", "`ManageChannels`"]
    },
    aliases: "reset-unbanlogs",
    code: `$deleteVar[unbanneduserschannel;$guildID;main]
    Successfully reset the un-ban log channel!
    $onlyIf[$getGuildVar[unbanneduserschannel]!=none;There is no channel to reset currently.]
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;reset-unbanlog;$authorID];$dateStamp];1000]]:R>]
    $onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]`
    }]
