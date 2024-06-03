module.exports = {
name: "welcomer",
info: {
    description: "Setup and manage Welcomer features.",
    perms: ["`SendMessages`", "`ManageChannels`"]
},
aliases: "welcome",
code: `$title[Welcomer]
$description[Welcomer is an way to greet new members of your server with your own choice of the message you're going to use it for the server!

To get started, click on the "Toggle" button! To manage the settings regarding the said feature, press the "Settings" button.

$get[welcomersystem]
]
$color[$getVar[embedcolor]]
$addButton[1;Settings;4;welsettings_$authorID;false]
$addButton[1;Toggle;2;togglewel_$authorID;false;🔄]
$let[welcomersystem;$advancedReplaceText[$getGuildVar[welcomesystem];off;*Welcomer is currently disabled*;on;*Welcomer is currently enabled*]]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
$cooldown[5s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;welcomer;$authorID];$dateStamp];1000]]:R>]
`
}
