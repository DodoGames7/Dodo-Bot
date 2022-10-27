module.exports = {
  name: "set-delete",
  code: `$setServerVar[deletedlogs;$mentionedChannels[1]]
  successfully set $channelname[$mentionedChannels[1]] as the deleted logs channel
  $onlyPerms[manageserver;you need \`MANAGE_SERVER\` permission in order to use this]
  $onlyIf[$serverChannelExists[$mentionedChannels[1;yes];$guildID]!=false;this channel does not exist, make sure to mention channels only on this server]
  $onlyIf[$channelType[$mentionedChannels[1;yes]]!=voice;the mentioned below channel is not text-based]
  $argsCheck[1;please provide a channel to set]
  `}
