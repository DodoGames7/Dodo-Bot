module.exports = {
  name:"poll",
  aliases:["poll-start"],
  $if: "v4",
  code:`$if[$message[1]==set]
  $setServerVar[pollchannel;$findChannel[$messageSlice[1];yes]]
  successfully set $channelName[$findChannel[$messageSlice[1];yes]] as the poll channel
  $onlyIf[$serverChannelExists[$findChannel[$messageSlice[1]]]!=false;that channel either does not exist or not from the main guild]
  $onlyIf[$messageSlice[1]!=; you need to provide an channel]
  $cooldown[1m;you have to wait for one minute lol]
  $else
$author[$userTag;$authorAvatar]
$title[**$username Asks**]
$description[**$message[1]**]
$addReactions[👎;👍]
$color[BLURPLE]
$sendMessage[successfully sent your poll to the $channelName[$getServerVar[pollchannel]]]
$useChannel[$getServerVar[pollchannel]]
$onlyIf[$getServerVar[pollchannel]!=none;you need to provide an channel]
$onlyIf[$message[1]!=;you need to provide an message]
$endif
`
}
