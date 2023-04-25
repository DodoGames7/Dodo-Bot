module.exports = {
  name: "settings",
  executeAt: "guild",
  aliases: "panel",
  code: `$title[Advanced Settings]
  $description[This settings let's you manage any feature or settings of an certain system, for example managing on how trivia should start.]
  $addSelectMenu[1;settingsmenu_$authorID;select an Option;1;1;false;Games:Manage settings related to games.:gamesmenu:false;general:Manage settings related to general things.:generalmenu:false;Bot itself:Customise on how Dodo Bot should Behave.:botmenu:false]
  $cooldown[2s;slow down, don't spam the command]
  $onlyPerms[managemessages; you need \`ManageMessages\` permission to access this panel.]`
}