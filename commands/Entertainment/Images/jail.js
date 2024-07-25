module.exports = [{
name: "jail",
info: {
        description: "Puts your/users profile picture into behind the bars.",
        perms: ["`SendMessages`","`AttachFiles`"]
},
type: "messageCreate",
code: `$userCooldown[jailcmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[jailcmd]];1000]]:R>]
$onlyIf[$channelHasPerms[$channelID;$botID;AttachFiles]==true;I must have \`AttachFiles\` permission in order to proceed in this channel. Please grant me the permission and try again.]
$let[user;$findUser[$message[0];true]]
$let[apilink;https://api.popcat.xyz/jail?image=$userAvatar[$get[user];4096;png]]
$let[status;$httpRequest[$get[apilink];get]]
$onlyIf[$get[status]==200;Looks like there're issues with processing the image. Please, try again later.]
$attachment[$get[apilink];jail.png]

`
}]