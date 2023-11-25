module.exports = {
    type: "guildJoin",
    channel: "$randomChannelID[$guildID;all]",
    code: `
    $channelSendMessage[$get[channelselector];Hi!
    {newEmbed:{title:Thanks for adding me in the server!}{description:Dodo-Bot is a personal project aiming to be an entertainment bot while at the same time provide a couple of useful features (e.g welcome system)!

    By default, my prefix is \`$getGuildVar[prefix]\`, however you can change it using \`prefix\` command.

    You can explore all of my commands using \`$getGuildVar[prefix]help\`!
    }{color:Blurple}}{actionRow:{button:Support server:5:https#COLON#//discord.gg/pFwKjAaZvj:false}{button:Source code:5:https#COLON#//github.com/DodoGames7/Dodo-Bot:false}};false]
    $onlyIf[$hasPermsInChannel[$get[channelselector];$clientID;sendmessages;viewchannel]==true;]
    $let[channelselector;$replaceText[$replaceText[$checkCondition[$guildSystemChannelID[$guildID]==];true;$randomChannelID[$guildID;Text]];false;$guildSystemChannelID[$guildID]]]
    $onlyIf[$getVar[botgreeting]==true;]
    `
    }
