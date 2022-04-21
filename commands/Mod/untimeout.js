module.exports ={
    name: "untimeout",
    code: `$timeoutMember[$guildID;$mentioned[1;yes];0s;no;$message[2];]
successfully untimeouted $username[$mentioned[1;yes]] with Reason: $message[2]
$argsCheck[>1;you need to provide a user to untimeout with a Reason]
$onlyPerms[moderatemembers;you need \`MODERATE_MEMBERS\` Permission for that]
$onlyBotPerms[moderatemembers;i need \`MODERATE_MEMBERS\` to do that!, how would i perform such a action?]`
}
