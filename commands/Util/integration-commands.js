module.exports = [{
name: "set-integration",
info: {
    description: "Setup Integration logs.",
    perms: ["`SendMessages`", "`ManageChannels`"]
},
aliases: ["set-integrationlog", "setintegration", "setintegrationlog", "set-integrationlogs"],
usage: "set-integration channel-name/channel ID or <#channel ID>",
code: `$setGuildVar[Integrationchannel;$get[channeltarget]]
Successfully set <#$get[channeltarget]> as the Integration logs channel!

$onlyIf[$hasPermsInChannel[$get[channeltarget];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$get[channeltarget]>:
\`ViewChannel\`
\`SendMessages\`
]
$onlyIf[$get[channeltarget]!=$getGuildVar[Integrationchannel]; You already have set this channel for Integration logs. Please mention a different one instead.]
$onlyIf[$channelType[$get[channeltarget]]==text;We only support Text channels for now for the Integration logs feature.
Please set an text channel instead.]
$onlyIf[$guildChannelExists[$guildID;$get[channeltarget]]==true;Either you have not specified an channel or channel exists but outside of this server. Please mention an valid channel.]

$let[channeltarget;$findGuildChannel[$message;false]]
$onlyIf[$message!=;Please set an channel.
Usage: \`$getGuildVar[prefix]$nonEscape[$commandInfo[set-integration;usage]]\`]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;set-integration;$authorID];$dateStamp];1000]]:R>]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
`

},{
    name: "reset-integration",
    info: {
        description: "Reset current channel used for Integration logs.",
        perms: ["`SendMessages`", "`ManageChannels`"]
    },
    aliases: ["reset-integrationlog", "resetintegration", "resetintegrationlog", "reset-integrationlogs"],
    code: `$deleteVar[Integrationchannel;$guildID;main]
Successfully reset the Integration logs channel!
$onlyIf[$getGuildVar[Integrationchannel]!=none;There is no channel to reset currently.]
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;reset-integration;$authorID];$dateStamp];1000]]:R>]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this!]
`
}]
