module.exports = {
  name: "daily",
  code: `$title[you have received 100$]
  $description[everyday you can claim your daily reward, so you can get richer!, to get reminded when to claim daily rewards, press button below]
  $addButton[1;Remind me;primary;daily;no;🎁]
  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];100]]
  $globalCooldown[1d;at least, how about you wait for one day?]`
}
