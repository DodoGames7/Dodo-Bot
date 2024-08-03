module.exports = {
    name: "rank",
    type: "messageCreate",
    info: {
        description: "View your/someone's current level.",
        perms: ["`SendMessages`"]
    },
    aliases: ["level", "lvl"],
    code: `$userCooldown[rankcmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[rankcmd]];1000]]:R>]
 $onlyIf[$getGuildVar[levelingsystem]==on;Leveling is not enabled currently.]
$let[user;$mentioned[0;true]]
$onlyIf[$isBot[$get[user]]==false;Bots don't have Levels.]
$title[$username[$get[user]]'s Rank]
$description[
* **Level:** \`$getMemberVar[level;$get[user]]\`
* **XP:** \`$getMemberVar[xp;$get[user]]\`/\`$getMemberVar[xpLimit;$get[user]]\`
]
$thumbnail[$userAvatar[$get[user]]]
$color[$getGlobalVar[embedcolor]]
`
}
