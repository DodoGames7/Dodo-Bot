module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Developer Panel}{description:In this command, you can do take certain actions on what should the bot do behind the scenes.

At the moment, this only contains 4 options but more may be added later on.}{color:Red}{thumbnail:https#COLON#//us-east-1.tixte.net/uploads/dodo-bot.wants.solutions/warning.png}}{actionRow:{selectMenu:devmenu_$authorID:Select an option:1:1:false:{stringInput:Welome new servers!:botwelcome:Whether or not the bot should greet new servers.:false:👋}{stringInput:Error Logging:errorlog:Send errors to specific channel.:false:📢}{stringInput:Embed color:botembedcolor:Change the current embed color used in all commands.:false:🎨}{stringInput:Pre-release:botdevmode:Whether or not to enable Pre-release mode.:false:🚧}}}{actionRow:{button:Commands:2:devcommandsbutton_$authorID:false}}]

$onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;You cannot make changes as you're not a developer anymore.
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {ephemeral}
{interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==developermainpage;]
`
},{
    type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Commands}{description:The following commands are currently available for developers#COLON#
\`eval\`, \`exec\`, \`setcustomstatus\`, \`update\`
}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}}]


$onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;You cannot make changes as you're not a developer anymore.
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}} {ephemeral}
{interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==devcommandsbutton;]
`
},{
        type: "interaction",
        prototype: "button",
        code: `
$interactionFollowUp[$get[resultmessage];true]

$interactionUpdate[{newEmbed:{title:Welcome new servers!}{description:
    When Dodo-Bot gets added to a new server, it will greet members there with it's features including telling them it's default prefix. When this is disabled, the bot won't say anything when it gets added to new servers.

    By default, this is enabled to let people know the prefix easily instead of just guessing randomly to figure out.

**Current settings**
**Bot Greeting**#COLON# $get[botgreetconfig]

    }}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Toggle:2:botgreettoggle_$authorID:false}}]


$let[botgreetconfig;$replaceText[$replaceText[$checkCondition[$getVar[botgreeting]==on];true;Enabled];false;Disabled]]
$let[resultmessage;$replaceText[$replaceText[$checkCondition[$getVar[botgreeting]==on];true;Dodo-Bot will now welcome new servers!];false;Dodo-Bot will no longer welcome new servers!]]
$setVar[botgreeting;$get[newtoggledsetting]]
$let[newtoggledsetting;$replaceText[$replaceText[$checkCondition[$getVar[botgreeting]==on];true;off];false;on]]

$onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;You cannot make changes as you're not a developer anymore.
{ephemeral}
{interaction}
]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {ephemeral}
{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==botgreettoggle;]

        `
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionUpdate[{newEmbed:{title:Error Logging}{description:
    Often, you get frustrated not knowing whether or not, your bot has errors. This setting is dedicated to send errors caused by a broken command to a specific channel depending on your choice. There's also an option to enable it.

When an error occurs, information such as the server name, it's id, alongside with the command name and the error will be included in logs to help the bot owners with some useful information regarding where does the error come from.

   **Current Settings**
    **Error log**#COLON# $get[errorsystem]
    **Error Channel**#COLON# $get[errorchannel] 
    }{color:Red}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Toggle:2:errorlogtoggle_$authorID:false:🔄}{button:Set channel:2:errorlogsetupchannel_$authorID:false}}]

    $let[errorsystem;$replaceText[$replaceText[$checkCondition[$getVar[errorsystem]==on];true;Enabled];false;Disabled]]
    $let[errorchannel;$replaceText[$replaceText[$checkCondition[$getVar[errorchannel]==none];true;None];false;<#$getVar[errorchannel]> (\`$getVar[errorchannel]\`)]]

$onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;You cannot make changes as you're not a developer anymore.
{ephemeral}
{interaction}
]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {ephemeral}
{interaction}]
    $onlyIf[$getSelectMenuValues[all]==errorlog;]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==devmenu;]`
    },{
        type: "interaction",
        prototype: "button",
        code: `

