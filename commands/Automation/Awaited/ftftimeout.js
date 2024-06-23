module.exports = {
    name: "ftftimeout",
    type: "awaited",
    code: `
    
    $editMessage[$get[messageID];
    The game has been ended due to inactivity.
    {newEmbed:{title:$get[embedtitle]}{description:$get[embeddescription]}{color:$getVar[embedcolor]}}
    
    {actionRow:{button::2:ftf1:true:1️⃣}{button::2:ftf2:true:2️⃣}{button::2:ftf3:true:3️⃣}};$channelID]
    
    
    $let[embeddescription;$getEmbed[$channelID;$get[messageID];1;description]]
    $let[embedtitle;$getEmbed[$channelID;$get[messageID];1;title]]
    
    $onlyIf[$messageExists[$get[messageID];$channelID]==true;]
    $onlyIf[$hasPermsInChannel[$channelID;$clientID;sendmessages;viewchannel]==true;]
    $onlyIf[$guildChannelExists[$guildID;$channelID]==true;]
    `
    }