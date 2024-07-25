module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `$onlyIf[$customID==leavehome_$authorID;]

$let[leavesystem;$replace[$replace[$getGuildVar[leavesystem];off;Disabled];on;Enabled]]

$interactionUpdate[$title[Leave]
$description[Leave just like Welcomer is a way to setup an channel where the bot says goodbye to members leaving your server!

To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the "Settings" button.

]
$addField[Current setting(s);$get[leavesystem]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[leavetoggle_$authorID;Toggle;Secondary;🔄]
$addButton[leavesettings_$authorID;Settings;Danger]
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `$onlyIf[$customID==leavetoggle_$authorID;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$replace[$replace[$checkCondition[$getGuildVar[leavesystem]==on];true;off];false;on]]
$setGuildVar[leavesystem;$get[settingdecide];$guildID]
$let[leavesystem;$replace[$replace[$getGuildVar[leavesystem];off;Disabled];on;Enabled]]

$let[statements;$replace[$replace[$checkCondition[$getGuildVar[leavesystem]==on];true;Successfully enabled Leave!];false;Successfully disabled Leave!]]

$interactionUpdate[$title[$get[title]]
$description[$get[description]
]
$addField[$get[fieldname];$get[leavesystem]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[leavetoggle_$authorID;Toggle;Secondary;🔄]
$addButton[leavesettings_$authorID;Settings;Danger]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `$onlyIf[$customID==leavesettings_$authorID;]

$let[currentchannel;$replace[$replace[$checkCondition[$getGuildVar[leavechannel;$guildID]!=];true;<#$getGuildVar[leavechannel;$guildID]> (\`$getGuildVar[leavechannel;$guildID]\`)];false;No channel set]]

$interactionUpdate[
$title[Leave Settings]
$description[Welcome to Leave settings! Select a option to change.
]
$addField[Current setting(s);
* **Leave channel:** $get[currentchannel]
* **Message type:** \`$toTitleCase[$getGuildVar[leavetype]]\`
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[leavehome_$authorID;Home;Secondary;🏠]
$addButton[leavechannelsetup_$authorID;Channel;Secondary]
$addButton[leavemessagecategory_$authorID;Message;Secondary]
$addButton[leaveplaceholderlist_$authorID;Placeholders;Secondary]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `$onlyIf[$customID==leavechannelsetup_$authorID;]

$let[currentchannel;$replace[$replace[$checkCondition[$getGuildVar[leavechannel;$guildID]!=];true;<#$getGuildVar[leavechannel;$guildID]> (\`$getGuildVar[leavechannel;$guildID]\`)];false;No channel set]]

$interactionUpdate[$title[Channel Setup]
$description[Choose a channel for Leave messages to be sent in. Use the select menu below for the channel to use!

**Tip:** Unable to find the channel you're looking for? Try typing the channel name right into the select menu instead!]
$addField[Current channel;$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelType[GuildText]
$addChannelSelectMenu[leavechannelselectmenusetup_$authorID;Select a channel to use;1;1;false]
$addActionRow
$addButton[leavesettings_$authorID;Go Back;Secondary;↩️]
$addButton[leavechannelreset_$authorID;Reset;Secondary]
]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `$onlyIf[$customID==leavechannelselectmenusetup_$authorID;]

$onlyIf[$channelType[$selectMenuValues]==GuildText;
$interactionReply[Channel must be a Text channel.
$ephemeral
]]

$onlyIf[$getGuildVar[leavechannel;$guildID]!=$selectMenuValues;
$interactionReply[This channel is already used for Leave messages. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$botID;ViewChannel;SendMessages]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for Leave, i must have the following permissions for the selected channel:
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGuildVar[leavechannel;$selectMenuValues;$guildID]

$let[currentchannel;$replace[$replace[$checkCondition[$getGuildVar[leavechannel;$guildID]!=];true;<#$getGuildVar[leavechannel;$guildID]> (\`$getGuildVar[leavechannel;$guildID]\`)];false;No channel set]]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]


$interactionUpdate[$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelType[GuildText]
$addChannelSelectMenu[leavechannelselectmenusetup_$authorID;Select a channel to use;1;1;false]
$addActionRow
$addButton[leavesettings_$authorID;Go Back;Secondary;↩️]
$addButton[leavechannelreset_$authorID;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for Leave messages!
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `$onlyIf[$customID==leavechannelreset_$authorID;]

$onlyIf[$getGuildVar[leavechannel;$guildID]!=;$interactionReply[
There's no channel set currently to reset.
$ephemeral]]

$deleteGuildVar[leavechannel;$guildID]

$let[currentchannel;$replace[$replace[$checkCondition[$getGuildVar[leavechannel;$guildID]!=];true;<#$getGuildVar[leavechannel;$guildID]> (\`$getGuildVar[leavechannel;$guildID]\`)];false;No channel set]]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelType[GuildText]
$addChannelSelectMenu[leavechannelselectmenusetup_$authorID;Select a channel to use;1;1;false]
$addActionRow
$addButton[leavesettings_$authorID;Go Back;Secondary;↩️]
$addButton[leavechannelreset_$authorID;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `$onlyIf[$customID==leavemessagecategory_$authorID;]

$interactionUpdate[
$title[Message]
$description[Welcome to options under the \`Message\` category! Select any option to modify]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[leavesettings_$authorID;Go Back;Secondary;↩️]
$addButton[leavemessagesetup_$authorID;Set Message;Secondary]
$addButton[leavemessagepreview_$authorID;Preview Message;Secondary]
$addButton[leavemessagetypesetting_$authorID;Message Type;Secondary]

]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `$onlyIf[$customID==leavemessagesetup_$authorID;]
$showModal
$if[$getGuildVar[leavetype]==embed;
$modal[leaveembedmodalsetup;Set Message]
$addTextInput[messageInput;Message to use;Paragraph;true;Goodbye <member.username>!;$getGuildVar[leavemessage];0;3750]
$addTextInput[embedcolorInput;Embed color to use;Short;true;#1F8B4C;$getGuildVar[leavemessageembedcolor];0;7]
;
$modal[leavetextmodalsetup;Set Message]
$addTextInput[messageInput;Message to use;Paragraph;true;Goodbye <member.username>!;$getGuildVar[leavemessage];0;3750]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["modal"],
    code: `$onlyIf[$customID==leavetextmodalsetup;]
$setGuildVar[leavemessage;$input[messageInput]]
$interactionReply[Successfully set the Leave message!
$ephemeral]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["modal"],
    code: `$onlyIf[$customID==leaveembedmodalsetup;]

$onlyIf[$startsWith[$input[embedcolorInput];#]==true;$interactionReply[Your hex code must start with \`#\`.
$ephemeral]
]

$onlyIf[$isValidHex[$input[embedcolorInput]]==true;$interactionReply[The hex code seems to be invalid. Please double check and try again.
$ephemeral]
]

$setGuildVar[leavemessageembedcolor;$input[embedcolorInput]]
$setGuildVar[leavemessage;$input[messageInput]]
$interactionReply[Successfully set the Leave message!
$ephemeral]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `$onlyIf[$customID==leavemessagepreview_$authorID;]


$let[servericon;$replace[$replace[$checkCondition[$guildIcon==];true;$userAvatar[$botID]];false;$serverIcon]]

$let[content;$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$getGuildVar[leavemessage];<member.username>;$username];<member.mention>;<@$authorID>];<member.id>;$authorID];<owner.username>;$guildOwnerID];<owner.id>;$guildOwnerID];<server.name>;$serverName];<server.id>;$guildID];<server.createdAt>;<t:$trunc[$divide[$guildCreatedAt;1000]]:f>];<server.totalMembers>;$guildMemberCount];<member.Displayname>;$userDisplayname]]



$interactionReply[$if[$or[$charCount[$getGuildVar[leavemessage]]>=2000;$getGuildVar[leavetype]==embed]==true;
    $author[Member left!;$get[servericon]]
    $description[$get[content]]
    $thumbnail[$userAvatar]
    $color[$getGuildVar[leavemessageembedcolor]]
    ;$get[content]]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `$onlyIf[$customID==leavemessagetypesetting_$authorID;]

$interactionUpdate[
$title[Message Type]
$description[This setting is dedicated to embed mode for Leave message! Enabling this will display a simple embed for Leave message otherwise just text for the same message. To switch between the two types, press the "Toggle" button below!

**Note:** If the Leave message is over 2000 characters then embed mode will be forced enabled by default due to Discord's limits.]
$addField[Current type;
\`$toTitleCase[$getGuildVar[leavetype]]\`]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[leavemessagecategory_$authorID;Go Back;Secondary;↩️]
$addButton[leavemessagetypetoggle_$authorID;Toggle;Secondary;🔄]
]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `$onlyIf[$customID==leavemessagetypetoggle_$authorID;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$replace[$replace[$checkCondition[$getGuildVar[leavetype]==text];true;embed];false;text]]
$setGuildVar[leavetype;$get[settingdecide];$guildID]

$let[statements;$replace[$replace[$checkCondition[$getGuildVar[leavetype]==embed];true;Successfully enabled embed mode!];false;Successfully enabled text mode!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
\`$toTitleCase[$getGuildVar[leavetype]]\`]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[leavemessagecategory_$authorID;Go Back;Secondary;↩️]
$addButton[leavemessagetypetoggle_$authorID;Toggle;Secondary;🔄]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `$onlyIf[$customID==leaveplaceholderlist_$authorID;]

$interactionUpdate[$title[Placeholders]
$description[Placeholders are a way to make Leave messages unique! Choose a one available from this list.]
$addField[Member-related;
\`<member.username>\` - Returns the member's username
\`<member.mention>\` - Pings the member
\`<member.id>\` - Returns the member's id
\`<member.DisplayName>\` - Returns the member's Display name
]
$addField[Server-related;
\`<owner.username>\` - Returns the server owner's username
\`<owner.id>\` - Returns the server owner's id
\`<server.name>\` - Returns the server's name
\`<server.id>\` - Returns the server's id
\`<server.createdAt>\` - Returns the server's creation date (as timestamp)
\`<server.totalMembers>\` - Returns the server's amount of members
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[leavesettings_$authorID;Go Back;Secondary;↩️]
]`
}]