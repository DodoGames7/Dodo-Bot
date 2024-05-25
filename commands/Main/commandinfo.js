module.exports = {
    name: "commandinfo",
    info: {
            description: "The command says it all. What else do you expect?",
            perms: "`SendMessages`"
        },
    aliases: "cmdinfo",
    code: `$author[Command info looker;https://us-east-1.tixte.net/uploads/dodo-bot.wants.solutions/fluent-books.png]
    $title[$commandInfo[$get[cmdname];name]]
    $addField[Aliases;$get[aliases]]
    $addField[Permissions needed;$commandInfo[$get[cmdname];info.perms]]
    $addField[Description;$commandInfo[$get[cmdname];info.description]]
    $color[$getVar[embedcolor]]
    
    $let[aliases;$advancedReplaceText[$checkCondition[$commandInfo[$get[cmdname];aliases]==];true;*This command does not have any aliases.*;false;$commandInfo[$get[cmdname];aliases]]]
    $onlyIf[$commandInfo[$get[cmdname];name]!=;This command does not exist in the bot. Try entering a command that exists within the bot itself.]
    $let[cmdname;$toLowerCase[$message]]
    $onlyIf[$message!=;Enter a command name to view it's information about.]
    $cooldown[2s;Slow down! Don't spam the command!
    Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;commandinfo;$authorID];$dateStamp];1000]]:R>]`
    }