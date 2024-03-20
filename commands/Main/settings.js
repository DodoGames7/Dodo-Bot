module.exports = {
  name: "settings",
  aliases: "panel",
  code: `$title[Advanced Settings]
  $description[These settings let you manage any feature or settings of an certain system, for example managing on how trivia should start.]
  $addSelectMenu[1;string;settingsmenu_$authorID;Select an option.;1;1;false;Games:Manage settings related to games.:gamesmenu:false;Bot itself:Customise on how Dodo Bot should Behave.:botmenu:false;Server:Manage settings related to the server.:servermenu:false]
  $cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;settings;$authorID];$dateStamp];1000]]:R>]
  $onlyPerms[managemessages; you need \`ManageMessages\` permission to access this panel.]`
}
