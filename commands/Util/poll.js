module.exports = [{
name: "poll-set",
code: `
$setGuildVar[pollchannel;$findChannel[$message]]
Successfully set <#$findChannel[$message]> as the Poll channel.

$onlyIf[$hasPermsInChannel[$findChannel[$message];$clientID;sendmessages;viewchannel;addreactions]==true;Hmm. Seems like i don't have permissions there, please ensure that i have the following for this channel:
\`ViewChannel\`
\`SendMessages\`
\`AddReactions\`
]
$onlyIf[$findChannel[$message]!=$getGuildVar[pollchannel]; You already have set this channel for Polls. Please mention a different one instead.]
$onlyIf[$checkContains[$channelType[$findChannel[$message]];text;announcement]==true;You must set either Text or Announcement channel as a Poll channel to use Polls feature.]

$onlyIf[$guildChannelExists[$guildID;$findChannel[$message]]==true;
Channel exists but outside of this server. Please try mentioning an channel inside this server.
]
$onlyIf[$message!=;Mention an channel or enter the channel id.]
`
},{
    name: "poll",
    code: `


$author[Poll by $username;$userAvatar]
$description[$message]
$footer[Poll created since]
$addTimestamp
$color[Blurple]
$addClientReactions[🔽;🔼]
$sendMessage[Successfully sent your Poll to <#$getGuildVar[pollchannel]>!]
$useChannel[$getGuildVar[pollchannel]]
$onlyIf[$hasPermsInChannel[$getGuildVar[pollchannel];$clientID;sendmessages;viewchannel;addreactions]==true;Hmm. Seems like i don't have the right permissions there.  For server staff members, please ensure that i have the following for the channel <#$getGuildVar[pollchannel]>:
\`ViewChannel\`
\`SendMessages\`
\`AddReactions\`
]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[pollchannel]]==true;Hmm. The channel set for the Suggestion system seems to be deleted. The system will not function until a new channel is set from \`poll-set\`.]
$onlyIf[$getGuildVar[pollchannel]!=none;Hmm. There is no channel used to send Poll currently.
For staff server, please run \`poll-set\` to set a channel.
]

$onlyIf[$charCount[$message]<=3970;Your Poll cannot be longer than 3970 characters.]
$onlyIf[$message!=;Please start a poll with your message.]`
}]