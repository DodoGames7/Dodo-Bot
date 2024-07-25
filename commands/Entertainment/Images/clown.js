module.exports = [{
name: "clown",
info: {
        description: "Puts your/user's profile picture on a cut-scene from Teen Titans Go.",
        perms: ["`SendMessages`","`AttachFiles`"]
},
type: "messageCreate",
code: `$userCooldown[clowncmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[clowncmd]];1000]]:R>]
$onlyIf[$channelHasPerms[$channelID;$botID;AttachFiles]==true;I must have \`AttachFiles\` permission in order to proceed in this channel. Please grant me the permission and try again.]
$let[user;$findUser[$message[0];true]]
$let[apilink;https://api.popcat.xyz/clown?image=$userAvatar[$get[user];4096;png]]
$let[status;$httpRequest[$get[apilink];get]]
$onlyIf[$get[status]==200;Looks like there're issues with processing the image. Please, try again later.]
$attachment[$get[apilink];clown.png]

`
}]