module.exports = [{
name: "welcomer message",
type: "join",
channel: "$getGuildVar[welcomechannel]",
$if: "old",
code: `$if[$charCount[$getGuildVar[welcomemessage]]>=2000||$getGuildVar[welcometype]==embed]
$author[New member Joined;$authorAvatar]
$description[
$get[content]
]
$thumbnail[$authorAvatar]
$color[Green]
$else
$get[content]
$endif
$onlyIf[$hasPermsInChannel[$getGuildVar[welcomechannel];$clientID;viewchannel;sendmessages]==true;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[welcomechannel]]==true;]
$onlyIf[$getGuildVar[welcomechannel]!=none;]
$let[content;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[welcomemessage];<server.totalMembers>;$membersCount];<username>;$username];<mention>;<@$authorID>];<id>;$authorID];<owner.username>;$username[$guildOwnerID]];<server.name>;$guildName];<owner.id>;$guildOwnerID];<server.id>;$guildID];<creationdate>;$creationDate[$authorID;date]];<position>;$memberJoinPosition]]
$onlyIf[$getGuildVar[welcomesystem]==on;]
$disableMentionType[roles]
$disableMentionType[everyone]
$onlyIf[$guildID==$guildID;]`
},{
    name: "leave message",
    type: "leave",
    $if: "old",
    channel: "$getGuildVar[leavechannel]",
    code: `$if[$charCount[$getGuildVar[leavemessage]]>=2000||$getGuildVar[leavetype]==embed]
$author[Member left;$authorAvatar]
$description[
$get[content]
]
$thumbnail[$authorAvatar]
$color[Red]
$else
$get[content]
$endif
$onlyIf[$hasPermsInChannel[$getGuildVar[leavechannel];$clientID;viewchannel;sendmessages]==true;]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[leavechannel]]==true;]
$onlyIf[$getGuildVar[leavechannel]!=none;]
$let[content;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[leavemessage];<server.totalMembers>;$membersCount];<username>;$username];<mention>;<@$authorID>];<id>;$authorID];<owner.username>;$username[$guildOwnerID]];<server.name>;$guildName];<owner.id>;$guildOwnerID];<server.id>;$guildID];<creationdate>;$creationDate[$authorID;date]];<leave.time>;<t:$truncate[$divide[$datestamp;1000]]:f>]]
$onlyIf[$getGuildVar[leavesystem]==on;]
$disableMentionType[roles]
$disableMentionType[everyone]
$onlyIf[$guildID==$guildID;]`
}]
