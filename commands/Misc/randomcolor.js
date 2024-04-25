module.exports = {
name: "randomcolor",
aliases: ["randomhex"],
code: `$title[Random Color]
$addField[**hex Code**;#$getObjectProperty[api;hex]]
$addField[**Color name**:;$replaceText[$getObjectProperty[api;name];undefined;No name has been found]]
$thumbnail[$getObjectProperty[api;image]]
$createObject[api;$nonEscape[$get[jsonresponse]]]
$onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;Unable to fetch data for randomcolor. Please, try again later.]
$let[jsonresponse;$jsonRequest[https://api.popcat.xyz/randomcolor]]
$cooldown[5s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;randomcolor;$authorID];$dateStamp];1000]]:R>]
`
}
