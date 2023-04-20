module.exports = {
  name: "fact",
  code: `$sendMessage[$getobjectproperty[fact];false]
  $createobject[$jsonRequest[https://api.popcat.xyz/fact]]`
}