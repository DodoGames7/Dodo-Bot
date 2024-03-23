module.exports = {
name: "leveling",
code: `
$title[Leveling]
$description[Leveling is a feature that let's members of the server have their levels and xp based on how much they have been active in the server.

To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the "Settings" button.

$get[levelingsystem]
]
$color[$getVar[embedcolor]]
$addButton[1;Settings;4;levelingsetting_$authorID;false]
$addButton[1;Toggle;2;enableleveling_$authorID;false;🔄]
$let[levelingsystem;$replaceText[$replaceText[$getGuildVar[levelsystem];off;*Leveling is currently disabled*];on;*Leveling is currently enabled*]]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
$cooldown[5s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;leveling;$authorID];$dateStamp];1000]]:R>]
`
}
