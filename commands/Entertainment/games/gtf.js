module.exports = [{
  name:"guesstheflag",
  aliases:"gtf",
code:`
$awaitComponents[$channelID;$get[messageID];$authorID;gtf1,gtf2,gtf3;gtfresults1,gtfresults2,gtfresults3;gtftimeout;1;30s]

$let[messageID;$sendMessage[{newEmbed:{title:🚩 | Guess the flag!}{description:There is a hidden flag somewhere around 1-3, where you think the flag is on?}{color:$getVar[embedcolor]}}

{actionRow:{button::2:gtf1:false:1️⃣}{button::2:gtf2:false:2️⃣}{button::2:gtf3:false:3️⃣}}
;true]]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;guesstheflag;$authorID];$dateStamp];1000]]:R>]`
}]