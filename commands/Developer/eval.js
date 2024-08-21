module.exports = {
  name: "eval",
  info: {
    description: "Executes codes for testing (in aoi.js only)",
    perms: ["`SendMessages`"],
    dev: "true"
  },
  aliases: "e",
  $if: "old",
  code: `$if[$checkContains[$message;--xtrainfo;—xtrainfo]==true]
  $removeContains[$eval[$message;false;false;true;true];--xtrainfo;—xtrainfo]
  $else
  $eval[$message]
  $endif
  $onlyIf[$message!=;You need to evaluate something.]
  $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
  `
}
