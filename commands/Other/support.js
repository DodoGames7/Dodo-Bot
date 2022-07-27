module.exports = {
  name: "support",
  code: `$dm https://discord.gg/pFwKjAaZvj $sendMessage[you Got Mail!;no]
  $onlyIf[$isUserDMEnabled!=false;member has dms closed, sending here instead.
  https://discord.gg/pFwKjAaZvj]`
}
