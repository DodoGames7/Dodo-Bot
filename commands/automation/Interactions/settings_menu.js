module.exports = [{
    type: "interaction",
    prototype: "selectMenu",
    code: `$interactionReply[;{newEmbed:{title:Dodo Bot Settings}{description: What do you want to customise?
    
    **What is each option about?**
    **Auto Reply**#COLON# having this Option on will allow the bot to respond by just pinging it, Which will let you know on what prefix it currently uses for your server. Disable this If It's used purposefully for spamming.
    Option Type: \`toggle\`
    
    **Current Settings**
    **Auto Reply**#COLON# \`$get[autoreply]\`
    
    **Option Types**
    **Toggle**#COLON# Click/tap on the option to enable! Click/tap again to disable.
    **Select**#COLON# Available customization for This Option to Choose.
    
    }};{actionRow:{button:Auto Reply:1:autoreply:false}};;all;true]
    
      $onlyif[$get[authorID]==$interactionData[author.id];
      {newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
    {options:{ephemeral: true}}
    {extraOptions:{interaction: true}}
    ]
    
    $onlyif[$get[customId]==settingsmenu;]
    $let[authorID;$splitText[2]]
    $let[customId;$splitText[1]] 
    $textSplit[$interactionData[customId];_]
    $onlyIf[$interactionData[values[0]]==botmenu;]
    $let[autoreply;$replaceText[$replaceText[$getGuildVar[autopingreply];true;Enabled];false;Disabled]]
    `
    },{
        name: "autoreply",
        type: "interaction",
        prototype: "button",
        $if: "old",
        code: `$if[$getGuildVar[autopingreply]==true]
    $setGuildVar[autopingreply;false]
    $interactionReply[From now on, I won't reply by pings!;;;;all;true]
    $elseif[$getGuildVar[autopingreply]==false]
    $setGuildVar[autopingreply;true]
    $interactionReply[From now on, I will reply by pings!;;;;all;true]
    $endelseif
    $endif
    
    `
    }]