module.exports = [{
type: "interaction",
prototype: "button",
code: `$interactionModal[Channel to set;welsetchannelresult;
{actionRow:
    {textInput:Channel id to use:1:idInput:true:channel id here:0:200}
  }]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==welsetchannel;]

  `
},{
    type: "interaction",
    prototype: "button",
    code: 
    `$interactionUpdate[{newEmbed:{title:Welcomer}{description:Welcomer is an way to greet new members of your server with your own choice of the message you're going to use it for the server!

To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the "Settings" button.

$get[welcomersystem]

}{color:$getVar[embedcolor]}}{actionRow:{button:Toggle:2:enablewel_$authorID:false:🔄}{button:Settings:4:welsetting_$authorID:false}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]
$let[welcomersystem;$replaceText[$replaceText[$getGuildVar[welcomesystem];off;*Welcomer is currently disabled*];on;*Welcomer is currently enabled*]]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==welcomerhomebutton;]
`
},{
name: "welsetchannelresult",
type: "interaction",
prototype: "modal",
code: `
$interactionFollowUp[Successfully set <#$textInputValue[idInput]> as the Welcomer channel!;true]

$interactionUpdate[{newEmbed:{title:Welcomer Settings}{description:Welcome to Welcomer settings! Select an option to change.

**Current Settings**
**Type (Welcomer message type)#COLON#** \`$getGuildVar[welcometype]\`
**Channel#COLON#** $get[welcomechannel]
To check your Welcomer message, you may need to either press the "Test Message" button or \`Set Message\` button instead.
}}{actionRow:{selectMenu:welcomermenu_$authorID:Select other options to view about.:1:1:false:{stringInput:Welcomer type:welcomermode:Type of the Welcomer message to be used!:false}{stringInput:Placeholders:welplaceholder:Placeholders to use for Welcomer message!:false}}}{actionRow:{button:Home:2:welcomerhomebutton_$authorID:false:🏠}{button:Set channel:2:welsetchannel_$authorID:false}{button:Set Message:2:welcometext_$authorID:false}{button:Test Message:2:weltest_$authorID:false}}]


$let[welcomechannel;$replaceText[$replaceText[$checkCondition[$getGuildVar[welcomechannel]==none];true;None];false;<#$getGuildVar[welcomechannel]> (\`$getGuildVar[welcomechannel]\`)]]
$setGuildVar[welcomechannel;$textInputValue[idInput]]


$onlyIf[$hasPermsInChannel[$textInputValue[idInput];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$textInputValue[idInput]>:
\`ViewChannel\`
\`SendMessages\`
{ephemeral}
{interaction}
]

$onlyIf[$textInputValue[idInput]!=$getGuildVar[welcomechannel];
This channel is already used for welcoming members. Please set a different channel id instead
{ephemeral}
{interaction}
]

$onlyIf[$channelType[$textInputValue[idInput]]==text;We only support Text Channels for now.
Make sure to set an text channel instead.
{ephemeral}
{interaction}
]

$onlyIf[$guildChannelExists[$guildID;$textInputValue[idInput]]==true;Either the channel id you provided is invalid or does not exist inside this server.
Please set a valid channel which exists inside this server.
{ephemeral}
{interaction}
]


`
},{
    type: "interaction",
    prototype: "button",
    $if: "old",
    code:`$interactionReply[Successfully sent the message to the Welcomer channel for testing!;all;true]
$if[$charCount[$getGuildVar[welcomemessage]]>=2000||$getGuildVar[welcometype]==embed]
$channelSendMessage[$getGuildVar[welcomechannel];
**This is a test welcome message! Please, ignore this!**
{newEmbed:{author:Member Joined:$authorAvatar}{description:$nonEscape[$get[content]]}{thumbnail:$authorAvatar}{color:Green}}
]
$else
$channelSendMessage[$getGuildVar[welcomechannel];
$nonEscape[**This is a test welcome message! Please, ignore this.**

$get[content]]
]
$endif

$let[content;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[welcomemessage];<server.totalMembers>;$membersCount];<username>;$username];<mention>;<@$authorID>];<id>;$authorID];<owner.username>;$username[$guildOwnerID]];<server.name>;$guildName];<owner.id>;$guildOwnerID];<server.id>;$guildID];<creationdate>;$creationDate[$authorID;date]];<position>;$memberJoinPosition]]

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

$disableMentionType[roles]
$disableMentionType[everyone]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==weltest;]

`
    
},{
    type: "interaction",
    prototype: "button",
    code:`


$interactionFollowUp[$get[resultmessage];true;false]
$interactionUpdate[{newEmbed:{title:Welcomer}{description:Welcomer is an way to greet new members of your server with your own choice of the message you're going to use it for the server!

To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the "Settings" button.

$get[welcomersystem]

}{color:$getVar[embedcolor]}}{actionRow:{button:Toggle:2:enablewel_$authorID:false:🔄}{button:Settings:4:welsetting_$authorID:false}}]



$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]

$let[welcomersystem;$replaceText[$replaceText[$checkCondition[$getGuildVar[welcomesystem]==on];false;*Welcomer is currently disabled*];true;*Welcomer is currently enabled*]]
$let[resultmessage;$replaceText[$replaceText[$checkCondition[$getGuildVar[welcomesystem]==on];true;Successfully enabled Welcomer!];false;Successfully disabled Welcomer!]]
$setGuildVar[welcomesystem;$get[newtoggledsetting];$guildID]
$let[newtoggledsetting;$replaceText[$replaceText[$checkCondition[$getGuildVar[welcomesystem]==on];true;off];false;on]]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==enablewel;]

`

},{
    type: "interaction", 
    prototype: "button",
    code:`$interactionUpdate[{newEmbed:{title:Welcomer Settings}{description:Welcome to Welcomer settings! Select an option to change.

**Current Settings**
**Type (Welcomer message type)#COLON#** \`$getGuildVar[welcometype]\`
**Channel#COLON#** $get[welcomechannel]
To check your Welcomer message, you may need to press either the "Test Message" button or \`Set Message\` button instead.
}}{actionRow:{selectMenu:welcomermenu_$authorID:Select other options to view about.:1:1:false:{stringInput:Welcomer type:welcomermode:Type of the Welcomer message to be used!:false}{stringInput:Placeholders:welplaceholder:Placeholders to use for Welcomer message!:false}}}{actionRow:{button:Home:2:welcomerhomebutton_$authorID:false:🏠}{button:Set channel:2:welsetchannel_$authorID:false}{button:Set Message:2:welcometext_$authorID:false}{button:Test Message:2:weltest_$authorID:false}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==welsetting;]

$let[welcomechannel;$replaceText[$replaceText[$checkCondition[$getGuildVar[welcomechannel]==none];true;None];false;<#$getGuildVar[welcomechannel]> (\`$getGuildVar[welcomechannel]\`)]]
 
`
},{ 
    type: "interaction",
    prototype: "button",
    code: `$interactionModal[Message to use;welcometextmodal;
{actionRow:
    {textInput:Custom message to use:2:textInput:true:e.g Welcome <username>:0:3000:$getGuildVar[welcomemessage]}
  }]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==welcometext;]
`
},{
    type: "interaction",
    prototype: "selectMenu",
    code: `$interactionUpdate[{newEmbed:{title:Placeholders}{description:Placeholders allows you to make your custom Welcomer message unique. Use the current ones available in this list!}{field:Member-related functions:
\`<username>\` - Returns the member's username
\`<mention>\` - Pings the new member
\`<id>\` - Returns the new member's id
\`<creationdate>\` - Returns the date when the member joined Discord
\`<position>\` - Returns the join position of the member
}{field:Server functions:
\`<owner.username>\` - Returns the username of the server owner
\`<owner.id>\` - Returns the id of the server owner
\`<server.name>\` - Returns the server name
\`<server.totalMembers>\` - Returns the amount of members in the server
\`<server.id>\` - Returns the server id

}}{actionRow:{button:Go back:2:welsetting_$authorID:false:↩️}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]

$onlyIf[$getSelectMenuValues[all]==welplaceholder;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==welcomermenu;]

`
},{
    name: "welcometextmodal",
    type: "interaction",
    prototype: "modal",
    code: `$setGuildVar[welcomemessage;$textInputValue[textInput]]
$interactionReply[Successfully set the Welcomer message!;all;true]
`
},{
    type: "interaction",
    prototype: "selectMenu",
    code: `$interactionUpdate[{newEmbed:{title:Welcomer message Type}{description:

**Information**
There are two types when it comes to our Welcomer message types!
* **Text**
* **Embed**

By default, \`Text\` type is used for Welcomer message type when you first setup Welcomer in a server. This type will not work if the message has at least 2000 characters which in this case, we will use the \`Embed\` type due to discord's character limit for bots.

Embeds are mainly just your Welcomer message in embed description with the new member being mentioned in embed author and a random embed color used by Default. There is nothing fancy when it comes to this type so.}}{actionRow:{button:Go back:2:welsetting_$authorID:false:⬅️}{button:Text:2:weltextmode_$authorID:false}{button:Embed:2:welembedmode_$authorID:false}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]

$onlyIf[$getSelectMenuValues[all]==welcomermode;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==welcomermenu;]

`
},{
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[Successfully changed Welcomer message to use Texts from now on!;all;true]
$setGuildVar[welcometype;text]

$onlyIf[$getGuildVar[welcometype]!=text;
You're already using text mode for Welcomer message!
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==weltextmode;]

`
},{
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[Successfully changed Welcomer message to use Embeds from now on!;all;true]
$setGuildVar[welcometype;embed]

$onlyIf[$getGuildVar[welcometype]!=embed;
You're already using embed mode for Welcomer message!
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==welembedmode;]

`
}]
