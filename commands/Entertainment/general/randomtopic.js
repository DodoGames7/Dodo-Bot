module.exports = {
name: "randomtopic",
aliases: ["newtopic", "topic"],
code: `$title[Random topic]
$description[$nonEscape[$get[topics]]]
$color[Blurple]
$addTimestamp
$let[topics;$randomText[Did you go out today?;What did you eat today?;What are you currently worried about?;What game have you spent the most hours playing?;What game have you spent the most hours playing?;What movie can you watch over and over without ever getting tired of?;What are you interested in that most people aren't?;How do you judge a person?;What do you think you are much better at than you actually are?;Do you enjoy spicy food?]]
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]`
}