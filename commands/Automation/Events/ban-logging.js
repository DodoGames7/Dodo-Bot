module.exports = [{
    name: "Ban Logs",
    type: "banAdd",
    channel: "$getGuildVar[banneduserschannel]",
    code: `
    $author[Member banned!;$userAvatar;$userAvatar]
    $description[
    **$toLocaleUpperCase[$get[botchecker]]:** $username <@$authorID>
    **Moderator:** $get[moderatorchecker]
    **Reason:** $get[reason]
    ]
    $footer[ID: $authorID]
    $addTimeStamp
    $color[Red]
    $let[moderatorchecker;$replaceText[$replaceText[$checkCondition[$isBot[$get[staff]]==false&&$getGuildVar[anonymous]==off];true;$username[$get[staff]] <@$get[staff]>];false;Unknown]]
    $let[reason;$replaceText[$replaceText[$checkCondition[$getAuditLogs[$guildID;;1;22;{reason}]==null];true;None.];false;$getAuditLogs[$guildID;;1;22;{reason}]]]
    $let[staff;$getAuditLogs[$guildID;;1;22;{executor.id}]]
    $let[botchecker;$replaceText[$replaceText[$checkCondition[$isBot==true];true;bot];false;user]]
    $onlyIf[$hasPerms[$guildID;$clientID;viewauditlog]==true;In order to have ban logs work, i must have \`ViewAuditLog\` permission!]
    $onlyIf[$hasPermsInChannel[$getGuildVar[banneduserschannel];$clientID;viewchannel;sendmessages]==true;]
    $onlyIf[$guildChannelExists[$guildID;$getGuildVar[banneduserschannel]]==true;]
    $onlyIf[$getGuildVar[banneduserschannel]!=none;]
    $onlyIf[$guildID==$guildID;]
    `
    },{
        name: "Un-Ban Logs",
        type: "banRemove",
        channel: "$getGuildVar[unbanneduserschannel]",
        code: `$author[Member unbanned!;$userAvatar;$userAvatar]
    $description[
    **$toLocaleUpperCase[$get[botchecker]]:** $username <@$authorID>
    **Moderator:** $get[moderator]
    ]
    $footer[ID: $authorID]
    $addTimeStamp
    $color[DarkGreen]
    $let[moderator;$username[$get[staff]] <@$get[staff]>]
    $let[staff;$getAuditLogs[$guildID;;1;23;{executor.id}]]
    $let[botchecker;$replaceText[$replaceText[$checkCondition[$isBot==true];true;bot];false;member]]
    $onlyIf[$hasPerms[$guildID;$clientID;viewauditlog]==true;In order to have ban logs work, i must have \`ViewAuditLog\` permission!]
    $onlyIf[$hasPermsInChannel[$getGuildVar[unbanneduserschannel];$clientID;viewchannel;sendmessages]==true;]
    $onlyIf[$guildChannelExists[$guildID;$getGuildVar[unbanneduserschannel]]==true;]
    $onlyIf[$getGuildVar[unbanneduserschannel]!=none;]
    $onlyIf[$guildID==$guildID;]
    
    `
    }]