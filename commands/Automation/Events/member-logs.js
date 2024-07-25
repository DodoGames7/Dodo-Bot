module.exports = [{
    type: "guildMemberAdd",
    allowBots: true,
    code: `$onlyIf[$guildID==$guildID;]
$disableEveryoneMention
$disableRoleMentions
    $onlyIf[$getGuildVar[welcomersystem]==on;]
    $onlyIf[$getGuildVar[welcomerchannel]!=;]
    $onlyIf[$guildChannelExists[$guildID;$getGuildVar[welcomerchannel]]==true;]
    $onlyIf[$channelHasPerms[$getGuildVar[welcomerchannel];$botID;ViewChannel;SendMessages]==true;]
    
    $let[content;$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$getGuildVar[welcomermessage];<member.username>;$username];<member.mention>;<@$authorID>];<member.id>;$authorID];<owner.username>;$guildOwnerID];<owner.id>;$guildOwnerID];<server.name>;$serverName];<server.id>;$guildID];<server.createdAt>;<t:$trunc[$divide[$guildCreatedAt;1000]]:f>];<server.totalMembers>;$guildMemberCount];<member.position>;$ordinal[$guildMemberCount]];<member.Displayname>;$userDisplayname]]
    
    
    $let[servericon;$replace[$replace[$checkCondition[$guildIcon==];true;$userAvatar[$botID]];false;$serverIcon]]
    $sendMessage[$getGuildVar[welcomerchannel];$if[$or[$charCount[$getGuildVar[welcomermessage]]>=2000;$getGuildVar[welcomertype]==embed]==true;
    $author[Member joined!;$get[servericon]]
    $description[$get[content]]
    $thumbnail[$userAvatar]
    $color[$getGuildVar[welcomermessageembedcolor]]
    ;$get[content]]
    ]`
},{
    type: "guildMemberRemove",
    allowBots: true,
    code: `$onlyIf[$guildID==$guildID;]
$disableEveryoneMention
$disableRoleMentions
    $onlyIf[$getGuildVar[leavesystem]==on;]
    $onlyIf[$getGuildVar[leavechannel]!=;]
    $onlyIf[$guildChannelExists[$guildID;$getGuildVar[leavechannel]]==true;]
    $onlyIf[$channelHasPerms[$getGuildVar[leavechannel];$botID;ViewChannel;SendMessages]==true;]
    
    $let[content;$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$getGuildVar[leavemessage];<member.username>;$username];<member.mention>;<@$authorID>];<member.id>;$authorID];<owner.username>;$guildOwnerID];<owner.id>;$guildOwnerID];<server.name>;$serverName];<server.id>;$guildID];<server.createdAt>;<t:$trunc[$divide[$guildCreatedAt;1000]]:f>];<server.totalMembers>;$guildMemberCount];<member.Displayname>;$userDisplayname]]
    
    
    $let[servericon;$replace[$replace[$checkCondition[$guildIcon==];true;$userAvatar[$botID]];false;$serverIcon]]
    $sendMessage[$getGuildVar[leavechannel];$if[$or[$charCount[$getGuildVar[leavemessage]]>=2000;$getGuildVar[leavetype]==embed]==true;
    $author[Member left!;$get[servericon]]
    $description[$get[content]]
    $thumbnail[$userAvatar]
    $color[$getGuildVar[leavemessageembedcolor]]
    ;$get[content]]
    ]`
}]