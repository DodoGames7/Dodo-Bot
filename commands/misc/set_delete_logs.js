module.exports = {
  name: "set-delete",
  code: `$setServerVar[deletedlogs;$mentionedChannels[1]]
  sucessfully set $channelname[$mentionedChannels[1]] as the deleted logs channel
  $onlyPerms[manageserver;you need \`MANAGE_SERVER\` permission in order to use this]
  $argsCheck[1;please provide a channel to set]
  `}
