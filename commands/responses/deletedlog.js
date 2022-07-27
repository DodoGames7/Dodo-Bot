module.exports = {
  channel: "$getServerVar[deletedlogs]",
   type: "messageDelete",
  name: "deletelog",
  code: `$author[1;$userTag[$authorID];$authorAvatar]
  $title[1;a message deleted!]
  $description[1; message $message of $username[$authorID] was deleted in $channelName[$channelused]]
  $footer[1;ID: $authorID]
  $addTimeStamp[1]
  $color[1;RED]
  $onlyIf[$getServerVar[deletedlogs]!=none;]
`

}
