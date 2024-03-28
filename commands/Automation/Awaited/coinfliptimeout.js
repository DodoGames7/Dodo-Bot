module.exports = {
name: "coinfliptimeout",
type: "awaited",
code: `

$editMessage[$get[messageID];
The game has been ended due to inactivity.
{newEmbed:{title:$get[embedtitle]}{description:$get[embeddescription]}{color:$getVar[embedcolor]}}

{actionRow:{button:Heads:2:headsbutton:true}{button:Tails:2:tailsbutton:true}};$channelID]


$let[embeddescription;$getEmbed[$channelID;$get[messageID];1;description]]
$let[embedtitle;$getEmbed[$channelID;$get[messageID];1;title]]

$onlyIf[$messageExists[$get[messageID];$channelID]==true;]
$onlyIf[$hasPermsInChannel[$channelID;$clientID;sendmessages;viewchannel]==true;]
$onlyIf[$guildChannelExists[$guildID;$channelID]==true;]
`
}