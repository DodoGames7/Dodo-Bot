module.exports = {
name: "leaderboard",
type: "messageCreate",
info: {
    description: "Returns Leveling's leaderboard for this server (if enabled).",
    perms: ["`SendMessages`"]
    },
aliases: ["lb", "leveling-lb", "leveling-leaderboard"],
code: `$userCooldown[leveling-lbcmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[leveling-lbcmd]];1000]]:R>]
$onlyIf[$getGuildVar[levelingsystem]==on;Leveling is not enabled currently.]

$let[leaderboard;$memberLeaderboard[level;$guildID;asc;10;1;
;leaderboard;position;$return[$switch[$env[position];$case[1;🥇] $case[2;🥈] $case[3;🥉]] $env[position] - $username[$env[leaderboard;id]] - Level $env[leaderboard;value]]]]
$let[servericon;$replace[$replace[$checkCondition[$guildIcon==];true;$userAvatar[$botID]];false;$serverIcon]]
$onlyIf[$get[leaderboard]!=;Leaderboard is currently not available due to members not having level 2 or higher. Please wait for someone to level up first then try again.]

$author[$guildName;$get[servericon]]
$title[Leaderboard]
$description[$get[leaderboard]]
$color[$getGlobalVar[embedcolor]]


`
}