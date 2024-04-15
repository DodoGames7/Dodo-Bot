module.exports = {
name: "would-you-rather",
aliases: "wyr",
code: `$title[Would you rather...]
$addField[**Option 2**;$getObjectProperty[api;ops2]]
$addField[**Option 1**;$getObjectProperty[api;ops1]]
$addButton[1;0;2;wyr2-votebutton;false;2️⃣]
$addButton[1;0;2;wyr1-votebutton;false;1️⃣]
$color[$getVar[embedcolor]]
$createObject[api;$nonEscape[$get[jsonresponse]]]
$onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;Unable to fetch data for wyr. Please, try again later.]
$let[jsonresponse;$jsonRequest[https://api.popcat.xyz/wyr]]
$suppressErrors[Unable to fetch data for wyr. Please, try again later.]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;would-you-rather;$authorID];$dateStamp];1000]]:R>]
`
}