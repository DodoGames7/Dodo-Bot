module.exports = {
  channel: "$getServerVar[deletedlogs]",
   type: "messageDelete",
  name: "deletelog",
  code: `$author[1;$userTag[$authorID];$authorAvatar]
  $title[1;a message deleted!]
  $description[1; message from $username[$authorID] was deleted in $channelName[$channelused]
  **message**: $message]
  $footer[1;ID: $authorID]
  $addTimeStamp[1]
  $color[1;RED]
  $onlyIf[$getServerVar[deletedlogs]!=none;]
`

}
