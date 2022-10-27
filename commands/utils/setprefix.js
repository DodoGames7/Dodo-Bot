module.exports = {
  name: "set-prefix",
  code: `$setServerVar[prefix;$message;$guildID]
 successfully changed prefix to \`$message\`, from now on i will only respond to that prefix
  $argsCheck[1;you can't set the prefix without providing me anything o_o]
  $onlyIf[$getServerVar[prefix]!=$message; this prefix is already in use]
  $onlyif[$checkContains[$toLowercase[$message];@everyone;@here;<@;<@&;<@!]==false;you cannot use mentions as a custom prefix tho]
$onlyIf[$serverChannelExists[$message;$guildID]!=true;you cannot use channels as prefix]
  $onlyPerms[manageserver;only server members with \`MANAGE_SERVER\` Permission can set custom prefix]
  `
}
  
