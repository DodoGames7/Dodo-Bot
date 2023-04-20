module.exports = {
name: "stats",
aliases: "botinfo",
code: `$title[$username[$clientID] stats]
$addField[Dependencies;$packageDependencies;false]
$addField[Node.js version;\`$nodeVersion\`;true]
$addField[Servers;$guildCount;true]
$addField[Aoi.js version;\`$packageVersion\`;true]
$addField[Uptime Bot;$uptime[humanize];true]
$addField[Ping;$pingms;true]
$addField[Cpu Usage;$cpu;true]
$addField[Ram Usage;$ram;true]
$addField[Users;$allMembersCount;true]
$cooldown[2s;slow down, don't spam the command]
`
} // gets stats's information