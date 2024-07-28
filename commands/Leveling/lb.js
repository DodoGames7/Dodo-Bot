module.exports ={
    name: "leaderboard",
    info: {
        description: "Returns Leveling's leaderboard for this server (if enabled). Enter a number to change current page into.",
        perms: ["`SendMessages`"]
    },
    aliases: ["lb", "leveling-lb", "level-leaderboard"],
    code: `
    $author[$guildName;$get[serverimage]]
    $title[Leaderboard]
    $description[$get[leaderboard]]
    $footer[Page $get[page]/10 - To switch the page, enter a number.]
    $onlyIf[$get[leaderboard]!=;Leaderboard is currently not available. The following reasons are being:
* Members do not have level 2 or higher. Please wait for someone to level up first then try again.
* The specified Leaderboard page still didn't register members. Wait for a couple of members to level up then try again
    ]
$onlyIf[$get[page]>=1;You can't go less than page 1.]
$onlyIf[$get[page]<=10;You can only switch up to page 10.]
    $onlyIf[$isNumber[$get[page]]==true;A invalid page has been entered. Please specify a existing page.]
$let[leaderboard;$advancedReplaceText[$userLeaderBoard[$guildID;level;desc;&{top} - {username} - Level {value};10;$get[page];main];&1 -;🥇 1 -;&2 -;🥈 2 -;&3 -;🥉 3 -;&;]]
$let[serverimage;$advancedReplaceText[$checkCondition[$guildIcon==];false;$guildIcon;true;$userAvatar[$clientID]]]
$let[page;$advancedReplaceText[$checkCondition[$message==];true;1;false;$message]]
    $color[$getVar[embedcolor]]
    $onlyIf[$getGuildVar[levelsystem]==on;Leveling is not enabled currently.]
    $cooldown[3s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;leaderboard;$authorID];$dateStamp];1000]]:R>]
`
}
