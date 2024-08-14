module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==levelinghome;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[levelingsystem;$replace[$replace[$getGuildVar[levelingsystem];off;Disabled];on;Enabled]]

$interactionUpdate[$title[Leveling]
$description[Leveling is a feature that let's members of the server have their levels and xp based on how much they have been active in the server.

To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the "Settings" button.]
$addField[Current setting(s);$get[levelingsystem]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[levelingtoggle_$authorID;Toggle;Secondary;🔄]
$addButton[levelingsettings_$authorID;Settings;Danger]
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==levelingtoggle;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$replace[$replace[$checkCondition[$getGuildVar[levelingsystem]==on];true;off];false;on]]
$setGuildVar[levelingsystem;$get[settingdecide];$guildID]
$let[levelingsystem;$replace[$replace[$getGuildVar[levelingsystem];off;Disabled];on;Enabled]]

$let[statements;$replace[$replace[$checkCondition[$getGuildVar[levelingsystem]==on];true;Successfully enabled Leveling!];false;Successfully disabled Leveling!]]

$interactionUpdate[$title[$get[title]]
$description[$get[description]
]
$addField[$get[fieldname];$get[levelingsystem]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[levelingtoggle_$authorID;Toggle;Secondary;🔄]
$addButton[levelingsettings_$authorID;Settings;Danger]
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
$onlyIf[$advancedTextSplit[$customID;_;0]==levelingsettings;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[currentchannel;$replace[$replace[$checkCondition[$getGuildVar[levelingmessagechannel;$guildID]!=];true;<#$getGuildVar[levelingmessagechannel;$guildID]> (\`$getGuildVar[levelingmessagechannel;$guildID]\`)];false;No channel set]]
$let[levelingmessagefeature;$replace[$replace[$getGuildVar[levelingmessagefeature];off;Disabled];on;Enabled]]
$let[levelingresetonleave;$replace[$replace[$getGuildVar[levelingresetonleave];off;Disabled];on;Enabled]]

$interactionUpdate[
$title[Leveling Settings]
$description[Welcome to Leveling settings! Select a option to change.
]
$addField[Current setting(s);
* **Level up channel:** $get[currentchannel]
* **Level up message:** $get[levelingmessagefeature]
* **Reset on Leave:** $get[levelingresetonleave]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[levelinghome_$authorID;Home;Secondary;🏠]
$addButton[levelingchannelsetup_$authorID;Channel;Secondary]
$addButton[levelingmessagecategory_$authorID;Message;Secondary]
$addButton[levelingplaceholderlist_$authorID;Placeholders;Secondary]
$addButton[levelingresetonleave_$authorID;Reset on Leave;Secondary]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==levelingchannelsetup;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[currentchannel;$replace[$replace[$checkCondition[$getGuildVar[levelingmessagechannel;$guildID]!=];true;<#$getGuildVar[levelingmessagechannel;$guildID]> (\`$getGuildVar[levelingmessagechannel;$guildID]\`)];false;No channel set]]

$interactionUpdate[$title[Channel Setup]
$description[Choose a channel for Level up messages to be sent in. Use the select menu below for the channel to use!

**Tip:** Unable to find the channel you're looking for? Try typing the channel name right into the select menu instead!]
$addField[Current channel;$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelType[GuildText]
$addChannelSelectMenu[levelingchannelselectmenusetup_$authorID;Select a channel to use;1;1;false]
$addActionRow
$addButton[levelingsettings_$authorID;Go Back;Secondary;↩️]
$addButton[levelingmsgchannelreset_$authorID;Reset;Secondary]
]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==levelingchannelselectmenusetup;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$onlyIf[$channelType[$selectMenuValues]==GuildText;
$interactionReply[Channel must be a Text channel.
$ephemeral
]]

$onlyIf[$getGuildVar[levelingmessagechannel;$guildID]!=$selectMenuValues;
$interactionReply[This channel is already used for Level up messages. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$botID;ViewChannel;SendMessages]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for Level up messages, i must have the following permissions for the selected channel:
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGuildVar[levelingmessagechannel;$selectMenuValues;$guildID]

$let[currentchannel;$replace[$replace[$checkCondition[$getGuildVar[levelingmessagechannel;$guildID]!=];true;<#$getGuildVar[levelingmessagechannel;$guildID]> (\`$getGuildVar[levelingmessagechannel;$guildID]\`)];false;No channel set]]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]


$interactionUpdate[$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelType[GuildText]
$addChannelSelectMenu[levelingchannelselectmenusetup_$authorID;Select a channel to use;1;1;false]
$addActionRow
$addButton[levelingsettings_$authorID;Go Back;Secondary;↩️]
$addButton[levelingmsgchannelreset_$authorID;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for Level up messages!
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==levelingmsgchannelreset;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$onlyIf[$getGuildVar[levelingmessagechannel;$guildID]!=;$interactionReply[
There's no channel set currently to reset.
$ephemeral]]

$deleteGuildVar[levelingmessagechannel;$guildID]

$let[currentchannel;$replace[$replace[$checkCondition[$getGuildVar[levelingmessagechannel;$guildID]!=];true;<#$getGuildVar[levelingmessagechannel;$guildID]> (\`$getGuildVar[levelingmessagechannel;$guildID]\`)];false;No channel set]]


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
$addChannelSelectMenu[levelingchannelselectmenusetup_$authorID;Select a channel to use;1;1;false]
$addActionRow
$addButton[levelingsettings_$authorID;Go Back;Secondary;↩️]
$addButton[levelingmsgchannelreset_$authorID;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==levelingmessagecategory;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[levelingmessagefeature;$replace[$replace[$getGuildVar[levelingmessagefeature];off;Disabled];on;Enabled]]

$interactionUpdate[
$title[Message]
$description[Welcome to options under the \`Message\` category! Select any option to modify]
$addField[Current setting(s);* **Level up message:** $get[levelingmessagefeature]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[levelingsettings_$authorID;Go Back;Secondary;↩️]
$addButton[levelingmessagefeaturetoggle_$authorID;Toggle;Secondary;🔄]
$addButton[levelingmessagesetup_$authorID;Set Message;Secondary]
$addButton[levelingmessagepreview_$authorID;Preview Message;Secondary]

]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==levelingmessagefeaturetoggle;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$replace[$replace[$checkCondition[$getGuildVar[levelingmessagefeature]==on];true;off];false;on]]
$setGuildVar[levelingmessagefeature;$get[settingdecide];$guildID]
$let[levelingmessagefeature;$replace[$replace[$getGuildVar[levelingmessagefeature];off;Disabled];on;Enabled]]

$let[statements;$replace[$replace[$checkCondition[$getGuildVar[levelingmessagefeature]==on];true;Successfully enabled Level up message!];false;Successfully disabled Level up message!]]


$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];* **Level up message:** $get[levelingmessagefeature]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[levelingsettings_$authorID;Go Back;Secondary;↩️]
$addButton[levelingmessagefeaturetoggle_$authorID;Toggle;Secondary;🔄]
$addButton[levelingmessagesetup_$authorID;Set Message;Secondary]
$addButton[levelingmessagepreview_$authorID;Preview Message;Secondary]
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
$onlyIf[$advancedTextSplit[$customID;_;0]==levelingmessagesetup;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$showModal
$modal[levelingmessagemodalsetup;Set Message]
$addTextInput[messageInput;Message to use;Paragraph;true;<username> has leveled UP! Their new level is now <newlevel>!;$getGuildVar[levelingmessage];0;200]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["modal"],
    code: `$onlyIf[$customID==levelingmessagemodalsetup;]
$setGuildVar[levelingmessage;$input[messageInput]]
$interactionReply[Successfully set the Leveling message!
$ephemeral]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==levelingmessagepreview;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


$let[content;$replace[$replace[$replace[$replace[$replace[$getGuildVar[levelingmessage];<member.mention>;<@$authorID>];<member.username>;$username];<oldlevel>;$getMemberVar[previouslevel]];<newlevel>;$getMemberVar[level]];<member.Displayname>;$userDisplayname]]

$interactionReply[
 $get[content]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==levelingresetonleave;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[levelingresetonleave;$replace[$replace[$getGuildVar[levelingresetonleave];off;Disabled];on;Enabled]]

$interactionUpdate[
$title[Reset on Leave]
$description[This option let's you decide whether or not the user who leaves this server will have their level progress erased. By default, it is disabled but you can choose to enable it.]
$addField[Current setting(s);
$get[levelingresetonleave]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[levelingsettings_$authorID;Go Back;Secondary;↩️]
$addButton[levelingresetonleavetoggle_$authorID;Toggle;Secondary;🔄]
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==levelingresetonleavetoggle;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$replace[$replace[$checkCondition[$getGuildVar[levelingresetonleave]==on];true;off];false;on]]
$setGuildVar[levelingresetonleave;$get[settingdecide];$guildID]
$let[levelingsystem;$replace[$replace[$getGuildVar[levelingresetonleave];off;Disabled];on;Enabled]]

$let[statements;$replace[$replace[$checkCondition[$getGuildVar[levelingresetonleave]==on];true;Members who leave will now have their level reset!];false;Members who leave will no longer have their level reset!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
$get[levelingresetonleave]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[levelingsettings_$authorID;Go Back;Secondary;↩️]
$addButton[levelingresetonleavetoggle_$authorID;Toggle;Secondary;🔄]
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
$onlyIf[$advancedTextSplit[$customID;_;0]==levelingplaceholderlist;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[$title[Placeholders]
$description[Placeholders are a way to make Welcomer messages unique! Choose a one available from this list.]
$addField[Member-related;
\`<member.username>\` - Returns the member's username
\`<member.mention>\` - Pings the member
\`<member.Displayname>\` - Returns the member's display name
]
$addField[Leveling-related;
\`<newlevel>\` - Returns the member's new level
\`<oldlevel>\` - Returns the level the member once had
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[levelingsettings_$authorID;Go Back;Secondary;↩️]
]`
}]
