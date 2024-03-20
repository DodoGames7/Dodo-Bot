module.exports = {
name: "yesorno",
code: `> $message
*$randomText[yes;no]*
$onlyIf[$charCount[$message]<=200;Your question can't be longer than 200 characters]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;yesorno;$authorID];$dateStamp];1000]]:R>]
$onlyIf[$message!=;Please Type something.]`
}