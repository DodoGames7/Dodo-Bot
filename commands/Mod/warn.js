module.exports = {
  name: "warn",
  code: `$setUserVar[warns;$sum[$getUserVar[warns;$mentioned[1]];1];$mentioned[1;yes]]
  $sendDm[{newEmbed:{title:you have been warned by $username}{field:Reason:$if[$messageslice[1]==;No reason provided;$messageslice[1]]:no}{field:Server:$serverName[$guildID]:no}};$mentioned[1]]
  $sendMessage[$username[$mentioned[1]] has been Warned! Reason: $if[$messageslice[1]==;No reason provided;$messageslice[1]]]
  $onlyIf[$highestRole[$findMember[$mentioned[1];yes]]!=$highestRole[$authorID];**$username** They have the same role as me]
 $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$mentioned[1];yes]]];**$username** They have a higher role than you]
  $onlyIf[$findMember[$message[1];yes]!=$authorID; **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < @user > < reason >\`\`\`**]
 $onlyIf[$findMember[$mentioned[1];yes]!=$ownerID; **$username** You can't warn the server owner]
 $onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;**$username** You are missing **\`MANAGE_ROLES\`** permission]
  $argsCheck[>0;you need to provide an member to warn]`
}
