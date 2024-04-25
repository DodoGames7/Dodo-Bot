module.exports = {
    name: "jseval",
    aliases: ["jse", "djseval", "djse"],
    code: `$djsEval[$message]
    $onlyIf[$message!=;You need to evaluate something.]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
    `
  }