$interactionUpdate[{newEmbed:{title:Channel Setup}{description:Choose a channel for Error messages to be sent in. Use the select menu below for the channel to use!
    
    **Current Settings**
    **Channel#COLON#** $get[errorchannel]
    
    **Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
    
    }}{actionRow:{selectMenu:errorlogchannelmenusetup_$authorID:Select a channel to use.:1:1:false:{channelInput:Text}}}{actionRow:{button:Go back:2:errorlogpage_$authorID:false:↩️}}]
    
    $let[errorchannel;$replaceText[$replaceText[$checkCondition[$getVar[errorchannel]==none];true;None];false;<#$getVar[errorchannel]> (\`$getVar[errorchannel]\`)]]

$onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;You cannot make changes as you're not a developer anymore.
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {ephemeral}
{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==errorlogsetupchannel;]
`
    },{
        type: "interaction",
        prototype: "button",
        code: `

$interactionFollowUp[$get[resultmessage];true]
$interactionUpdate[;{newEmbed:{title:Error Logging}{description:
    Often, you get frustrated not knowing whether or not, your bot has errors. This setting is dedicated to send errors caused by a broken command to a specific channel depending on your choice. There's also an option to enable it.

When an error occurs, information such as the server name, it's id, alongside with the command name and the error will be included in logs to help the bot owners with some useful information regarding where does the error come from.

   **Current Settings**
    **Error log**#COLON# $get[errorsystem]
    **Error Channel**#COLON# $get[errorchannel] (\`$getVar[errorchannel]\`)
    }{color:Red}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}}{actionRow:{button:Set channel:2:errorlogsetupchannel_$authorID:false}{button:Toggle:2:errorlogtoggle_$authorID:false}}]

    $let[errorsystem;$replaceText[$replaceText[$checkCondition[$getVar[errorsystem]==on];true;Enabled];false;Disabled]]
    $let[errorchannel;$replaceText[$replaceText[$checkCondition[$getVar[errorchannel]==none];true;None];false;<#$getVar[errorchannel]>]]
$let[resultmessage;$replaceText[$replaceText[$checkCondition[$getVar[errorsystem]==on];true;Error logs will now be logged!];false;Error logs will now no longer be logged!]]
  $setVar[errorsystem;$get[newtoggledsetting]]
$let[newtoggledsetting;$replaceText[$replaceText[$checkCondition[$getVar[errorsystem]==on];true;off];false;on]]

$onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;You cannot make changes as you're not a developer anymore.
{ephemeral}
{interaction}
]


 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {ephemeral}
{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==errorlogtoggle;]

        `
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `

$interactionFollowUp[Successfully set <#$getSelectMenuValues[all]> as the error log channel!;true]
$interactionUpdate[{newEmbed:{title:Channel Setup}{description:Choose a channel for Error messages to be sent in. Use the select menu below for the channel to use!
    
    **Current Settings**
    **Channel#COLON#** $get[errorchannel]
    
    **Tip#COLON#** Unable to find the channel you're looking for? Try typing the channel name instead!
    
    }}{actionRow:{selectMenu:errorlogchannelmenusetup_$authorID:Select a channel to use.:1:1:false:{channelInput:Text}}}{actionRow:{button:Go back:2:errorlogpage_$authorID:false:↩️}}]
    
    $let[errorchannel;$replaceText[$replaceText[$checkCondition[$getVar[errorchannel]==none];true;None];false;<#$getVar[errorchannel]> (\`$getVar[errorchannel]\`)]]

$setVar[errorchannel;$getSelectMenuValues[all]]

$onlyIf[$hasPermsInChannel[$getSelectMenuValues[all];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$getSelectMenuValues[all]>:
    \`ViewChannel\`
    \`SendMessages\`
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$getSelectMenuValues[all]!=$getVar[errorchannel];
    This channel is already used for Error messages. Please, set a different channel instead.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$channelType[$getSelectMenuValues[all]]==text;We only support Text Channels for now.
    Make sure to set an Text channel instead.
    {ephemeral}
    {interaction}
    ]
    
    $onlyIf[$guildChannelExists[$guildID;$getSelectMenuValues[all]]==true;The channel you chose no longer exists in this server.
    Please set a valid channel which exists inside this server.
    {ephemeral}
    {interaction}
    ]
    
    
$onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;You cannot make changes as you're not a developer anymore.
{ephemeral}
{interaction}
]

  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
    {ephemeral}
    {interaction}
    ]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==errorlogchannelmenusetup;]
`
    },{
        type: "interaction",
        prototype: "button",
        code: `

$interactionUpdate[{newEmbed:{title:Error Logging}{description:
    Often, you get frustrated not knowing whether or not, your bot has errors. This setting is dedicated to send errors caused by a broken command to a specific channel depending on your choice. There's also an option to enable it.

When an error occurs, information such as the server name, it's id, alongside with the command name and the error will be included in logs to help the bot owners with some useful information regarding where does the error come from.

   **Current Settings**
    **Error log**#COLON# $get[errorsystem]
    **Error Channel**#COLON# $get[errorchannel] (\`$getVar[errorchannel]\`)
    }{color:Red}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Set channel:2:errorlogsetupchannel_$authorID:false}{button:Toggle:2:errorlogtoggle_$authorID:false}}]

    $let[errorsystem;$replaceText[$replaceText[$checkCondition[$getVar[errorsystem]==on];true;Enabled];false;Disabled]]
    $let[errorchannel;$replaceText[$replaceText[$checkCondition[$getVar[errorchannel]==none];true;None];false;<#$getVar[errorchannel]>]]


$onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;You cannot make changes as you're not a developer anymore.
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {ephemeral}
{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==errorlogpage;]
`
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionUpdate[{newEmbed:{title:Embed color}{description:
   This option allows you to change the current embed color used across commands of Dodo-Bot. To change the current used embed color, you will need to have a valid hex code of a color in order to proceed.

   **Current Settings**
**Hex code**#COLON# \`$getVar[embedcolor]\`
    }{color:Red}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Set Color:2:setbotembedcolor_$authorID:false}}]


$onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;You cannot make changes as you're not a developer anymore.
{ephemeral}
{interaction}
]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {ephemeral}
{interaction}]
    $onlyIf[$getSelectMenuValues[all]==botembedcolor;]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==devmenu;]
        `},{
        type: "interaction",
        prototype: "button",
        code: `

$interactionModal[Set Color;embedcolorsetresult;
{actionRow:
    {textInput:Hex code:1:hexInput:true:e.g #57F287:0:7:$getVar[embedcolor]}
  }]

$onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;You cannot make changes as you're not a developer anymore.
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {ephemeral}
{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==setbotembedcolor;]
`
    },{
        name: "embedcolorsetresult",
        type: "interaction",
        prototype: "modal",
        code: `$interactionFollowUp[\`$textInputValue[hexInput]\` will now be used as the new embed color!;true]
$interactionUpdate[{newEmbed:{title:Embed color}{description:
   This option allows you to change the current embed color used across commands of Dodo-Bot. To change the current used embed color, you will need to have a valid hex code of a color in order to proceed.

   **Current Settings**
**Hex code**#COLON# \`$getVar[embedcolor]\`
    }{color:Red}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Set Color:2:setbotembedcolor_$authorID:false}}]

$setVar[embedcolor;$textInputValue[hexInput]]

$onlyIf[$isValidColor[$textInputValue[hexInput]]==true;
Your hex code containing the color is incorrect! Please, double check your hex code and try again.{ephemeral}
{interaction}]

$onlyIf[$isValidHex[$textInputValue[hexInput]]==true;
You did not provide a hex code! Please, make sure to provide a actual hex code and try again.{ephemeral}
{interaction}]

$onlyIf[$stringStartsWith[$textInputValue[hexInput];#]==true;
Your hex code must start with a \`#\`! Please, try again.{ephemeral}
{interaction}]

$onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;You cannot make changes as you're not a developer anymore.
{ephemeral}
{interaction}
]
`
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionUpdate[{newEmbed:{title:Pre-release}{description:
   This option allows you on whether or not the current build used should be marked as development build. By default, it is commonly enabled for development builds as expected.

Disabling this will cause the build to identify itself as a "Stable" build with development build warnings being absent as well!

   **Current Settings**
**Pre-release**#COLON# \`$get[pre-release]\`
    }{color:Red}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Toggle:2:togglebotdevmode_$authorID:false}}]


$onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;You cannot make changes as you're not a developer anymore.
{ephemeral}
{interaction}
]
$let[pre-release;$replaceText[$replaceText[$getVar[pre_release_mode];on;Enabled];off;Disabled]]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {ephemeral}
{interaction}]
    $onlyIf[$getSelectMenuValues[all]==botdevmode;]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==devmenu;]
        `},{
        type: "interaction",
        prototype: "button",
        code: `$ifAwaited[$getVar[pre_release_mode]==on;{execute:Enable};{execute:Disable}]
$interactionFollowUp[$get[resultmessage];true]
$interactionUpdate[{newEmbed:{title:Pre-release}{description:
   This option allows you on whether or not the current build used should be marked as development build. By default, it is commonly enabled for development builds as expected.

Disabling this will cause the build to identify itself as a "Stable" build with development build warnings being absent as well!

   **Current Settings**
**Pre-release**#COLON# \`$get[pre-release]\`
    }{color:Red}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Toggle:2:togglebotdevmode_$authorID:false}}]


$let[pre-release;$replaceText[$replaceText[$getVar[pre_release_mode];on;Enabled];off;Disabled]]

$let[resultmessage;$replaceText[$replaceText[$checkCondition[$getVar[pre_release_mode]==on];true;Pre-release mode will now be enabled!];false;Pre-release mode will now no longer be enabled!]]
  $setVar[pre_release_mode;$get[newtoggledsetting]]
$let[newtoggledsetting;$replaceText[$replaceText[$checkCondition[$getVar[pre_release_mode]==on];true;off];false;on]]


$onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;You cannot make changes as you're not a developer anymore.
{ephemeral}
{interaction}
]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {ephemeral}
{interaction}]

        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==togglebotdevmode;]
        `}]
