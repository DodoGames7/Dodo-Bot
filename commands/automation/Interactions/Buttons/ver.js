module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[;{newEmbed:{title:Changes}{description:
* Settings command rework! Select menus's options are now used instead of buttons to display settings for each section (e.g Dodo-Bot settings). Game settings however, remain unchanged for now
* Default prefix has been changed to \`d!\` when setting up Dodo-Bot using the source code
* New topics for \`randomtopic\`
* Temporary disable \`fight\` and \`2048\`. No longer works by discord.js's latest changes
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
* Fix lack of spacing in minesweeper game-over message
* Fixed wrong spelling of "reset" as "resetted"
* Fixed the weird use of grammar capitalization in certain commands
* Fixed \`fact\` being broken by latest aoi.js's changes
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
* Support for entering the bot token through config file rather than using env (env is still highly recommended)
* button's files placing is now organized (that is not being to it's dedicated folder before)
* Add an little warning in \`version\` command about dev versions
 }{color:Blurple}};{actionRow:{button:Changes:1:versionchanges_$authorID:false}{button:Bug Fixes:3:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:true}{button:Full Changelog:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false}}]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
 {options:{ephemeral: true}}
 {extraOptions:{interaction: true}}
 ]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionother;]


      `
      
    }]
