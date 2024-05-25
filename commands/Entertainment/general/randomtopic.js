module.exports = {
name: "randomtopic",
info: {
    description: "Start a random topic in this server.",
    perms: ["`SendMessages`"]
},
aliases: ["newtopic", "topic"],
code: `$title[Random topic]
$description[$nonEscape[$get[topics]]]
$footer[Started by $username;$authorAvatar]
$color[$getVar[embedcolor]]
$addTimestamp
$let[topics;$randomText[Did you go out today?;What did you eat today?;What are you currently worried about?;What game have you spent the most hours playing?;What game have you spent the most hours playing?;What movie can you watch over and over without ever getting tired of?;What are you interested in that most people aren't?;How do you judge a person?;What do you think you are much better at than you actually are?;Do you enjoy spicy food?;Do you usually get bored most of the time?;What do you think about technology?]]
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;randomtopic;$authorID];$dateStamp];1000]]:R>]`
}