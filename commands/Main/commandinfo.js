module.exports = {
name: "commandinfo",
info: {
        description: "The command says it all. What else do you expect?",
        perms: "`SendMessages`"
    },
aliases: ["cmdinfo"],
type: "messageCreate",
code: `$userCooldown[cmdinfolookercmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[cmdinfolookercmd]];1000]]:R>]

$onlyIf[$message!=;Please type a command name to look for it's information.]
$let[command;$commandInfo[messageCreate;$toLowerCase[$message];info]]
$onlyIf[$isJSON[$get[command]]==true;Could not get information about the command you're searching for. Possible reasons are being:
* The command does not exist
* The command does not have any information currently
]
$jsonLoad[cmdinfo;$get[command]]
$let[aliases;$replace[$replace[$checkCondition[$callFunction[commandaliases;$toLowerCase[$message]]==];true;*This command does not have any aliases.*];false;$callFunction[commandaliases;$toLowerCase[$message]]]]
$let[actualname;$jsonLoad[actualname;$commandInfo[messageCreate;$toLowerCase[$message];name]]]
$onlyIf[$commandInfo[messageCreate;$toLowerCase[$message];info;dev]==;Viewing developer commands is unsupported.]
$author[Command info looker;https://us-east-1.tixte.net/uploads/dodogames.wants.solutions/magnifying-glass-tilted-left.png]
$title[$env[actualname;$get[actualname]]]
$addField[Description;$env[cmdinfo;description]]
$addField[Permissions needed;$callFunction[commandperms;$toLowerCase[$message]]]
$addField[Aliases;$get[aliases]]
$color[$getGlobalVar[embedcolor]]

`
}