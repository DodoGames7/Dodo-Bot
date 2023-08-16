module.exports = [{
    type: "interaction",
    prototype: "selectMenu",
    code: `$interactionReply[;{newEmbed:{title:Server Settings}{description:What settings do you want to change?
    
    **What is each option about?**
    **Beta access**#COLON# allow Dodo-Bot beta command testers to use beta commands in this server. This is not recommended for public servers as beta commands are not fully stable for release! Use this at your own risk!
    Option Type: \`toggle\`
    
    **Current Settings**
    **Beta access**#COLON# \`$get[betaserver]\`
    
    **Option Types**
    **Toggle**#COLON# Click/tap on the option to enable! Click/tap again to disable.
    **Select**#COLON# Available customization for This Option to Choose.
    
    }};{actionRow:{button:Beta access:1:serverbeta:false}};;all;true]
    
    $onlyif[$get[authorID]==$interactionData[author.id];
      {newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
    {options:{ephemeral: true}}
    {extraOptions:{interaction: true}}
    ]
    
    $onlyif[$get[customId]==settingsmenu;]
    $let[authorID;$splitText[2]]
    $let[customId;$splitText[1]] 
    $textSplit[$interactionData[customId];_]
    $onlyIf[$interactionData[values[0]]==servermenu;]
    $let[betaserver;$replaceText[$replaceText[$getGuildVar[betaserver];true;Enabled];false;Disabled]]
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