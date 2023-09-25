module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[;{newEmbed:{title:Changes}{description:
* Add support for aoi.js 6.5.5
* New design for version command! Now no longer lists all changes in one embed (alongside with a better look for listing changes)
* Removed akinator game completely (including it's own settings). No longer works properly due to package's unsolvable issues
* Removed \`readfile\` command from the bot
* Removed mentions of autorole in welcome settings
* Updated returned invite links in commands such as \`invite\` to work with the latest stuff of discord
* Moved test message buttons of both leave and welcome to their settings
* Added function \`<leave.time>\` to leave system! It returns the time when user left the server
    }{color:Blurple}};{actionRow:{button:Changes:1:versionchanges_$authorID:true}{button:Bug Fixes:3:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:false}{button:Full Changelog:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false}};;all;true]
    
    
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
* Fixed spams of \`#CHAR#if: "old"\` at console. Now only appears once
* Fixed markdown formatting of this command
* Fixed mentions being usable in the beta command \`reverse\`
* Ensure permeant stability of message logs feature
* Returning the bot's token using dev commands is no longer possible to increase security
    }{color:Blurple}};{actionRow:{button:Changes:1:versionchanges_$authorID:false}{button:Bug Fixes:3:versionbugfixes_$authorID:true}{button:Other:2:versionother_$authorID:false}{button:Full Changelog:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false}};;all;true]
    
    
    $onlyif[$get[authorID]==$interactionData[author.id];
      {newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
    {options:{ephemeral: true}}
    {extraOptions:{interaction: true}}
    ]
    
    $onlyif[$get[customId]==versionbugfixes;]
    $let[authorID;$splitText[2]]
    $let[customId;$splitText[1]] 
    $textSplit[$interactionData[customId];_]`
    },{
      type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[;{newEmbed:{title:Other}{description:
* It is now possible to configure the default prefix of the bot when it comes to the source code
* \`aoi.js-library\` support 
* Ban logs are now out of beta with the addition of unban logs being included as well
* Bot now fully supports current username support
* Add a dev-only command for custom status \`setcustomstatus\`
* Added an option to disable errors when setting up the bot from source code
* Include display name of the user in \`user\` command
 }{color:Blurple}};{actionRow:{button:Changes:1:versionchanges_$authorID:false}{button:Bug Fixes:3:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:true}{button:Full Changelog:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false}}]

      $onlyif[$get[authorID]==$interactionData[author.id];
      {newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
    {options:{ephemeral: true}}
    {extraOptions:{interaction: true}}
    ]
    
    $onlyif[$get[customId]==versionother;]
    $let[authorID;$splitText[2]]
    $let[customId;$splitText[1]] 
    $textSplit[$interactionData[customId];_]

      `
      
    }]