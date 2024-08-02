module.exports = {
    name: "commandinfo",
    info: {
            description: "The command says it all. What else do you expect?",
            perms: "`SendMessages`"
        },
    $if: "old",
    aliases: ["cmdinfo", "ci"],
    code: `$author[Command info looker;https://us-east-1.tixte.net/uploads/dodo-bot.wants.solutions/fluent-books.png]
    $title[$commandInfo[$get[cmdname];name]]
    $addField[Aliases;$get[aliases]]
    $addField[Permissions needed;$arrayJoin[perms;, ]]
    $addField[Description;$commandInfo[$get[cmdname];info.description]]
    $color[$getVar[embedcolor]]
    $if[$commandInfo[$toLowerCase[$message];info.beta]==true]
    $footer[Experimental command.;https://us-east-1.tixte.net/uploads/dodogames.wants.solutions/redwarning.png]
  $endif
$let[aliases;$advancedReplaceText[$checkCondition[$arrayJoin[aliases;, ]==];true;*This command does not have any aliases.*;false;$arrayJoin[aliases;, ]]]
$createArray[aliases;$nonEscape[$get[aliaseschecker]]]
$let[aliaseschecker;$advancedReplaceText[$nonEscape[$commandInfo[$get[cmdname];aliases]];,;#SEMI#]]

$createArray[perms;$nonEscape[$get[permschecker]]]
$let[permschecker;$advancedReplaceText[$nonEscape[$commandInfo[$get[cmdname];info.perms]];,;#SEMI#]]

    $onlyIf[$commandInfo[$get[cmdname];info.dev]==;Viewing Developer commands is not supported.]
    $onlyIf[$commandInfo[$get[cmdname];name]!=;This command does not exist in the bot. Try entering a command that exists within the bot itself.]
    $let[cmdname;$toLowerCase[$message]]
    $onlyIf[$message!=;Enter a command name to view it's information about.]
    $cooldown[2s;Slow down! Don't spam the command!
    Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;commandinfo;$authorID];$dateStamp];1000]]:R>]`
    }
