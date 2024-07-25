module.exports = [{
    type: "guildBanAdd",
    allowBots: true,
    code: `
$let[guild;$djsEval[ctx.states.ban.new.guild.id]]
    $onlyIf[$getGuildVar[banlogschannel;$get[guild]]!=;]
    $onlyIf[$guildChannelExists[$get[guild];$getGuildVar[banlogschannel;$get[guild]]]==true;]
    $onlyIf[$channelHasPerms[$getGuildVar[banlogschannel;$get[guild]];$botID;ViewChannel;SendMessages]==true;]
    $onlyIf[$hasPerms[$get[guild];$botID;ViewAuditLog]==true;]
$let[reason;$replace[$replace[$checkCondition[$fetchAuditLog[$get[guild];MemberBanAdd;reason;0]==];true;none];false;$fetchAuditLog[$get[guild];MemberBanAdd;reason;0]]]
$let[staffdetails;$username[$fetchAuditLog[$get[guild];MemberBanAdd;executorID;0]]  <@$fetchAuditLog[$get[guild];MemberBanAdd;executorID;0]>]
$let[getmoderatorname;$replace[$replace[$checkCondition[$getGuildVar[anonymous;$get[guild]]==on];true;Unknown];false;$get[staffdetails]]]
$let[accounttype;$replace[$replace[$checkCondition[$isBot==false];true;Member];false;Bot]]
    $sendMessage[$getGuildVar[banlogschannel;$get[guild]];
    $author[Member banned!;$userAvatar]
    $description[
**$get[accounttype]:** $username <@$authorID>
**Moderator:** $get[getmoderatorname]
**Reason:** $get[reason]
]
    $color[Red]
    ]
    `
    },{
    type: "guildBanRemove",
    allowBots: true,
    code: `
$let[guild;$djsEval[ctx.states.ban.new.guild.id]]
    $onlyIf[$getGuildVar[unbanlogschannel;$get[guild]]!=;]
    $onlyIf[$guildChannelExists[$get[guild];$getGuildVar[unbanlogschannel;$get[guild]]]==true;]
    $onlyIf[$channelHasPerms[$getGuildVar[unbanlogschannel;$get[guild]];$botID;ViewChannel;SendMessages]==true;]
    $onlyIf[$hasPerms[$get[guild];$botID;ViewAuditLog]==true;]
$let[reason;$fetchAuditLog[$get[guild];MemberBanRemove;reason;0]]
$let[moderator;$username[$fetchAuditLog[$get[guild];MemberBanRemove;executorID;0]] <@$fetchAuditLog[$get[guild];MemberBanRemove;executorID;0]>]
$let[accounttype;$replace[$replace[$checkCondition[$isBot==false];true;Member];false;Bot]]
    $sendMessage[$getGuildVar[unbanlogschannel;$get[guild]];
    $author[Member unbanned!;$userAvatar]
    $description[
**$get[accounttype]:** $username <@$authorID>
**Moderator:** $get[moderator] $if[$get[reason]!=;
**Reason:** $get[reason]]
]
    $color[DarkGreen]
    ]
    `
    }]
    