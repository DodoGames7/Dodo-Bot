module.exports = {
  name: "coinflip",
  info: {
    description: "Starts a game of Coin Flip.",
    perms: ["`SendMessages`"]
  },
  code: `
$awaitComponents[$channelID;$get[messageID];$authorID;headsbutton,tailsbutton;headsinteraction,tailsinteraction;coinfliptimeout;1;30s]


$let[messageID;$sendMessage[{newEmbed:{title:🪙 | Coin Flip}{description:The coin is in the air, choose Heads or Tails below.}{color:$getVar[embedcolor]}}

{actionRow:{button:Heads:2:headsbutton:false}{button:Tails:2:tailsbutton:false}};true]]
 $cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;coinflip;$authorID];$dateStamp];1000]]:R>]
  `
}