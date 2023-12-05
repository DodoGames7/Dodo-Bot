module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[;{newEmbed:{title:Changes}{description:
* Add support for aoi.db v2
* Update to aoi.js v6.6.1
* Increased node.js requirement to at least 20.10.0. Support for v18 and v19 will be limited to ES
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
* \`user\` command no longer breaks if the user does not have any roles
* Fixed dev panel buttons being usable by everyone
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
* Switch to \`beta\` tag
 }{color:Blurple}};{actionRow:{button:Changes:1:versionchanges_$authorID:false}{button:Bug Fixes:3:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:true}{button:Full Changelog:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false}}]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
 {options:{ephemeral: true}}
 {extraOptions:{interaction: true}}
 ]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionother;]


      `
      
    }]
