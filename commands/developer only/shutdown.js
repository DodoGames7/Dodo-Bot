module.exports = {
  name: "shutdown",
  code: `
  $shutdown
$wait[3s]
$sendMessage[Done!]
$wait[5s]
$sendMessage[shutting down..]
  $onlyForIDS[$botOwnerId;you can't use this command]`
}
