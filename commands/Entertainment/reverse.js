module.exports = {
  name: "reverse",
  code: `$nonEscape[$reverse[$message]]
  $onlyIf[$message!=;give me something to reverse.]
  $cooldown[2s;slow down, don't spam the command]`
}