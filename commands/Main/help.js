module.exports = {
  name: "help",
  code: `$title[Help Menu]
  $description[To view commands, select one of the modules!]
  $footer[Made with ❤️ by $username[632607624742961153]]
  $color[$getVar[embedcolor]]
  $addSelectMenu[1;string;helpmenu_$authorID;Select an Module;1;1;false;Main:Explore commands from Main module:general:false;Entertainment:Explore commands from Entertainment module:entertainment:false;Leveling:Explore commands from Leveling module:leveling:false;Util:Explore commands from Util module:util:false]
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;help;$authorID];$dateStamp];1000]]:R>]`
}
