module.exports = [{
type: "interaction",
prototype: "button",
code: `$interactionModal[Channel to set;leavesetchannelresult;
{actionRow:
    {textInput:Channel id to use:1:idInput:true:channel id here:0:200}
  }]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==leavesetchannel;]

  `
},{
    type: "interaction",
    prototype: "button",
    code: 
    `$interactionUpdate[{newEmbed:{title:Leave}{description:Leave just like Welcomer is a way to setup an channel where the bot says goodbye to members leaving your server!

To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the \`Settings\` button.

$get[leavesystem]

}{color:$getVar[embedcolor]}}{actionRow:{button:Toggle:2:enableleave_$authorID:false:🔄}{button:Settings:4:leavesetting_$authorID:false}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]
$let[leavesystem;$replaceText[$replaceText[$getGuildVar[leavesystem];off;*Leave is currently disabled*];on;*Leave is currently enabled*]]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==Leavehomebutton;]
`
},{
name: "leavesetchannelresult",
type: "interaction",
prototype: "modal",
code: `
$interactionFollowUp[Successfully set <#$textInputValue[idInput]> as the leave channel!;true]

$interactionUpdate[{newEmbed:{title:Leave Settings}{description:Welcome to Leave settings! Select an option to change.

**Current Settings**
**Type (Leave message type)#COLON#** \`$getGuildVar[leavetype]\`
**Channel#COLON#** $get[leavechannel]
To check your Leave message, you may need to either press the "Test Message" button or \`Set Message\` button instead.
}}{actionRow:{selectMenu:leavemenu_$authorID:Select other options to view about.:1:1:false:{stringInput:Leave type:leavemode:Type of the Leave message to be used!:false}{stringInput:Placeholders:leaveplaceholder:Placeholders to use for the Leave message!:false}}}{actionRow:{button:Home:2:leavehomebutton_$authorID:false:🏠}{button:Set channel:2:leavesetchannel_$authorID:false}{button:Set Message:2:leavetext_$authorID:false}{button:Test Message:2:leavetest_$authorID:false}}]


$let[leavechannel;$replaceText[$replaceText[$checkCondition[$getGuildVar[leavechannel]==none];true;None];false;<#$getGuildVar[leavechannel]> (\`$getGuildVar[leavechannel]\`)]]
$setGuildVar[leavechannel;$textInputValue[idInput]]


$onlyIf[$hasPermsInChannel[$textInputValue[idInput];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$textInputValue[idInput]>:
\`ViewChannel\`
\`SendMessages\`
{ephemeral}
{interaction}
]

$onlyIf[$textInputValue[idInput]!=$getGuildVar[leavechannel];
This channel is already used for saying goodbye to members. Please set a different channel id instead
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
    code:`$interactionReply[Successfully sent the message to the leave channel for testing!;all;true]
$if[$charCount[$getGuildVar[leavemessage]]>=2000||$getGuildVar[leavetype]==embed]
$channelSendMessage[$getGuildVar[leavechannel];
**This is a test leave message! Please, ignore this!**
{newEmbed:{author:Member Left:$authorAvatar}{description:$nonEscape[$get[content]]}{thumbnail:$authorAvatar}{color:Red}}
]
$else
$channelSendMessage[$getGuildVar[leavechannel];
$nonEscape[**This is a test leave message! Please, ignore this.**

$get[content]]
]
$endif

$let[content;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[leavemessage];<server.totalMembers>;$membersCount];<username>;$username];<mention>;<@$authorID>];<id>;$authorID];<owner.username>;$username[$guildOwnerID]];<server.name>;$guildName];<owner.id>;$guildOwnerID];<server.id>;$guildID];<creationdate>;$creationDate[$authorID;date]];<leave.time>;<t:$truncate[$divide[$datestamp;1000]]:f>]]

