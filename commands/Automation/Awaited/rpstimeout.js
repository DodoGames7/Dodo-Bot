module.exports = {
    name: "rpstimeout",
    type: "awaited",
    code: `

    $editMessage[$get[messageID];
    The game has been ended due to inactivity.
    {newEmbed:{title:$get[embedtitle]}{description:$get[embeddescription]}{color:$getVar[embedcolor]}}

    {actionRow:{button:Rock:2:rpsrockbutton:true:🌑}{button:Paper:2:rpspaperbutton:true:📰}{button:Scissors:2:rpsscissorsbutton:true:✂️}};$channelID]


    $let[embeddescription;$getEmbed[$channelID;$get[messageID];1;description]]
    $let[embedtitle;$getEmbed[$channelID;$get[messageID];1;title]]

    $onlyIf[$messageExists[$get[messageID];$channelID]==true;]
    $onlyIf[$hasPermsInChannel[$channelID;$clientID;sendmessages;viewchannel]==true;]
    $onlyIf[$guildChannelExists[$guildID;$channelID]==true;]
    `
    }
