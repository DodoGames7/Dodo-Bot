module.exports = {
  name: "avatar",
  aliases: ["av","userav"],
  code: `$title[1;$username[$mentioned[1;yes]]'s Avatar]
  $image[1;$userAvatar[$mentioned[1;yes]]
  $addButton[1;Download;link;$nonEscape[$userAvatar[$mentioned[1;yes]]];no]`
}
