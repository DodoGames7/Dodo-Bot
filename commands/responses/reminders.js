module.exports = [{
  name: "remind",
  type: "timeout",
  code: `
  $title[you can now claim your daily reward]
  $description[it's been a day ago since you claimed your daily reward!]
  $color[BLURPLE]
  $dm[$timeoutData[user]]
`
},{
  name: "wremind",
  type: "timeout",
  code: `$title[you can now claim your weekly reward]
  $description[it's been an week ago since you claimed your weekly reward!]
  $color[BLURPLE]
  $dm[$timeoutData[user]]
  `
}]
