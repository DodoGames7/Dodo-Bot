module.exports = {
name: "stats",
info: {
    description: "Returns the stats of the bot while it's running.",
    perms: "`SendMessages`"
},
$if: "old",
aliases: "botstats",
code: `$title[$username[$clientID] stats]
$addField[**Dodo-Bot**;\`v$getVar[version]\`;true]
$addField[**Node.js**;\`$nodeVersion\`;true]
$addField[**Servers**;$guildCount;true]
$addField[**Aoi.js**;\`v$packageVersion\`;true]
$addField[**Uptime**;$uptime[humanize];true]
$addField[**Ping**;$pingms;true]
$addField[**CPU Usage**;$cpu;true]
$addField[**RAM Usage**;$round[$ram]MB;true]
$addField[**Users**;$allMembersCount;true]
$thumbnail[$userAvatar[$clientID]]
$color[$getVar[embedcolor]]
$if[$getVar[pre_release_mode]==on]
$addButton[1;Build Info;2;buildinfo_$authorID;false]
$endif
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;stats;$authorID];$dateStamp];1000]]:R>]
`
} 
