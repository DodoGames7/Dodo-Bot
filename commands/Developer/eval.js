module.exports = {
  name: "eval",
  info: {
    description: "Executes codes for testing (in aoi.js only)",
    perms: ["`SendMessages`"],
    dev: "true"
  },
  aliases: "e",
  code: `
  $eval[$message]
  $onlyIf[$message!=;You need to evaluate something.]
  $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
  `
}
