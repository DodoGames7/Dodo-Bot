module.exports = {
    name: "stats",
    info: {
        description: "Checks the current statistics while the bot is running (like RAM Usage).",
        perms: "`SendMessages`"
    },
    aliases: ["botstats", "statistics"],
    type: "messageCreate",
    code: `
$userCooldown[statscmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[statscmd]];1000]]:R>]
$let[uptime;<t:$round[$divide[$sub[$getTimestamp;$uptime];1000]]:R>]
$let[fsversion;$replace[$replace[$checkCondition[$getGlobalVar[libraryversiondevcheck]==on];true;\`v$version\` (Dev)];false;\`v$version\`]]
$let[dodobotversion;$replace[$replace[$checkCondition[$getGlobalVar[pre_release]==on];true;\`v$getGlobalVar[version]\` (Testing)];false;\`v$getGlobalVar[version]\`]]

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
$if[$getGlobalVar[exposebuildinfo]==on;
$addActionRow
$addButton[buildinfo_$authorID;Build Info;Secondary]
]`
}
