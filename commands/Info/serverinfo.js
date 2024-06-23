module.exports = {
  name: "serverinfo",
  info: {
    description: "Returns information about this server.",
    perms: ["`SendMessages`"]
},
  aliases: ["server", "si", "guild"],
  code: `$title[Server Info]
  $addField[Verification Level;$get[verifylevel]]
  $addField[Other;
**Created on:** <t:$truncate[$divide[$creationDate[$guildID;ms];1000]]:f>
**Content Filter:** $get[content]
**Server ID:** $guildID
]
  $addField[General;
**Roles:** $roleCount[$guildID;true]
**Emojis:** $emojiCount[$guildID] 
**Server Boosts:** $guildBoostCount[$guildID]
**Server owner:** $username[$guildOwnerID] (\`$guildOwnerID\`)
]
  $addField[Channels;
**Total:** $channelCount[$guildID;all]
**Text:** $channelCount[$guildID;Text]
**Voice:** $channelCount[$guildID;Voice]
**Announcement:** $channelCount[$guildID;Announcement]
**Forum:** $channelCount[$guildID;Forum]
**Categories:** $channelCount[$guildID;Category]
]
  $addField[Members;
**Total:** $membersCount[$guildID;all;true]
**Humans:** $membersCount[$guildID;all;false]
**Bots:** $guildBotCount[$guildID]
]
  $thumbnail[$get[serverimage]]
  $color[$getVar[embedcolor]]
  $cooldown[2s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;serverinfo;$authorID];$dateStamp];1000]]:R>]
  
  $let[verifylevel;$advancedReplaceText[$GuildVerificationLevel;1;Low;2;Medium;3;High;4;Very High;0;None]]
  $let[content;$advancedReplaceText[$guildContentFilter[$guildID];0;Disabled;1;Medium;2;High]]
  $let[serverimage;$advancedReplaceText[$checkCondition[$guildIcon==];false;$guildIcon;true;$userAvatar[$clientID]]]
`
}
