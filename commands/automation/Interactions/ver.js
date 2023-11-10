module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[;{newEmbed:{title:Changes}{description:
* Added flags feature
* Removed v1 credits from \`credits\` command. We will move them into our upcoming docs of the bot
* Channel set commands now use select menu for channels! This makes it much easier to select channels
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
* Fixed \`leave\` command still mentioning \`welcome\` despite being renamed to \`welcomer\`
* Strange channel types no longer break most of channel set commands now
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
* Renamed \`Enable\` button to \`Toggle\` in both of \`welcomer\` and \`leave\` command
 }{color:Blurple}};{actionRow:{button:Changes:1:versionchanges_$authorID:false}{button:Bug Fixes:3:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:true}{button:Full Changelog:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false}}]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
 {options:{ephemeral: true}}
 {extraOptions:{interaction: true}}
 ]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionother;]


      `
      
    }]