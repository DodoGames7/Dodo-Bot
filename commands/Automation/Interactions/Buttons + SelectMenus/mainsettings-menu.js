module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Settings}{description:Welcome to settings! Here, you can change things the bot usually operates. To change any setting, use the select menu to view each one accordingly.}{thumbnail:https#COLON#//us-east-1.tixte.net/uploads/dodogames.wants.solutions/whitesettings.png}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:settingsmenu_$authorID:Select an option.:1:1:false:{stringInput:Games:gamesmenu:Manage settings related to games.:false}{stringInput:Bot itself:botmenu:Customise on how Dodo Bot should Behave.:false}{stringInput:Server:servermenu:Manage settings related to the server.}}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
   {ephemeral}
{interaction}
    ]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==settingsmainpagecmd;]
`
},{
type: "interaction",
prototype: "selectMenu",
code: `$interactionUpdate[{newEmbed:{title:Dodo-Bot Settings}{description:

Select the options you want to customise.

**Current Settings**
**Auto Reply**#COLON# \`$get[autoreply]\`
**Include Bots (Logs)**#COLON# \`$get[includebots]\`


}}{actionRow:{selectMenu:dodobotmenu_$authorID:Select an option to view information about.:1:1:false:{stringInput:Auto Reply:autoreply:Automatically reply to pings.:false}{stringInput:Include Bots:includebots:Whether or not bots will be included in logging features.:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
   {ephemeral}
{interaction}
    ]
 

$onlyIf[$getSelectMenuValues[all]==botmenu;]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==settingsmenu;]
 $let[autoreply;$advancedReplaceText[$getGuildVar[autopingreply];on;Enabled;off;Disabled]]
 $let[includebots;$advancedReplaceText[$getGuildVar[includebots];on;Enabled;off;Disabled]]
`
},{
 type: "interaction",
 prototype: "selectMenu",
 code: `$interactionUpdate[{newEmbed:{title:Auto Reply}{description:
     Having this option enabled will allow the bot to respond by just pinging, which will let you know on what prefix it currently uses for your server.

Disable this If It's purposefully used for spamming.

**Current Settings**
**Auto Reply**#COLON# \`$get[autopingreply]\`
}}{actionRow:{selectMenu:dodobotmenu_$authorID:Select an option to view information about.:1:1:false:{stringInput:Auto Reply:autoreply:Automatically reply to pings.:false}{stringInput:Include Bots:includebots:Whether or not bots will be included in logging features.:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Toggle:2:autoreplytoggle_$authorID:false}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
   {ephemeral}
{interaction}
    ]
   
$let[autopingreply;$advancedReplaceText[$getGuildVar[autopingreply];on;Enabled;off;Disabled]]
$onlyIf[$getSelectMenuValues[all]==autoreply;]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==dodobotmenu;]
`
},{
 type: "interaction",
 prototype: "selectMenu",
 code: `$interactionUpdate[{newEmbed:{title:Include Bots}{description:
     This option let's you decide whether or not bots should be included in logs feature such as message delete logs. 

By default, this is enabled but you can choose to disable it for whatever reason.

**Current Settings**
**Include Bots**#COLON# \`$get[includebots]\`
}}{actionRow:{selectMenu:dodobotmenu_$authorID:Select an option to view information about.:1:1:false:{stringInput:Auto Reply:autoreply:Automatically reply to pings.:false}{stringInput:Include Bots:includebots:Whether or not bots will be included in logging features.:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Toggle:2:includebots_$authorID:false}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
   {ephemeral}
{interaction}
    ]
    
$let[includebots;$advancedReplaceText[$getGuildVar[includebots];on;Enabled;off;Disabled]]
$onlyIf[$getSelectMenuValues[all]==includebots;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==dodobotmenu;]
`
},{
    type: "interaction",
    prototype: "button",
    code: `

$interactionFollowUp[$get[resultmessage];true]
$interactionUpdate[{newEmbed:{title:Auto Reply}{description:
     Having this option enabled will allow the bot to respond by just pinging, which will let you know on what prefix it currently uses for your server.

Disable this If It's purposefully used for spamming.

**Current Settings**
**Auto Reply**#COLON# \`$get[autopingreply]\`
}}{actionRow:{selectMenu:dodobotmenu_$authorID:Select an option to view information about.:1:1:false:{stringInput:Auto Reply:autoreply:Automatically reply to pings.:false}{stringInput:Include Bots:includebots:Whether or not bots will be included in logging features.:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Toggle:2:autoreplytoggle_$authorID:false}}]


  $let[autopingreply;$advancedReplaceText[$getGuildVar[autopingreply];on;Enabled;off;Disabled]]
$let[resultmessage;$advancedReplaceText[$checkCondition[$getGuildVar[autopingreply]==on];true;From now on, I will reply by pings!;false;From now on, I will no longer reply by pings!]]
$setGuildVar[autopingreply;$get[newtoggledsetting]]
$let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGuildVar[autopingreply]==on];true;off;false;on]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
   {ephemeral}
{interaction}
    ]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==autoreplytoggle;]

`
},{
    type: "interaction",
    prototype: "button",
    code: `
$interactionFollowUp[$get[resultmessage];true]
$interactionUpdate[{newEmbed:{title:Include Bots}{description:
     This option let's you decide whether or not bots should be included in logs feature such as message delete logs. 

By default, this is enabled but you can choose to disable it for whatever reason.

**Current Settings**
**Include Bots**#COLON# \`$get[includebots]\`
}}{actionRow:{selectMenu:dodobotmenu_$authorID:Select an option to view information about.:1:1:false:{stringInput:Auto Reply:autoreply:Automatically reply to pings.:false}{stringInput:Include Bots:includebots:Whether or not bots will be included in logging features.:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Toggle:2:includebots_$authorID:false}}]



  $let[includebots;$advancedReplaceText[$getGuildVar[includebots];on;Enabled;off;Disabled]]
$let[resultmessage;$advancedReplaceText[$checkCondition[$getGuildVar[includebots]==on];true;From now on, Bots will be included in logs!;false;From now on, Bots will no longer be included in logs!]]
$setGuildVar[includebots;$get[newtoggledsetting]]
$let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGuildVar[includebots]==on];true;off;false;on]]



$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
   {ephemeral}
{interaction}
    ]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==includebots;]


`
}]
