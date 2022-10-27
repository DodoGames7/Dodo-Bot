module.exports ={
    name: "timeout",
    code: `$timeoutMember[$guildID;$findMember[$message[1];yes];$message[2];no;$if[$messageslice[2]==;No reason provided;$messageslice[2]];]
successfully timeouted $username[$mentioned[1;yes]] with $message[2] Reason: $if[$messageslice[2]==;No reason provided;$messageslice[2]]
$onlyIf[$message[2]!=;you must provide a duration, the maximum is up to 28 days]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];yes]]]; **$username** You can't timeout that user]
 $onlyIf[$highestRole[$findMember[$message[1];yes]]!=$highestRole[$authorID];**$username** They have the same role as me]
 $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];yes]]];**$username** They have a higher role than you]
 $onlyIf[$highestRole[$findMember[$message[1];yes]]!=$highestRole[$clientID];**$username** They have a higher role than me or the same role as me]
 $onlyIf[$findMember[$message[1];yes]!=$ownerID; **$username** You can't timeout the server owner]
 $onlyIf[$findMember[$message[1];yes]!=$authorID; **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < @user > < duration > < reason >\`\`\`**]
 $onlyIf[$findMember[$message[1];yes]!=$clientID;**$username** You can't timeout me]
$onlyIf[$hasPerms[$guildid;$authorid;moderatemembers]==true;**$username** You are missing **\`MODERATE_MEMBERS\`** permission]
$onlyIf[$hasPerms[$guildid;$clientid;moderatemembers]==true;**$username** I am missing **\`MODERATE_MEMBERS\`** permission]
$onlyIf[$message[2]<=28d;you can't timeout for more than 28 days]
$onlyIf[$message[2]<=3w;you can't timeout for more than 28 days]
$onlyIf[$message[2]<=86400s;you can't timeout for more than 28 days]
 $argsCheck[>0;you need to provide a user to timeout with the duration (providing a reason will be recorded in audit logs)]
`
}
