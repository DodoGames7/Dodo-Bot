module.exports = {
name: "reverse",
type: "messageCreate",
info: {
 description: "Makes your text reversed.",
 perms: "`SendMessages`"
},
code: `
$userCooldown[reversecmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[reversecmd]];1000]]:R>]
$disableAllMentions
$onlyIf[$message!=;Please enter a text.]
$reverseText[$message]
`
}