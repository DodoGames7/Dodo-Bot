module.exports = [{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==setuploghomebutton;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionUpdate[$title[Setup Logs]
$description[Welcome to Setup Logs! Choose the type of logging you want to set!]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[setuplogtypes_$authorID;Choose a logging type;false;1;1]
$addOption[Message Delete;Log deleted messages by users!;msgdeletelog;;false]
$addOption[Message Edit;Log Edited messages by users!;msgeditlog;;false]
$addOption[Ban logs;Log banned users!;memberbanlogs;;false]
$addOption[Un-ban logs;Log users that got unbanned!;memberunbanlogs;;false]
$addOption[Integration logs;Log bots that got added to this server!;integrationlogs;;false]
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==setuplogtypes;$selectMenuValues==msgdeletelog]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[msglogdeletechannel;$guildID]!=];true;<#$getGuildVar[msglogdeletechannel;$guildID]> (\`$getGuildVar[msglogdeletechannel;$guildID]\`);false;No channel set]]

$interactionUpdate[
$author[Message delete;$userAvatar[$botID]]
$title[Channel setup]
$description[To setup the logs for Message delete, use the select menu below to choose a channel to do so.

**Tip**: Couldn't find the channel you're looking for? Try typing the channel name right into the menu.]
$addField[Current channel;$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[msglogdeletechannelsetup_$authorID;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[setuploghomebutton_$authorID;Home;Secondary;🏠]
$addButton[msgdeletelogreset_$authorID;Reset;Secondary]
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==msglogdeletechannelsetup;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


$onlyIf[$getGuildVar[msglogdeletechannel;$guildID]!=$selectMenuValues;
$interactionReply[This channel is already used for Message delete. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$botID;ViewChannel;SendMessages]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for message delete, i must have the following permissions for the selected channel:
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGuildVar[msglogdeletechannel;$selectMenuValues;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[msglogdeletechannel;$guildID]!=];true;<#$getGuildVar[msglogdeletechannel;$guildID]> (\`$getGuildVar[msglogdeletechannel;$guildID]\`);false;No channel set]]

$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$author[$get[author];$userAvatar[$botID]]
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[msglogdeletechannelsetup_$authorID;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[setuploghomebutton_$authorID;Home;Secondary;🏠]
$addButton[msgdeletelogreset_$authorID;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for logging deleted messages!
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==msgdeletelogreset;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$onlyIf[$getGuildVar[msglogdeletechannel;$guildID]!=;$interactionReply[
There's no channel set currently to reset.
$ephemeral]]

$deleteGuildVar[msglogdeletechannel;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[msglogdeletechannel;$guildID]!=];true;<#$getGuildVar[msglogdeletechannel;$guildID]> (\`$getGuildVar[msglogdeletechannel;$guildID]\`);false;No channel set]]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$author[$get[author];$userAvatar[$botID]]
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[msglogdeletechannelsetup_$authorID;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[setuploghomebutton_$authorID;Home;Secondary;🏠]
$addButton[msgdeletelogreset_$authorID;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==setuplogtypes;$selectMenuValues==msgeditlog]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[msglogeditchannel;$guildID]!=];true;<#$getGuildVar[msglogeditchannel;$guildID]> (\`$getGuildVar[msglogeditchannel;$guildID]\`);false;No channel set]]

$interactionUpdate[
$author[Message Edit;$userAvatar[$botID]]
$title[Channel setup]
$description[To setup the logs for Message Edit, use the select menu below to choose a channel to do so.

**Tip**: Couldn't find the channel you're looking for? Try typing the channel name right into the menu.]
$addField[Current channel;$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[msglogeditchannelsetup_$authorID;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[setuploghomebutton_$authorID;Home;Secondary;🏠]
$addButton[msgeditlogreset_$authorID;Reset;Secondary]
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==msglogeditchannelsetup;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$onlyIf[$channelType[$selectMenuValues]==GuildText;
$interactionReply[Channel must be a Text channel.
$ephemeral
]]

$onlyIf[$getGuildVar[msglogeditchannel;$guildID]!=$selectMenuValues;
$interactionReply[This channel is already used for Message edit. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$botID;ViewChannel;SendMessages]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for message edit, i must have the following permissions for the selected channel:
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGuildVar[msglogeditchannel;$selectMenuValues;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[msglogeditchannel;$guildID]!=];true;<#$getGuildVar[msglogeditchannel;$guildID]> (\`$getGuildVar[msglogeditchannel;$guildID]\`);false;No channel set]]

$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$author[$get[author];$userAvatar[$botID]]
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[msglogeditchannelsetup_$authorID;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[setuploghomebutton_$authorID;Home;Secondary;🏠]
$addButton[msgeditlogreset_$authorID;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for logging edited messages!
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==msgeditlogreset;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$onlyIf[$getGuildVar[msglogeditchannel;$guildID]!=;$interactionReply[
There's no channel set currently to reset.
$ephemeral]]

$deleteGuildVar[msglogeditchannel;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[msglogeditchannel;$guildID]!=];true;<#$getGuildVar[msglogeditchannel;$guildID]> (\`$getGuildVar[msglogeditchannel;$guildID]\`);false;No channel set]]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$author[$get[author];$userAvatar[$botID]]
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[msglogeditchannelsetup_$authorID;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[setuploghomebutton_$authorID;Home;Secondary;🏠]
$addButton[msgeditlogreset_$authorID;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==setuplogtypes;$selectMenuValues==memberbanlogs]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[banlogschannel;$guildID]!=];true;<#$getGuildVar[banlogschannel;$guildID]> (\`$getGuildVar[banlogschannel;$guildID]\`);false;No channel set]]

$interactionUpdate[
$author[Ban logs;$userAvatar[$botID]]
$title[Channel setup]
$description[To setup the logs for Ban logs, use the select menu below to choose a channel to do so.

**Tip**: Couldn't find the channel you're looking for? Try typing the channel name right into the menu.]
$addField[Current channel;$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[memberbanlogchannelsetup_$authorID;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[setuploghomebutton_$authorID;Home;Secondary;🏠]
$addButton[memberbanlogreset_$authorID;Reset;Secondary]
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==memberbanlogchannelsetup;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$onlyIf[$channelType[$selectMenuValues]==GuildText;
$interactionReply[Channel must be a Text channel.
$ephemeral
]]

$onlyIf[$getGuildVar[banlogschannel;$guildID]!=$selectMenuValues;
$interactionReply[This channel is already used for Ban logs. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$botID;ViewChannel;SendMessages]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for Ban logs, i must have the following permissions for the selected channel:
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGuildVar[banlogschannel;$selectMenuValues;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[banlogschannel;$guildID]!=];true;<#$getGuildVar[banlogschannel;$guildID]> (\`$getGuildVar[banlogschannel;$guildID]\`);false;No channel set]]

$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$author[$get[author];$userAvatar[$botID]]
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[memberbanlogchannelsetup_$authorID;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[setuploghomebutton_$authorID;Home;Secondary;🏠]
$addButton[memberbanlogreset_$authorID;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for logging banned users!
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==memberbanlogreset;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$onlyIf[$getGuildVar[banlogschannel;$guildID]!=;$interactionReply[
There's no channel set currently to reset.
$ephemeral]]

$deleteGuildVar[banlogschannel;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[banlogschannel;$guildID]!=];true;<#$getGuildVar[banlogschannel;$guildID]> (\`$getGuildVar[banlogschannel;$guildID]\`);false;No channel set]]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$author[$get[author];$userAvatar[$botID]]
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[memberbanlogchannelsetup_$authorID;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[setuploghomebutton_$authorID;Home;Secondary;🏠]
$addButton[memberbanlogreset_$authorID;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==setuplogtypes;$selectMenuValues==memberunbanlogs]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[unbanlogschannel;$guildID]!=];true;<#$getGuildVar[unbanlogschannel;$guildID]> (\`$getGuildVar[unbanlogschannel;$guildID]\`);false;No channel set]]

$interactionUpdate[
$author[Un-Ban logs;$userAvatar[$botID]]
$title[Channel setup]
$description[To setup the logs for Un-Ban logs, use the select menu below to choose a channel to do so.

**Tip**: Couldn't find the channel you're looking for? Try typing the channel name right into the menu.]
$addField[Current channel;$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[memberunbanlogchannelsetup_$authorID;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[setuploghomebutton_$authorID;Home;Secondary;🏠]
$addButton[memberunbanlogreset_$authorID;Reset;Secondary]
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==memberunbanlogchannelsetup;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$onlyIf[$channelType[$selectMenuValues]==GuildText;
$interactionReply[Channel must be a Text channel.
$ephemeral
]]

$onlyIf[$getGuildVar[unbanlogschannel;$guildID]!=$selectMenuValues;
$interactionReply[This channel is already used for Un-Ban logs. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$botID;ViewChannel;SendMessages]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for Un-Ban logs, i must have the following permissions for the selected channel:
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGuildVar[unbanlogschannel;$selectMenuValues;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[unbanlogschannel;$guildID]!=];true;<#$getGuildVar[unbanlogschannel;$guildID]> (\`$getGuildVar[unbanlogschannel;$guildID]\`);false;No channel set]]

$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$author[$get[author];$userAvatar[$botID]]
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[memberunbanlogchannelsetup_$authorID;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[setuploghomebutton_$authorID;Home;Secondary;🏠]
$addButton[memberunbanlogreset_$authorID;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for logging unbanned users!
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==memberunbanlogreset;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$onlyIf[$getGuildVar[unbanlogschannel;$guildID]!=;$interactionReply[
There's no channel set currently to reset.
$ephemeral]]

$deleteGuildVar[unbanlogschannel;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[unbanlogschannel;$guildID]!=];true;<#$getGuildVar[unbanlogschannel;$guildID]> (\`$getGuildVar[unbanlogschannel;$guildID]\`);false;No channel set]]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$author[$get[author];$userAvatar[$botID]]
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[memberunbanlogchannelsetup_$authorID;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow 
$addButton[setuploghomebutton_$authorID;Home;Secondary;🏠]
$addButton[memberunbanlogreset_$authorID;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==setuplogtypes;$selectMenuValues==integrationlogs]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[integrationlogchannel;$guildID]!=];true;<#$getGuildVar[integrationlogchannel;$guildID]> (\`$getGuildVar[integrationlogchannel;$guildID]\`);false;No channel set]]

$interactionUpdate[
$author[Integration logs;$userAvatar[$botID]]
$title[Channel setup]
$description[To setup the logs for Integration logs, use the select menu below to choose a channel to do so.

**Tip**: Couldn't find the channel you're looking for? Try typing the channel name right into the menu.]
$addField[Current channel;$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[integrationlogchannelsetup_$authorID;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow
$addButton[setuploghomebutton_$authorID;Home;Secondary;🏠]
$addButton[integrationlogreset_$authorID;Reset;Secondary]
]
`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==integrationlogchannelsetup;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$onlyIf[$channelType[$selectMenuValues]==GuildText;
$interactionReply[Channel must be a Text channel.
$ephemeral
]]

$onlyIf[$getGuildVar[integrationlogchannel;$guildID]!=$selectMenuValues;
$interactionReply[This channel is already used for Integration logs. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$botID;ViewChannel;SendMessages]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for Integration logs, i must have the following permissions for the selected channel:
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGuildVar[integrationlogchannel;$selectMenuValues;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[integrationlogchannel;$guildID]!=];true;<#$getGuildVar[integrationlogchannel;$guildID]> (\`$getGuildVar[integrationlogchannel;$guildID]\`);false;No channel set]]

$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$author[$get[author];$userAvatar[$botID]]
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[integrationlogchannelsetup_$authorID;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow
$addButton[setuploghomebutton_$authorID;Home;Secondary;🏠]
$addButton[integrationlogreset_$authorID;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for logging newly added bots!
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==integrationlogreset;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$onlyIf[$getGuildVar[integrationlogchannel;$guildID]!=;$interactionReply[
There's no channel set currently to reset.
$ephemeral]]

$deleteGuildVar[integrationlogchannel;$guildID]

$let[currentchannel;$advancedReplace[$checkCondition[$getGuildVar[integrationlogchannel;$guildID]!=];true;<#$getGuildVar[integrationlogchannel;$guildID]> (\`$getGuildVar[integrationlogchannel;$guildID]\`);false;No channel set]]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$author[$get[author];$userAvatar[$botID]]
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[currentchannel]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addChannelSelectMenu[integrationlogchannelsetup_$authorID;Select a channel to use;1;1;false]
$setChannelType[GuildText]
$addActionRow
$addButton[setuploghomebutton_$authorID;Home;Secondary;🏠]
$addButton[integrationlogreset_$authorID;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
}]
