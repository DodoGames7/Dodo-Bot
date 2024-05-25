module.exports = {
  name: "serverinfo",
  info: {
    description: "Returns this server's information.",
    perms: ["`SendMessages`"]
},
  aliases: ["server", "si", "guild"],
  code: `$title[Server Info]
  $addField[Verification Level;$get[verifylevel]]
  $addField[Other;
Server Created since: $creationDate[$guildID;date]
Content Filter: $get[content]
Server ID: $guildID
]
  $addField[General;
Roles: $roleCount[$guildID;true]
Emojis: $emojiCount[$guildID] 
Server Boosts: $guildBoostCount[$guildID]
Server owner: $username[$guildOwnerID] (\`$guildOwnerID\`)
]
  $addField[Channels;
Total: $channelCount[$guildID;all]
Text: $channelCount[$guildID;Text]
Voice: $channelCount[$guildID;Voice]
Announcement: $channelCount[$guildID;Announcement]
Forum: $channelCount[$guildID;Forum]
Categories: $channelCount[$guildID;Category]
]
  $addField[Members;
Total: $membersCount[$guildID;all;true]
Humans: $membersCount[$guildID;all;false]
Bots: $guildBotCount[$guildID]
]
  $thumbnail[$get[serverimage]]
  $cooldown[2s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;serverinfo;$authorID];$dateStamp];1000]]:R>]
  
  $let[verifylevel;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$GuildVerificationLevel;1;Low];2;Medium];3;High];4;Very High];0;None]]
  $let[content;$replaceText[$replaceText[$replaceText[$guildContentFilter[$guildID];0;Disabled];1;Medium];2;High]]
  $let[serverimage;$replaceText[$replaceText[$checkCondition[$guildIcon==];false;$guildIcon];true;$userAvatar[$clientID]]]
`
}