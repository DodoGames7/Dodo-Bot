module.exports = {
    name: "credits",
    code: `$title[Dodo-Bot Credits]
    $description[
    $username[632607624742961153] - Developer of the bot
    $username[431749535656837130] - Inspiration to improve some commands
]
$color[$getVar[embedcolor]]
$addButton[1;Use of source code;2;useofsource_$authorID;false]
$addButton[1;Packages used;2;packagesused_$authorID;false]
$addButton[1;Main Credits;2;maincredits_$authorID;true]
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;credits;$authorID];$dateStamp];1000]]:R>]
`
}
