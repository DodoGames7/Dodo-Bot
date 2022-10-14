module.exports = {
  name: "weekly",
  code: `$title[you have received 300$]
  $description[every week you can claim your reward, so you can get richer!, to get reminded when to claim weekly rewards, press button below]
  $addButton[1;Remind me;primary;weekly;no;⏲]
  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];300]]
  $globalCooldown[7d;{newEmbed:{title:heyo Slow Down}{description:you have to wait for at least about %time%}{color:BLURPLE}}]`
}
