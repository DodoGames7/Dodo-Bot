module.exports = [{
name: "suggest-set",
info: {
    description: "Setup suggestions.",
    perms: ["`SendMessages`", "`ManageChannels`"]
},
aliases: "suggestion-set",
usage: "suggest-set channel-name/channel ID or <#channel ID>",
code: `
$setGuildVar[suggestionchannel;$findChannel[$message]]
Successfully set <#$findChannel[$message]> as the suggestion channel!
$onlyIf[$hasPermsInChannel[$findChannel[$message];$clientID;sendmessages;viewchannel;addreactions]==true;Hmm. Seems like i don't have permissions there, please ensure that i have the following for this channel:
\`ViewChannel\`
\`SendMessages\`
\`AddReactions\`
]
$onlyIf[$findChannel[$message]!=$getGuildVar[suggestionchannel]; You already have set this channel for Suggestions. Please mention a different one instead.]
$onlyIf[$checkContains[$channelType[$findChannel[$message]];text;announcement]==true;You must set either Text or Announcement channel as a Suggestion channel to use Suggestions feature.]
$onlyIf[$guildChannelExists[$guildID;$findChannel[$message]]==true;Either you have not specified an channel or channel exists but outside of this server. Please mention an valid channel.]
$onlyIf[$message!=;Please set an channel.
Usage: \`$getGuildVar[prefix]$nonEscape[$commandInfo[suggestion-set;usage]]\`]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;suggest-set;$authorID];$dateStamp];1000]]:R>]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
`
},{
    name: "suggest-reset",
    info: {
        description: "Reset current channel used for suggestions.",
        perms: ["`SendMessages`", "`ManageChannels`"]
    },
    code: `$setGuildVar[suggestionchannel;none]
Successfully reset suggestion Channel! Run \`suggest-set\` to set a channel again.
$onlyIf[$getGuildVar[suggestionchannel]!=none;There is no channel set to reset.]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;suggest-reset;$authorID];$dateStamp];1000]]:R>]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]`
},{
    name: "suggest",
    info: {
        description: "Start a suggestion in this server if suggestions are setup.",
        perms: ["`SendMessages`"]
    },
    code: `
$author[Suggestion by $username;$userAvatar]
$title[$splitText[1]]
$description[$splitText[2]]
$footer[Suggestion created since]
$addTimestamp
$color[$getVar[embedcolor]]
$addClientReactions[⬆️;⬇️]
$sendMessage[Successfully sent your suggestion to <#$getGuildVar[suggestionchannel]>!]
$useChannel[$getGuildVar[suggestionchannel]]
$onlyIf[$hasPermsInChannel[$getGuildVar[suggestionchannel];$clientID;sendmessages;viewchannel;addreactions]==true;Hmm. Seems like i don't have the right permissions there.  For server staff members, please ensure that i have the following for the channel <#$getGuildVar[suggestionchannel]>:
\`ViewChannel\`
\`SendMessages\`
\`AddReactions\`
]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[suggestionchannel]]==true;Hmm. the channel set for the Suggestion system seems to be deleted. The system will not function until a new channel is set from \`suggest-set\`.]
$onlyIf[$getGuildVar[suggestionchannel]!=none;Hmm. There is no channel used to send Suggestion currently.
For staff server, please run \`suggest-set\` to set a channel.
]
$onlyIf[$charCount[$splitText[1]]<=160||$charCount[$splitText[2]]<=3950;You can only add up to 160 characters for a title and 3950 characters for a description of the suggestion.]
$onlyIf[$splitText[1]!=||$splitText[2]!=;Hey there! Your usage seems to be wrong. Make sure it's correct

A example of usage should be \`$getGuildVar[prefix]suggest Title/Description\`.]
 $textSplit[$message;/]
$cooldown[5s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;suggest;$authorID];$dateStamp];1000]]:R>]
`
}]
