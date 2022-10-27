module.exports = {
  name: "weekly",
  code: `$title[you have received 300$]
  $description[every week you can claim your reward, so you can get richer!, to get reminded when to claim weekly rewards, press button below]
  $addButton[1;Remind me;primary;weekly;no;🎁]
  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];300]]
  $globalCooldown[7d;at least, how about you wait for one week?]`
}
