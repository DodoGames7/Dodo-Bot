module.exports ={
    name: "rank",
    aliases: "level",
    code: `
    $title[$username[$get[user]]'s Rank]
    $description[
    Level: \`$getUserVar[level;$get[user]]\`
    XP: \`$getUserVar[xp;$get[user]]\`/\`$getUserVar[xpLimit;$get[user]]\`]
    $thumbnail[$userAvatar[$get[user]]]
    $color[$getVar[embedcolor]]
$let[user;$findMember[$message;true]]
    $onlyIf[$getGuildVar[levelsystem]==on;Leveling is not enabled currently.]
$cooldown[5s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;rank;$authorID];$dateStamp];1000]]:R>]
`
}