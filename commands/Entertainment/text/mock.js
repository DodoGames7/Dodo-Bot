module.exports = {
name: "mock",
info: {
        description: "Adds mockery to your text.",
        perms: "`SendMessages`"
},
type: "messageCreate",
code: `$userCooldown[mockcmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[mockcmd]];1000]]:R>]
$disableAllMentions
$onlyIf[$message!=;Please enter a text.]
$let[status;$httpRequest[https://api.popcat.xyz/mock?text=$encodeURI[$message];get]]
$onlyIf[$get[status]==200;Unable to generate the result. Please, try again later.]
$httpResult[text]
`
}