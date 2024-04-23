module.exports = [{
    name: "leavetextmodetest",
    type: "awaited",
    code: `**This is a test Leave message! Please, ignore this.**
    $get[content]
    
    
    $useChannel[$getGuildVar[leavechannel]]
    $disableMentionType[roles]
    $disableMentionType[everyone]`
    },{
    name: "leaveembedmodetest",
    type: "awaited",
    code: `**This is a test Leave message! Please, ignore this.**
    $author[Member left;$get[serverimage]]
    $description[
    $get[content]
    ]
    $thumbnail[$authorAvatar]
    $color[$getGuildVar[leavemessageembedcolor]]
    
    $let[serverimage;$replaceText[$replaceText[$checkCondition[$guildIcon==];false;$guildIcon];true;$userAvatar[$clientID]]]
    
    $useChannel[$getGuildVar[leavechannel]]
    $disableMentionType[roles]
    $disableMentionType[everyone]
    `
    },{
    name: "leavetextmode",
    type: "awaited",
    code: `
    $get[content]
    
    
    $useChannel[$getGuildVar[leavechannel]]
    $disableMentionType[roles]
    $disableMentionType[everyone]`
    },{
    name: "leaveembedmode",
    type: "awaited",
    code: `
    $author[Member left;$get[serverimage]]
    $description[
    $get[content]
    ]
    $thumbnail[$authorAvatar]
    $color[$getGuildVar[leavemessageembedcolor]]
    
    $let[serverimage;$replaceText[$replaceText[$checkCondition[$guildIcon==];false;$guildIcon];true;$userAvatar[$clientID]]]
    
    $useChannel[$getGuildVar[leavechannel]]
    $disableMentionType[roles]
    $disableMentionType[everyone]
    `
    }]