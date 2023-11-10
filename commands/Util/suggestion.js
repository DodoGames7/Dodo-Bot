module.exports = [{
    name: "suggestion-set",
    aliases: "suggest-set",
    usage: "suggestion-set channel-name/channel ID or <#channel ID>",
    code: `
    $title[Select an channel]
    $description[Open the select menu to choose an channel to set for suggestion!
    
    Keep in mind that the bot will only display the channels it has access to, so if there's no channel shown there you would like to select, please give the bot access to the channels so it can then display them in the menu.]
    $color[Blurple]
    $addSelectMenu[1;channel;suggestmenu_$authorID;Open The menu.;1;1;false]
    $cooldown[5s; Slow down! Don't spam the command!
    Time left: \`%time%\`]
    $onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
    `
    },{
    name: "suggest-reset",
    code: `$setGuildVar[suggestionchannel;none]
Successfully resetted suggestion Channel. Run \`suggest-set\` to set a channel.
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
$onlyIf[$getGuildVar[suggestionchannel]!=none;There is no channel set to reset.]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]`
},{
    name: "suggest",
    $if: "old",
    code: `
$author[Suggestion by $get[usernamechecker];$userAvatar]
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
For staff server, please run \`suggest-set\` to set a channel.
]
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
$onlyIf[$charCount[$message]<=3950;Your suggestion cannot be longer than 3950 characters.]
$onlyIf[$message!=;Please suggest something.]
$let[usernamechecker;$replaceText[$replaceText[$checkCondition[$charCount[$discriminator[$authorID]]==1];true;$username];false;$userTag]]
`
}]