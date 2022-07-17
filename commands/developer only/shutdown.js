module.exports = {
  name: "shutdown",
  code: `
  $shutdown
  $wait[2s]
  bot has been shutdown
  $onlyForIDS[$botOwnerId;you can't use this command]`
}
