module.exports = {
  name: "token",
  code: `$title[1; MY TOKEN ?!?!?!?!]
$description[1;$getObjectProperty[token];no]
$footer[1; pls, no hacc]
$createObject[$jsonRequest[https://some-random-api.ml/bottoken]
`
} // returns a real "looking" bot token (it's fake lol)