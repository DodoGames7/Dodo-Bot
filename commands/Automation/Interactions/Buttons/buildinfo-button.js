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

$interactionReply[
$title[Build info]
$addField[About the build;
* **Dodo-Bot**: v$getGlobalVar[version]
* **Codename**: $getGlobalVar[versionCodename]
* **Build Branch**: $getGlobalVar[buildBranch]
* **Build number**: $getGlobalVar[buildNumber]
* **Revision**: $getGlobalVar[buildRevision]
;true]
$addField[Progress;
* **Status**: $getGlobalVar[buildStatus]
* **Type**: $getGlobalVar[buildType]
;true]
$color[$getGlobalVar[embedcolor]]
$ephemeral
]`
}]
