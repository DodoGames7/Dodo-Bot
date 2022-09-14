module.exports = {
    name:"poll",
    aliases:["poll-start"],
    code:`$author[$userTag;$authorAvatar]
  $title[**$username Asks**]
  $description[**$message**]
  $addReactions[👎;👍]
  $color[BLURPLE]
  $sendMessage[sucessfully sent your poll to the $channelName[$useChannel[$getServerVar[pollchannel]]]]
  $useChannel[$getServerVar[pollchannel]]
  $onlyIf[$getServerVar[pollchannel]!=none;you need to provide an channel]
  $onlyIf[$message!=;you need to provide an message]
  `
  }
  