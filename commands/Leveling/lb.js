module.exports ={
    name: "level-leaderboard",
    aliases: ["lb", "leveling-lb", "leaderboard"],
    code: `
    $title[$guildName's Leaderboard]
    $description[$get[leaderboard]]
$let[leaderboard;$advancedReplaceText[$userLeaderBoard[$guildID;level;desc;{top} - {username} - Level {value};10;1;main];1 -;🥇 1 -;2 -;🥈 2 -;3 -;🥉 3 -]]
    $color[1;$getVar[embedcolor]]
    $onlyIf[$getGuildVar[levelsystem]==on;Leveling is not enabled currently.]
`
}