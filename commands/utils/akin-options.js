module.exports = {
  name: "akinator-options",
  code: `$title[1;Akinator Options]
  $description[1;you can customize options of akinator game, use buttons below to select what do you want to change]
  $addButton[1;Language (WIP);secondary;akinlanguage;yes]
  $addButton[1;Game Mode;primary;akingamemode;no]
  $addButton[1;Use Buttons;primary;useakinbuttons;no]
$editIn[2m; {
 "embeds" : "{newEmbed:{title:Akinator Options}{description:you can customize options of akinator game, use buttons below to select what do you want to change}}" ,
 "components" : "{actionRow:{button:Use Buttons:primary:useakinbuttons:yes}{button:Game Mode:primary:akingamemode:yes}{button:language (WIP):secondary:akinlanguage:yes}}"
 }]
 $onlyPerms[manageserver;you need \`MANAGE_SERVER\` permission in order to use this]`
}
