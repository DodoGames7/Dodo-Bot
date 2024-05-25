module.exports = {
name: "user",
info: {
    description: "Returns your/user's information.",
    perms: ["`SendMessages`"]
},
$if: "old",
aliases: ["userinfo", "user-info"],
code: `$title[Information for $get[username]]
$addField[**Other**;
Avatar: [link]($userAvatar[$get[user]])
DMs: $get[userdms]
;true]
$addField[**General**;
Joined Discord on: $creationDate[$get[user];date]
Bot account: $isBot[$get[user]]
User ID: $get[user]
;true]
$if[$memberExists[$findUser[$message[1;true]];$guildID]==true]
$addButton[1;Member's Server info;2;memberservinfo_$authorID_$get[user];false]
$addButton[1;General info;2;mainmeminfo_$authorID_$get[user];true]
$endif
$thumbnail[$userAvatar[$get[user]]]
$let[username;$replaceText[$replaceText[$checkCondition[$charCount[$discriminator[$get[user]]]==1];true;$username[$get[user]]];false;$userTag[$get[user]]]]
$let[userdms;$replaceText[$replaceText[$checkCondition[$isUserDmEnabled[$get[user]]==true];true;Enabled];false;Disabled]]
$let[user;$findUser[$message[1];true]]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;user;$authorID];$dateStamp];1000]]:R>]
`
}
