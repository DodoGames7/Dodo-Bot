module.exports = {
  name: "screenshot",
  aliases: ["ss"],
  code: `$attachment[https://api.popcat.xyz/screenshot?url=$message;screenshot.png]
  $onlyIf[$isValidLink[$message[1]]==true;Hmm, not a valid URL]
  $argsCheck[1;at least provide a url]
  $onlyBotPerms[attachfiles;i need \`ATTACH_FILES\` Permissions before posting generating results]
  `
}