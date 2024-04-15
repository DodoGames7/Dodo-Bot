module.exports = {
  name: "fact",
  code: `$sendMessage[$nonEscape[$getobjectproperty[api;fact]];false]
  $createObject[api;$nonEscape[$get[jsonresponse]]]
$onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;Unable to fetch data for fact. Please, try again later.]
$let[jsonresponse;$jsonRequest[https://api.popcat.xyz/fact]]
  $cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;fact;$authorID];$dateStamp];1000]]:R>]`
}
