module.exports = {
name: "howgamer",
code: `$title[HowGamer machine]
$description[$get[target] $random[0;100]% Gamer]
$color[Random]
$let[target;$replaceText[$replaceText[$checkCondition[$mentioned[1;true]==$authorID];true;You're];false;$username[$mentioned[1;true]] is]]
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;howgamer;$authorID];$dateStamp];1000]]:R>]
`
}