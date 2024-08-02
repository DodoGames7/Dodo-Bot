module.exports = [{
  name: "say",
  info: {
    description: "Makes the bot say whatever you want (alongside with optional embed mode).",
    perms: ["`SendMessages`"]
},
aliases: ["talk","repeat"],
  code: `$awaitMessages[$channelID;$authorID;30s;everything;awaitedsay;Time ran out! You didn't make me say anything!]
What do you want me to say?

**Tip:** To use embed mode, make sure your message contains the flag \`--embed\` to do so.
 $cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;say;$authorID];$dateStamp];1000]]:R>]
  `
},{
    name: "awaitedsay",
    $if: "old",
    type: "awaited",
    code: `$if[$checkContains[$message;--embed;—embed]==true||$charCount[$message]>=2000]
$author[$username;$userAvatar;https://www.youtube.com/watch?v=dQw4w9WgXcQ]
  $title[Say Cmd!;$get[botlink]]
  $description[$get[content]]
  $color[Random]
  $addTimeStamp
$else
$message

- From \`$username\`
$endif
$disableMentionType[all]
$onlyIf[$get[content]!=;You cannot activate embed mode without specifying a text first.]
$let[content;$removeContains[$message;--embed;—embed]]
$let[botlink;$nonEscape[$getClientInvite[sendmessages;viewchannel;addreactions;attachfiles;viewauditlog]]]
`
}]
