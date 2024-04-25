module.exports = [{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionUpdate[{newEmbed:{title:Welcome new servers!}{description:
    When Dodo-Bot gets added to a new server, it will greet members there with it's features including telling them it's default prefix. When this is disabled, the bot won't say anything when it gets added to new servers.

    By default, this is enabled to let people know the prefix easily instead of just guessing randomly to figure out.
    
**Current settings**
**Bot Greeting**#COLON# $get[botgreetconfig]

    }}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}{button:Toggle:2:botgreettoggle_$authorID:false}}]

    $let[botgreetconfig;$replaceText[$replaceText[$checkCondition[$getVar[botgreeting]==on];true;Enabled];false;Disabled]]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {ephemeral}
{interaction}]
    $onlyIf[$getSelectMenuValues[all]==botwelcome;]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==devmenu;]`
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionUpdate[{newEmbed:{title:Developer Panel}{description:In this command, you can do take certain actions on what should the bot do behind the scenes.

    At the moment, this only contains 2 options but more may be added later on.}{color:Red}{thumbnail:https#COLON#//us-east-1.tixte.net/uploads/dodo-bot.wants.solutions/warning.png}}{actionRow:{selectMenu:devmenu_$authorID:Select an option:1:1:false:{stringInput:Welome new servers!:botwelcome:Whether or not the bot should greet new servers.:false:👋}{stringInput:Error Logging:errorlog:Send errors to specific channel.:false:📢}}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {ephemeral}
{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==developermainpage;]
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
    }{color:Red}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}}{actionRow:{button:Set channel:2:errorlogsetupchannel_$authorID:false}{button:Toggle:2:errorlogtoggle_$authorID:false}}]

    $let[errorsystem;$replaceText[$replaceText[$checkCondition[$getVar[errorsystem]==on];true;Enabled];false;Disabled]]
    $let[errorchannel;$replaceText[$replaceText[$checkCondition[$getVar[errorchannel]==none];true;None];false;<#$getVar[errorchannel]> (\`$getVar[errorchannel]\`)]]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {ephemeral}
{interaction}]
    $onlyIf[$getSelectMenuValues[all]==errorlog;]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==devmenu;]`
    },{
        $if: "old",
        type: "interaction",
        prototype: "button",
        code: `

$interactionFollowUp[$get[resultmessage];true]
$interactionUpdate[;{newEmbed:{title:Error Logging}{description:
    Often, you get frustrated not knowing whether or not, your bot has errors. This setting is dedicated to send errors caused by a broken command to a specific channel depending on your choice. There's also an option to enable it.

When an error occurs, information such as the server name, it's id, alongside with the command name and the error will be included in logs to help the bot owners with some useful information regarding where does the error come from.

   **Current Settings**
    **Error log**#COLON# $get[errorsystem]
    **Error Channel**#COLON# $get[errorchannel] 
    }{color:Red}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}}{actionRow:{button:Set channel:2:errorlogsetupchannel_$authorID:false}{button:Toggle:2:errorlogtoggle_$authorID:false}}]

    $let[errorsystem;$replaceText[$replaceText[$checkCondition[$getVar[errorsystem]==on];true;Enabled];false;Disabled]]
    $let[errorchannel;$replaceText[$replaceText[$checkCondition[$getVar[errorchannel]==none];true;None];false;<#$getVar[errorchannel]> (\`$getVar[errorchannel]\`)]]
$let[resultmessage;$replaceText[$replaceText[$checkCondition[$getVar[errorsystem]==on];true;Error logs will now be logged!];false;Error logs will now no longer be logged!]]
  $setVar[errorsystem;$get[newtoggledsetting]]
$let[newtoggledsetting;$replaceText[$replaceText[$checkCondition[$getVar[errorsystem]==on];true;off];false;on]]


 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {ephemeral}
{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==errorlogtoggle;]

        `
    },{
        type: "interaction",
        prototype: "button",
        code: `

$interactionModal[Channel to set.;errorsetchannelresult;
{actionRow:
    {textInput:Channel id to use:1:idInput:true:channel id here:0:200}
  }]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {ephemeral}
{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==errorlogsetupchannel;]
`
    },{
        name: "errorsetchannelresult",
        type: "interaction",
        prototype: "modal",
        code: `

$interactionFollowUp[Successfully set <#$textInputValue[idInput]> as the error log channel!;true]
$interactionUpdate[{newEmbed:{title:Error Logging}{description:
    Often, you get frustrated not knowing whether or not, your bot has errors. This setting is dedicated to send errors caused by a broken command to a specific channel depending on your choice. There's also an option to enable it.

When an error occurs, information such as the server name, it's id, alongside with the command name and the error will be included in logs to help the bot owners with some useful information regarding where does the error come from.

   **Current Settings**
    **Error log**#COLON# $get[errorsystem]
    **Error Channel**#COLON# $get[errorchannel] (\`$getVar[errorchannel]\`)
    }{color:Red}}{actionRow:{button:Home:2:developermainpage_$authorID:false:🏠}}{actionRow:{button:Set channel:2:errorlogsetupchannel_$authorID:false}{button:Toggle:2:errorlogtoggle_$authorID:false}}]

    $let[errorsystem;$replaceText[$replaceText[$checkCondition[$getVar[errorsystem]==on];true;Enabled];false;Disabled]]
    $let[errorchannel;$replaceText[$replaceText[$checkCondition[$getVar[errorchannel]==none];true;None];false;<#$getVar[errorchannel]>]]

$setVar[errorchannel;$textInputValue[idInput]]

$onlyIf[$hasPermsInChannel[$textInputValue[idInput];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$textInputValue[idInput]>:
\`ViewChannel\`
\`SendMessages\`
{ephemeral}
{interaction}
]

$onlyIf[$textInputValue[idInput]!=$getVar[errorchannel];
This channel is already used for logging errors. Please set a different channel id instead
{ephemeral}
{interaction}
]

$onlyIf[$channelType[$textInputValue[idInput]]==text;We only support text Channels for now.
Make sure to set an text channel instead.
{ephemeral}
{interaction}
]

$onlyIf[$guildChannelExists[$guildID;$textInputValue[idInput]]==true;Either the channel id you provided is invalid or does not exist inside this server.
Please set a valid channel which exists inside this server.
{ephemeral}
{interaction}
]
`
    }]
