module.exports = {
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[{newEmbed:{title:Flags of this command}{description:The following flags is available for this command#COLON#
$get[flags]
    }{color:$getVar[embedcolor]}};all;true]

    $let[flags;$advancedReplaceText[$checkCondition[$arrayJoin[flags;, ]==];true;*No flag(s) exist for this command.*;false;$arrayJoin[flags;, ]]]
$createArray[flags;$nonEscape[$get[flagschecker]]]
$let[flagschecker;$advancedReplaceText[$nonEscape[$commandInfo[$get[cmdname];info.flags]];,;#SEMI#]]

$let[cmdname;$interactionData[customId];_;3]]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
   {ephemeral}
{interaction}
    ]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==viewcommandflags;]
`
}
