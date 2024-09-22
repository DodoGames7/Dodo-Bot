module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Settings}{description:Welcome to settings! Here, you can change things the bot usually operates.

        To change any setting, use the dropdown menu below to view each one accordingly.}{thumbnail:https#COLON#//us-east-1.tixte.net/uploads/dodogames.wants.solutions/yellowsettings.png}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:settingsmenu_$authorID:Select a category:1:1:false:{stringInput:Bot itself:botmenu:Customise on how Dodo Bot should Behave.:false}{stringInput:Server:servermenu:Manage settings related to the server.}}}]

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

Select a option you want to manage.

**Current Setting(s)**
**Auto Reply**#COLON# \`$get[autoreply]\`
**Include Bots**#COLON# \`$get[includebots]\`


}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:dodobotmenu_$authorID:Select a option to manage:1:1:false:{stringInput:Auto Reply:autoreply:Automatically reply to pings.:false}{stringInput:Include Bots:includebots:Whether or not bots will be included in message logs.:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}}]


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
     Having this option enabled will allow the bot to respond by pinging, which will let you know on what prefix it currently uses in this server.

Disable this If It's purposefully used for spamming.

**Current Setting(s)**
**Auto Reply**#COLON# \`$get[autopingreply]\`
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:dodobotmenu_$authorID:Select a option to manage:1:1:false:{stringInput:Auto Reply:autoreply:Automatically reply to pings.:false}{stringInput:Include Bots:includebots:Whether or not bots will be included in message logs.:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Toggle:2:autoreplytoggle_$authorID:false}}]

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
    prototype: "button",
    code: `

$interactionFollowUp[$get[resultmessage];true]
$interactionUpdate[{newEmbed:{title:Auto Reply}{description:
     Having this option enabled will allow the bot to respond by pinging, which will let you know on what prefix it currently uses in this server.

Disable this If It's purposefully used for spamming.

**Current Setting(s)**
**Auto Reply**#COLON# \`$get[autopingreply]\`
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:dodobotmenu_$authorID:Select a option to manage:1:1:false:{stringInput:Auto Reply:autoreply:Automatically reply to pings.:false}{stringInput:Include Bots:includebots:Whether or not bots will be included in message logs.:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Toggle:2:autoreplytoggle_$authorID:false}}]


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
 prototype: "selectMenu",
 code: `$interactionUpdate[{newEmbed:{title:Include Bots}{description:
     This option let's you decide whether or not bots should be included in message logs.

By default, this is enabled but you can choose to disable it for whatever reason.

**Current Setting(s)**
**Include Bots**#COLON# \`$get[includebots]\`
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:dodobotmenu_$authorID:Select a option to manage:1:1:false:{stringInput:Auto Reply:autoreply:Automatically reply to pings.:false}{stringInput:Include Bots:includebots:Whether or not bots will be included in message logs.:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Toggle:2:includebotstoggle_$authorID:false}}]

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
$interactionUpdate[{newEmbed:{title:Include Bots}{description:
     This option let's you decide whether or not bots should be included in message logs.

By default, this is enabled but you can choose to disable it for whatever reason.

**Current Setting(s)**
**Include Bots**#COLON# \`$get[includebots]\`
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:dodobotmenu_$authorID:Select a option to manage:1:1:false:{stringInput:Auto Reply:autoreply:Automatically reply to pings.:false}{stringInput:Include Bots:includebots:Whether or not bots will be included in message logs.:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Toggle:2:includebotstoggle_$authorID:false}}]



  $let[includebots;$advancedReplaceText[$getGuildVar[includebots];on;Enabled;off;Disabled]]
$let[resultmessage;$advancedReplaceText[$checkCondition[$getGuildVar[includebots]==on];true;From now on, Bots will be included in logs!;false;From now on, Bots will no longer be included in logs!]]
$setGuildVar[includebots;$get[newtoggledsetting]]
$let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGuildVar[includebots]==on];true;off;false;on]]



$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
   {ephemeral}
{interaction}
    ]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==includebotstoggle;]


