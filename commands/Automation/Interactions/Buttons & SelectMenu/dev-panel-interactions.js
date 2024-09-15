module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==devmenu;$selectMenuValues==botinvitationmessageoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[botinvitationmessage;$advancedReplace[$getGlobalVar[botinvitationmessage];off;Disabled;on;Enabled]]

$interactionReply[
$title[Bot Invitation Message]
$description[When enabled, The bot will welcome the new servers it gets added to. By default, this is enabled in order to help the members know what's the bot's prefix is]
$addField[Current setting(s);$get[botinvitationmessage]]
$color[Yellow]
$addActionRow 
$addButton[botinvitationmessagetoggle;Toggle;Secondary;🔄]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==botinvitationmessagetoggle;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getGlobalVar[botinvitationmessage]==on];true;off;false;on]]
$setGlobalVar[botinvitationmessage;$get[settingdecide]]
$let[botinvitationmessage;$advancedReplace[$getGlobalVar[botinvitationmessage];off;Disabled;on;Enabled]]

$let[statements;$advancedReplace[$checkCondition[$getGlobalVar[botinvitationmessage]==on];true;Bot will now welcome the new servers!;false;Bot will no longer welcome the new servers!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[botinvitationmessage]]
$color[Yellow]
$addActionRow 
$addButton[botinvitationmessagetoggle;Toggle;Secondary;🔄]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==devmenu;$selectMenuValues==errorloggingoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[errorlogging;$advancedReplace[$getGlobalVar[errorlogging];off;Disabled;on;Enabled]]
$let[currentchannel;$advancedReplace[$checkCondition[$getGlobalVar[errorchannel]!=];true;<#$getGlobalVar[errorchannel]> (\`$getGlobalVar[errorchannel]\`);false;No channel set]]

$interactionReply[
$title[Error Logging]
$description[This option is dedicated to logging errors to the channel specified in case something went wrong on the bot!]
$addField[Current setting(s);
**Error logging:** $get[errorlogging]
**Error logging channel:** $get[currentchannel]
]
$color[Yellow]
$addActionRow
$setChannelType[GuildText]
$addChannelSelectMenu[errorloggingchannelselectmenusetup;Select a channel to use;1;1;false]
$addActionRow 
$addButton[errorloggingtoggle;Toggle;Secondary;🔄]
$addButton[errorloggingchannelreset;Reset;Secondary]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==errorloggingtoggle;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getGlobalVar[errorlogging]==on];true;off;false;on]]
$setGlobalVar[errorlogging;$get[settingdecide]]
$let[errorlogging;$advancedReplace[$getGlobalVar[errorlogging];off;Disabled;on;Enabled]]
$let[currentchannel;$advancedReplace[$checkCondition[$getGlobalVar[errorchannel]!=];true;<#$getGlobalVar[errorchannel]> (\`$getGlobalVar[errorchannel]\`);false;No channel set]]

$let[statements;$advancedReplace[$checkCondition[$getGlobalVar[errorlogging]==on];true;Errors will now be logged!;false;Errors will no longer be logged!]]


$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
**Error logging:** $get[errorlogging]
**Error logging channel:** $get[currentchannel]
]
$color[Yellow]
$addActionRow
$setChannelType[GuildText]
$addChannelSelectMenu[errorloggingchannelselectmenusetup;Select a channel to use;1;1;false]
$addActionRow
$addButton[errorloggingtoggle;Toggle;Secondary;🔄]
$addButton[errorloggingchannelreset;Reset;Secondary]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]


`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$customID==errorloggingchannelselectmenusetup;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]


$onlyIf[$getGlobalVar[errorchannel]!=$selectMenuValues;
$interactionReply[This channel is already used for Error messages. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$clientID;ViewChannel;SendMessages]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for Error Logging, i must have the following permissions for the selected channel:
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGlobalVar[errorchannel;$selectMenuValues]

$let[errorlogging;$advancedReplace[$getGlobalVar[errorlogging];off;Disabled;on;Enabled]]
$let[currentchannel;$advancedReplace[$checkCondition[$getGlobalVar[errorchannel]!=];true;<#$getGlobalVar[errorchannel]> (\`$getGlobalVar[errorchannel]\`);false;No channel set]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
**Error logging:** $get[errorlogging]
**Error logging channel:** $get[currentchannel]
]
$color[Yellow]
$addActionRow
$setChannelType[GuildText]
$addChannelSelectMenu[errorloggingchannelselectmenusetup;Select a channel to use;1;1;false]
$addActionRow
$addButton[errorloggingtoggle;Toggle;Secondary;🔄]
$addButton[errorloggingchannelreset;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for Error messages!
$ephemeral
]


`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==errorloggingchannelreset;]

