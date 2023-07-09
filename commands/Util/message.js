module.exports = [{
name: "set-messagedeletelog",
aliases: "set-logdelete",
usage: "set-logdelete channel-name/channel ID or <#channel ID>",
code: `$setGuildVar[msglogdeletedchannel;$findChannel[$message]]
Successfully set <#$findChannel[$message]> as the message deletion log channel.

$onlyIf[$hasPermsInChannel[$findChannel[$message];$clientID;sendmessages]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$findChannel[$message]>
\`SendMessages\`
]
$onlyIf[$findChannel[$message]!=$getGuildVar[msglogdeletedchannel]; You already have set this channel for message deletion logs. Please mention a different one instead.]
$onlyIf[$channelType[$findChannel[$message]]==text;We only support Text channels for now for the message log deletion feature.
Please set an text channel instead.]
$onlyIf[$guildChannelExists[$guildID;$findChannel[$message]]==true;Either you have not specified an channel or channel exists but outside of this server. Please mention an valid channel.]

$onlyIf[$message!=;Please set an channel.
Usage: \`$getGuildVar[prefix]$nonEscape[$commandInfo[set-logdelete;usage]]\`]
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
    usage: "set-logedit channel-name/channel ID or <#channel ID>",
    code: `$setGuildVar[msglogeditchannel;$findChannel[$message]]
Successfully set <#$findChannel[$message]> as the message edit log channel.

$onlyIf[$hasPermsInChannel[$findChannel[$message];$clientID;sendmessages]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$findChannel[$message]>
\`SendMessages\`
]

$onlyIf[$findChannel[$message]!=$getGuildVar[msglogeditchannel]; You already have set this channel for message edit logs. Please mention a different one instead.]
$onlyIf[$channelType[$findChannel[$message]]==text;We only support Text channels for now for the message log deletion feature.
Please set an text channel instead.]

$onlyIf[$guildChannelExists[$guildID;$findChannel[$message]]==true;Either you have not specified an channel or channel exists but outside of this server. Please mention an valid channel.]

$onlyIf[$message!=;Please set an channel.
Usage: \`$getGuildVar[prefix]$nonEscape[$commandInfo[set-logedit;usage]]\`]
$onlyPerms[managemessages;You do not have \`ManageMessages\` permission to use this.]
`

}]