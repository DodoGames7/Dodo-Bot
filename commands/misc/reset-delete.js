module.exports = {
  name: "reset-delete",
  code: `$setServerVar[deletedlogs;;$guildID]
  successfully reseted the deleted logs channel set
  $onlyPerms[manageserver;you need \`MANAGE_SERVER\` permission in order to use this]
  `
}
