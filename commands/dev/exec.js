module.exports = {
  name: "execute",
  executeAt: "both",
  aliases: "exec",
  code: `
  \`\`\`js
  $exec[$message]
  \`\`\`
  $onlyIf[$message!=;Send me an terminal command to be executed.]
  $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]

  `
}