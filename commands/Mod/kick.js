module.exports = {
name:"kick",
aliases: "gtfo",
usage: "kick < userID > < reason >",
code: ` $kick[$findMember[$message[1];yes];$guildID;0;$if[$messageslice[1]==;No reason provided;$messageslice[1]]]
$author[1;Member kicked;$authorAvatar]
$color[1;DEFAULT]
$description[1;**$username** **kicked user \`$userTag[$findMember[$message[1];yes]]\`
Reason: $if[$messageslice[1]==;No reason provided;$messageslice[1]]**]
$sendDM[{newEmbed:{title:you have been kicked from an server}{description:you have been kicked from $serverName for the following reason: $if[$messageslice[1]==;No reason provided;$messageslice[1]]}{color:RED}};$findMember[$message[1];yes]]
 $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];yes]]]; **$username** You can't kick that user]
 $onlyIf[$highestRole[$findMember[$message[1];yes]]!=$highestRole[$authorID];**$username** They have the same role as me]
 $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];yes]]];**$username** They have a higher role than you]
 $onlyIf[$highestRole[$findMember[$message[1];yes]]!=$highestRole[$clientID];**$username** They have a higher role than me or the same role as me]
 $onlyIf[$findMember[$message[1];yes]!=$ownerID; **$username** You can't kick the server owner]
 $onlyIf[$findMember[$message[1];yes]!=$authorID; **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < @user > < reason >\`\`\`**]
 $onlyIf[$findMember[$message[1];yes]!=$clientID;**$username** You can't kick me]
$onlyIf[$hasPerms[$guildid;$authorid;kick]==true;**$username** You are missing **\`kick\`** permission]
$onlyIf[$hasPerms[$guildid;$clientid;kick]==true;**$username** I am missing **\`kick\`** permission]
$argsCheck[>0; **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < @user > < reason >\`\`\`**]
`} // credit: https://github.com/Snipedprox/Flare/blob/main/commands/moderation/kick.js
