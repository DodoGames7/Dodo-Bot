module.exports = [{
type: "messageCreate",
code: `
$onlyIf[$isBot==false;]
$onlyIf[$getGuildVar[levelingsystem]==on;]
$memberCooldown[autoxpgain;2s]
$setMemberVar[xp;$sum[$getMemberVar[xp;$authorID];1];$authorID]

`
},{
type: "messageCreate",
code: `$onlyIf[$isBot==false;]
$disableEveryoneMention
$disableRoleMentions

$onlyIf[$getGuildVar[levelingsystem]==on;]
$onlyIf[$getMemberVar[xp]==$getMemberVar[xpLimit];]
$setMemberVar[xpLimit;$sum[$getMemberVar[xpLimit;$authorID];20];$authorID]
$setMemberVar[level;$sum[$getMemberVar[level;$authorID];1];$authorID]
$setMemberVar[previouslevel;$sum[$getMemberVar[previouslevel;$authorID];1];$authorID]

$onlyIf[$getGuildVar[levelingmessagefeature]==on;]
$onlyIf[$getGuildVar[levelingmessagechannel]!=;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[levelingmessagechannel]]==true;]
$onlyIf[$channelHasPerms[$getGuildVar[levelingmessagechannel];$botID;ViewChannel;SendMessages]==true;]


$let[content;$replace[$replace[$replace[$replace[$replace[$getGuildVar[levelingmessage];<member.mention>;<@$authorID>];<member.username>;$username];<previouslevel>;$getMemberVar[previouslevel]];<newlevel>;$getMemberVar[level]];<member.Displayname>;$userDisplayname]]

$sendMessage[$getGuildVar[levelingmessagechannel];
$get[content]
]



`
}]