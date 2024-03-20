module.exports = {
name: "would-you-rather",
aliases: "wyr",
code: `$title[Would you rather...]
$addField[**Option 2**;$getObjectProperty[api;ops2]]
$addField[**Option 1**;$getObjectProperty[api;ops1]]
$addButton[1;0;2;wyr2-votebutton;false;2️⃣]
$addButton[1;0;2;wyr1-votebutton;false;1️⃣]
$color[$getVar[embedcolor]]
$createObject[api;$jsonRequest[https://api.popcat.xyz/wyr]]
$suppressErrors[{newEmbed:{title:Uh.. Oh!}{description:Something went wrong while running the command. If you still get this message then you may try again later if possible.

If waiting didn't help and you still get this message then it's most likely that the stuff we use for wyr command are down for now.}{color:Red}}]

$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;would-you-rather;$authorID];$dateStamp];1000]]:R>]
`
}