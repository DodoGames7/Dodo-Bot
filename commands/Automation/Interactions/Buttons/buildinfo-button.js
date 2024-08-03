module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==buildinfo;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$onlyIf[$getGlobalVar[exposebuildinfo]==on;
$interactionReply[
Viewing build information is currently unavailable.
$ephemeral
]]

$interactionUpdate[
$title[Build info]
$addField[About the build;
* **Dodo-Bot**: v$getGlobalVar[version]
* **Codename**: $getGlobalVar[versionCodename]
* **Branch of the build**: $getGlobalVar[buildBranch]
* **Build number**: $getGlobalVar[buildNumber]
* **Revision**: $getGlobalVar[buildRevision]
;true]
$addField[Progress;
* **Status**: $getGlobalVar[buildStatus]
* **Type**: $getGlobalVar[buildType]
;true]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[mainstats_$authorID;Home;Secondary;🏠]
]`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==mainstats;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[uptime;<t:$round[$divide[$sub[$getTimestamp;$uptime];1000]]:R>]
$let[fsversion;$replace[$replace[$checkCondition[$getGlobalVar[libraryversiondevcheck]==on];true;\`v$version\` (Dev)];false;\`v$version\`]]
$let[dodobotversion;$replace[$replace[$checkCondition[$getGlobalVar[pre_release]==on];true;\`v$getGlobalVar[version]\` (Dev)];false;\`v$getGlobalVar[version]\`]]

$interactionUpdate[
$title[$username[$botID] Stats]
$thumbnail[$userAvatar[$botID]]
$addField[**Users**;$userCount;true]
$addField[**Servers**;$guildCount;true]
$addField[**RAM Usage**;$round[$ram]MB;true]
$addField[**CPU Usage**;$round[$cpu];true]
$addField[**Latency**;$pingms;true]
$addField[**Uptime**;$get[uptime];true]
$addField[**ForgeScript**;$get[fsversion];true]
$addField[**Node.js**;\`$nodeVersion\`;true]
$addField[**Dodo-Bot**;$get[dodobotversion];true]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[buildinfo_$authorID;Build Info;Secondary]
]`
}]
