module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[;{newEmbed:{title:Changes}{description:
* Add support for aoi.js 6.4.0 (6.5.0 later due to stability issues of it)
* New design for version command! Now no longer lists all changes in one embed (alongside with a better look for listing changes)
* Removed akinator game completely (including it's own settings). No longer works properly due to package's unsolvable issues
* Removed \`readfile\` command from the bot
* Updated returned invite links in commands such as \`invite\` to work with the latest stuff of discord
* Moved test message buttons of both leave and welcome to their settings
    }{color:Blurple}};{actionRow:{button:Changes:1:versionchanges_$authorID:true}{button:Bug Fixes:3:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:true}};;all;true]
    
    
    $onlyif[$get[authorID]==$interactionData[author.id];
      {newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
    {options:{ephemeral: true}}
    {extraOptions:{interaction: true}}
    ]
    
    $onlyif[$get[customId]==versionchanges;]
    $let[authorID;$splitText[2]]
    $let[customId;$splitText[1]] 
    $textSplit[$interactionData[customId];_]`
    },{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[;{newEmbed:{title:Bug Fixes}{description:
* Fixed default leave message missing "members" word
* Dodo-Bot now no longer leaks it's code if one of the commands resulted in a error
* Fixed outdated credits for Dodo-bot v1 in \`credits\` command
* Group ids for dms no longer breaks channel detections in commands such as \`suggest-set\` command!
* Fixed markdown formatting of this command
* Fixed mentions being usable in the beta command \`reverse\`
    }{color:Blurple}};{actionRow:{button:Changes:1:versionchanges_$authorID:false}{button:Bug Fixes:3:versionbugfixes_$authorID:true}{button:Other:2:versionother_$authorID:true}};;all;true]
    
    
    $onlyif[$get[authorID]==$interactionData[author.id];
      {newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
    {options:{ephemeral: true}}
    {extraOptions:{interaction: true}}
    ]
    
    $onlyif[$get[customId]==versionbugfixes;]
    $let[authorID;$splitText[2]]
    $let[customId;$splitText[1]] 
    $textSplit[$interactionData[customId];_]`
    }]