$onlyIf[$hasPermsInChannel[$getGuildVar[leavechannel];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$getGuildVar[leavechannel]>:
\`ViewChannel\`
\`SendMessages\`
{ephemeral}
{interaction}
]

$onlyIf[$guildChannelExists[$guildID;$getGuildVar[leavechannel]]==true;The channel used for the leave channel seems to be deleted.
Cancelled sending the message as a result. Please set a new channel to fix this.
{ephemeral}
{interaction}
]

$onlyIf[$getGuildVar[leavechannel]!=none;There is no channel set to test the leave message.
Please set a new channel first.
{ephemeral}
{interaction}
]

$onlyIf[$getGuildVar[leavesystem]==on;Cannot test when the leave feature is disabled. Please, enable it first before you can proceed.
{ephemeral}
{interaction}
]

$disableMentionType[roles]
$disableMentionType[everyone]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==leavetest;]

`
    
},{
    type: "interaction",
    prototype: "button",
    code:`


$interactionFollowUp[$get[resultmessage];true]
$interactionUpdate[{newEmbed:{title:Leave}{description:Leave just like Welcomer is a way to setup an channel where the bot says goodbye to members leaving your server!

To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the \`Settings\` button.

$get[leave]

}{color:$getVar[embedcolor]}}{actionRow:{button:Toggle:2:enableleave_$authorID:false:🔄}{button:Settings:4:leavesetting_$authorID:false}}]



$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]

$let[leavesystem;$replaceText[$replaceText[$checkCondition[$getGuildVar[leavesystem]==on];false;*Leave is currently disabled*];true;*Leave is currently enabled*]]
$let[resultmessage;$replaceText[$replaceText[$checkCondition[$getGuildVar[leavesystem]==on];true;Successfully enabled Leave!];false;Successfully disabled Leave!]]
$setGuildVar[leavesystem;$get[newtoggledsetting];$guildID]
$let[newtoggledsetting;$replaceText[$replaceText[$checkCondition[$getGuildVar[leavesystem]==on];true;off];false;on]]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==enableleave;]

`

},{
    type: "interaction", 
    prototype: "button",
    code:`$interactionUpdate[{newEmbed:{title:Leave Settings}{description:Welcome to Leave settings! Select an option to change.

**Current Settings**
**Type (Leave message type)#COLON#** \`$getGuildVar[leavetype]\`
**Channel#COLON#** $get[leavechannel]
To check your Leave message, you may need to either press \`Test Message\` button or \`Set Message\` button instead.
}}{actionRow:{selectMenu:leavemenu_$authorID:Select other options to view about.:1:1:false:{stringInput:Leave type:leavemode:Type of the Leave message to be used!:false}{stringInput:Placeholders:leaveplaceholder:Placeholders to use for the leave message!:false}}}{actionRow:{button:Home:2:leavehomebutton_$authorID:false:🏠}{button:Set channel:2:leavesetchannel_$authorID:false}{button:Set Message:2:leavetext_$authorID:false}{button:Test Message:2:leavetest_$authorID:false}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==leavesetting;]

$let[leavechannel;$replaceText[$replaceText[$checkCondition[$getGuildVar[leavechannel]==none];true;None];false;<#$getGuildVar[leavechannel]> (\`$getGuildVar[leavechannel]\`)]]
 
`
},{ 
    type: "interaction",
    prototype: "button",
    code: `$interactionModal[Message to use;leavetextmodal;
{actionRow:
    {textInput:Custom message to use:2:textInput:true:e.g Goodbye <username>:0:3000:$getGuildVar[leavemessage]}
  }]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==leavetext;]
`
},{
    type: "interaction",
    prototype: "selectMenu",
    code: `$interactionUpdate[{newEmbed:{title:Placeholders}{description:Placeholders allows you to make your custom Leave message unique. Use the current ones available in this list!}{field:Member-related functions:
\`<username>\` - Returns the member's username
\`<mention>\` - Pings the member
\`<id>\` - Returns the new member's id
\`<creationdate>\` - Returns the date when the member joined Discord
\`<position>\` - Returns the join position of the member
}{field:Server functions:
\`<owner.username>\` - Returns the username of the server owner
\`<owner.id>\` - Returns the id of the server owner
\`<server.name>\` - Returns the server name
\`<server.totalMembers>\` - Returns the amount of members in the server
\`<server.id>\` - Returns the server id
}{field:Extras:
\`<leave.time>\` - Displays the time when the user left the server
}}{actionRow:{button:Go back:2:leavesetting_$authorID:false:↩️}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]

$onlyIf[$getSelectMenuValues[all]==leaveplaceholder;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==leavemenu;]

`
},{
    name: "leavetextmodal",
    type: "interaction",
    prototype: "modal",
    code: `$setGuildVar[leavemessage;$textInputValue[textInput]]
$interactionReply[Successfully set the new leave message!;all;true]
`
},{
    type: "interaction",
    prototype: "selectMenu",
    code: `$interactionUpdate[{newEmbed:{title:Leave message Type}{description:

**Information**
There are two types when it comes to our Leave message types!
* **Text**
* **Embed**

By default, \`Text\` type is used for Leave message type when you first setup Leave in a server. This type will not work if the message has at least 2000 characters which in this case, we will use the \`Embed\` type due to discord's character limit for bots.

Embeds are mainly just your Leave message in embed description with the member leaving being mentioned in embed author and a random embed color used by Default. There is nothing fancy when it comes to this type so.}}{actionRow:{button:Go back:2:leavesetting_$authorID:false:⬅️}{button:Text:2:leavetextmode_$authorID:false}{button:Embed:2:leaveembedmode_$authorID:false}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]

$onlyIf[$getSelectMenuValues[all]==leavemode;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==leavemenu;]

`
},{
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[Successfully changed Leave message to use Text from now on!;all;true]
$setGuildVar[leavetype;text]

$onlyIf[$getGuildVar[leavetype]!=text;
You're already using text mode for leave message!
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==leavetextmode;]

`
},{
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[Successfully changed Leave message to use Embeds from now on!;all;true]
$setGuildVar[leavetype;embed]

$onlyIf[$getGuildVar[leavetype]!=embed;
You're already using embed mode for leave message!
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==leaveembedmode;]

`
}]