module.exports = [{
    name: "guess-the-pokemon",
    info: {
      description: "Starts a game of guessing a Pokemon character.",
      perms: ["`SendMessages`"]
    },
    aliases: "gtp",
    code: `$awaitMessages[$channelID;$authorID;60s;everything;gtpawaited;{execute:gtptimeout}]
$editMessage[$get[id];{attachment:question-image.png:$getObjectProperty[api;data.questionImage]}
{newEmbed:{author:$username:$authorAvatar}{title: Who's the Pokemon?}{field:Types:$djsEval[$getObjectProperty[api;data.types].join(", ");true]:true}{field:Abilities:$djsEval[$getObjectProperty[api;data.abilities].join(", ");true]:true}{image:attachment://question-image.png}}]

$createObject[api;$nonEscape[$get[jsonresponse]]]
$let[id;$sendMessage[Please wait...;true]]
$onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;Unable to fetch the Pokemon data.]
$let[jsonresponse;$jsonRequest[https://api.gamecord.xyz/pokemon]]
$cooldown[5s; Slow down! Don't spam the command!
    Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;guess-the-pokemon;$authorID];$dateStamp];1000]]:R>]
`
}, 
{
name: "gtptimeout", 
type: "awaited", 
code: `
$editMessage[$get[id];Better luck next time! It was a $getObjectProperty[api;data.name].]
`
}, 
{
name: "gtpawaited", 
type: "awaited", 
$if: "old", 
code: `
$if[$message[1]==$getObjectProperty[api;data.name]]
$editMessage[$get[id];You guessed it right! It was a $getObjectProperty[api;data.name]. {attachment:answer-image.png:$getObjectProperty[api;data.answerImage]}
{newEmbed:{author:$username:$authorAvatar}{title: Who's the Pokemon?}{field:Types:$djsEval[$getObjectProperty[api;data.types].join(", ");true]:true}{field:Abilities:$djsEval[$getObjectProperty[api;data.abilities].join(", ");true]:true}{image:attachment://answer-image.png}}]
$else
$editMessage[$get[id];Better luck next time! It was a $getObjectProperty[api;data.name].]
$endif
`
}]