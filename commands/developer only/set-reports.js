module.exports = {
  name: "set-reports",
  code: `$setChannelVar[reportlogs;$mentionedChannels[1]]
  successfully set $channelname[$mentionedChannels[1]] as the bug reports channel
  $argsCheck[1;you need to mention a channel]
  $onlyForIDS[$botOwnerID;you cannot use this command]
  `
}