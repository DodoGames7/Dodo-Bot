module.exports = [{
type: "interaction",
prototype: "selectMenu",
code: `$interactionReply[;{newEmbed:{title:Dodo Bot Settings}{description:

Select the options which you want to customise?

**Current Settings**
**Auto Reply**#COLON# \`$get[autoreply]\`
**Include Bots (Logs)**#COLON# \`$get[includebots]\`

**Option Types**
**Toggle**#COLON# Click/tap on the option to enable! Click/tap again to disable.
**Select**#COLON# Available customization for This Option to Choose.

}};{actionRow:{selectMenu:dodobotmenu_$authorID:Select an option to view information about.:1:1:false:{selectMenuOptions:Auto Reply:autoreply:Automatically reply to pings.:false}{selectMenuOptions:Include Bots:includebots:Whether or not bots will be included in logging features.:false}}};;all;true]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
    {options:{ephemeral: true}}
    {extraOptions:{interaction: true}}
    ]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==settingsmenu;]

$onlyIf[$interactionData[values[0]]==botmenu;]
$let[autoreply;$replaceText[$replaceText[$getGuildVar[autopingreply];true;Enabled];false;Disabled]]
$let[includebots;$replaceText[$replaceText[$getGuildVar[includebots];true;Enabled];false;Disabled]]
`
},{
 type: "interaction",
 prototype: "selectMenu",
 code: `$interactionUpdate[;{newEmbed:{title:Auto Reply}{description:
     Having this option on will allow the bot to respond by just pinging, which will let you know on what prefix it currently uses for your server. Disable this If It's purposefully used for spamming.
Option Type: \`toggle\`


}};{actionRow:{selectMenu:dodobotmenu_$authorID:Select an option to view information about.:1:1:false:{selectMenuOptions:Auto Reply:autoreply:Automatically reply to pings.:false}{selectMenuOptions:Include Bots:includebots:Whether or not bots will be included in logging features.:false}}}{actionRow:{button:Toggle:1:autoreply:false}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
    {options:{ephemeral: true}}
    {extraOptions:{interaction: true}}
    ]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==dodobotmenu;]

$onlyIf[$interactionData[values[0]]==autoreply;]

`
},{
 type: "interaction",
 prototype: "selectMenu",
 code: `$interactionUpdate[;{newEmbed:{title:Include Bots}{description:
     This option let's you decide whether or not bots should be included in logs feature such as message delete logs. By default, this is enabled but you can choose to disable it for whatever reason.
Option Type: \`toggle\`


}};{actionRow:{selectMenu:dodobotmenu_$authorID:Select an option to view information about.:1:1:false:{selectMenuOptions:Auto Reply:autoreply:Automatically reply to pings.:false}{selectMenuOptions:Include Bots:includebots:Whether or not bots will be included in logging features.:false}}}{actionRow:{button:Toggle:1:includebots:false}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
    {options:{ephemeral: true}}
    {extraOptions:{interaction: true}}
    ]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==dodobotmenu;]

$onlyIf[$interactionData[values[0]]==includebots;]

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
},{
    name: "includebots",
    type: "interaction",
    prototype: "button",
    $if: "old",
    code: `$if[$getGuildVar[includebots]==true]
$setGuildVar[includebots;false]
$interactionReply[From now on, Bots will not be included in logs!;;;;all;true]
$elseif[$getGuildVar[includebots]==false]
$setGuildVar[includebots;true]
$interactionReply[From now on, Bots will be included in logs!;;;;all;true]
$endelseif
$endif

`
}]
