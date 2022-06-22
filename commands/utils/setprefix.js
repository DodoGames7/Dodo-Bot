module.exports = {
  name: "set-prefix",
  code: `$setServerVar[prefix;$message;$guildID]
 successfully changed prefix to \`$message\`, from now on i will only respond to that prefix
  $argsCheck[1;you can't set the prefix without providing me anything o_o]
  
  $onlyif[$checkContains[$toLowercase[$message];@everyone;@here;<@;<@&;<@!]==false;you cannot use mentions as a custom prefix tho]
  $onlyPerms[manageserver;only server members with \`MANAGE_SERVER\` Permission can set custom prefix]
  `
}
  