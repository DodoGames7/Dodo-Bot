module.exports = [{
name: "set-msgdeletelog",
info: {
    description: "Setup Message delete logs.",
    perms: ["`SendMessages`", "`ManageChannels`"]
},
aliases: ["set-logdelete", "set-messagedeletelog", "set-msgdeletelogs", "set-messagedeletelogs"],
usage: "set-msgdeletelog channel-name/channel ID or <#channel ID>",
code: `$setGuildVar[msglogdeletedchannel;$get[channeltarget]]
Successfully set <#$get[channeltarget]> as the message delete log channel!

$onlyIf[$hasPermsInChannel[$get[channeltarget];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$get[channeltarget]>:
\`ViewChannel\`
\`SendMessages\`
]
$onlyIf[$get[channeltarget]!=$getGuildVar[msglogdeletedchannel]; You already have set this channel for message logs. Please mention a different one instead.]
$onlyIf[$channelType[$get[channeltarget]]==text;We only support Text channels for now for the message logs feature.
Please set an text channel instead.]
$onlyIf[$guildChannelExists[$guildID;$get[channeltarget]]==true;Either you have not specified an channel or channel exists but outside of this server. Please mention an valid channel.]

$let[channeltarget;$findGuildChannel[$message;false]]
$onlyIf[$message!=;Please set an channel.
Usage: \`$getGuildVar[prefix]$nonEscape[$commandInfo[set-logdelete;usage]]\`]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;set-msgdeletelog;$authorID];$dateStamp];1000]]:R>]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
`

},{
    name: "reset-msgdeletelog",
    info: {
        description: "Reset current channel used for Message delete logs.",
        perms: ["`SendMessages`", "`ManageChannels`"]
    },
    aliases: ["reset-logdelete", "reset-messagedeletelog", "reset-msgdeletelogs", "reset-messagedeletelogs"],
    code: `$deleteVar[msglogdeletedchannel;$guildID;main]
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
    aliases: ["reset-logedit", "reset-messageeditlog", "reset-msgeditlogs", "reset-messageeditlogs"],
    code: `$deleteVar[msglogeditchannel;$guildID;main]
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
    aliases: ["set-logedit", "set-messageeditlog", "set-msgeditlogs", "set-messageeditlogs"],
    usage: "set-msgeditlog channel-name/channel ID or <#channel ID>",
    code: `$setGuildVar[msglogeditchannel;$get[channeltarget]]
Successfully set <#$get[channeltarget]> as the message edit log channel!

$onlyIf[$hasPermsInChannel[$get[channeltarget];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$get[channeltarget]>:
\`ViewChannel\`
\`SendMessages\`
]

$onlyIf[$get[channeltarget]!=$getGuildVar[msglogeditchannel]; You already have set this channel for message edit logs. Please mention a different one instead.]
$onlyIf[$channelType[$get[channeltarget]]==text;We only support Text channels for now for the message edit logs feature.
Please set an text channel instead.]

$onlyIf[$guildChannelExists[$guildID;$get[channeltarget]]==true;Either you have not specified an channel or channel exists but outside of this server. Please mention an valid channel.]

$let[channeltarget;$findGuildChannel[$message;false]]
$onlyIf[$message!=;Please set an channel.
Usage: \`$getGuildVar[prefix]$nonEscape[$commandInfo[set-logedit;usage]]\`]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;set-msgeditlog;$authorID];$dateStamp];1000]]:R>]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
`

}]
