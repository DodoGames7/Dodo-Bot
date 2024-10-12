module.exports = {
  name: "help",
  info: {
    description: "Allows you to check all available commands of the bot.",
    perms: ["`SendMessages`"]
},
  $if: "old",
  code: `$title[Help Menu]
$description[To view commands, select one of the modules from the dropdown menu below!]
$footer[Made with ❤️ by $username[632607624742961153]]
$color[$getVar[embedcolor]]
$if[$checkContains[$clientOwnerIDs[| ];$authorID]==true]
$addSelectMenu[1;string;helpmenu_$authorID;Select a module;1;1;false;Main:Explore commands from Main module:main:false;Entertainment:Explore commands from Entertainment module:entertainment:false;Leveling:Explore commands from Leveling module:leveling:false;Util:Explore commands from Util module:util:false;Developer:Explore commands from Developer module:dev:false]
$else
$addSelectMenu[1;string;helpmenu_$authorID;Select a module;1;1;false;Main:Explore commands from Main module:main:false;Entertainment:Explore commands from Entertainment module:entertainment:false;Leveling:Explore commands from Leveling module:leveling:false;Util:Explore commands from Util module:util:false]
$endif
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;help;$authorID];$dateStamp];1000]]:R>]`
}
