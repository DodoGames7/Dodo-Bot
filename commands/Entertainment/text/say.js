module.exports = {
name: "say",
info: {
        description: "Makes the bot say whatever you want.",
        perms: "`SendMessages`"
},
type: "messageCreate",
code: `$userCooldown[saycmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[saycmd]];1000]]:R>]
$onlyIf[$message!=;Please say whatever you want.

**Tip:** To use embed mode, make sure your message contains the flag \`--embed\` to do so.]
$disableAllMentions

$let[clearembedmodewords;$replace[$replace[$checkCondition[$checkContains[$message;--embed;—embed]==true];true;$callFunction[sayembedmodefilter;$message]];false;$message]]
$onlyIf[$get[clearembedmodewords]!=;You cannot activate embed mode without specifying a text first.]

$if[$or[$checkContains[$message;--embed;—embed]==true;$charCount[$message]>=2000];
$author[$username;$userAvatar;$userURL[$authorID]]
$title[Say cmd;https://www.youtube.com/watch?v=dQw4w9WgXcQ]
$description[$get[clearembedmodewords]]
$color[Random]
;$get[clearembedmodewords]

 From \`$hyperlink[$username;<$userURL[$authorID]>]\`]

`
}
