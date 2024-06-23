module.exports = [{
name: "set-msgdeletelog",
info: {
    description: "Setup Message delete logs.",
    perms: ["`SendMessages`", "`ManageChannels`"]
},
aliases: ["set-logdelete", "set-messagedeletelog"],
usage: "set-msgdeletelog channel-name/channel ID or <#channel ID>",
code: `$setGuildVar[msglogdeletedchannel;$findChannel[$message]]
Successfully set <#$findChannel[$message]> as the message delete logging channel!

$onlyIf[$hasPermsInChannel[$findChannel[$message];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$findChannel[$message]>:
\`ViewChannel\`
\`SendMessages\`
]
$onlyIf[$findChannel[$message]!=$getGuildVar[msglogdeletedchannel]; You already have set this channel for message deletion logs. Please mention a different one instead.]
$onlyIf[$channelType[$findChannel[$message]]==text;We only support Text channels for now for the message log deletion feature.
Please set an text channel instead.]
$onlyIf[$guildChannelExists[$guildID;$findChannel[$message]]==true;Either you have not specified an channel or channel exists but outside of this server. Please mention an valid channel.]

$onlyIf[$message!=;Please set an channel.
Usage: \`$getGuildVar[prefix]$nonEscape[$commandInfo[set-logdelete;usage]]\`]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;set-msgdeletelog;$authorID];$dateStamp];1000]]:R>]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
`

},{
    name: "reset-msgdeletelog",
    info: {
        description: "Reset current channel used for Message delete logs.",
        perms: ["`SendMessages`", "`ManageChannels`"]
    },
    aliases: ["reset-logdelete", "reset-messagedeletelog"],
    code: `$setGuildVar[msglogdeletedchannel;none]
Successfully reset the message delete log channel!
$onlyIf[$getGuildVar[msglogdeletedchannel]!=none;There is no channel to reset currently.]
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;reset-msgdeletelog;$authorID];$dateStamp];1000]]:R>]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this!]
`
},{
    name: "reset-msgeditlog",
    info: {
        description: "Reset current channel used for Message edit logs.",
        perms: ["`SendMessages`", "`ManageChannels`"]
    },
    aliases: ["reset-logedit", "reset-messageeditlog"],
    code: `$setGuildVar[msglogeditchannel;none]
Successfully reset the message edit log channel!
$onlyIf[$getGuildVar[msglogeditchannel]!=none;There is no channel to reset currently.]
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;reset-msgeditlog;$authorID];$dateStamp];1000]]:R>]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
`
},{
    name: "set-msgeditlog",
    info: {
        description: "Setup Message edit logs.",
        perms: ["`SendMessages`", "`ManageChannels`"]
    },
    aliases: ["set-logedit", "set-messageeditlog"],
    usage: "set-msgeditlog channel-name/channel ID or <#channel ID>",
    code: `$setGuildVar[msglogeditchannel;$findChannel[$message]]
Successfully set <#$findChannel[$message]> as the message edit logging channel!

$onlyIf[$hasPermsInChannel[$findChannel[$message];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$findChannel[$message]>:
\`ViewChannel\`
\`SendMessages\`
]

$onlyIf[$findChannel[$message]!=$getGuildVar[msglogeditchannel]; You already have set this channel for message edit logs. Please mention a different one instead.]
$onlyIf[$channelType[$findChannel[$message]]==text;We only support Text channels for now for the message log deletion feature.
Please set an text channel instead.]

$onlyIf[$guildChannelExists[$guildID;$findChannel[$message]]==true;Either you have not specified an channel or channel exists but outside of this server. Please mention an valid channel.]

$onlyIf[$message!=;Please set an channel.
Usage: \`$getGuildVar[prefix]$nonEscape[$commandInfo[set-logedit;usage]]\`]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;set-msgeditlog;$authorID];$dateStamp];1000]]:R>]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
`

}]
