module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[{newEmbed:{title:Changes}{description:
* Updated to the final version of 6.8.0
* Added a option to reset User's current level whenever they leave the server
* Added a option to prevent moderator names from being revealed under the name \`anonymous\` (for Ban logs only)
* Added alias \`level\`, \`slot\` for \`rank\` and \`slots\`
* \`ViewAuditLog\` permission is now required in this build
* Moderation logs has been updated to show reason (Ban logs only) and the moderator who took the action
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
* Fixed the possibility of the bot crashing (hopefully)
* Fixed Package sub path error appearing in console (when hosting the bot's source code)
* Strange errors on console should be fixed now (hopefully)
* Leveling's leaderboard now position ranks correctly thanks to aoi.db 2.3.2
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
* Developers can now set a channel for the bot to send messages to whenever it becomes online
* \`@akarui/aoi.db\` is no longer a part of dev Dependencies and has been bumped to version 2.3.2
* The embed color now applies to all help command's module pages
* \`<position>\` has been updated to use ordinal formatting
* New logging commands look by aoi.js is now in use in this build
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
