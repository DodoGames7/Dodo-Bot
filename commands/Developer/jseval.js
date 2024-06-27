module.exports = {
    name: "jseval",
    info: {
      description: "Executes codes for testing (in discord.js only)",
      perms: ["`SendMessages`"],
      dev: "true"
    },
    aliases: ["jse", "djseval", "djse"],
    code: `$djsEval[$message]
    $onlyIf[$message!=;You need to evaluate something.]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
    `
  }
