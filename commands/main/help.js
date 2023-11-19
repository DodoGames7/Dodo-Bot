module.exports = {
  name: "help",
  $if: "old",
  executeAt: "both",
  code: `$title[Help Menu]
  $description[Select one of the modules to view it's available commands!]
  $footer[Developed by $username[632607624742961153]]
  $color[Blurple]
  $if[$getGlobalUserVar[betacommands]==true&&$getGuildVar[betaserver]==true]
$addSelectMenu[1;string;helpmenu_$authorID;Select an Module;1;1;false;Main:Explore General Commands.:general:false;Entertainment:Explore fun commands.:entertainment:false;Util:Explore util commands.:util:false;Beta:Explore Work in progress commands!:beta:false:⚠]
$else
$addSelectMenu[1;string;helpmenu_$authorID;Select an Module;1;1;false;Main:Explore General Commands.:general:false;Entertainment:Explore fun commands.:entertainment:false;Util:Explore util commands.:util:false]
$endif
$cooldown[2s; Slow down! Don't spam the command!
Time left: \`%time%\`]`
}
