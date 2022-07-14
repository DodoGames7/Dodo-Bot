module.exports = {
  name: "delete",
  code: `$attachment[https://api.miduwu.ga/image/delete?image=$replaceText[$userAvatar[$mentioned[1;yes]];.webp;.png;-1];deleted.png]
  $onlyBotPerms[attachfiles;i need \`ATTACH_FILES\` Permissions before posting generated results]
  `
}
