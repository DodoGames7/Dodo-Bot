module.exports = {
  name: "eval",
  aliases: "e",
  code: `$eval[$message]
  $onlyIf[$message!=;You need to evaluate something.]
  $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
  `
}