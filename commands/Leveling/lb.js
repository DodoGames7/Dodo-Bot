module.exports ={
    name: "leaderboard",
    info: {
        description: "Returns Leveling's leaderboard for this server (if enabled).",
        perms: ["`SendMessages`"]
    },
    aliases: ["lb", "leveling-lb", "level-leaderboard"],
    code: `
    $author[$guildName;$get[serverimage]]
    $title[Leaderboard]
    $description[$get[leaderboard]]
    $onlyIf[$get[leaderboard]!=;Leaderboard is currently not available due to members not having level 2 or higher. Please wait for someone to level up first then try again.]
$let[leaderboard;$advancedReplaceText[$userLeaderBoard[$guildID;level;desc;&{top} - {username} - Level {value};10;1;main];&1 -;🥇 1 -;&2 -;🥈 2 -;&3 -;🥉 3 -;&;]]
$let[serverimage;$advancedReplaceText[$checkCondition[$guildIcon==];false;$guildIcon;true;$userAvatar[$clientID]]]
    $color[1;$getVar[embedcolor]]
    $onlyIf[$getGuildVar[levelsystem]==on;Leveling is not enabled currently.]
    $cooldown[5s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;leaderboard;$authorID];$dateStamp];1000]]:R>]
`
}
