module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `

$interactionModal[Channel to set.;leavesetchannel;
{actionRow:
    {textInput:Channel id to use:1:leaveidInput:true:channel id here:0:200}
  }]


 $onlyif[$get[authorID]==$interactionData[author.id];
  {newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyif[$get[customId]==leavechannel;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_]
`
},{
name: "leavesetchannel",
type: "interaction",
prototype: "modal",
code: `$setGuildVar[leavechannel;$textInputValue[leaveidInput]]
$interactionReply[Successfully set <#$textInputValue[leaveidInput]> as the leave channel!;;;;all;true]

$onlyIf[$hasPermsInChannel[$textInputValue[leaveidInput];$clientID;sendmessages]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$textInputValue[leaveidInput]>:
\`SendMessages\`
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$textInputValue[leaveidInput]!=$getGuildVar[leavechannel];
This channel is already used for saying goodbye to members. Please set a different channel id instead
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$channelType[$textInputValue[leaveidInput]]==text;We only support text Channels for now.
Make sure to set an text channel instead.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$guildChannelExists[$guildID;$textInputValue[leaveidInput]]==true;Either the channel id you provided is invalid or does not exist inside this server.
Please set a valid channel which exists inside this server.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]


`
},{
    name: "leavetest",
    type: "interaction",
    $if: "old",
    prototype: "button",
    code: `
$interactionReply[Successfully tested the leaving to the leave channel.;;;;all;true]
$if[$charCount[$getGuildVar[leavemessage]]>=2000||$getGuildVar[leavetype]==embed]
$channelSendMessage[$getGuildVar[leavechannel];
**This is a test leave message! Please ignore this.**
{newEmbed:{author:Member Left:$authorAvatar}{description:$nonEscape[$get[content]]}{thumbnail:$authorAvatar}{color:Red}}
]
$else
$channelSendMessage[$getGuildVar[leavechannel];
$nonEscape[**This is a test leave message! Please ignore this.**

$get[content]]
]
$endif

$let[content;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[leavemessage];undefined;Goodbye $username! We now have $membersCount members left!];<username>;$username];<mention>;<@$authorID>];<id>;$authorID];<owner.username>;$username[$guildOwnerID]];<server.name>;$guildName];<owner.id>;$guildOwnerID];<server.id>;$guildID];<creationdate>;$creationDate[$authorID;date]];<leave.time>;<t:$truncate[$divide[$datestamp;1000]]:d>]]

$onlyIf[$hasPermsInChannel[$getGuildVar[leavechannel];$clientID;sendmessages]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$getGuildVar[leavechannel]>:
\`SendMessages\`
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$guildChannelExists[$guildID;$getGuildVar[leavechannel]]==true;The channel used for the leave channel seems to be deleted.
Cancelled test leave as a result. Please set a new channel instead.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$getGuildVar[leavechannel]!=none;There is no channel set to test the leave message.
Please set a new channel first.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$getGuildVar[leavesystem]==true;Cannot test when the leave feature is disabled.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
 
$disableMentionType[roles]
$disableMentionType[everyone]
`
},{
    type: "interaction",
    prototype: "button",
    $if: "old",
    code:`$if[$getGuildVar[leavesystem]==false]
$setGuildVar[leavesystem;true]
$interactionReply[Successfully enabled Leave system!;;;;all;true]
$elseif[$getGuildVar[leavesystem]==true]
$setGuildVar[leavesystem;false]
$interactionReply[Successfully disabled Leave system!;;;;all;true]
$endelseif
$endif

$onlyif[$get[authorID]==$interactionData[author.id];
{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyif[$get[customId]==enableleave;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_] 

`

},{
    type: "interaction", 
    prototype: "button",
    code:`$interactionReply[;{newEmbed:{title:Leave Settings}{description:Here are the avaliable options to choose from#COLON#

\`Text\`#COLON# text to use for the custom message.
\`Type\`#COLON# use text or embed?

**Current Settings**
**Type (Welcome message type)**#COLON# \`$getGuildVar[leavesystem]\`
To check your leave message, you may need to click/tap the "Test Leave" button.
}};{actionRow:{button:Text:2:leavetext:false}{button:Type:1:leavemode:false}{button:Funcs:2:leavefuncs:false}{button:Test Leave:2:leavetest:false}};;all;true]

$onlyif[$get[authorID]==$interactionData[author.id];
{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyif[$get[customId]==leavesetting;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_] 
`
},{ 
    name: "leavetext",
    type: "interaction",
    prototype: "button",
    code: `$interactionModal[Message to use.;leavetextmodal;
{actionRow:
    {textInput:Custom message to use.:2:textInput:true:e.g Goodbye <username>:0:2000}
  }]`
},{
    name: "leavetextmodal",
    type: "interaction",
    prototype: "modal",
    code: `$setGuildVar[leavemessage;$textInputValue[textInput]]
$interactionReply[Successfully set the leave message.;;;;all;true]
`
},{
    name: "leavemode",
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[;{newEmbed:{title:Leave message Type}{description:

**Important**
This feature is currently in beta so no customizations is available for now.

**Information**
There are two types when it comes to our leave message types!
**Text**
**Embed**

By default, \`Text\` type is used for leave message type when you first setup the welcome system in a server. This type will not work if the leave message has at least 2000 characters which in this case, we will use the \`Embed\` type due to discord's character limit for bots.

Embeds are mainly just your leave message in embed description with the member who's leaving being mentioned in embed author and a random embed color used by Default. There is nothing fancy when it comes to this type so.}};{actionRow:{button:Text:1:leavetextmode:false}{button:Embed:1:leaveembedmode:false}};;all;true]
`
},{
    name: "leavetextmode",
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[Successfully changed leave message to use texts now.;;;;all;true]
$setGuildVar[leavetype;text]

$onlyIf[$getGuildVar[leavetype]!=text;
You're already using text mode for welcome message!
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
`
},{
    name: "leaveembedmode",
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[Successfully changed leave message to use embeds now.;;;;all;true]
$setGuildVar[leavetype;embed]

$onlyIf[$getGuildVar[leavetype]!=embed;
You're already using embed mode for leave message!
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
`
},{
    name: "leavefuncs",
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[;{newEmbed:{title:Special Functions.}{description:We offer unique Functions that you can use for your custom message. Check them out.}{field:Member related:
\`<username>\` - obviously returns the member's username who left the server
\`<mention>\` - Pings the member who left the server
\`<id>\` - returns the member's id who left the server
\`<creationdate>\` - returns the date when the member joined Discord
}{field:Server Related:
\`<owner.username>\` - returns the username of the server owner
\`<owner.id>\` - returns the id of the server owner
\`<server.name>\` - returns the server name
\`<server.id>\` - returns the server id
}{field:Extra:
\`<leave.time>\` - displays the time when the user left the server
}};;;all;true]
`
}]