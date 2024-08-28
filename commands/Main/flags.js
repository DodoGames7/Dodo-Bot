module.exports = {
name: "flags",
info: {
        description: "Returns the flags of a command specified.",
        perms: ["`SendMessages`"]
},
aliases: ["flag"],
type: "messageCreate",
code: `
$userCooldown[flagcmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[flagcmd]];1000]]:R>]

$onlyIf[$message!=;Please type a command name to look for it's flags.]

$let[command;$commandInfo[messageCreate;$toLowerCase[$message];info]]
$onlyIf[$isJSON[$get[command]]==true;Try typing for a command that exists to view if it has flags.]
$jsonLoad[cmdinfo;$get[command]]

$let[flags;$advancedReplace[$checkCondition[$callFunction[commandflags;$toLowerCase[$message]]==];true;None;false;$callFunction[commandflags;$toLowerCase[$message]]]]

$let[actualname;$jsonLoad[actualname;$commandInfo[messageCreate;$toLowerCase[$message];name]]]

$attachment[./handlers/assets/magnifying-glass-tilted-left.png;magnifying-glass.png]
$author[Command flag looker;attachment://magnifying-glass.png]
$title[$get[actualname]'s flags]
$description[The command has the following flags:

$get[flags]]
$color[$getGlobalVar[embedcolor]]
`
}
