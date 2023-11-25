module.exports = {
  name: "fact",
  executeAt: "both",
  code: `$sendMessage[$nonEscape[$getobjectproperty[api;fact]];false]
  $createobject[api;$jsonRequest[https://api.popcat.xyz/fact]]
  $cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]`
}
