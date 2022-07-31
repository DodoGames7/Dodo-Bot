module.exports = {
name:"ban",
aliases: "punish",
usage: "ban < userID > < reason >",
code: ` $ban[$guildID;$findMember[$message[1];yes];0;$if[$messageslice[1]==;No reason provided;$messageslice[1]]]
$author[1;Member banned;$authorAvatar]
$color[1;DEFAULT]
$description[1;**$username** **banned user** \`$userTag[$findMember[$message[1];yes]]\`
Reason: $if[$messageslice[1]==;No reason provided;$messageslice[1]]**]
$sendDM[{newEmbed:{title:you have been banned from an server}{description:you have been banned from $serverName for the following reason: $if[$messageslice[1]==;No reason provided;$messageslice[1]]}{color:RED}};$findMember[$message[1];yes]]
 $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];yes]]]; **$username** You can't ban that user]
 $onlyIf[$highestRole[$findMember[$message[1];yes]]!=$highestRole[$authorID];**$username** They have the same role as me]
 $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];yes]]];**$username** They have a higher role than you]
 $onlyIf[$highestRole[$findMember[$message[1];yes]]!=$highestRole[$clientID];**$username** They have a higher role than me or the same role as me]
 $onlyIf[$findMember[$message[1];yes]!=$ownerID; **$username** You can't ban the server owner]
 $onlyIf[$findMember[$message[1];yes]!=$authorID; **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < @user > < reason >\`\`\`**]
 $onlyIf[$findMember[$message[1];yes]!=$clientID;**$username** You can't ban me]
$onlyIf[$hasPerms[$guildid;$authorid;ban]==true;**$username** You are missing **\`ban\`** permission]
$onlyIf[$hasPerms[$guildid;$clientid;ban]==true;**$username** I am missing **\`ban\`** permission]
$argsCheck[>0; **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < @user > < reason >\`\`\`]
`
}
