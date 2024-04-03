module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    
    $interactionUpdate[{newEmbed:{title:Leveling}{description:Leveling is a feature that let's members of the server have their levels and xp based on how much they have been active in the server.
    
    To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the "Settings" button.
    
    $get[levelingsystem]}{color:$getVar[embedcolor]}}{actionRow:{button:Toggle:2:enableleveling_$authorID:false:🔄}{button:Settings:4:levelingsetting_$authorID:false}}]
    
    
    $let[levelingsystem;$replaceText[$replaceText[$checkCondition[$getGuildVar[levelsystem]==on];false;*Leveling is currently disabled*];true;*Leveling is currently enabled*]]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
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
    
    $get[levelingsystem]}{color:$getVar[embedcolor]}}{actionRow:{button:Toggle:2:enableleveling_$authorID:false:🔄}{button:Settings:4:levelingsetting_$authorID:false}}]
    
    
    $let[levelingsystem;$replaceText[$replaceText[$checkCondition[$getGuildVar[levelsystem]==on];false;*Leveling is currently disabled*];true;*Leveling is currently enabled*]]
    $let[resultmessage;$replaceText[$replaceText[$checkCondition[$getGuildVar[levelsystem]==on];true;Successfully enabled Leveling!];false;Successfully disabled Leveling!]]
    $setGuildVar[levelsystem;$get[newtoggledsetting];$guildID]
    $let[newtoggledsetting;$replaceText[$replaceText[$checkCondition[$getGuildVar[levelsystem]==on];true;off];false;on]]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==enableleveling;]
    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionUpdate[{newEmbed:{title:Leveling settings}{description:Welcome to Leveling settings! Select an option to change.
    
    }}{actionRow:{button:Home:2:levelinghomepage_$authorID:false:🏠}{button:Message:2:levelingsettingmessage_$authorID:false}}]
    
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
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
    
    **Current Settings**
    **Level up channel#COLON#** $get[levelupchannel]
    **Level up message#COLON#** \`$get[levelupmessage]\`
    }}{actionRow:{button:Go back:2:levelingsetting_$authorID:false:↩️}{button:Toggle:2:enablelevelingmessage_$authorID:false:🔄}{button:Set Channel:2:levelingchannelsetup_$authorID:false}{button:Set Message:2:levelingsetmsgmodal_$authorID:false}}{actionRow:{button:Test Message:2:levelingtestmessage_$authorID:false}}]
    
    $let[levelupchannel;$replaceText[$replaceText[$checkCondition[$getGuildVar[levelingmessagechannel]==none];true;None];false;<#$getGuildVar[levelingmessagechannel]> (\`$getGuildVar[levelingmessagechannel]\`)]]
    $let[levelupmessage;$replaceText[$replaceText[$checkCondition[$getGuildVar[levelmessagefeature]==on];true;Enabled];false;Disabled]]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
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
    
    **Current Settings**
    **Level up channel#COLON#** $get[levelupchannel]
    **Level up message#COLON#** \`$get[levelupmessage]\`
    }}{actionRow:{button:Go back:2:levelingsetting_$authorID:false:↩️}{button:Toggle:2:enablelevelingmessage_$authorID:false:🔄}{button:Set Channel:2:levelingchannelsetup_$authorID:false}{button:Set Message:2:levelingsetmsgmodal_$authorID:false}}{actionRow:{button:Test Message:2:levelingtestmessage_$authorID:false}}]
    
    $let[levelupchannel;$replaceText[$replaceText[$checkCondition[$getGuildVar[levelingmessagechannel]==none];true;None];false;<#$getGuildVar[levelingmessagechannel]> (\`$getGuildVar[levelingmessagechannel]\`)]]
    $let[levelupmessage;$replaceText[$replaceText[$checkCondition[$getGuildVar[levelmessagefeature]==on];true;Enabled];false;Disabled]]
    
    
    $let[resultmessage;$replaceText[$replaceText[$checkCondition[$getGuildVar[levelmessagefeature]==on];true;From now on, Level up messages will be sent by the bot!];false;From now on, Level up messages will no longer be sent by the bot]]
    $setGuildVar[levelmessagefeature;$get[newtoggledsetting]]
    $let[newtoggledsetting;$replaceText[$replaceText[$checkCondition[$getGuildVar[levelmessagefeature]==on];true;off];false;on]]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
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
        {textInput:Message to use:2:textInput:true:<username> has Leveled up!:0:200:$getGuildVar[levelmessage]}
      }]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
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
    
    **Current Settings**
    **Channel#COLON#** $get[levelupchannel]
    
    **Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
    
    }}{actionRow:{selectMenu:levelingchannelmenusetup_$authorID:Select a channel to use.:1:1:false:{channelInput:Text}}}{actionRow:{button:Go back:2:levelingsettingmessage_$authorID:false:↩️}}]
    
    $let[levelupchannel;$replaceText[$replaceText[$checkCondition[$getGuildVar[levelingmessagechannel]==none];true;None];false;<#$getGuildVar[levelingmessagechannel]> (\`$getGuildVar[levelingmessagechannel]\`)]]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
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
    
    **Current Settings**
    **Channel#COLON#** $get[levelupchannel]
    
    **Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
    
    }}{actionRow:{selectMenu:levelingchannelmenusetup_$authorID:Select a channel to use.:1:1:false:{channelInput:Text}}}{actionRow:{button:Go back:2:levelingsettingmessage_$authorID:false:↩️}}]
    
    $let[levelupchannel;$replaceText[$replaceText[$checkCondition[$getGuildVar[levelingmessagechannel]==none];true;None];false;<#$getGuildVar[levelingmessagechannel]> (\`$getGuildVar[levelingmessagechannel]\`)]]
    
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
    
    $onlyIf[$channelType[$getSelectMenuValues[all]]==text;We only support Text Channels for now.
    Make sure to set an Text channel instead.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$guildChannelExists[$guildID;$getSelectMenuValues[all]]==true;The channel you chose no longer exists in this server.
    Please set a valid channel which exists inside this server.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==levelingchannelmenusetup;]
    
    `
    }]