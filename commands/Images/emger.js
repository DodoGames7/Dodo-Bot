module.exports = {
  name: "emergencymeeting",
  aliases: ["emger", "emergency"],
  code: `$attachment[https://vacefron.nl/api/emergencymeeting?text=$message;emergency.png]
  $onlyIf[$message!=;the players would probably have ejected you already for being doing it for no reason]
  $onlyBotPerms[attachfiles;i need \`ATTACH_FILES\` Permissions before posting generating results]
  `
}