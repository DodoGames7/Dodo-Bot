module.exports = {
  name: "help",
  executeAt: "both",
  code: `$title[Help Menu]
  $description[Select one of the modules to view it's available commands!]
  $footer[developed by $username[632607624742961153]]
  $color[Blurple]
  $addSelectMenu[1;helpmenu_$authorID;Select an Module;1;1;false;Main:explore General Commands:general:false;Entertainment:explore fun commands:entertainment:false;Util:explore util commands:util:false]
  $cooldown[2s;slow down, don't spam the command]`
}