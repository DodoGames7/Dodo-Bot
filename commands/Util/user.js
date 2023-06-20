module.exports = {
    name: "user",
    $if: "old",
    aliases: ["userinfo", "user-info"],
    code: `$author[User information for $username[$findUser[$message;true]];$userAvatar[$clientID]]
    $addField[Other;
    User banner color (if any): $replaceText[$replaceText[$checkCondition[$userBannerColor[$findUser[$message;true]]!=];false;No color has been found];true;$userBannerColor[$findUser[$message;true]]]
    [Avatar Link]($userAvatar[$findUser[$message;true]])
    $if[$isBot[$findUser[$message];true]==false]
    Dms enabled: $isUserDmEnabled[$findUser[$message;true]]
    $endif
    ]
    $addField[General;
    Joined discord at: $creationDate[$findUser[$message];date]
    Bot account: $isBot[$findUser[$message];true]
    User ID: $findUser[$message;true]
    ]
    $if[$memberExists[$findUser[$message;true];$guildID]==true]
    $addField[Server information;
    Joined the server at: <t:$truncate[$divide[$memberJoinDate[$findUser[$message;true];$guildID];1000]]:f>
    Highest Role: $highestRole[$findUser[$message;true];$guildID;name]
    Status: $userStatus[$guildID;$findUser[$message;true]]
    Server Booster: $isBoosting[$findUser[$message;true];$guildID]
    ]
    $endif
    $cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
    `
    
    }