module.exports = {
  name: "gun",
  code: `$attachment[https://api.popcat.xyz/gun?image=$replaceText[$userAvatar[$mentioned[1;yes]];.webp;.png;-1];gun.png]
  $onlyBotPerms[attachfiles;i need \`ATTACH_FILES\` Permissions before posting generated results]`
}