$onlyIf[$getGlobalVar[errorchannel]!=;$interactionReply[
There's no channel set currently to reset.
$ephemeral]]

$deleteGlobalVar[errorchannel]

$let[errorlogging;$advancedReplace[$getGlobalVar[errorlogging];off;Disabled;on;Enabled]]
$let[currentchannel;$advancedReplace[$checkCondition[$getGlobalVar[errorchannel]!=];true;<#$getGlobalVar[errorchannel]> (\`$getGlobalVar[errorchannel]\`);false;No channel set]]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
**Error logging:** $get[errorlogging]
**Error logging channel:** $get[currentchannel]
]
$color[Yellow]
$addActionRow
$setChannelType[GuildText]
$addChannelSelectMenu[errorloggingchannelselectmenusetup;Select a channel to use;1;1;false]
$addActionRow
$addButton[errorloggingtoggle;Toggle;Secondary;🔄]
$addButton[errorloggingchannelreset;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==devmenu;$selectMenuValues==embedcoloroption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]


$interactionReply[
$title[Embed color]
$description[This option allows you to change the current Embed color used across all the commands of the bot!]
$addField[Current setting(s);$getGlobalVar[embedcolor]]
$color[Yellow]
$addActionRow
$addButton[setnewembedcolor;Set Color;Secondary]
$addButton[previewembedcolor;Preview;Secondary]
$addButton[resetcurrentembedcolor;Reset;Secondary]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==setnewembedcolor;]

$showModal
$modal[setembedcolormodalsetup;Set Color]
$addTextInput[embedcolorInput;Embed color to use;Short;true;#1F8B4C;$getGlobalVar[embedcolor];0;7]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["modal"],
    code: `$onlyIf[$customID==setembedcolormodalsetup;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$onlyIf[$startsWith[$input[embedcolorInput];#]==true;$interactionReply[Your hex code must start with \`#\`.
$ephemeral]
]

$onlyIf[$isValidHex[$input[embedcolorInput]]==true;$interactionReply[The hex code seems to be invalid. Please double check and try again.
$ephemeral]
]

$setGlobalVar[embedcolor;$input[embedcolorInput]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$getGlobalVar[embedcolor]]
$color[Yellow]
$addActionRow
$addButton[setnewembedcolor;Set Color;Secondary]
$addButton[previewembedcolor;Preview;Secondary]
$addButton[resetcurrentembedcolor;Reset;Secondary]
]

$interactionFollowUp[Successfully set the Embed color!
$ephemeral]`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==resetcurrentembedcolor;]

$onlyIf[$getGlobalVar[embedcolor]!=$getGlobalVar[originalembedcolor];$interactionReply[
There's no current embed color set to reset.
$ephemeral]]

$deleteGlobalVar[embedcolor]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$getGlobalVar[embedcolor]]
$color[Yellow]
$addActionRow
$addButton[setnewembedcolor;Set Color;Secondary]
$addButton[previewembedcolor;Preview;Secondary]
$addButton[resetcurrentembedcolor;Reset;Secondary]
]

