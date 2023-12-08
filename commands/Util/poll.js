module.exports = [{
name: "poll-set",
code: `
$title[Select an channel]
    $description[Open the select menu to choose an channel to set for poll!

    Keep in mind that the bot will only display the channels it has access to, so if there's no channel shown there you would like to select, please give the bot access to the channels so it can then display them in the menu.

    NOTE: this is currently experimental so it may not work "perfect". As a result, the old permission system check is still being used.]
    $color[Blurple]
    $addSelectMenu[1;channel;pollmenu_$authorID;Open The menu.;1;1;false]
    $cooldown[5s; Slow down! Don't spam the command!
    Time left: \`%time%\`]
    $onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
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
$onlyIf[$hasPermsInChannel[$getGuildVar[pollchannel];$clientID;sendmessages;viewchannel;addreactions]==true;Hmm. Seems like i don't have the right permissions there. For server staff members, please ensure that i have the following for the channel <#$getGuildVar[pollchannel]>:
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
