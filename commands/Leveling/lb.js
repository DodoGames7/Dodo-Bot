module.exports = {
name: "leaderboard",
type: "messageCreate",
info: {
    description: "Returns Leveling's leaderboard for this server (if enabled). Enter a number to change current page into.",
    perms: ["`SendMessages`"]
    },
aliases: ["lb", "leveling-lb", "leveling-leaderboard"],
code: `$userCooldown[leveling-lbcmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[leveling-lbcmd]];1000]]:R>]
$onlyIf[$getGuildVar[levelingsystem]==on;Leveling is not enabled currently.]

$let[page;$advancedReplace[$checkCondition[$message==];true;1;false;$callFunction[excludespecialchars;$message]]]
$onlyIf[$isNumber[$get[page]]==true;Please, be sure to enter a actual number.]
$onlyIf[$isInteger[$get[page]]==true;A invalid page has been entered. Please specify a existing page.]
$onlyIf[$get[page]>=1;You can't go less than page 1.]
$onlyIf[$get[page]<=10;You can only switch up to page 10.]

$let[leaderboard;$memberLeaderboard[level;$guildID;asc;10;$get[page];
;leaderboard;position;$return[$switch[$env[position];$case[1;🥇] $case[2;🥈] $case[3;🥉]] $env[position] - $username[$env[leaderboard;id]] - Level $env[leaderboard;value]]]]
$let[servericon;$advancedReplace[$checkCondition[$guildIcon==];true;$userAvatar[$botID];false;$serverIcon]]

$onlyIf[$get[leaderboard]!=;Leaderboard is currently not available. The following reasons are being:
* Members do not have level 2 or higher. Please wait for someone to level up first then try again.
* The specified Leaderboard page still didn't register members. Wait for a couple of members to level up then try again
]

$author[$guildName;$get[servericon]]
$title[Leaderboard]
$description[$get[leaderboard]]
$footer[Page $get[page]/10 - To switch the page, enter a number.]
$color[$getGlobalVar[embedcolor]]


`
}
