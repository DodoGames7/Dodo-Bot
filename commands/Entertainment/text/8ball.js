module.exports = {
name: "8ball",
info: {
 description: "Ask a question to 8ball and it will answer it.",
 perms: "`SendMessages`"
},
code: `

$title[8ball]
$addField[Answer;$get[answers]]
$addField[Your question;$message]
$thumbnail[https://us-east-1.tixte.net/uploads/dodo-bot.wants.solutions/black8ball.png]
$color[$getVar[embedcolor]]
$onlyIf[$message!=;Please enter a text.]
$onlyIf[$charCount[$message]<=200;Your question can't be longer than 200 characters.]
$let[answers;$randomText[Yes;No;Yes definitely;You may rely on it;Without a doubt;It is decidedly so;Ask again later;Better not tell you now;Cannot predict now;Concentrate and ask again;My reply is no;My sources say no;Outlook not so good;Very doubtful;Most likely;As I see it, yes;Signs point to yes;Reply hazy, try again;Don’t count on it]]

$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;8ball;$authorID];$dateStamp];1000]]:R>]
`
}
