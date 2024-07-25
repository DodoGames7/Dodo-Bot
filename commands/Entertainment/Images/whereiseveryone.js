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
$let[messageID;$sendMessage[$channelID;$title["It's quiet..."]
$image[https://us-east-1.tixte.net/uploads/dodogames.wants.solutions/whereiseveryone-part1.png]
;true]]
$wait[5000]
$!editMessage[$channelID;$get[messageID];$title["Too quiet..."]
$image[https://us-east-1.tixte.net/uploads/dodogames.wants.solutions/whereiseveryone-part2.jpg]
]
$wait[5000]
$!editMessage[$channelID;$get[messageID];$title["Where is Everyone?"]
$image[https://us-east-1.tixte.net/uploads/dodogames.wants.solutions/whereiseveryone-part3.jpg]
]

`
}