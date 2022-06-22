module.exports = {
  name: "drip",
  code: `$attachment[https://api.popcat.xyz/drip?image=$replaceText[$userAvatar[$mentioned[1;yes]];.webp;.png;-1];drip.png]
  $onlyBotPerms[attachfiles;i need \`ATTACH_FILES\` Permissions before posting generating results]
  `
}