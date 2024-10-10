module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[{newEmbed:{title:Changes}{description:
* Added support for running commands through message edit
* Added a button in \`perms\` command dedicated to explaining why the command exists
* \`uncover\` command has been replaced by \`drip\`
    }{color:$getVar[embedcolor]}$nonEscape[$get[devbuild]]}{actionRow:{button:Home:2:homebutton_$authorID:false:🏠}{button:Changes:2:versionchanges_$authorID:true}{button:Bug Fixes:2:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:false}}{actionRow:{button:Changelog history:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false:📜}}]

$let[devbuild;$if[$getVar[pre_release_mode]==on;{footer:Testing is recommended:https#COLON#//us-east-1.tixte.net/uploads/dodogames.wants.solutions/warningsign.png};  ]]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
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
*No bug fixes has been added yet*
    }{color:$getVar[embedcolor]}$nonEscape[$get[devbuild]]}{actionRow:{button:Home:2:homebutton_$authorID:false:🏠}{button:Changes:2:versionchanges_$authorID:false}{button:Bug Fixes:2:versionbugfixes_$authorID:true}{button:Other:2:versionother_$authorID:false}}{actionRow:{button:Changelog history:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false:📜}}]

$let[devbuild;$if[$getVar[pre_release_mode]==on;{footer:Testing is recommended:https#COLON#//us-east-1.tixte.net/uploads/dodogames.wants.solutions/warningsign.png};  ]]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
   {ephemeral}
{interaction}
    ]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionbugfixes;]
`
    },{
      type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Other}{description:
* The bot can now leave for new servers that didn't meet the amount of members needed
* \`version\` command will now display the Revision if there any
* "Version History" button in this command has been renamed to "Changelog History"
 }{color:$getVar[embedcolor]}$nonEscape[$get[devbuild]]}{actionRow:{button:Home:2:homebutton_$authorID:false:🏠}{button:Changes:2:versionchanges_$authorID:false}{button:Bug Fixes:2:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:true}}{actionRow:{button:Changelog history:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false:📜}}]

$let[devbuild;$if[$getVar[pre_release_mode]==on;{footer:Testing is recommended:https#COLON#//us-east-1.tixte.net/uploads/dodogames.wants.solutions/warningsign.png};  ]]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
 {ephemeral}
{interaction}
 ]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionother;]


      `
    },{
      type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Dodo-Bot version}{description:
* **Version**#COLON# $getVar[version]$if[$getVar[buildRevision]!=0; (Revision $getVar[buildRevision])]
* **Release type**#COLON# $getVar[release_type]
* **$get[releasedatetype]**#COLON# <t:$truncate[$divide[$getVar[buildDate];1000]]:f>
 }{color:$getVar[embedcolor]}$nonEscape[$get[devbuild]]}{actionRow:{button:Changes:2:versionchanges_$authorID:false}{button:Bug Fixes:2:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:false}}{actionRow:{button:Changelog history:5:https#COLON#//github.com/DodoGames7/Dodo-Bot/releases:false:📜}}]

 $let[releasedatetype;$advancedReplaceText[$checkCondition[$getVar[pre_release_mode]==on];true;Build created on;false;Released on]]
 $let[devbuild;$if[$getVar[pre_release_mode]==on;{footer:Testing is recommended:https#COLON#//us-east-1.tixte.net/uploads/dodogames.wants.solutions/warningsign.png};  ]]

 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
 {ephemeral}
{interaction}
 ]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==homebutton;]


      `
    }]
