module.exports = {
name: "howgamer",
code: `$title[how Gamer machine]
$description[$username[$mentioned[1;true]] is $random[1;100]% Gamer]
$color[Random]
$onlyIf[$mentioned[1;true]!=$authorID;{newEmbed:{title:how Gamer machine}{description:you're $random[1;100]% Gamer}{color:Random}}]
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
`
}