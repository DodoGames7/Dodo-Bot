module.exports ={
    name: "timeout",
    code: `$timeoutMember[$guildID;$mentioned[1;yes];$message[2];no;$message[3];]
successfully timeouted $username[$mentioned[1;yes]] with $message[2]
$argsCheck[>1;you need to provide a user to timeout with the duration (providing a reason will be recorded in audit logs)]
$onlyPerms[moderatemembers;you need \`MODERATE_MEMBERS\` Permission for that]
$onlyBotPerms[moderatemembers;i need \`MODERATE_MEMBERS\` to do that!, how would i perform such a action?]
$onlyif[$checkContains[$message[2];28d]==false;you can't timeout more than 28 days]
$onlyif[$checkContains[$mentioned[1];$authorID]==false;you can't take actions against yourself lol]`
}
