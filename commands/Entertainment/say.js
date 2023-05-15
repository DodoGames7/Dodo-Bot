module.exports = {
  name: "say",
  executeAt: "guild",
  $if: "old",
  code: `$if[$stringStartsWith[$message[1];embed]==true]
  $author[$userTag;$userAvatar]
  $title[Say Cmd!;$get[botlink]]
  $description[$messageSlice[1]]
  $color[Random]
  $addTimeStamp
  $onlyIf[$messageSlice[1]!=;Say something first.]
  $else
  $message[1]
  
  - from \`$userTag\`
$endif
$onlyIf[$message[1]!=;Say something first.
**Note**: you can also use embed mode. Make sure that your command argument starts with the word \`embed\` for that to work.]
$disableMentionType[all]
$let[botlink;$nonEscape[$getClientInvite[viewchannel;sendmessages;addreactions]]]
$cooldown[2s;slow down, don't spam the command]
  `
}