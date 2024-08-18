module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==welcomerhome;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[welcomersystem;$replace[$replace[$getGuildVar[welcomersystem];off;Disabled];on;Enabled]]

$interactionUpdate[$title[Welcomer]
$description[Welcomer is a way to greet new members of your server with your own choice of the message you're going to use it for the server!

To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the "Settings" button.

]
$addField[Current setting(s);$get[welcomersystem]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[welcomertoggle_$authorID;Toggle;Secondary;🔄]
$addButton[welcomersettings_$authorID;Settings;Danger]
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==welcomertoggle;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$replace[$replace[$checkCondition[$getGuildVar[welcomersystem]==on];true;off];false;on]]
$setGuildVar[welcomersystem;$get[settingdecide];$guildID]
$let[welcomersystem;$replace[$replace[$getGuildVar[welcomersystem];off;Disabled];on;Enabled]]

$let[statements;$replace[$replace[$checkCondition[$getGuildVar[welcomersystem]==on];true;Successfully enabled Welcomer!];false;Successfully disabled Welcomer!]]

$interactionUpdate[$title[$get[title]]
$description[$get[description]
]
$addField[$get[fieldname];$get[welcomersystem]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[welcomertoggle_$authorID;Toggle;Secondary;🔄]
$addButton[welcomersettings_$authorID;Settings;Danger]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==welcomersettings;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[currentchannel;$replace[$replace[$checkCondition[$getGuildVar[welcomerchannel;$guildID]!=];true;<#$getGuildVar[welcomerchannel;$guildID]> (\`$getGuildVar[welcomerchannel;$guildID]\`)];false;No channel set]]

$interactionUpdate[
$title[Welcomer Settings]
$description[Welcome to Welcomer settings! Select a option to change.
]
$addField[Current setting(s);
* **Welcomer channel:** $get[currentchannel]
* **Message type:** \`$toTitleCase[$getGuildVar[welcomertype]]\`
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[welcomerhome_$authorID;Home;Secondary;🏠]
$addButton[welcomerchannelsetup_$authorID;Channel;Secondary]
$addButton[welcomermessagecategory_$authorID;Message;Secondary]
$addButton[welcomerplaceholderlist_$authorID;Placeholders;Secondary]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==welcomerchannelsetup;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[currentchannel;$replace[$replace[$checkCondition[$getGuildVar[welcomerchannel;$guildID]!=];true;<#$getGuildVar[welcomerchannel;$guildID]> (\`$getGuildVar[welcomerchannel;$guildID]\`)];false;No channel set]]

$interactionUpdate[$title[Channel Setup]
$description[Choose a channel for Welcomer messages to be sent in. Use the select menu below for the channel to use!

**Tip:** Unable to find the channel you're looking for? Try typing the channel name right into the select menu instead!]
$addField[Current channel;$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelType[GuildText]
$addChannelSelectMenu[welcomerchannelselectmenusetup_$authorID;Select a channel to use;1;1;false]
$addActionRow
$addButton[welcomersettings_$authorID;Go Back;Secondary;↩️]
$addButton[welcomerchannelreset;Reset;Secondary]
]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==welcomerchannelselectmenusetup;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$onlyIf[$channelType[$selectMenuValues]==GuildText;
$interactionReply[Channel must be a Text channel.
$ephemeral
]]

$onlyIf[$getGuildVar[welcomerchannel;$guildID]!=$selectMenuValues;
$interactionReply[This channel is already used for Welcomer messages. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$botID;ViewChannel;SendMessages]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for Welcomer, i must have the following permissions for the selected channel:
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGuildVar[welcomerchannel;$selectMenuValues;$guildID]

$let[currentchannel;$replace[$replace[$checkCondition[$getGuildVar[welcomerchannel;$guildID]!=];true;<#$getGuildVar[welcomerchannel;$guildID]> (\`$getGuildVar[welcomerchannel;$guildID]\`)];false;No channel set]]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]


$interactionUpdate[$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelType[GuildText]
$addChannelSelectMenu[welcomerchannelselectmenusetup_$authorID;Select a channel to use;1;1;false]
$addActionRow
$addButton[welcomersettings_$authorID;Go Back;Secondary;↩️]
$addButton[welcomerchannelreset_$authorID;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for Welcomer messages!
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==welcomerchannelreset;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$onlyIf[$getGuildVar[welcomerchannel;$guildID]!=;$interactionReply[
There's no channel set currently to reset.
$ephemeral]]

$deleteGuildVar[welcomerchannel;$guildID]

$let[currentchannel;$replace[$replace[$checkCondition[$getGuildVar[welcomerchannel;$guildID]!=];true;<#$getGuildVar[welcomerchannel;$guildID]> (\`$getGuildVar[welcomerchannel;$guildID]\`)];false;No channel set]]


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
$addChannelSelectMenu[welcomerchannelselectmenusetup_$authorID;Select a channel to use;1;1;false]
$addActionRow
$addButton[welcomersettings_$authorID;Go Back;Secondary;↩️]
$addButton[welcomerchannelreset_$authorID;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==welcomermessagecategory;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[
$title[Message]
$description[Welcome to options under the \`Message\` category! Select any option to modify]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[welcomersettings_$authorID;Go Back;Secondary;↩️]
$addButton[welcomermessagesetup_$authorID;Set Message;Secondary]
$addButton[welcomermessagepreview_$authorID;Preview Message;Secondary]
$addButton[welcomermessagetypesetting_$authorID;Message Type;Secondary]

]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==welcomermessagesetup;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$showModal
$if[$getGuildVar[welcomertype]==embed;
$modal[welcomerembedmodalsetup;Set Message]
$addTextInput[messageInput;Message to use;Paragraph;true;Welcome to the server <member.username>!;$getGuildVar[welcomermessage];0;3750]
$addTextInput[embedcolorInput;Embed color to use;Short;true;#1F8B4C;$getGuildVar[welcomermessageembedcolor];0;7]
;
$modal[welcomertextmodalsetup;Set Message]
$addTextInput[messageInput;Message to use;Paragraph;true;Welcome to the server <member.username>!;$getGuildVar[welcomermessage];0;3750]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["modal"],
    code: `$onlyIf[$customID==welcomertextmodalsetup;]
$setGuildVar[welcomermessage;$input[messageInput]]
$interactionReply[Successfully set the Welcomer message!
$ephemeral]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["modal"],
    code: `$onlyIf[$customID==welcomerembedmodalsetup;]

$onlyIf[$startsWith[$input[embedcolorInput];#]==true;$interactionReply[Your hex code must start with \`#\`.
$ephemeral]
]

$onlyIf[$isValidHex[$input[embedcolorInput]]==true;$interactionReply[The hex code seems to be invalid. Please double check and try again.
$ephemeral]
]

$setGuildVar[welcomermessageembedcolor;$input[embedcolorInput]]
$setGuildVar[welcomermessage;$input[messageInput]]
$interactionReply[Successfully set the Welcomer message!
$ephemeral]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==welcomermessagepreview;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


$let[servericon;$replace[$replace[$checkCondition[$guildIcon==];true;$userAvatar[$botID]];false;$serverIcon]]
$let[content;$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$getGuildVar[welcomermessage];<member.username>;$username];<member.mention>;<@$authorID>];<member.id>;$authorID];<owner.username>;$guildOwnerID];<owner.id>;$guildOwnerID];<server.name>;$serverName];<server.id>;$guildID];<server.createdAt>;<t:$trunc[$divide[$guildCreatedAt;1000]]:f>];<server.totalMembers>;$guildMemberCount];<member.position>;$ordinal[$guildMemberCount]];<member.Displayname>;$userDisplayname]]



$interactionReply[$if[$or[$charCount[$getGuildVar[welcomermessage]]>=2000;$getGuildVar[welcomertype]==embed];
    $author[Member joined!;$get[servericon]]
    $description[$get[content]]
    $thumbnail[$userAvatar]
    $color[$getGuildVar[welcomermessageembedcolor]]
    ;$get[content]]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==welcomermessagetypesetting;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[
$title[Message Type]
$description[This setting is dedicated to embed mode for Welcomer message! Enabling this will display a simple embed for Welcomer message otherwise just text for the same message. To switch between the two types, press the "Toggle" button below!

**Note:** If the Welcomer message is over 2000 characters then embed mode will be forced enabled by default due to Discord's limits.]
$addField[Current type;
\`$toTitleCase[$getGuildVar[welcomertype]]\`]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[welcomermessagecategory_$authorID;Go Back;Secondary;↩️]
$addButton[welcomermessagetypetoggle_$authorID;Toggle;Secondary;🔄]
]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==welcomermessagetypetoggle;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$replace[$replace[$checkCondition[$getGuildVar[welcomertype]==text];true;embed];false;text]]
$setGuildVar[welcomertype;$get[settingdecide];$guildID]

$let[statements;$replace[$replace[$checkCondition[$getGuildVar[welcomertype]==embed];true;Successfully enabled embed mode!];false;Successfully enabled text mode!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
\`$toTitleCase[$getGuildVar[welcomertype]]\`]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[welcomermessagecategory_$authorID;Go Back;Secondary;↩️]
$addButton[welcomermessagetypetoggle_$authorID;Toggle;Secondary;🔄]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==welcomerplaceholderlist;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[$title[Placeholders]
$description[Placeholders are a way to make Welcomer messages unique! Choose a one available from this list.]
$addField[Member-related;
\`<member.username>\` - Returns the member's username
\`<member.mention>\` - Pings the member
\`<member.id>\` - Returns the member's id
\`<member.position>\` - Returns the position number of the member
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
$addButton[welcomersettings_$authorID;Go Back;Secondary;↩️]
]`
}]