`
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[{newEmbed:{title:Server Settings}{description:
      Select a option you want to manage.

  **Current Setting(s)**
  **Beta access**#COLON# \`$get[betaserver]\`
  **Anonymous**#COLON# \`$get[anonymous]\`

  }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:serversettingsmenu_$authorID:Select a option to manage:1:1:false:{stringInput:Beta access:serverbeta:Allow everyone to use beta commands!:false}{stringInput:Anonymous:anonymous:Prevent moderator names from being shown!:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}}]


  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]

$let[betaserver;$advancedReplaceText[$getGuildVar[betaserver];on;Enabled;off;Disabled]]
$let[anonymous;$advancedReplaceText[$getGuildVar[anonymous];on;Enabled;off;Disabled]]
  $onlyIf[$getSelectMenuValues[all]==servermenu;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==settingsmenu;]
  `
  },{
      type: "interaction",
      prototype: "selectMenu",
      code: `$interactionUpdate[{newEmbed:{title:Beta access}{description:
          Allow anyone who have Beta commands enabled to use them in this server.

This is not recommended for public servers as Beta commands are not fully stable! Enable this at your own risk!

**Current Setting(s)**
**Beta Access**#COLON# \`$get[betaserver]\`
      }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:serversettingsmenu_$authorID:Select a option to manage:1:1:false:{stringInput:Beta access:serverbeta:Allow everyone to use beta commands!:false}{stringInput:Anonymous:anonymous:Prevent moderator names from being shown!:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Toggle:2:serverbetatoggle_$authorID:false}}]

      $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
  ]

  $let[betaserver;$advancedReplaceText[$getGuildVar[betaserver];on;Enabled;off;Disabled]]
  $onlyIf[$getSelectMenuValues[all]==serverbeta;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==serversettingsmenu;]
  `
  },{
      type: "interaction",
      prototype: "button",
      code: `
$interactionFollowUp[$get[resultmessage];true]
$interactionUpdate[{newEmbed:{title:Beta Access}{description:
          Allow anyone who have Beta commands enabled to use them in this server.

This is not recommended for public servers as Beta commands are not fully stable! Enable this at your own risk!

**Current Setting(s)**
**Beta Access**#COLON# \`$get[betaserver]\`
      }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:serversettingsmenu_$authorID:Select a option to manage:1:1:false:{stringInput:Beta access:serverbeta:Allow everyone to use beta commands!:false}{stringInput:Anonymous:anonymous:Prevent moderator names from being shown!:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Toggle:2:serverbetatoggle_$authorID:false}}]



$let[betaserver;$advancedReplaceText[$getGuildVar[betaserver];on;Enabled;off;Disabled]]
$let[resultmessage;$advancedReplaceText[$checkCondition[$getGuildVar[betaserver]==on];true;Beta Access has been enabled!;false;Beta Access has been disabled!]]
$setGuildVar[betaserver;$get[newtoggledsetting]]
$let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGuildVar[betaserver]==on];true;off;false;on]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==serverbetatoggle;]


  `
  },{
      type: "interaction",
      prototype: "selectMenu",
      code: `$interactionUpdate[{newEmbed:{title:Anonymous}{description:
        This option allows moderator names to not be revealed in Ban logs!

        For security reasons, this feature is only exclusive to Ban logs!

**Current Setting(s)**
**Anonymous**#COLON# \`$get[anonymous]\`

-# This option does not apply to bots by default
      }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:serversettingsmenu_$authorID:Select a option to manage:1:1:false:{stringInput:Beta access:serverbeta:Allow everyone to use beta commands!:false}{stringInput:Anonymous:anonymous:Prevent moderator names from being shown!:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Toggle:2:anonymoustoggle_$authorID:false}}]

      $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
  ]

$let[anonymous;$advancedReplaceText[$getGuildVar[anonymous];on;Enabled;off;Disabled]]
  $onlyIf[$getSelectMenuValues[all]==anonymous;]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==serversettingsmenu;]
  `
  },{
      type: "interaction",
      prototype: "button",
      code: `
$interactionFollowUp[$get[resultmessage];true]
$interactionUpdate[{newEmbed:{title:Anonymous}{description:
  This option allows moderator names to not be revealed in Ban logs!

  For security reasons, this feature is only exclusive to Ban logs!

**Current Setting(s)**
**Anonymous**#COLON# \`$get[anonymous]\`

-# This option does not apply to bots by default
      }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:serversettingsmenu_$authorID:Select a option to manage:1:1:false:{stringInput:Beta access:serverbeta:Allow everyone to use beta commands!:false}{stringInput:Anonymous:anonymous:Prevent moderator names from being shown!:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Toggle:2:anonymoustoggle_$authorID:false}}]



$let[anonymous;$advancedReplaceText[$getGuildVar[anonymous];on;Enabled;off;Disabled]]
$let[resultmessage;$advancedReplaceText[$checkCondition[$getGuildVar[anonymous]==on];true;Anonymous has been enabled!;false;Anonymous has been disabled!]]
$setGuildVar[anonymous;$get[newtoggledsetting]]
$let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGuildVar[anonymous]==on];true;off;false;on]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==anonymoustoggle;]


  `
  }]
