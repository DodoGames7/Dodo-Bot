module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[{newEmbed:{title:Build Info}{field:General:
* **Dodo-Bot**#COLON# v$getVar[version]
* **Codename**#COLON# $getVar[versionCodename]
* **Branch of the build**#COLON# $getVar[buildBranch]
* **Revision**#COLON# $getVar[buildRevision]
* **Build number**#COLON# $getVar[buildNumber]:true}
{field:Progress:
* **Status**#COLON# $getVar[buildStatus]
* **Type**#COLON# $getVar[buildType]
:true}{color:$getVar[embedcolor]}}{actionRow:{button:Home:2:statshome_$authorID:false:🏠}}]
    
    $onlyIf[$getVar[exposebuildinfo]==on;Viewing build information is unavailable.
    {ephemeral}
{interaction}
  ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buildinfo;]
`
    },{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[{newEmbed:{title:$username[$clientID]'s Stats}{field:**Users**:$allMembersCount:true}{field:**RAM Usage**:$round[$ram]MB:true}{field:**CPU Usage**:$cpu:true}{field:**Ping**:$pingms:true}{field:**Uptime**:$nonEscape[$get[uptime]]:true}{field:**Aoi.js**:$get[aoijsversion]:true}{field:**Servers**:$guildCount:true}{field:**Node.js**:\`$nodeVersion\`:true}{field:**Dodo-Bot**:$get[dodobotversion]:true}{thumbnail:$userAvatar[$clientID]}{color:$getVar[embedcolor]}}{actionRow:{button:Build Info:2:buildinfo_$authorID:false}}]

$let[uptime;<t:$round[$divide[$sub[$datestamp;$uptime[ms]];1000]]:R>]
$let[aoijsversion;$advancedReplaceText[$checkCondition[$getVar[libraryversiondevcheck]==on];true;\`v$packageVersion\` (Dev);false;\`v$packageVersion\`]]
$let[dodobotversion;$advancedReplaceText[$checkCondition[$getVar[pre_release_mode]==on];true;\`v$getVar[version]\` (Dev);false;\`v$getVar[version]\`]]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==statshome;]
`
    }]
