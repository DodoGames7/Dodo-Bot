module.exports ={
  name:"serverinfo",
  code: `$title[1; $serverName[$guildID] information]
$addField[1;Owner of the Server;$username[$OwnerID]]
$addField[1;Creation Date;$creationDate[$guildID;date]]
$addField[1;Roles;$guildRoles]
$addField[1;Channels;$channelCount]
$addField[1;verification;$serverVerificationLevel]
$addField[1;Members Count;$membersCount]
$thumbnail[1;$serverIcon]
$color[1;RANDOM]
`
} 