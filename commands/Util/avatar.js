module.exports = {
  name: "avatar",
  executeAt: "guild",
  aliases: ["av","userav"],
  code: `$title[$username[$findUser[$message;true]]'s Avatar]
  $image[$userAvatar[$findUser[$message;true]]
  $addButton[1;Download;5;$nonEscape[$userAvatar[$findUser[$message;true]]];false]
  $cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
  `
}