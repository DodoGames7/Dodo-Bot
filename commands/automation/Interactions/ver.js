module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[;{newEmbed:{title:Changes}{description:
* Add developer settings for bot-owners, it contains important options such as Maintenance mode
* Add an note for the new set-channel commands
* Dodo-Bot will now welcome new servers by default whenever it gets added (unless it does not have permissions to channels)
* Plan aoi.db v2 support
    }{color:Blurple}};{actionRow:{button:Changes:1:versionchanges_$authorID:true}{button:Bug Fixes:3:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:false}{button:Full Changelog:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false}};;all;true]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {options:{ephemeral: true}}
  {extraOptions:{interaction: true}}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionchanges;]
`
    },{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[;{newEmbed:{title:Bug Fixes}{description:
* Fixed a strange issue where permission check system is broken in select menu channels thus being able to select channels the bot didn't have access to (this will re-add the same error back, won't actually touch the "menu")
* Fixed the version simply still reading as "2.0.0" in \`stats\` command.
* Fixed inconsistencies between \`welcomer\` and \`leave\` command at "Getting started" part
* Fixed the flag \`--embed\` not working from previous build of 2.0.1 on Gthub
* Fixed view channel permissions being not enforced on channel-set commands like message delete logging
    }{color:Blurple}};{actionRow:{button:Changes:1:versionchanges_$authorID:false}{button:Bug Fixes:3:versionbugfixes_$authorID:true}{button:Other:2:versionother_$authorID:false}{button:Full Changelog:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false}};;all;true]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
    {options:{ephemeral: true}}
    {extraOptions:{interaction: true}}
    ]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionbugfixes;]
`
    },{
      type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[;{newEmbed:{title:Other}{description:
* Version now actually includes the tag \`dev\` instead of just the version number to avoid confusion on \`stats\` command
* Removed server avatar flag as the idea was scrapped
 }{color:Blurple}};{actionRow:{button:Changes:1:versionchanges_$authorID:false}{button:Bug Fixes:3:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:true}{button:Full Changelog:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false}}]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
 {options:{ephemeral: true}}
 {extraOptions:{interaction: true}}
 ]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionother;]


      `
      
    }]
