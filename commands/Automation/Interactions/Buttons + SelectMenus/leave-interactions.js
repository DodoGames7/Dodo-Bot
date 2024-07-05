module.exports = [{
    type: "interaction",
    prototype: "button",
    code: 
    `$interactionUpdate[{newEmbed:{title:Leave}{description:Leave just like Welcomer is a way to setup an channel where the bot says goodbye to members leaving your server!

To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the \`Settings\` button.

$get[leavesystem]

}{color:$getVar[embedcolor]}}{actionRow:{button:Toggle:2:toggleleave_$authorID:false:🔄}{button:Settings:4:leavesettings_$authorID:false}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]
$let[leavesystem;$advancedReplaceText[$getGuildVar[leavesystem];off;*Leave is currently disabled*;on;*Leave is currently enabled*]]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==leavehomebutton;]
`
},{
    type: "interaction",
    prototype: "button",
    code:`


$interactionFollowUp[$get[resultmessage];true]
$interactionUpdate[{newEmbed:{title:Leave}{description:Leave just like Welcomer is a way to setup an channel where the bot says goodbye to members leaving your server!

To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the \`Settings\` button.

$get[leavesystem]

}{color:$getVar[embedcolor]}}{actionRow:{button:Toggle:2:toggleleave_$authorID:false:🔄}{button:Settings:4:leavesettings_$authorID:false}}]



$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]

$let[leavesystem;$advancedReplaceText[$checkCondition[$getGuildVar[leavesystem]==on];false;*Leave is currently disabled*;true;*Leave is currently enabled*]]
$let[resultmessage;$advancedReplaceText[$checkCondition[$getGuildVar[leavesystem]==on];true;Successfully enabled Leave!;false;Successfully disabled Leave!]]
$setGuildVar[leavesystem;$get[newtoggledsetting];$guildID]
$let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGuildVar[leavesystem]==on];true;off;false;on]]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==toggleleave;]

`

},{
    type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Leave Settings}{description: Welcome to Leave settings! Select an option to change.

**Current Settings**
**Channel#COLON#** $get[leavechannel]
**Message Type#COLON#** \`$toLocaleUpperCase[$getGuildVar[leavetype]]\`}}{actionRow:{button:Home:2:leavehomebutton_$authorID:false:🏠}{button:Channel:2:leavechannelbutton_$authorID:false}{button:Message:2:leavemessagebutton_$authorID:false}{button:Placeholders:2:leaveplaceholders_$authorID:false}}]

$let[leavechannel;$replaceText[$replaceText[$checkCondition[$getGuildVar[leavechannel]==none];true;None];false;<#$getGuildVar[leavechannel]> (\`$getGuildVar[leavechannel]\`)]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==leavesettings;]
`
},{
        type: "interaction",
        prototype: "button",
        code: `$interactionUpdate[{newEmbed:{title:Channel Setup}{description:Choose a channel for Leave messages to be sent in. Use the select menu below for the channel to use!
    
    **Current Settings**
    **Channel#COLON#** $get[leavechannel]
    
    **Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
    
    }}{actionRow:{selectMenu:leavechannelmenusetup_$authorID:Select a channel to use.:1:1:false:{channelInput:Text}}}{actionRow:{button:Go back:2:leavesettings_$authorID:false:↩️}}]
    
    $let[leavechannel;$advancedReplaceText[$checkCondition[$getGuildVar[leavechannel]==none];true;None;false;<#$getGuildVar[leavechannel]> (\`$getGuildVar[leavechannel]\`)]]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==leavechannelbutton;]
    `
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionFollowUp[<#$getSelectMenuValues[all]> will now be used for Leave messages!;true]
    
    $interactionUpdate[{newEmbed:{title:Channel Setup}{description:Choose a channel for Leave messages to be sent in. Use the select menu below for the channel to use!
    
    **Current Settings**
    **Channel#COLON#** $get[leavechannel]
    
    **Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
    
    }}{actionRow:{selectMenu:leavechannelmenusetup_$authorID:Select a channel to use.:1:1:false:{channelInput:Text}}}{actionRow:{button:Go back:2:leavesettings_$authorID:false:↩️}}]
    
    $let[leavechannel;$advancedReplaceText[$checkCondition[$getGuildVar[leavechannel]==none];true;None;false;<#$getGuildVar[leavechannel]> (\`$getGuildVar[leavechannel]\`)]]
    
    $setGuildVar[leavechannel;$getSelectMenuValues[all]]
    
    $onlyIf[$hasPermsInChannel[$getSelectMenuValues[all];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$getSelectMenuValues[all]>:
    \`ViewChannel\`
    \`SendMessages\`
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$getSelectMenuValues[all]!=$getGuildVar[leavechannel];
    This channel is already used for Leave messages. Please, set a different channel instead.
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
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==leavechannelmenusetup;]
    
    `
    },{
    type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Message}{description:Welcome to options under the \`Message\` category! Select any option to modify!}}{actionRow:{button:Go back:2:leavesettings_$authorID:false:↩️}{button:Set Message:2:leavesetmsgbutton_$authorID:false}{button:Test Message:2:leavetestmessagebutton_$authorID:false}{button:Type:2:leavemessagetypebutton_$authorID:false}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==leavemessagebutton;]
`
},{
    type: "interaction",
    $if: "old",
    prototype: "button",
    code: `$if[$getGuildVar[leavetype]==embed]
$interactionModal[Message to use;leaveembedmodal;
{actionRow:
    {textInput:Custom message to use:2:textInput:true:Goodbye <username>!:0:3750:$getGuildVar[leavemessage]}
  }
{actionRow:
    {textInput:Embed color to use:1:hexInput:true:#9B59B6:0:7:$getGuildVar[leavemessageembedcolor]}
  }]
$else
$interactionModal[Message to use;leavetextmodal;
{actionRow:
    {textInput:Custom message to use:2:textInput:true:Goodbye <username>!:0:3750:$getGuildVar[leavemessage]}
  }]
$endif

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==leavesetmsgbutton;]
`
},{
    name: "leavetextmodal",
    type: "interaction",
    prototype: "modal",
    code: `
$setGuildVar[leavemessage;$textInputValue[textInput]]
$interactionReply[Successfully set the Leave message!;all;true]
`
},{
  name: "leaveembedmodal",
  type: "interaction",
  prototype: "modal",
  code: `
$setGuildVar[leavemessageembedcolor;$textInputValue[hexInput]]
$setGuildVar[leavemessage;$textInputValue[textInput]]
$interactionReply[Successfully set the Leave message!;all;true]

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
    code: `$interactionUpdate[{newEmbed:{title:Message type}{description:In Leave, there're two types#COLON#

* **Text**
* **Embed**

\`Text\` is the default type used for Leave messages. \`Embed\` will cause the Leave messages to use embeds. It's worth noting that if the Leave message is over 2000 characters then the \`Embed\` mode will be enforced as a result due to Discord's character limits for general messages!

**Current Settings**
**Type#COLON#** \`$toLocaleUpperCase[$getGuildVar[leavetype]]\`}}{actionRow:{button:Go back:2:leavemessagebutton_$authorID:false:↩️}{button:Toggle:2:toggleleavemessagetype_$authorID:false:🔄}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==leavemessagetypebutton;]
`
},{
    type: "interaction",
    prototype: "button",
    code: `$interactionFollowUp[$get[resultmessage];true]
$interactionUpdate[{newEmbed:{title:Message type}{description:In Leave, there're two types#COLON#

* **Text**
* **Embed**

\`Text\` is the default type used for Leave messages. \`Embed\` will cause the Leave messages to use embeds. It's worth noting that if the Leave message is over 2000 characters then the \`Embed\` mode will be enforced as a result due to Discord's character limits for general messages!

**Current Settings**
**Type#COLON#** \`$toLocaleUpperCase[$getGuildVar[leavetype]]\`}}{actionRow:{button:Go back:2:leavemessagebutton_$authorID:false:↩️}{button:Toggle:2:toggleleavemessagetype_$authorID:false:🔄}}]

$let[resultmessage;$advancedReplaceText[$checkCondition[$getGuildVar[leavetype]==embed];true;Leave message will now be in embeds!;false;Leave message will now be in \`Text\` mode!]]
$setGuildVar[leavetype;$get[newtoggledsetting]]
$let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGuildVar[leavetype]==text];true;embed;false;text]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==toggleleavemessagetype;]
`
},{
    type: "interaction",
    prototype: "button",
    code:`$interactionReply[Successfully sent the message to the Leave channel for testing!;all;true]
$ifAwaited[$charCount[$getGuildVar[leavemessage]]>=2000||$getGuildVar[leavetype]==embed;{execute:leaveembedmodetest};{execute:leavetextmodetest}]


$let[content;$advancedReplaceText[$nonEscape[$getGuildVar[leavemessage]];<server.totalMembers>;$membersCount;<username>;$username;<mention>;<@$authorID>;<id>;$authorID;<owner.username>;$username[$guildOwnerID];<server.name>;$guildName;<owner.id>;$guildOwnerID;<server.id>;$guildID;<creationdate>;$creationDate[$authorID;date];<position>;$ordinal[$memberJoinPosition];<leave.time>;<t:$truncate[$divide[$datestamp;1000]]:f>;<Displayname>;$userDisplayName]]

$onlyIf[$hasPermsInChannel[$getGuildVar[leavechannel];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$getGuildVar[leavechannel]>:
\`ViewChannel\`
\`SendMessages\`
{ephemeral}
{interaction}
]

$onlyIf[$guildChannelExists[$guildID;$getGuildVar[leavechannel]]==true;The channel used for the Leave channel seems to be deleted.
Cancelled sending the message as a result. Please set a new channel to fix this.
{ephemeral}
{interaction}
]

$onlyIf[$getGuildVar[leavechannel]!=none;There is no channel set to test the Leave message.
Please set a new channel first.
{ephemeral}
{interaction}
]

$onlyIf[$getGuildVar[leavesystem]==on;Cannot test when the Leave feature is disabled. Please, enable it first before you can proceed.
{ephemeral}
{interaction}
]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==leavetestmessagebutton;]

`
    
},{
    type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Placeholders}{description:Placeholders allows you to make your custom Leave message unique. Use the current ones available in this list!}{field:Member-related:
\`<username>\` - Returns the member's username
\`<mention>\` - Pings the member
\`<Displayname>\` - Returns the member's displayname
\`<id>\` - Returns the member's id
\`<creationdate>\` - Returns the date when the member joined Discord
\`<position>\` - Returns the join position of the member
}{field:Server-related:
\`<owner.username>\` - Returns the username of the server owner
\`<owner.id>\` - Returns the id of the server owner
\`<server.name>\` - Returns the server name
\`<server.totalMembers>\` - Returns the amount of members in the server
\`<server.id>\` - Returns the server id
}{field:Extras:
\`<leave.time>\` - Displays the time when the user left the server
}}{actionRow:{button:Go back:2:leavesettings_$authorID:false:↩️}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==leaveplaceholders;]`
}]
