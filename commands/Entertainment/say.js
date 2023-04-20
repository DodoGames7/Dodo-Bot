module.exports = {
  name: "say",
  executeAt: "both",
  $if: "old",
  code: `$if[$message[1]==embed]
  $author[$userTag;$userAvatar]
  $title[Say Cmd!;$get[botlink]]
  $description[$messageSlice[1]]
  $color[Random]
  $addTimeStamp
  $else
  $message[1]
  
  - from \`$userTag\`
$endif
$onlyIf[$message[1]!=;say something first. (you can also use embeds mode by putting \`embed\` in your cmd argument)]
$disableMentionType[all]
$let[botlink;$nonEscape[$getBotInvite[viewchannel;sendmessages;attachfiles;addreactions]]]
$cooldown[2s;slow down, don't spam the command]
  `
}
