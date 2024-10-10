module.exports = [{
    name: "rpstimeout",
    type: "awaited",
    code: `

$editMessage[$get[messageID];
Game has been ended due to inactivity.
{newEmbed:{title:$get[embedtitle]}{description:$get[embeddescription]}{color:$getVar[embedcolor]}}

{actionRow:{button:Rock:2:rpsrockbutton:true:🌑}{button:Paper:2:rpspaperbutton:true:📰}{button:Scissors:2:rpsscissorsbutton:true:✂️}};$channelID]

$let[embeddescription;$getEmbed[$channelID;$get[messageID];1;description]]
$let[embedtitle;$getEmbed[$channelID;$get[messageID];1;title]]

$onlyIf[$messageExists[$get[messageID];$channelID]==true;]
$onlyIf[$hasPermsInChannel[$channelID;$clientID;sendmessages;viewchannel]==true;]
$onlyIf[$guildChannelExists[$guildID;$channelID]==true;]
    `
    },{
    name: "ftftimeout",
    type: "awaited",
    code: `

$editMessage[$get[messageID];
Game has been ended due to inactivity.
{newEmbed:{title:$get[embedtitle]}{description:$get[embeddescription]}{color:$getVar[embedcolor]}}

{actionRow:{button::2:ftf1:true:1️⃣}{button::2:ftf2:true:2️⃣}{button::2:ftf3:true:3️⃣}};$channelID]

$let[embeddescription;$getEmbed[$channelID;$get[messageID];1;description]]
$let[embedtitle;$getEmbed[$channelID;$get[messageID];1;title]]

$onlyIf[$messageExists[$get[messageID];$channelID]==true;]
$onlyIf[$hasPermsInChannel[$channelID;$clientID;sendmessages;viewchannel]==true;]
$onlyIf[$guildChannelExists[$guildID;$channelID]==true;]
    `
    },{
  name: "coinfliptimeout",
  type: "awaited",
  code: `

$editMessage[$get[messageID];
Game has been ended due to inactivity.
{newEmbed:{title:$get[embedtitle]}{description:$get[embeddescription]}{color:$getVar[embedcolor]}}

{actionRow:{button:Heads:2:headsbutton:true}{button:Tails:2:tailsbutton:true}};$channelID]


$let[embeddescription;$getEmbed[$channelID;$get[messageID];1;description]]
$let[embedtitle;$getEmbed[$channelID;$get[messageID];1;title]]

$onlyIf[$messageExists[$get[messageID];$channelID]==true;]
$onlyIf[$hasPermsInChannel[$channelID;$clientID;sendmessages;viewchannel]==true;]
$onlyIf[$guildChannelExists[$guildID;$channelID]==true;]
`
}]
