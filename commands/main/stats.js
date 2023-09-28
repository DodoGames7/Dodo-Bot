module.exports = {
name: "stats",
executeAt: "guild",
aliases: "botinfo",
code: `$title[$username[$clientID] stats]
$addField[Dodo-Bot;2.0.0;true]
$addField[Node.js version;\`$nodeVersion\`;true]
$addField[Servers;$guildCount;true]
$addField[Aoi.js version;\`$packageVersion\`;true]
$addField[Uptime Bot;$uptime[humanize];true]
$addField[Ping;$pingms;true]
$addField[Cpu Usage;$cpu;true]
$addField[Ram Usage;$round[$ram]MB;true]
$addField[Users;$allMembersCount;true]
$cooldown[2s; Slow down! Don't spam the command!
Time left: \`%time%\`]
`
} // gets stats's information