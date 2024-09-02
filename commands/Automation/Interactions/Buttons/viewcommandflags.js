module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$advancedTextSplit[$customID;_;0]==viewcmdflags;]
$onlyIf[$advancedTextSplit[$customID;_;1]==$authorID;$interactionReply[You're not the author of this interaction.
$ephemeral
]]

$let[cmdname;$advancedTextSplit[$customID;_;2]]

$let[flags;$advancedReplace[$checkCondition[$callFunction[commandflags;$get[cmdname]]==];true;None;false;$callFunction[commandflags;$get[cmdname]]]]

$interactionReply[
$title[Flags of this command]
$description[The command has the following flags:

$get[flags]
]
$color[$getGlobalVar[embedcolor]]
$ephemeral
]
`
}]
