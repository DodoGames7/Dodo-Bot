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
$onlyClientPerms[viewauditlog;I'm missing the permission \`ViewAuditLog\`! Please make sure to grant me this permission in order to setup ban logs!

This is so to return the name of the responsible moderator who banned an member of your server! This permission does not apply in case you have enabled \`Anonymous Staff\` mode.]
$onlyIf[$getGlobalUserVar[betacommands]==true;You're not a beta tester to use this command currently!
To use this command, please opt in for the beta commands by running \`beta\` command.]`
},{
name: "reset-banlog",
code: `$setGuildVar[banneduserschannel;none]
Successfully resetted the ban log channel!
$onlyIf[$getGuildVar[banneduserschannel]!=none;There is no channel to reset currently.]
$onlyPerms[managemessages;You do not have \`ManageMessages\` permission to use this.]
$onlyIf[$getGlobalUserVar[betacommands]==true;You're not a beta tester to use this command currently!
To use this command, please opt in for the beta commands by running \`beta\` command.]`
},{
name: "set-unbanlog",
code: `$onlyIf[a!=a;]`
},{
name: "reset-unbanlog",
code: `$onlyIf[a!=a;]`
}]