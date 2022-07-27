module.exports = {
  name: "exec",
  code: `$exec[$message]
  $onlyIf[$message!=;you need to specify something]
  $onlyForIDS[$botOwnerid;you can't use this command]`
}
