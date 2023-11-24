module.exports = [{
    type: "interaction",
    prototype: "selectMenu",
    code: `$interactionReply[;{newEmbed:{title:Server Settings}{description:
        Select an option which you want to change?
    
    **Current Settings**
    **Beta access**#COLON# \`$get[betaserver]\`
    
    **Option Types**
    **Toggle**#COLON# Click/tap on the option to enable! Click/tap again to disable.
    **Select**#COLON# Available customization for This Option to Choose.
    
    }};{actionRow:{selectMenu:serversettingsmenu_$authorID:Select an option to view information about.:1:1:false:{selectMenuOptions:Beta access:serverbeta:Allow everyone to use beta commands!:false}}};;all;true]
    

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
    {options:{ephemeral: true}}
    {extraOptions:{interaction: true}}
    ]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==settingsmenu;]

    $onlyIf[$interactionData[values[0]]==servermenu;]
    $let[betaserver;$replaceText[$replaceText[$getGuildVar[betaserver];true;Enabled];false;Disabled]]
    `
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionUpdate[;{newEmbed:{title:Beta access}{description:
            Allow anyone who're part of beta commands system to use beta commands in this server. This is not recommended for public servers as beta commands are not fully stable for release! Use this at your own risk!
    Option Type: \`toggle\`


        }};{actionRow:{selectMenu:serversettingsmenu_$authorID:Select an option to view information about.:1:1:false:{selectMenuOptions:Beta access:serverbeta:Allow everyone to use beta commands!:false}}}{actionRow:{button:Toggle:1:serverbeta:false}}]

        $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
    {options:{ephemeral: true}}
    {extraOptions:{interaction: true}}
    ]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==serversettingsmenu;]

    $onlyIf[$interactionData[values[0]]==serverbeta;]
    `
    },{
        name: "serverbeta",
        type: "interaction",
        prototype: "button",
        $if: "old",
        code: `$if[$getGuildVar[betaserver]==false]
    $setGuildVar[betaserver;true]
    $interactionReply[Successfully enabled beta access for everyone in this server!;;;;all;true]
    $elseif[$getGuildVar[betaserver]==true]
    $setGuildVar[betaserver;false]
    $interactionReply[Successfully disabled beta access for everyone in this server!;;;;all;true]
    $endelseif
    $endif
    
    `
    }]
