module.exports = {
  name: "eval",
  aliases: "e",
  code: `$eval[$message]
  $onlyIf[$message!=;you need to evaluate something.]
  $onlyForIDS[$botOwnerid;]
  `
}