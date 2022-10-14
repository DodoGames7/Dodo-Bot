module.exports = {
  name: "work",
  code: `$title[You worked and earned $random[15;160]$ dollars]
  $description[keep working]
  $color[RANDOM]
  $thumbnail[$authorAvatar]
  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[15;160]]]
$globalCooldown[15m;{newEmbed:{title:heyo Slow Down}{description:you have to wait for at least about %time%}{color:BLURPLE}}]`
}