module.exports = {
  name: "fact",
  code: `$sendMessage[$nonEscape[$getobjectproperty[api;fact]];false]
  $createobject[api;$jsonRequest[https://api.popcat.xyz/fact]]
  $cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;fact;$authorID];$dateStamp];1000]]:R>]`
}
