module.exports = {
name: "randomcolor",
info: {
    description: "Returns a random color that you can use.",
    perms: ["`SendMessages`"]
},
aliases: ["randomhex"],
code: `$title[Random Color]
$addField[**hex Code**;#$getObjectProperty[api;hex]]
$addField[**Color name**;$getObjectProperty[api;name]]
$thumbnail[$getObjectProperty[api;image]]
$createObject[api;$nonEscape[$get[jsonresponse]]]
$onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;Unable to fetch data for randomcolor. Please, try again later.]
$let[jsonresponse;$jsonRequest[https://api.popcat.xyz/randomcolor]]
$cooldown[5s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;randomcolor;$authorID];$dateStamp];1000]]:R>]
`
}
