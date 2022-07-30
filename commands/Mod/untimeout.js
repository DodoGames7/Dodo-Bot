module.exports ={
    name: "untimeout",
    code: `$timeoutMember[$guildID;$findMember[$message[1];yes];0s;no;$if[$messageslice[1]==;No reason provided;$messageslice[1]];]
successfully untimeouted $username[$findMember[$message[1];yes]] with Reason: $if[$messageslice[1]==;No reason provided;$messageslice[1]]
$argsCheck[>0;you need to provide a user to untimeout with a Reason]
$onlyIf[$hasPerms[$guildid;$authorid;moderatemembers]==true;**$username** You are missing **\`MODERATE_MEMBERS\`** permission]
$onlyIf[$hasPerms[$guildid;$clientid;moderatemembers]==true;**$username** I am missing **\`MODERATE_MEMBERS\`** permission]`
}
