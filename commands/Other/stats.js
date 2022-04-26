module.exports = {
name: "stats",
code: `$title[1;$username[$clientID] stats]
$addField[1;Dependencies;$packageDependencies;no]
$addField[1;Server Count;$serverCount;yes]
$addField[1;Aoi.js;\`$packageVersion\`;yes]
$addField[1;Uptime;$uptime;yes]
$addField[1;Ping;$pingms;yes]
$addField[1;Cpu Usage;$cpu;yes]
$addField[1;Ram Usage;$ram;yes]
$addField[1;User Count;$allMembersCount;yes]
`
} // gets stats's information
