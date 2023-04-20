module.exports = {
  name: "execute",
  aliases: "exec",
  code: `
  \`\`\`js
  $exec[$message]
  \`\`\`
  $onlyIf[$message!=;send me an terminal command to be executed.]
  $onlyForIds[$botOwnerID;]

  `
}