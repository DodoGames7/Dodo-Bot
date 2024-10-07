module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    
    $interactionUpdate[{newEmbed:{title:Leveling}{description:Leveling is a feature that let's members of the server have their levels and xp based on how much they have been active in the server.
    
    To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the "Settings" button.
    
    $get[levelingsystem]}{color:$getVar[embedcolor]}}{actionRow:{button:Toggle:2:toggleleveling_$authorID:false:🔄}{button:Settings:4:levelingsetting_$authorID:false}{button:Reset:2:levelingreset_$authorID:false:⚠️}}]
    
    
    $let[levelingsystem;$advancedReplaceText[$checkCondition[$getGuildVar[levelsystem]==on];false;*Leveling is currently disabled*;true;*Leveling is currently enabled*]]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelinghomepage;]
    
    `
    },{
    type: "interaction",
    prototype: "button",
    code: `$interactionFollowUp[$get[resultmessage];true]
    
    $interactionUpdate[{newEmbed:{title:Leveling}{description:Leveling is a feature that let's members of the server have their levels and xp based on how much they have been active in the server.
    
    To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the "Settings" button.
    
    $get[levelingsystem]}{color:$getVar[embedcolor]}}{actionRow:{button:Toggle:2:toggleleveling_$authorID:false:🔄}{button:Settings:4:levelingsetting_$authorID:false}{button:Reset:2:levelingreset_$authorID:false:⚠️}}]
    
    
    $let[levelingsystem;$advancedReplaceText[$checkCondition[$getGuildVar[levelsystem]==on];false;*Leveling is currently disabled*;true;*Leveling is currently enabled*]]
    $let[resultmessage;$advancedReplaceText[$checkCondition[$getGuildVar[levelsystem]==on];true;Successfully enabled Leveling!;false;Successfully disabled Leveling!]]
    $setGuildVar[levelsystem;$get[newtoggledsetting];$guildID]
    $let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGuildVar[levelsystem]==on];true;off;false;on]]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==toggleleveling;]
    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionReply[{newEmbed:{title:Reset Leveling?}{description:Are you sure you want to reset Leveling in this server? All members (including the ones who left the server) will lose their progress.}{color:Red}{thumbnail:https#COLON#//us-east-1.tixte.net/uploads/dodo-bot.wants.solutions/warning.png}}{actionRow:{button:Yes:2:levelingresetconfirm:false}{button:No:2:levelingresetdeny:false}};all;true]

$onlyIf[$getGuildVar[levelsystem]==on;
Leveling must be enabled first.
{ephemeral}
{interaction}
    ]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
{ephemeral}
{interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingreset;]
`
    },{
        name: "levelingresetconfirm",
        type: "interaction",
        prototype: "button",
        code: `$interactionUpdate[Leveling has been reset!]
$awaitExecute[resetleveling]

$onlyIf[$getGuildVar[islevelingreset]==no;Leveling is already reset in this server.
{ephemeral}
{interaction}
    ]
`
    },{
        name: "levelingresetdeny",
        type: "interaction",
        prototype: "button",
        code: `
$interactionUpdate[The current progress for all members will remain then.]

`
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionUpdate[{newEmbed:{title:Leveling settings}{description:Welcome to Leveling settings! Select a option to change.
    
**Current Setting(s)**
**Level up channel#COLON#** $get[levelupchannel]
**Level up message#COLON#** \`$get[levelupmessage]\`

    }{color:$getVar[embedcolor]}}{actionRow:{button:Home:2:levelinghomepage_$authorID:false:🏠}{button:Message:2:levelingsettingmessage_$authorID:false}{button:Placeholders:2:levelingmsgplaceholder_$authorID:false}{button:Reset on leave:2:levelingrestonleave_$authorID:false}}]
    
    

    $let[levelupchannel;$advancedReplaceText[$checkCondition[$getGuildVar[levelingmessagechannel]==none];true;none;false;<#$getGuildVar[levelingmessagechannel]> (\`$getGuildVar[levelingmessagechannel]\`)]]
    $let[levelupmessage;$advancedReplaceText[$checkCondition[$getGuildVar[levelmessagefeature]==on];true;Enabled;false;Disabled]]

    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingsetting;]
    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionUpdate[{newEmbed:{title:Level up Message}{description:This option is dedicated to changing current options for level up message. Choose an option to change.
    
    Press the "Toggle" button to enable/disable the Level up Message or use the other options alternatively to manage level up message settings.
    
    **Current Setting(s)**
    **Level up channel#COLON#** $get[levelupchannel]
    **Level up message#COLON#** \`$get[levelupmessage]\`
    }{color:$getVar[embedcolor]}}{actionRow:{button:Go back:2:levelingsetting_$authorID:false:↩️}{button:Toggle:2:enablelevelingmessage_$authorID:false:🔄}{button:Set Channel:2:levelingchannelsetup_$authorID:false}{button:Set Message:2:levelingsetmsgmodal_$authorID:false}}{actionRow:{button:Test Message:2:levelingtestmessage_$authorID:false}}]
    
    $let[levelupchannel;$advancedReplaceText[$checkCondition[$getGuildVar[levelingmessagechannel]==none];true;none;false;<#$getGuildVar[levelingmessagechannel]> (\`$getGuildVar[levelingmessagechannel]\`)]]
    $let[levelupmessage;$advancedReplaceText[$checkCondition[$getGuildVar[levelmessagefeature]==on];true;Enabled;false;Disabled]]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingsettingmessage;]
    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionFollowUp[$get[resultmessage];true]
    $interactionUpdate[{newEmbed:{title:Level up Message}{description:This option is dedicated to changing current options for level up message. Choose an option to change.
    
    Press the "Toggle" button to enable/disable the Level up Message or use the other options alternatively to manage level up message settings.
    
    **Current Setting(s)**
    **Level up channel#COLON#** $get[levelupchannel]
    **Level up message#COLON#** \`$get[levelupmessage]\`
    }{color:$getVar[embedcolor]}}{actionRow:{button:Go back:2:levelingsetting_$authorID:false:↩️}{button:Toggle:2:enablelevelingmessage_$authorID:false:🔄}{button:Set Channel:2:levelingchannelsetup_$authorID:false}{button:Set Message:2:levelingsetmsgmodal_$authorID:false}}{actionRow:{button:Test Message:2:levelingtestmessage_$authorID:false}}]
    
    $let[levelupchannel;$advancedReplaceText[$checkCondition[$getGuildVar[levelingmessagechannel]==none];true;none;false;<#$getGuildVar[levelingmessagechannel]> (\`$getGuildVar[levelingmessagechannel]\`)]]
    $let[levelupmessage;$advancedReplaceText[$checkCondition[$getGuildVar[levelmessagefeature]==on];true;Enabled;false;Disabled]]
    
    
    $let[resultmessage;$advancedReplaceText[$checkCondition[$getGuildVar[levelmessagefeature]==on];true;From now on, Level up messages will be sent by the bot!;false;From now on, Level up messages will no longer be sent by the bot]]
    $setGuildVar[levelmessagefeature;$get[newtoggledsetting]]
    $let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGuildVar[levelmessagefeature]==on];true;off;false;on]]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==enablelevelingmessage;]
    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionModal[Set Message;levelingsetmsgresult;
    {actionRow:
        {textInput:Message to use:2:textInput:true:e.g, <username> has Leveled up!:0:200:$getGuildVar[levelmessage]}
      }]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingsetmsgmodal;]
    `
    },{
        name: "levelingsetmsgresult",
        type: "interaction",
        prototype: "modal",
        code: `$setGuildVar[levelmessage;$textInputValue[textInput]]
    $interactionReply[Successfully set the Level up message!;all;true]
    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionUpdate[{newEmbed:{title:Channel Setup}{description:Choose a channel for Level up messages to be sent in. Use the select menu below for the channel to use!
    
    **Current Setting(s)**
    **Channel#COLON#** $get[levelupchannel]
    
    **Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
    
    }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:levelingchannelmenusetup_$authorID:Select a channel to use.:1:1:false:{channelInput:Text:Announcement}}}{actionRow:{button:Go back:2:levelingsettingmessage_$authorID:false:↩️}{button:Reset:2:levelingresetchannel_$authorID:false}}]
    
    $let[levelupchannel;$advancedReplaceText[$checkCondition[$getGuildVar[levelingmessagechannel]==none];true;none;false;<#$getGuildVar[levelingmessagechannel]> (\`$getGuildVar[levelingmessagechannel]\`)]]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingchannelsetup;]
    `
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionFollowUp[<#$getSelectMenuValues[all]> will now be used for Level up messages!;true]
    
    $interactionUpdate[{newEmbed:{title:Channel Setup}{description:Choose a channel for Level up messages to be sent in. Use the select menu below for the channel to use!
    
    **Current Setting(s)**
    **Channel#COLON#** $get[levelupchannel]
    
    **Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
    
    }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:levelingchannelmenusetup_$authorID:Select a channel to use.:1:1:false:{channelInput:Text:Announcement}}}{actionRow:{button:Go back:2:levelingsettingmessage_$authorID:false:↩️}{button:Reset:2:levelingresetchannel_$authorID:false}}]
    
    $let[levelupchannel;$advancedReplaceText[$checkCondition[$getGuildVar[levelingmessagechannel]==none];true;none;false;<#$getGuildVar[levelingmessagechannel]> (\`$getGuildVar[levelingmessagechannel]\`)]]
    
    $setGuildVar[levelingmessagechannel;$getSelectMenuValues[all]]
    
    $onlyIf[$hasPermsInChannel[$getSelectMenuValues[all];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$getSelectMenuValues[all]>:
    \`ViewChannel\`
    \`SendMessages\`
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$getSelectMenuValues[all]!=$getGuildVar[levelingmessagechannel];
    This channel is already used for Level up messages. Please, set a different channel instead.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$guildChannelExists[$guildID;$getSelectMenuValues[all]]==true;The channel you chose no longer exists in this server.
    Please set a valid channel which exists inside this server.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingchannelmenusetup;]
    
    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionFollowUp[Channel has been reset!;true]

    $interactionUpdate[{newEmbed:{title:Channel Setup}{description:Choose a channel for Level up messages to be sent in. Use the select menu below for the channel to use!

    **Current Setting(s)**
    **Channel#COLON#** $get[levelupchannel]

    **Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!

    }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:levelingchannelmenusetup_$authorID:Select a channel to use.:1:1:false:{channelInput:Text:Announcement}}}{actionRow:{button:Go back:2:levelingsettingmessage_$authorID:false:↩️}{button:Reset:2:levelingresetchannel_$authorID:false}}]

    $let[levelupchannel;$advancedReplaceText[$checkCondition[$getGuildVar[levelingmessagechannel]==none];true;none;false;<#$getGuildVar[levelingmessagechannel]> (\`$getGuildVar[levelingmessagechannel]\`)]]

    $deleteVar[levelingmessagechannel;$guildID;main]

    $onlyIf[$getGuildVar[levelingmessagechannel]!=none;
    There's no channel to reset.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingresetchannel;]

    `
    },{
        type: "interaction",
        prototype: "button",
        code: `
    $interactionReply[Successfully sent the message to the Level up channel for testing!;all;true]
    $channelSendMessage[$getGuildVar[levelingmessagechannel];
    **This is a test Level up message! Please, ignore this!**
    $get[content]
    ]
    
    $let[content;$advancedReplaceText[$nonEscape[$getGuildVar[levelmessage]];<newlevel>;$getUserVar[level];<mention>;<@$authorID>;<username>;$username;<oldlevel>;$getUserVar[previouslevel];<Displayname>;$userDisplayName]]
    
    $onlyIf[$hasPermsInChannel[$getGuildVar[levelingmessagechannel];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$getGuildVar[levelingmessagechannel]>:
    \`ViewChannel\`
    \`SendMessages\`
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$guildChannelExists[$guildID;$getGuildVar[levelingmessagechannel]]==true;The channel used for Level up message seems to be deleted.
    Cancelled sending the message as a result. Please set a new channel to fix this.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$getGuildVar[levelingmessagechannel]!=none;There is no channel set to test the Level up message.
    Please set a new channel first.
    {ephemeral}
    {interaction}
    ]
    
    $disableMentionType[roles]
    $disableMentionType[everyone]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingtestmessage;]
    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionUpdate[{newEmbed:{title:Reset on Leave}{description:This option let's you reset User's current level whenever they leave the server. 
    
    By default, this is disabled but you can choose to enable it if you want to do so.
    
    **Current Setting(s)**
    **Reset on Leave#COLON#** \`$get[levelreset]\`
    }{color:$getVar[embedcolor]}}{actionRow:{button:Go back:2:levelingsetting_$authorID:false:↩️}{button:Toggle:2:togglelevelingreset_$authorID:false:🔄}}]
    
    $let[levelreset;$advancedReplaceText[$getGuildVar[levelleaveonreset];on;Enabled;off;Disabled]]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingrestonleave;]`
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionFollowUp[$get[resultmessage];true]
    $interactionUpdate[{newEmbed:{title:Reset on Leave}{description:This option let's you reset User's current level whenever they leave the server. 
    
    By default, this is disabled but you can choose to enable it if you want to do so.
    
    **Current Setting(s)**
    **Reset on Leave#COLON#** \`$get[levelreset]\`
    }{color:$getVar[embedcolor]}}{actionRow:{button:Go back:2:levelingsetting_$authorID:false:↩️}{button:Toggle:2:togglelevelingreset_$authorID:false:🔄}}]
    
    $let[levelreset;$advancedReplaceText[$getGuildVar[levelleaveonreset];on;Enabled;off;Disabled]]
    
    
    $let[resultmessage;$advancedReplaceText[$checkCondition[$getGuildVar[levelleaveonreset]==on];true;User's levels will now reset whenever they leave!;false;User's levels will no longer reset whenever they leave!]]
    $setGuildVar[levelleaveonreset;$get[newtoggledsetting]]
    $let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGuildVar[levelleaveonreset]==on];true;off;false;on]]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==togglelevelingreset;]`
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionUpdate[{newEmbed:{title:Placeholders}{description:Placeholders allows you to make your custom Level up message unique. Use the current ones available in this list!}{field:Member-related:
    \`<username>\` - Returns the member's username
    \`<Displayname>\` - Returns the member's displayname
    \`<mention>\` - Pings the member
    }{field:Leveling-related:
    \`<newlevel>\` - Returns the new level of the member
    \`<oldlevel>\` - Returns the previous level the member once had
    }{color:$getVar[embedcolor]}}{actionRow:{button:Go back:2:levelingsetting_$authorID:false:↩️}}]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
    {ephemeral}
    {interaction}
    ]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingmsgplaceholder;]

    `
    }]
    
