module.exports = {
  name: "say",
  $if: "old",
  code: `$if[$stringStartsWith[$tolowercase[$message[1]];—embed;--embed]==true||$charCount[$message[1]]>=2000]
$author[$get[usernamechecker];$userAvatar;https://www.youtube.com/watch?v=dQw4w9WgXcQ]
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
**Note**: To use the embed mode, pass the flag \`--embed\` first before you start with the content of the message.
$disableMentionType[all]
$let[botlink;$nonEscape[$getClientInvite[sendmessages;viewchannel;addreactions;attachfiles;viewauditlog]]]
$let[usernamechecker;$replaceText[$replaceText[$checkCondition[$charCount[$discriminator[$authorID]]==1];true;$username];false;$userTag]]
 $cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;say;$authorID];$dateStamp];1000]]:R>]
  `
}
