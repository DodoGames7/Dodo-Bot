module.exports = [{
    name: "suggestion-set",
    aliases: "suggest-set",
    usage: "suggestion-set channel-name/channel ID or <#channel ID>",
    code: `
    $setGuildVar[suggestionchannel;$findChannel[$message]]
    Successfully set <#$findChannel[$message]> as the suggestion channel.
    
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
    $onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]` // took me hours to work on this lol 
    },{
        name: "suggest-reset",
        code: `$setGuildVar[suggestionchannel;none]
    Successfully resetted suggestion Channel. Run \`suggest-set\` to set a channel.
    $onlyIf[$getGuildVar[suggestionchannel]!=none;There is no channel set to reset.]
    $onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]`
    },{
        name: "suggest",
        code: `$author[Suggestion by $username;$userAvatar]
    $description[$message]
    $footer[Suggestion created since]
    $addTimestamp
    $color[Blurple]
    $addClientReactions[🔽;🔼]
    $sendMessage[Successfully sent your suggestion to <#$getGuildVar[suggestionchannel]>!]
    $useChannel[$getGuildVar[suggestionchannel]]

    $onlyIf[$hasPermsInChannel[$getGuildVar[suggestionchannel];$clientID;sendmessages;viewchannel;addreactions]==true;Hmm. Seems like i don't have the right permissions there.  For server staff members, please ensure that i have the following for the channel <#$getGuildVar[suggestionchannel]>:
    \`ViewChannel\`
    \`SendMessages\`
    \`AddReactions\`
    ]

    $onlyIf[$guildChannelExists[$guildID;$getGuildVar[suggestionchannel]]==true;Hmm. the channel set for the Suggestion system seems to be deleted. The system will not function until a new channel is set from \`suggest-set\`.]

    $onlyIf[$getGuildVar[suggestionchannel]!=none;Hmm. There is no channel used to send Suggestion currently.
    For server staff, please run \`suggest-set\` to set a channel.
    ]
    $onlyIf[$charCount[$message]<=3950;Your suggestion cannot be longer than 3950 characters.]
    $onlyIf[$message!=;Please suggest something.]
    `
    }]