module.exports = {
  name: "fact",
  executeAt: "both",
  code: `$sendMessage[$getobjectproperty[fact];false]
  $createobject[$jsonRequest[https://api.popcat.xyz/fact]]`
}