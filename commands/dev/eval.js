module.exports = {
  name: "eval",
  executeAt: "both",
  aliases: "e",
  code: `$eval[$message]
  $onlyIf[$message!=;You need to evaluate something.]
  $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
  `
}