module.exports = {
  name: "fact",
  executeAt: "both",
  code: `$getobjectproperty[fact]
  $createobject[$jsonRequest[https://api.popcat.xyz/fact]]
  $cooldown[5s;slow down, don't spam the command]
  `
}