module.exports = {
    name: "resetchatbot",
    code: `$setServerVar[chatbot;;$guildID]
    successfully reseted the chatbot channel set
    $onlyPerms[manageserver;you need \`MANAGE_SERVER\` permission in order to use this]
    `
  }