module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:About Tower Valley}{description:Tower Valley is a project aiming to fix many issues from the first version of Dodo-Bot for v2 series! It is also the codename for 2.1.0 as well.
    
    Builds of Tower Valley will often feature a lot of changes including improvements and bug fixes. Breaking changes has also a chance to occur requiring the user to be careful when updating the builds to the latest one.}{image:https#COLON#//us-east-1.tixte.net/uploads/dodogames.wants.solutions/early-Introduction-banner.png}{color:$getVar[embedcolor]}}{actionRow:{button:Home:2:aboutbuttonmainpage_$authorID:false:🏠}}]
    
     $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
      {ephemeral}
    {interaction}
      ]
      $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==towervalleybutton;]`
    },{
    type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:About Dodo-Bot}{description:Dodo-Bot is a personal project aiming to be an entertainment bot while at the same time provide a couple of useful features (e.g Welcomer feature)! It is basically a bot made in aoi.js v6!
    
    The project has existed since late 2021 and to this day, it continues to be developed with new improvements along with other type of updates as well!}{thumbnail:https#COLON#//us-east-1.tixte.net/uploads/dodogames.wants.solutions/dodo-bot-logo.png}{color:$getVar[embedcolor]}}{actionRow:{button:Tower Valley:2:towervalleybutton_$authorID:false}{button:Source Code:5:https#COLON#//github.com/DodoGames7/Dodo-Bot:false}}]
    
     $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
      {ephemeral}
    {interaction}
      ]
      $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==aboutbuttonmainpage;]`
    }]