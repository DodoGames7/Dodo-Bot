module.exports = {
  name: "reset-prefix",
  code: `$setServerVar[prefix;;$guildID]
  successfully reset prefix for this server
  $onlyPerms[manageserver;only server members with \`MANAGE_SERVER\` Permission can reset custom prefix]`
}