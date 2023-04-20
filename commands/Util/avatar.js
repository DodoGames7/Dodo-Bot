module.exports = {
  name: "avatar",
  executeAt: "guild",
  aliases: ["av","userav"],
  code: `$title[$username[$mentioned[1;true]]'s Avatar]
  $image[$userAvatar[$mentioned[1;true]]
  $addButton[1;Download;5;$nonEscape[$userAvatar[$mentioned[1;true]]];false]
  $cooldown[2s;slow down, don't spam the command]
  `
}