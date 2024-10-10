module.exports = {
name: "stats",
info: {
    description: "Returns the statistics of the bot while it's running.",
    perms: "`SendMessages`"
},
$if: "old",
aliases: "botstats",
code: `$title[$username[$clientID]'s Stats]
$addField[**Dodo-Bot**;$get[dodobotversion];true]
$addField[**Node.js**;\`$nodeVersion\`;true]
$addField[**Servers**;$guildCount;true]
$addField[**Aoi.js**;$get[aoijsversion];true]
$addField[**Uptime**;$get[uptime];true]
$addField[**Ping**;$pingms;true]
$addField[**CPU Usage**;$cpu;true]
$addField[**RAM Usage**;$round[$ram]MB;true]
$addField[**Users**;$numberSeparator[$allMembersCount;,];true]
$thumbnail[$clientAvatar]
$color[$getVar[embedcolor]]
$if[$getVar[showbuildinfo]==on]
$addButton[1;Build Info;2;buildinfo_$authorID;false]
$endif

$let[uptime;<t:$round[$divide[$sub[$datestamp;$uptime[ms]];1000]]:R>]
$let[aoijsversion;$advancedReplaceText[$checkCondition[$getVar[libraryversiondevcheck]==on];true;\`v$packageVersion\` (Dev);false;\`v$packageVersion\`]]
$let[dodobotversion;$advancedReplaceText[$checkCondition[$getVar[pre_release_mode]==on];true;\`v$getVar[version]\` (Dev);false;\`v$getVar[version]\`]]
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;stats;$authorID];$dateStamp];1000]]:R>]
`
} 
