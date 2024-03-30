module.exports ={
    name: "level-leaderboard",
    aliases: ["lb", "leveling-lb", "leaderboard"],
    code: `
    $title[$guildName's Leaderboard]
    $description[1;$userLeaderBoard[$guildID;level;desc;{top} - {username} - Level {value};10;1;main]]   
    $color[1;$getVar[embedcolor]]
    $onlyIf[$getGuildVar[levelsystem]==on;Leveling is not enabled currently.]
`
}