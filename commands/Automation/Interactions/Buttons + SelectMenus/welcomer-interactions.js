module.exports = [{
    type: "interaction",
    prototype: "button",
    code: 
    `$interactionUpdate[{newEmbed:{title:Welcomer}{description:Welcomer is an way to greet new members of your server with your own choice of the message you're going to use it for the server!

To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the "Settings" button.

$get[welcomersystem]

}{color:$getVar[embedcolor]}}{actionRow:{button:Toggle:2:togglewel_$authorID:false:🔄}{button:Settings:4:welsettings_$authorID:false}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]
$let[welcomersystem;$advancedReplaceText[$getGuildVar[welcomesystem];off;*Welcomer is currently disabled*;on;*Welcomer is currently enabled*]]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==welcomerhomebutton;]
`
},{
    type: "interaction",
    prototype: "button",
    code:`


$interactionFollowUp[$get[resultmessage];true]
$interactionUpdate[{newEmbed:{title:Welcomer}{description:Welcomer is an way to greet new members of your server with your own choice of the message you're going to use it for the server!

To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the "Settings" button.

$get[welcomersystem]

}{color:$getVar[embedcolor]}}{actionRow:{button:Toggle:2:togglewel_$authorID:false:🔄}{button:Settings:4:welsettings_$authorID:false}}]



$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]

$let[welcomersystem;$advancedReplaceText[$checkCondition[$getGuildVar[welcomesystem]==on];false;*Welcomer is currently disabled*;true;*Welcomer is currently enabled*]]
$let[resultmessage;$advancedReplaceText[$checkCondition[$getGuildVar[welcomesystem]==on];true;Successfully enabled Welcomer!;false;Successfully disabled Welcomer!]]
$setGuildVar[welcomesystem;$get[newtoggledsetting];$guildID]
$let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGuildVar[welcomesystem]==on];true;off;false;on]]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==togglewel;]

`

},{
    type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Welcomer Settings}{description: Welcome to Welcomer settings! Select an option to change.

**Current Settings**
**Channel#COLON#** $get[welcomerchannel]
**Message Type#COLON#** \`$toLocaleUpperCase[$getGuildVar[welcometype]]\`}}{actionRow:{button:Home:2:welcomerhomebutton_$authorID:false:🏠}{button:Channel:2:welcomerchannelbutton_$authorID:false}{button:Message:2:welcomermessagebutton_$authorID:false}{button:Placeholders:2:welcomerplaceholders_$authorID:false}}]

$let[welcomerchannel;$advancedReplaceText[$checkCondition[$getGuildVar[welcomechannel]==none];true;None;false;<#$getGuildVar[welcomechannel]> (\`$getGuildVar[welcomechannel]\`)]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==welsettings;]
`
},{
        type: "interaction",
        prototype: "button",
        code: `$interactionUpdate[{newEmbed:{title:Channel Setup}{description:Choose a channel for Welcomer messages to be sent in. Use the select menu below for the channel to use!
    
    **Current Settings**
    **Channel#COLON#** $get[welcomerchannel]
    
    **Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
    
    }}{actionRow:{selectMenu:welcomerchannelmenusetup_$authorID:Select a channel to use.:1:1:false:{channelInput:Text}}}{actionRow:{button:Go back:2:welsettings_$authorID:false:↩️}}]
    
    $let[welcomerchannel;$advancedReplaceText[$checkCondition[$getGuildVar[welcomechannel]==none];true;None;false;<#$getGuildVar[welcomechannel]> (\`$getGuildVar[welcomechannel]\`)]]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==welcomerchannelbutton;]
    `
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionFollowUp[<#$getSelectMenuValues[all]> will now be used for Welcomer messages!;true]
    
    $interactionUpdate[{newEmbed:{title:Channel Setup}{description:Choose a channel for Welcomer messages to be sent in. Use the select menu below for the channel to use!
    
    **Current Settings**
    **Channel#COLON#** $get[welcomerchannel]
    
    **Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
    
    }}{actionRow:{selectMenu:welcomerchannelmenusetup_$authorID:Select a channel to use.:1:1:false:{channelInput:Text}}}{actionRow:{button:Go back:2:welsettings_$authorID:false:↩️}}]
    
    $let[welcomerchannel;$advancedReplaceText[$checkCondition[$getGuildVar[welcomechannel]==none];true;None;false;<#$getGuildVar[welcomechannel]> (\`$getGuildVar[welcomechannel]\`)]]
    
    $setGuildVar[welcomechannel;$getSelectMenuValues[all]]
    
    $onlyIf[$hasPermsInChannel[$getSelectMenuValues[all];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$getSelectMenuValues[all]>:
    \`ViewChannel\`
    \`SendMessages\`
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$getSelectMenuValues[all]!=$getGuildVar[welcomechannel];
    This channel is already used for Welcomer messages. Please, set a different channel instead.
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
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==welcomerchannelmenusetup;]
    
    `
    },{
    type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Message}{description:Welcome to options under the \`Message\` category! Select any option to modify!}}{actionRow:{button:Go back:2:welsettings_$authorID:false:↩️}{button:Set Message:2:welcomersetmsgbutton_$authorID:false}{button:Test Message:2:welcomertestmessagebutton_$authorID:false}{button:Type:2:welcomermessagetypebutton_$authorID:false}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==welcomermessagebutton;]
`
},{
    type: "interaction",
    $if: "old",
    prototype: "button",
    code: `$if[$getGuildVar[welcometype]==embed]
$interactionModal[Message to use;welcomerembedmodal;
{actionRow:
    {textInput:Custom message to use:2:textInput:true:Welcome <username>:0:3000:$getGuildVar[welcomemessage]}
  }
{actionRow:
    {textInput:Embed color to use:1:hexInput:true:#9B59B6:0:7:$getGuildVar[welcomemessageembedcolor]}
  }]
$else
$interactionModal[Message to use;welcomertextmodal;
{actionRow:
    {textInput:Custom message to use:2:textInput:true:Welcome <username>:0:3000:$getGuildVar[welcomemessage]}
  }]
$endif

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==welcomersetmsgbutton;]
`
},{
    name: "welcomertextmodal",
    type: "interaction",
    prototype: "modal",
    code: `
$setGuildVar[welcomemessage;$textInputValue[textInput]]
$interactionReply[Successfully set the Welcomer message!;all;true]
`
},{
  name: "welcomerembedmodal",
  type: "interaction",
  prototype: "modal",
  code: `
$setGuildVar[welcomemessageembedcolor;$textInputValue[hexInput]]
$setGuildVar[welcomemessage;$textInputValue[textInput]]
$interactionReply[Successfully set the Welcomer message!;all;true]

$onlyIf[$isValidColor[$textInputValue[hexInput]]==true;
Your hex code containing the color is incorrect! Please, double check your hex code and try again.{ephemeral}
{interaction}]

$onlyIf[$isValidHex[$textInputValue[hexInput]]==true;
You did not provide a hex code! Please, make sure to provide a actual hex code and try again.{ephemeral}
{interaction}]

$onlyIf[$stringStartsWith[$textInputValue[hexInput];#]==true;
Your hex code must start with a \`#\`! Please, try again.{ephemeral}
{interaction}]`
},{
    type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Message type}{description:In Welcomer, there're two types#COLON#

* **Text**
* **Embed**

\`Text\` is the default type used for Welcomer messages. \`Embed\` will cause the Welcomer messages to use embeds. It's worth noting that if the Welcomer message is over 2000 characters then the \`Embed\` mode will be enforced as a result due to Discord's character limits for general messages!

**Current Settings**
**Type#COLON#** \`$toLocaleUpperCase[$getGuildVar[welcometype]]\`}}{actionRow:{button:Go back:2:welcomermessagebutton_$authorID:false:↩️}{button:Toggle:2:togglewelcomermessagetype_$authorID:false:🔄}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==welcomermessagetypebutton;]
`
},{
    type: "interaction",
    prototype: "button",
    code: `$interactionFollowUp[$get[resultmessage];true]
$interactionUpdate[{newEmbed:{title:Message type}{description:In Welcomer, there're two types#COLON#

* **Text**
* **Embed**

\`Text\` is the default type used for Welcomer messages. \`Embed\` will cause the Welcomer messages to use embeds. It's worth noting that if the Welcomer message is over 2000 characters then the \`Embed\` mode will be enforced as a result due to Discord's character limits for general messages!

**Current Settings**
**Type#COLON#** \`$toLocaleUpperCase[$getGuildVar[welcometype]]\`}}{actionRow:{button:Go back:2:welcomermessagebutton_$authorID:false:↩️}{button:Toggle:2:togglewelcomermessagetype_$authorID:false:🔄}}]

$let[resultmessage;$advancedReplaceText[$checkCondition[$getGuildVar[welcometype]==embed];true;Welcomer message will now be in embeds!;false;Welcomer message will now be in \`Text\` mode!]]
$setGuildVar[welcometype;$get[newtoggledsetting]]
$let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGuildVar[welcometype]==text];true;embed;false;text]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==togglewelcomermessagetype;]
`
},{
    type: "interaction",
    prototype: "button",
    code:`$interactionReply[Successfully sent the message to the Welcomer channel for testing!;all;true]
$ifAwaited[$charCount[$getGuildVar[welcomemessage]]>=2000||$getGuildVar[welcometype]==embed;{execute:welcomerembedmodetest};{execute:welcomertextmodetest}]


$let[content;$advancedReplaceText[$nonEscape[$getGuildVar[welcomemessage]];<server.totalMembers>;$membersCount;<username>;$username;<mention>;<@$authorID>;<id>;$authorID;<owner.username>;$username[$guildOwnerID];<server.name>;$guildName;<owner.id>;$guildOwnerID;<server.id>;$guildID;<creationdate>;$creationDate[$authorID;date];<position>;$ordinal[$memberJoinPosition]]]

$onlyIf[$hasPermsInChannel[$getGuildVar[welcomechannel];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$getGuildVar[welcomechannel]>:
\`ViewChannel\`
\`SendMessages\`
{ephemeral}
{interaction}
]

$onlyIf[$guildChannelExists[$guildID;$getGuildVar[welcomechannel]]==true;The channel used for the Welcomer channel seems to be deleted.
Cancelled sending the message as a result. Please set a new channel to fix this.
{ephemeral}
{interaction}
]

$onlyIf[$getGuildVar[welcomechannel]!=none;There is no channel set to test the Welcomer message.
Please set a new channel first.
{ephemeral}
{interaction}
]

$onlyIf[$getGuildVar[welcomesystem]==on;Cannot test when the Welcomer feature is disabled. Please, enable it first before you can proceed.
{ephemeral}
{interaction}
]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==welcomertestmessagebutton;]

`
    
},{
    type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Placeholders}{description:Placeholders allows you to make your custom Welcomer message unique. Use the current ones available in this list!}{field:Member-related:
\`<username>\` - Returns the member's username
\`<mention>\` - Pings the new member
\`<id>\` - Returns the new member's id
\`<creationdate>\` - Returns the date when the member joined Discord
\`<position>\` - Returns the join position of the member
}{field:Server-related:
\`<owner.username>\` - Returns the username of the server owner
\`<owner.id>\` - Returns the id of the server owner
\`<server.name>\` - Returns the server name
\`<server.totalMembers>\` - Returns the amount of members in the server
\`<server.id>\` - Returns the server id

}}{actionRow:{button:Go back:2:welsettings_$authorID:false:↩️}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==welcomerplaceholders;]`
}]
