module.exports = {
name: "coinflip",
info: {
        description: "Returns either Heads or Tails.",
        perms: "`SendMessages`"
},
aliases: ["cf"],
type: "messageCreate",
code: `
$userCooldown[coinflipcmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[coinflipcmd]];1000]]:R>]

$let[number;$and[$randomNumber[1;100;false]>=38;$randomNumber[1;100;false]<89]]
$let[result;$replace[$replace[$checkCondition[$get[number]];true;Heads];false;Tails]]

$let[messageID;$sendMessage[$channelID;$title[The coin is landing...]
$color[$getGlobalVar[embedcolor]]
;true]]
$wait[5000]
$!editMessage[$channelID;$get[messageID];$title[You got...]
$description[**$get[result]**!]
$color[$getGlobalVar[embedcolor]]
]

`
}
