module.exports = [{
type: "interaction",
prototype: "selectMenu",
code: `$setGuildVar[suggestionchannel;$interactionData[values[0]]]
$interactionReply[$interactionData[values[0]] is now the suggestion channel!;;;;all;true]

$onlyIf[$interactionData[values[0]]!=$getGuildVar[suggestionchannel];
This channel is already used! Please use a different channel instead.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
$onlyIf[$hasPermsInChannel[$interactionData[values[0]];$clientID;sendmessages;viewchannel;addreactions]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following for the channel <#$interactionData[values[0]]>:
\`ViewChannel\`
\`SendMessages\`
\`AddReactions\`
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$channelType[$interactionData[values[0]]]==text;
We only support text channels for now.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==suggestmenu;]
`
},{
type: "interaction",
prototype: "selectMenu",
code: `$setGuildVar[pollchannel;$interactionData[values[0]]]
$interactionReply[$interactionData[values[0]] is now the poll channel!;;;;all;true]

$onlyIf[$interactionData[values[0]]!=$getGuildVar[pollchannel];
This channel is already used! Please use a different channel instead.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
$onlyIf[$hasPermsInChannel[$interactionData[values[0]];$clientID;sendmessages;viewchannel;addreactions]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following for the channel <#$interactionData[values[0]]>:
\`ViewChannel\`
\`SendMessages\`
\`AddReactions\`
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$channelType[$interactionData[values[0]]]==text;
We only support text channels for now.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==pollmenu;]
`
},{
type: "interaction",
prototype: "selectMenu",
code: `$setGuildVar[msglogdeletedchannel;$interactionData[values[0]]]
$interactionReply[$interactionData[values[0]] is now the message delete logging channel!;;;;all;true]

$onlyIf[$interactionData[values[0]]!=$getGuildVar[msglogdeletedchannel];
This channel is already used! Please use a different channel instead.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
$onlyIf[$hasPermsInChannel[$interactionData[values[0]];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following for the channel <#$interactionData[values[0]]>:
\`ViewChannel\`
\`SendMessages\`
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$channelType[$interactionData[values[0]]]==text;
We only support text channels for now.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==msgdeletelogmenu;]
`
},{
type: "interaction",
prototype: "selectMenu",
code: `$setGuildVar[banneduserschannel;$interactionData[values[0]]]
$interactionReply[$interactionData[values[0]] is now the ban logging channel!;;;;all;true]

$onlyIf[$interactionData[values[0]]!=$getGuildVar[banneduserschannel];
This channel is already used! Please use a different channel instead.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
$onlyIf[$hasPermsInChannel[$interactionData[values[0]];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following for the channel <#$interactionData[values[0]]>:
\`ViewChannel\`
\`SendMessages\`
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$channelType[$interactionData[values[0]]]==text;
We only support text channels for now.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==banlogmenu;]
`
},{
type: "interaction",
prototype: "selectMenu",
code: `$setGuildVar[unbanneduserschannel;$interactionData[values[0]]]
$interactionReply[$interactionData[values[0]] is now the unban logging channel!;;;;all;true]

$onlyIf[$interactionData[values[0]]!=$getGuildVar[unbanneduserschannel];
This channel is already used! Please use a different channel instead.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
$onlyIf[$hasPermsInChannel[$interactionData[values[0]];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following for the channel <#$interactionData[values[0]]>:
\`ViewChannel\`
\`SendMessages\`
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$channelType[$interactionData[values[0]]]==text;
We only support text channels for now.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==unbanlogmenu;]
`
},{
type: "interaction",
prototype: "selectMenu",
code: `$setGuildVar[msglogeditchannel;$interactionData[values[0]]]
$interactionReply[$interactionData[values[0]] is now the message edit logging channel!;;;;all;true]

$onlyIf[$interactionData[values[0]]!=$getGuildVar[msglogeditchannel];
This channel is already used! Please use a different channel instead.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
$onlyIf[$hasPermsInChannel[$interactionData[values[0]];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following for the channel <#$interactionData[values[0]]>:
\`ViewChannel\`
\`SendMessages\`
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$channelType[$interactionData[values[0]]]==text;
We only support text channels for now.
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{options:{ephemeral: true}}
{extraOptions:{interaction: true}}
]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==msgeditlogmenu;]
`
}]
