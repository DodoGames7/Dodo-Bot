module.exports = {
    name: "jseval",
    info: {
      description: "Executes codes for testing (in discord.js only)",
      perms: ["`SendMessages`"],
      flags: ["`--return`"],
      dev: "true"
    },
    aliases: ["jse", "djseval", "djse"],
    $if: "old",
    code: `
    $if[$checkContains[$message;--return;—return]==true]
    $djsEval[$get[content];true]
    $else
    $djsEval[$message]
    $endif
    $let[content;$removeContains[$message;--return;—return]]
    $onlyIf[$message!=;You need to evaluate something.]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
    `
  }
