module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionReply[{newEmbed:{title:Build Info}{field:General:
* **Dodo-Bot**#COLON# v$getVar[version]
* **Codename**#COLON# $getVar[versionCodename]
* **Build Branch**#COLON# $getVar[buildBranch]
* **Revision**#COLON# $getVar[buildRevision]
* **Build number**#COLON# $getVar[buildNumber]:true}
{field:Progress:
* **Status**#COLON# $getVar[buildStatus]
* **Type**#COLON# $getVar[buildType]
:true}{color:$getVar[embedcolor]}};all;true]
    
    $onlyIf[$getVar[showbuildinfo]==on;Viewing build information is unavailable.
    {ephemeral}
{interaction}
  ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buildinfo;]
`
    }]
