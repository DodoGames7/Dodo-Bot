module.exports = {
  name: "avatar",
  info: {
    description: "Returns your/users profile picture.",
    perms: ["`SendMessages`"]
},
  aliases: ["av","userav"],
  code: `$title[$get[usernamechecker]'s Avatar]
  $image[$userAvatar[$findUser[$message;true]]]
  $color[$getVar[embedcolor]]
  $addButton[1;Download;5;$nonEscape[$userAvatar[$findUser[$message;true]]];false]
  $let[usernamechecker;$advancedReplaceText[$checkCondition[$hasUserTag[$findUser[$message;true]]==false];true;$username[$findUser[$message;true]];false;$userTag[$findUser[$message;true]]]]
  $cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;avatar;$authorID];$dateStamp];1000]]:R>]
  `
}
