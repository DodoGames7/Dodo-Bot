module.exports = {
name: "would-you-rather",
info: {
        description: "Starts a game of two options to choose from.",
        perms: "`SendMessages`"
},
aliases: ["wyr"],
type: "messageCreate",
code: `
$userCooldown[wyrcmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[wyrcmd]];1000]]:R>]
$let[status;$httpRequest[https://api.gamecord.xyz/wyr;get]]
$onlyIf[$get[status]==200;Unable to fetch data for wyr. Please, try again later.]

$title[Would you rather...]
$addField[**Option 1**;$httpResult[data;option1]]
$addField[**Option 2**;$httpResult[data;option2]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[wyr-ops1;0;Secondary;1️⃣]
$addButton[wyr-ops2;0;Secondary;2️⃣]

`
}
