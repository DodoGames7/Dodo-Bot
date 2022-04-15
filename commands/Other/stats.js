module.exports = {
name: "stats",
code: `$title[1;$username[$clientID] stats]
$addField[1;Server Count;$serverCount]
$addField[1;Aoi.js Version;$packageVersion]
$addField[1;Uptime;$uptime]
$addField[1;Ping;$pingms]
$addField[1;Cpu Usage;$cpu]
$addField[1;Ram Usage;$ram]
$addField[1;User Count;$allMembersCount]
`
} // gets stats's information