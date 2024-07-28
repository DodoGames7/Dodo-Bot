module.exports = [{
    type: "guildMemberAdd",
    allowBots: true,
    code: `
    $onlyIf[$isBot==true;]
    $onlyIf[$getGuildVar[integrationchannel]!=;]
    $onlyIf[$guildChannelExists[$guildID;$getGuildVar[integrationchannel]]==true;]
    $onlyIf[$channelHasPerms[$getGuildVar[integrationchannel];$botID;ViewChannel;SendMessages]==true;]
    $onlyIf[$hasPerms[$guildID;$botID;ViewAuditLog]==true;]
    $let[staffdetails;$username[$fetchAuditLog[$guildID;IntegrationCreate;executorID;0]]  <@$fetchAuditLog[$guildID;IntegrationCreate;executorID;0]>]
    $let[verified;$replace[$replace[$checkCondition[$isBotVerified[$authorID]==true];true;Yes];false;No]]
    $let[timestamp;$fetchAuditLog[$guildID;IntegrationCreate;timestamp;0]]
    $sendMessage[$getGuildVar[integrationchannel];
    $author[New bot has been added!;$userAvatar[$botID]]
    $description[
* **Name:** $username <@$authorID>
* **Tag:** $userTag
* **Added by:** $get[staffdetails]
* **Added on:** <t:$trunc[$divide[$get[timestamp];1000]]:f>
* **Verified:** $get[verified]
* **Created on:** <t:$trunc[$divide[$userCreatedAt[$authorID];1000]]:f>
    ]
    $color[DarkGreen]
    ]`
}]