$interactionFollowUp[Embed color has been reset!
$ephemeral
]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `$onlyIf[$customID==previewembedcolor;]

    $interactionReply[
        $title[Embed color Preview]
        $description[This is how it will appear!]
        $color[$getGlobalVar[embedcolor]]
        $footer[Pretty cool right?]
        $ephemeral
    ]`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `$onlyIf[$and[$advancedTextSplit[$customID;_;0]==devmenu;$selectMenuValues==prereleaseoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[pre_release;$advancedReplace[$getGlobalVar[pre_release];off;Disabled;on;Enabled]]

$interactionReply[
$title[Pre-release]
$description[This option let's you decide on whether or not the current build should be marked as pre-release build. By default, it is commonly enabled for development builds.

Disabling this option will cause all sorts of pre-release stuff to be absent such as the development warning on the console!]
$addField[Current setting(s);$get[pre_release]]
$color[Yellow]
$addActionRow
$addButton[prereleasetoggle;Toggle;Secondary;🔄]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==prereleasetoggle;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getGlobalVar[pre_release]==on];true;off;false;on]]
$setGlobalVar[pre_release;$get[settingdecide]]
$let[pre_release;$advancedReplace[$getGlobalVar[pre_release];off;Disabled;on;Enabled]]

$If[$getGlobalVar[pre_release]==off;
$deleteGlobalVar[release_type]
;
$setGlobalVar[release_type;$getGlobalVar[DevReleaseTypeToSet]]
]

$let[statements;$advancedReplace[$checkCondition[$getGlobalVar[pre_release]==on];true;Pre-release mode's stuff will now appear!;false;Pre-release mode's stuff will now be absent!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[pre_release]]
$color[Yellow]
$addActionRow
$addButton[prereleasetoggle;Toggle;Secondary;🔄]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]


`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==devmenu;$selectMenuValues==startupoption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[startup;$advancedReplace[$getGlobalVar[startupsystem];off;Disabled;on;Enabled]]
$let[currentchannel;$advancedReplace[$checkCondition[$getGlobalVar[startupchannel]!=];true;<#$getGlobalVar[startupchannel]> (\`$getGlobalVar[startupchannel]\`);false;No channel set]]

$interactionReply[
$title[Startup]
$description[This option is dedicated to sending messages that the bot is ready to the channel specified!]
$addField[Current setting(s);
**Startup:** $get[startup]
**Startup channel:** $get[currentchannel]
]
$color[Yellow]
$addActionRow
$setChannelType[GuildText]
$addChannelSelectMenu[startupchannelselectmenusetup;Select a channel to use;1;1;false]
$addActionRow
$addButton[startuptoggle;Toggle;Secondary;🔄]
$addButton[startupchannelreset;Reset;Secondary]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==startuptoggle;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getGlobalVar[startupsystem]==on];true;off;false;on]]
$setGlobalVar[startupsystem;$get[settingdecide]]
$let[startup;$advancedReplace[$getGlobalVar[startupsystem];off;Disabled;on;Enabled]]
$let[currentchannel;$advancedReplace[$checkCondition[$getGlobalVar[startupchannel]!=];true;<#$getGlobalVar[startupchannel]> (\`$getGlobalVar[startupchannel]\`);false;No channel set]]

$let[statements;$advancedReplace[$checkCondition[$getGlobalVar[startup]==on];true;Startup messages will now be sent!;false;Startup messages will no longer be sent!]]


$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
**Startup:** $get[startup]
**Startup channel:** $get[currentchannel]
]
$color[Yellow]
$addActionRow
$setChannelType[GuildText]
$addChannelSelectMenu[startupchannelselectmenusetup;Select a channel to use;1;1;false]
$addActionRow
$addButton[startuptoggle;Toggle;Secondary;🔄]
$addButton[startupchannelreset;Reset;Secondary]
]

$interactionFollowUp[
$get[statements]
$ephemeral
]

`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["selectMenu"],
    code: `
