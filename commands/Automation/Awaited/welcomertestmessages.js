module.exports = [{
    name: "welcomertextmodetest",
    type: "awaited",
    code: `**This is a test welcome message! Please, ignore this.**
    $get[content]
    
    
    $useChannel[$getGuildVar[welcomechannel]]
    $disableMentionType[roles]
    $disableMentionType[everyone]`
    },{
    name: "welcomerembedmodetest",
    type: "awaited",
    code: `**This is a test welcome message! Please, ignore this.**
    $author[New member Joined;$get[serverimage]]
    $description[
    $get[content]
    ]
    $thumbnail[$authorAvatar]
    $color[$getGuildVar[welcomemessageembedcolor]]
    
    $let[serverimage;$replaceText[$replaceText[$checkCondition[$guildIcon==];false;$guildIcon];true;$userAvatar[$clientID]]]
    
    $useChannel[$getGuildVar[welcomechannel]]
    $disableMentionType[roles]
    $disableMentionType[everyone]
    `
    }]