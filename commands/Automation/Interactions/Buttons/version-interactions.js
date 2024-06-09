module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[{newEmbed:{title:Changes}{description:
* Use the npm version of 6.8.0
* Leveling's main settings page now shows all current settings set
* Beta commands has been updated to feature 2 commands, \`reverse\` has been re-added and \`lulcat\` has also been added
* The beta command \`drake\` has been removed
* Added one new topic to the command \`randomtopic\` and removed old user tag support in command \`suggest\`
    }{color:$getVar[embedcolor]}}{actionRow:{button:Home:2:homebutton_$authorID:false:🏠}{button:Changes:2:versionchanges_$authorID:true}{button:Bug Fixes:2:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:false}}{actionRow:{button:Version history:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false:🔎}}]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionchanges;]
`
    },{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[{newEmbed:{title:Bug Fixes}{description:
* Fixed experimental command notice being broken in \`commandinfo\`
* Fixed \`Toggle\` button in cmd \`beta\` not having emoji applied when the cmd is being executed
* Fixed a inconsistency in the source code regarding replace texts
    }{color:$getVar[embedcolor]}}{actionRow:{button:Home:2:homebutton_$authorID:false:🏠}{button:Changes:2:versionchanges_$authorID:false}{button:Bug Fixes:2:versionbugfixes_$authorID:true}{button:Other:2:versionother_$authorID:false}}{actionRow:{button:Version history:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false:🔎}}]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
   {ephemeral}
{interaction}
    ]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionbugfixes;]
`
    },{
      type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Other}{description:
* Support for enabling aoi.js debug mode through setup options (for bot's src) has been added
* Removed strict dev checks in \`dev-panel\` interactions for bot-owners (for personal reasons)
* The section "Uptime Bot" in command \`stats\` has been shortened to simply "Uptime"
* "Server created since" has been renamed to "Created on" in command \`serverinfo\`
* Added support for environment variables when local hosting the bot
 }{color:$getVar[embedcolor]}}{actionRow:{button:Home:2:homebutton_$authorID:false:🏠}{button:Changes:2:versionchanges_$authorID:false}{button:Bug Fixes:2:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:true}}{actionRow:{button:Version history:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false:🔎}}]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
 {ephemeral}
{interaction}
 ]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionother;]


      `
      
    },{
      type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Dodo-Bot version}{description:
* **Version**: $getVar[version]
* **Release type**: $getVar[release_type]
* **Build created on**: <t:$truncate[$divide[$getVar[buildDate];1000]]:f>
 }{color:$getVar[embedcolor]}$nonEscape[$get[devbuild]]}{actionRow:{button:Changes:2:versionchanges_$authorID:false}{button:Bug Fixes:2:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:false}}{actionRow:{button:Version history:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false:🔎}}]


 $let[devbuild;$if[$getVar[pre_release_mode]==on;{footer:For testing purposes only.:https#COLON#//us-east-1.tixte.net/uploads/dodo-bot.wants.solutions/mingcute--warning-fill.png}]]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
 {ephemeral}
{interaction}
 ]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==homebutton;]


      `
      
    }]
