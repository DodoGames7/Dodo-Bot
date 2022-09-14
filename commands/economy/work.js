module.exports = {
    name: "work",
    code: `$title[You worked and earned 300$ dollars]
    $description[keep working]
    $color[RANDOM]
    $thumbnail[$authorAvatar]
    $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];300]]
  $globalCooldown[1h;at least, how about you wait after an hour?]`
}