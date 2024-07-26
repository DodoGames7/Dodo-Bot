module.exports = {
name: "whereiseveryone",
type: "messageCreate",
info: {
 description: "Starts a short recreation of a cut-scene from Shrek movie.",
 perms: "`SendMessages`"
},
code: `
$userCooldown[whereiseveryonecmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[whereiseveryonecmd]];1000]]:R>]
$attachment[./handler/assets/whereiseveryone-part1.png;shrek1.png]
$attachment[./handler/assets/whereiseveryone-part2.jpg;shrek2.png]
$attachment[./handler/assets/whereiseveryone-part3.jpg;shrek3.png]


$let[messageID;$sendMessage[$channelID;$title["It's quiet..."]
$image[attachment://shrek1.png]
;true]]
$wait[5000]
$!editMessage[$channelID;$get[messageID];$title["Too quiet..."]
$image[attachment://shrek2.png]
]
$wait[5000]
$!editMessage[$channelID;$get[messageID];$title["Where is Everyone?"]
$image[attachment://shrek3.png]
]

`
}
