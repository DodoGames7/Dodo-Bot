module.exports = {
  name: "settings",
  info: {
    description: "Let's you manage some settings of Dodo-Bot.",
    perms: ["`SendMessages`", "`ManageGuild`"]
},
  aliases: "panel",
  code: `$title[Settings]
  $description[Welcome to settings! Here, you can change things the bot usually operates. To change any setting, use the select menu to view each one accordingly]
  $addSelectMenu[1;string;settingsmenu_$authorID;Select an option.;1;1;false;Games:Manage settings related to games.:gamesmenu:false;Bot itself:Customise on how Dodo Bot should Behave.:botmenu:false;Server:Manage settings related to the server.:servermenu:false]
  $color[$getVar[embedcolor]]
  $thumbnail[https://us-east-1.tixte.net/uploads/dodogames.wants.solutions/whitesettings.png]
  $cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;settings;$authorID];$dateStamp];1000]]:R>]
  $onlyPerms[manageguild;You need \`ManageGuild\` permission to access this panel.]`
}
