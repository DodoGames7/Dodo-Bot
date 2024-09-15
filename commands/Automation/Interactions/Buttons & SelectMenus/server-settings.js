module.exports = [{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[{newEmbed:{title:Server Settings}{description:
      Select a option you want to manage.

  **Current Setting(s)**
  **Beta access**#COLON# \`$get[betaserver]\`
  **Anonymous**#COLON# \`$get[anonymous]\`

  }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:serversettingsmenu_$authorID:Select an option to manage:1:1:false:{stringInput:Beta access:serverbeta:Allow everyone to use beta commands!:false}{stringInput:Anonymous:anonymous:Prevent moderator names from being shown!:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}}]


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
      }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:serversettingsmenu_$authorID:Select an option to manage:1:1:false:{stringInput:Beta access:serverbeta:Allow everyone to use beta commands!:false}{stringInput:Anonymous:anonymous:Prevent moderator names from being shown!:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Toggle:2:serverbetatoggle_$authorID:false}}]

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
      }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:serversettingsmenu_$authorID:Select an option to manage:1:1:false:{stringInput:Beta access:serverbeta:Allow everyone to use beta commands!:false}{stringInput:Anonymous:anonymous:Prevent moderator names from being shown!:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Toggle:2:serverbetatoggle_$authorID:false}}]



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

        For security reasons, this option will NOT apply to bots by default and should be noted that this feature is only exclusive to Ban logs!

**Current Setting(s)**
**Anonymous**#COLON# \`$get[anonymous]\`
      }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:serversettingsmenu_$authorID:Select an option to manage:1:1:false:{stringInput:Beta access:serverbeta:Allow everyone to use beta commands!:false}{stringInput:Anonymous:anonymous:Prevent moderator names from being shown!:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Toggle:2:anonymoustoggle_$authorID:false}}]

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

  For security reasons, this option will NOT apply to bots by default and should be noted that this feature is only exclusive to Ban logs!

**Current Setting(s)**
**Anonymous**#COLON# \`$get[anonymous]\`
      }{color:$getVar[embedcolor]}}{actionRow:{selectMenu:serversettingsmenu_$authorID:Select an option to manage:1:1:false:{stringInput:Beta access:serverbeta:Allow everyone to use beta commands!:false}{stringInput:Anonymous:anonymous:Prevent moderator names from being shown!:false}}}{actionRow:{button:Home:2:settingsmainpagecmd_$authorID:false:🏠}{button:Toggle:2:anonymoustoggle_$authorID:false}}]



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
