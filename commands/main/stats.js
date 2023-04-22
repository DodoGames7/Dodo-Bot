module.exports = {
name: "stats",
executeAt: "guild",
aliases: "botinfo",
code: `$title[$username[$clientID] stats]
$addField[Node.js version;\`$nodeVersion\`;true]
$addField[Servers;$guildCount;true]
$addField[Aoi.js version;\`$packageVersion\`;true]
$addField[Uptime Bot;$uptime[humanize];true]
$addField[Ping;$pingms;true]
$addField[Cpu Usage;$cpu;true]
$addField[Ram Usage;$round[$ram]%;true]
$addField[Users;$allMembersCount;true]
$cooldown[2s;slow down, don't spam the command]
`
} // gets stats's information