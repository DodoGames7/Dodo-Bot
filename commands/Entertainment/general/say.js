module.exports = {
  name: "say",
  executeAt: "guild",
  $if: "old",
  code: `$if[$stringStartsWith[$tolowercase[$message[1]];embed]==true]
$author[$get[usernamechecker];$userAvatar]
  $title[Say Cmd!;$get[botlink]]
  $description[$messageSlice[1]]
  $color[Random]
  $addTimeStamp
  $onlyIf[$messageSlice[1]!=;Say something first.]
  $else
  $message[1]
  
  - from \`$get[usernamechecker]\`
$endif
$onlyIf[$message[1]!=;Say something first.
**Note**: you can also use embed mode. Make sure that your command argument starts with the word \`embed\` for that to work.]
$disableMentionType[all]
$let[botlink;$nonEscape[$getClientInvite[sendmessages;viewchannel;addreactions;attachfiles]]]
$let[usernamechecker;$replaceText[$replaceText[$checkCondition[$charCount[$discriminator[$authorID]]==1];true;$username];false;$userTag]]
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
  `
}
