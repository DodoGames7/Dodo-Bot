module.exports = {
  name: "changemymind",
  code: `$attachment[https://vacefron.nl/api/changemymind?text=$replaceText[$message; ;+;-1];changemymind.png]
  $onlyIf[$message!=;the change my mind master didn't approve you being giving him nothing]
  $onlyBotPerms[attachfiles;i need \`ATTACH_FILES\` Permissions before posting generating results]`
}