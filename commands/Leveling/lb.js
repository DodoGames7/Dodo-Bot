module.exports ={
    name: "level-leaderboard",
    aliases: ["lb", "leveling-lb", "leaderboard"],
    code: `
    $title[Leveling Leaderboard]
    $description[$get[leaderboard]]
$let[leaderboard;$advancedReplaceText[$userLeaderBoard[$guildID;level;desc;&{top} - {username} - Level {value};10;1;main];&1 -;🥇 1 -;&2 -;🥈 2 -;&3 -;🥉 3 -;&;]]
    $color[1;$getVar[embedcolor]]
    $onlyIf[$getGuildVar[levelsystem]==on;Leveling is not enabled currently.]
    $cooldown[5s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;level-leaderboard;$authorID];$dateStamp];1000]]:R>]
`
}