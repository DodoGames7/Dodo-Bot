module.exports = [{
name: "poll-set",
code: `
$setGuildVar[pollchannel;$findChannel[$message]]
Successfully set <#$findChannel[$message]> as the Poll channel!

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
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;poll-set;$authorID];$dateStamp];1000]]:R>]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
`
},{
    name: "poll",
    code: `


$author[Poll by $username;$userAvatar]
$description[$splitText[1]

1️⃣: **$splitText[2]**

2️⃣: **$splitText[3]**
]
$footer[Poll started since]
$addTimestamp
$color[$getVar[embedcolor]]
$addClientReactions[1️⃣;2️⃣]
$sendMessage[Successfully sent your Poll to <#$getGuildVar[pollchannel]>!]
$useChannel[$getGuildVar[pollchannel]]
$onlyIf[$hasPermsInChannel[$getGuildVar[pollchannel];$clientID;sendmessages;viewchannel;addreactions]==true;Hmm. Seems like i don't have the right permissions there. For server staff members, please ensure that i have the following for the channel <#$getGuildVar[pollchannel]>:
\`ViewChannel\`
\`SendMessages\`
\`AddReactions\`
]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[pollchannel]]==true;Hmm. The channel set for the Poll system seems to be deleted. The system will not function until a new channel is set through the \`poll-set\` command.]
$onlyIf[$getGuildVar[pollchannel]!=none;Hmm. There is no channel used to start a new Poll currently.
For staff server, please run \`poll-set\` to set a channel.
]
$onlyIf[$charCount[$splitText[1]]<=3570||$charCount[$splitText[2]]<=200||$charCount[$splitText[3]]<=200;Your Poll content cannot be longer than 3570 characters. Choice 1 and Choice 2 cannot also be longer than 200 characters]
$onlyIf[$splitText[1]!=||$splitText[2]!=||$splitText[3]!=;Hey there! Your usage seems to be incorrect.

A example of a usage should be \`$getGuildVar[prefix]poll Content/Choice 1/Choice 2\`]
$textSplit[$message;/]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;poll;$authorID];$dateStamp];1000]]:R>]
$onlyPerms[managemessages;You need to have \`ManageMessages\` permission to proceed.]
`
}]
