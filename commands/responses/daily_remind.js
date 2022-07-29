module.exports = {
  name: "remind",
  type: "timeout",
  code: `
  $title[you can now claim your daily reward]
  $description[it's been a day ago since you claimed your daily reward!]
  $color[BLURPLE]
  $dm[$timeoutData[user]]
`
}
