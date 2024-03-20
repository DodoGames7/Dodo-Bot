module.exports = {
  name: "avatar",
  aliases: ["av","userav"],
  code: `$title[$get[usernamechecker]'s Avatar]
  $image[$userAvatar[$findUser[$message;true]]
  $addButton[1;Download;5;$nonEscape[$userAvatar[$findUser[$message;true]]];false]
  $let[usernamechecker;$replaceText[$replaceText[$checkCondition[$charCount[$discriminator[$findUser[$message;true]]]==1];true;$username[$findUser[$message;true]]];false;$userTag[$findUser[$message;true]]]]
  $cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;avatar;$authorID];$dateStamp];1000]]:R>]
  `
}