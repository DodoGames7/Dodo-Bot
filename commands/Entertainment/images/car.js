module.exports = {
name: "car",
code: `
$author[From Reddit;$userAvatar[$clientID];$getObjectProperty[api;image]]
$title[Here's a random car]
$thumbnail[$getObjectProperty[api;image]]
$addField[About this car;$getObjectProperty[api;title]]
$addButton[1;Image link;5;$nonEscape[$getObjectProperty[api;image]];false]
$createObject[api;$jsonRequest[https://api.popcat.xyz/car]]
$suppressErrors[It looks like there're issues with processing the image. Please, try again later if possible.]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;car;$authorID];$dateStamp];1000]]:R>]
                           `
}
