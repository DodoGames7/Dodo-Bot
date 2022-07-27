module.exports = {
  name: "randomtopic",
  aliases: ["start-topic", "new-topic"],
  code: `$title[Random Topic]
  $description[$getObjectProperty[question]]
  $color[BLURPLE]
  $createObject[$jsonRequest[https://apiv2.spapi.ga/fun/randomtopic]]`
}
