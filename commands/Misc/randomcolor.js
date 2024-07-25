module.exports = {
name: "randomcolor",
info: {
        description: "Returns Random Colors that you can use.",
        perms: "`SendMessages`"
},
type: "messageCreate",
aliases: ["randomhex"],
code: `$userCooldown[randomcolorcmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[randomcolorcmd]];1000]]:R>]
$let[status;$httpRequest[https://api.popcat.xyz/randomcolor;get]]
$onlyIf[$get[status]==200;Unable to fetch data for a random color. Please, try again later.]
$title[Random Color]
$addField[**Name**;$httpResult[name]]
$addField[**Hex code**;#$httpResult[hex]]
$addField[**Number**;$hexToInt[$httpResult[hex]]]
$thumbnail[$httpResult[image]]
$color[$httpResult[hex]]
`
}