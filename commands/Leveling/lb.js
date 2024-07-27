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
$let[leaderboard;$advancedReplaceText[$userLeaderBoard[$guildID;level;desc;&{top} - {username} - Level {value};10;$get[page];main];&1 -;🥇 1 -;&2 -;🥈 2 -;&3 -;🥉 3 -;&;]]
$let[serverimage;$advancedReplaceText[$checkCondition[$guildIcon==];false;$guildIcon;true;$userAvatar[$clientID]]]
$let[page;$advancedReplaceText[$checkCondition[$message==];true;1;false;$message]]
    $color[$getVar[embedcolor]]
    $onlyIf[$getGuildVar[levelsystem]==on;Leveling is not enabled currently.]
    $cooldown[3s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;leaderboard;$authorID];$dateStamp];1000]]:R>]
`
}
