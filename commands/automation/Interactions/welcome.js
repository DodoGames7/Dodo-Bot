module.exports = [{
type: "interaction",
prototype: "button",
code: `$interactionModal[Channel to set.;welsetchannel;
{actionRow:
    {textInput:Channel id to use:1:idInput:true:channel id here:0:200}
  }]

$onlyif[$get[authorID]==$interactionData[author.id];
{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyif[$get[customId]==welchannel;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_] 

  `
},{
name: "welsetchannel",
type: "interaction",
prototype: "modal",
code: `$setGuildVar[welcomechannel;$textInputValue[idInput]]
$interactionReply[Successfully set <#$textInputValue[idInput]> as the welcome channel!;;;;all;true]

$onlyIf[$hasPermsInChannel[$textInputValue[idInput];$clientID;sendmessages]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$textInputValue[idInput]>:
\`SendMessages\`
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$textInputValue[idInput]!=$getGuildVar[welcomechannel];
This channel is already used for welcoming members. Please set a different channel id instead
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$channelType[$textInputValue[idInput]]==text;We only support text Channels for now.
Make sure to set an text channel instead.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$guildChannelExists[$guildID;$textInputValue[idInput]]==true;Either the channel id you provided is invalid or does not exist inside this server.
Please set a valid channel which exists inside this server.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]


`
},{
    name: "weltest",
    type: "interaction",
    prototype: "button",
    $if: "old",
    code:`$interactionReply[Successfully tested the greeting to the welcome channel.;;;;all;true]
$if[$charCount[$getGuildVar[welcomemessage]]>=2000||$getGuildVar[welcometype]==embed]
$channelSendMessage[$getGuildVar[welcomechannel];
**This is a test welcome message! Please ignore this.**
{newEmbed:{author:Member Joined:$authorAvatar}{description:$nonEscape[$get[content]]}{thumbnail:$authorAvatar}{color:Green}}
]
$else
$channelSendMessage[$getGuildVar[welcomechannel];
$nonEscape[**This is a test welcome message! Please ignore this.**

$get[content]]
]
$endif

$let[content;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[welcomemessage];undefined;Welcome to the server $username!];<username>;$username];<mention>;<@$authorID>];<id>;$authorID];<owner.username>;$username[$guildOwnerID]];<server.name>;$guildName];<owner.id>;$guildOwnerID];<server.id>;$guildID];<creationdate>;$creationDate[$authorID;date]];<position>;$memberJoinPosition]]

$onlyIf[$hasPermsInChannel[$getGuildVar[welcomechannel];$clientID;sendmessages]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$getGuildVar[welcomechannel]>:
\`SendMessages\`
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$guildChannelExists[$guildID;$getGuildVar[welcomechannel]]==true;The channel used for the welcome channel seems to be deleted.
Cancelled test greeting as a result. Please set a new channel instead.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$getGuildVar[welcomechannel]!=none;There is no channel set to test the welcome message.
Please set a new channel first.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$getGuildVar[welcomesystem]==true;Cannot test when the welcome feature is disabled.
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
    code:`$if[$getGuildVar[welcomesystem]==false]
$setGuildVar[welcomesystem;true]
$interactionReply[Successfully enabled Welcome system!;;;;all;true]
$elseif[$getGuildVar[welcomesystem]==true]
$setGuildVar[welcomesystem;false]
$interactionReply[Successfully disabled Welcome system!;;;;all;true]
$endelseif
$endif

$onlyif[$get[authorID]==$interactionData[author.id];
{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyif[$get[customId]==enablewel;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_] 

`

},{
    type: "interaction", 
    prototype: "button",
    code:`$interactionReply[;{newEmbed:{title:Welcome Settings}{description:Here are the avaliable options to choose from#COLON#

\`Text\`#COLON# text to use for the custom message.
\`Type\`#COLON# use text or embed?

**Current Settings**
**Type (Welcome message type)**#COLON# \`$getGuildVar[welcometype]\`
To check your welcome message, you may need to click/tap the "Test greeting" button.
}};{actionRow:{button:Text:2:welcometext:false}{button:Type:1:welcomemode:false}{button:Funcs:2:welfuncs:false}{button:Test greeting:2:weltest:false}};;all;true]

$onlyif[$get[authorID]==$interactionData[author.id];
{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyif[$get[customId]==welsetting;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_] 
`
},{ 
    name: "welcometext",
    type: "interaction",
    prototype: "button",
    code: `$interactionModal[Message to use.;welcometextmodal;
{actionRow:
    {textInput:Custom message to use.:2:textInput:true:e.g Welcome <username>:0:2000}
  }]`
},{
    name: "welfuncs",
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[;{newEmbed:{title:Special Functions.}{description:We offer unique Functions that you can use for your custom message. Check them out.}{field:New Member related:
\`<username>\` - obviously returns the new member's username
\`<mention>\` - Pings the new member
\`<id>\` - returns the new member's id
\`<creationdate>\` - returns the date when the member joined Discord
\`<position>\` - returns the join position of the member
}{field:Server Related:
\`<owner.username>\` - returns the username of the server owner
\`<owner.id>\` - returns the id of the server owner
\`<server.name>\` - returns the server name
\`<server.id>\` - returns the server id

}};;;all;true]
`
},{
    name: "welcometextmodal",
    type: "interaction",
    prototype: "modal",
    code: `$setGuildVar[welcomemessage;$textInputValue[textInput]]
$interactionReply[Successfully set the welcome message.;;;;all;true]
`
},{
    name: "welcomemode",
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[;{newEmbed:{title:Welcome message Type}{description:

**Important**
This feature is currently in beta so no customizations is available for now.

**Information**
There are two types when it comes to our welcome message types!
**Text**
**Embed**

By default, \`Text\` type is used for welcome message type when you first setup the welcome system in a server. This type will not work if the welcome message has at least 2000 characters which in this case, we will use the \`Embed\` type due to discord's character limit for bots.

Embeds are mainly just your welcome message in embed description with the new member being mentioned in embed author and a random embed color used by Default. There is nothing fancy when it comes to this type so.}};{actionRow:{button:Text:1:weltextmode:false}{button:Embed:1:welembedmode:false}};;all;true]
`
},{
    name: "weltextmode",
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[Successfully changed welcome message to use texts now.;;;;all;true]
$setGuildVar[welcometype;text]

$onlyIf[$getGuildVar[welcometype]!=text;
You're already using text mode for welcome message!
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
`
},{
    name: "welembedmode",
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[Successfully changed welcome message to use embeds now.;;;;all;true]
$setGuildVar[welcometype;embed]

$onlyIf[$getGuildVar[welcometype]!=embed;
You're already using embed mode for welcome message!
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
`
}]