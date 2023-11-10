module.exports = {
    type: "interaction",
    prototype: "selectMenu",
    code: `$setGuildVar[suggestionchannel;$interactionData[values[0]]]
    $interactionReply[$interactionData[values[0]] is now the suggestion channel!;;;;all;true]
    
    $onlyIf[$interactionData[values[0]]!=$getGuildVar[suggestionchannel];
    This channel is already used! Please use a different channel instead.
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
    }