$onlyIf[$customID==startupchannelselectmenusetup;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$onlyIf[$getGlobalVar[startupchannel]!=$selectMenuValues;
$interactionReply[This channel is already used for Startup messages. Select a different one instead.
$ephemeral
]
]

$onlyIf[$channelHasPerms[$selectMenuValues;$clientID;ViewChannel;SendMessages]==true;
$interactionReply[You selected a channel that i do not have the required permissions for. To set a channel for Startup, i must have the following permissions for the selected channel:
\`SendMessages\`
\`ViewChannel\`
$ephemeral
]
]

$setGlobalVar[startupchannel;$selectMenuValues]

$let[startup;$advancedReplace[$getGlobalVar[startupsystem];off;Disabled;on;Enabled]]
$let[currentchannel;$advancedReplace[$checkCondition[$getGlobalVar[startupchannel]!=];true;<#$getGlobalVar[startupchannel]> (\`$getGlobalVar[startupchannel]\`);false;No channel set]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
**Startup:** $get[startup]
**Startup channel:** $get[currentchannel]
]
$color[Yellow]
$addActionRow
$setChannelType[GuildText]
$addChannelSelectMenu[startupchannelselectmenusetup;Select a channel to use;1;1;false]
$addActionRow
$addButton[startuptoggle;Toggle;Secondary;🔄]
$addButton[startupchannelreset;Reset;Secondary]
]

$interactionFollowUp[<#$selectMenuValues> will now be used for Startup messages!
$ephemeral
]


`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==startupchannelreset;]

$onlyIf[$getGlobalVar[startupchannel]!=;$interactionReply[
There's no channel set currently to reset.
$ephemeral]]

$deleteGlobalVar[startupchannel]

$let[startup;$advancedReplace[$getGlobalVar[startupsystem];off;Disabled;on;Enabled]]
$let[currentchannel;$advancedReplace[$checkCondition[$getGlobalVar[startupchannel]!=];true;<#$getGlobalVar[startupchannel]> (\`$getGlobalVar[startupchannel]\`);false;No channel set]]


$let[author;$getEmbeds[$channelID;$messageID;0;authorName;0]]
$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];
**Startup:** $get[startup]
**Startup channel:** $get[currentchannel]
]
$color[Yellow]
$addActionRow
$setChannelType[GuildText]
$addChannelSelectMenu[startupchannelselectmenusetup;Select a channel to use;1;1;false]
$addActionRow
$addButton[startuptoggle;Toggle;Secondary;🔄]
$addButton[startupchannelreset;Reset;Secondary]
]

$interactionFollowUp[Channel has been reset!
$ephemeral
]

`
},{
type: "interactionCreate",
allowedInteractionTypes: ["selectMenu"],
code: `
$onlyIf[$and[$advancedTextSplit[$customID;_;0]==devmenu;$selectMenuValues==exposebuildinfooption]==true;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[exposebuildinfo;$advancedReplace[$getGlobalVar[exposebuildinfo];off;Disabled;on;Enabled]]

$interactionReply[
$title[Expose build info]
$description[When enabled, a button labeled "Build Info" will show up in \`stats\` command. By default, this is enabled for Pre-release builds besides Beta ones.

If you think this is sensitive information then press the "Toggle" button to disable it (if it was enabled by default).]
$addField[Current setting(s);$get[exposebuildinfo]]
$color[Yellow]
$addActionRow
$addButton[exposebuildinfotoggle;Toggle;Secondary;🔄]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `
$onlyIf[$customID==exposebuildinfotoggle;]

$let[title;$getEmbeds[$channelID;$messageID;0;title;0]]
$let[description;$getEmbeds[$channelID;$messageID;0;description;0]]
$let[fieldname;$getEmbeds[$channelID;$messageID;0;fieldName;0]]

$let[settingdecide;$advancedReplace[$checkCondition[$getGlobalVar[exposebuildinfo]==on];true;off;false;on]]
$setGlobalVar[exposebuildinfo;$get[settingdecide]]
$let[exposebuildinfo;$advancedReplace[$getGlobalVar[exposebuildinfo];off;Disabled;on;Enabled]]

$let[statements;$advancedReplace[$checkCondition[$getGlobalVar[exposebuildinfo]==on];true;Build information will now be exposed!;false;Build information will no longer be exposed!]]

$interactionUpdate[
$title[$get[title]]
$description[$get[description]]
$addField[$get[fieldname];$get[exposebuildinfo]]
$color[Yellow]
$addActionRow
$addButton[exposebuildinfotoggle;Toggle;Secondary;🔄]
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
$onlyIf[$advancedTextSplit[$customID;_;0]==generatedatabasebackup;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$interactionReply[
$title[Backup Database]
$addField[Why Backups?;In general, it is recommended to create a backup of the database to always ensure that when something bad happens, you can use your previous copy of the database to restore all the lost data!
]
$addField[Getting started;make a quick backup, press the button "Create", a new duplicated file of your database will appear with random letters and numbers.
]
$addField[How to use it?;To use your backup, rename the file to \`forge.db\` and replace the one in \`database\` folder with the backup file! Reboot the bot and the data should be there!
]
$color[Yellow]
$addActionRow
$addButton[createdatabasebackupbutton;Create;Secondary]
$ephemeral
]
`
},{
    type: "interactionCreate",
    allowedInteractionTypes: ["button"],
    code: `$onlyIf[$customID==createdatabasebackupbutton;]

    $copyFile[database/forge.db;backup-$randomString[6]-forge.db]
    $interactionReply[Created a backup under your root directory!
    $ephemeral
    ]
    `
}]
