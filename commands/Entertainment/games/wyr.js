module.exports = {
name: "would-you-rather",
info: {
    description: "Starts a wyr game of two options to choose from. Include \`--usereactions\` to enable Reactions.",
    perms: ["`SendMessages`"]
},
$if: "old",
aliases: "wyr",
code: `$title[Would you rather...]
$addField[**Option 2**;$getObjectProperty[api;data.option2]]
$addField[**Option 1**;$getObjectProperty[api;data.option1]]

$if[$checkContains[$message;--usereactions;—usereactions]==true]
$addClientReactions[1️⃣;2️⃣]
$else
$addButton[1;0;2;wyr2-votebutton;false;2️⃣]
$addButton[1;0;2;wyr1-votebutton;false;1️⃣]
$endif

$color[$getVar[embedcolor]]
$createObject[api;$nonEscape[$get[jsonresponse]]]
$onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;Unable to fetch data for wyr. Please, try again later.]
$let[jsonresponse;$jsonRequest[https://api.gamecord.xyz/wyr;;Error]]
$suppressErrors[Unable to fetch data for wyr. Please, try again later.]
$cooldown[4s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[4s;user;would-you-rather;$authorID];$dateStamp];1000]]:R>]
`
}
