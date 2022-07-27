module.exports = {
  name: "discordjs",
  aliases: ["djs", "discord.js"],
  code: `$title[1;Discord.js Docs Search (stable);$getObjectProperty[data.author.url]]
  $description[1;**Search results**
  $getObjectProperty[data.description]]
  $thumbnail[1;https://i.imgur.com/AfFp7pu.png]
  $color[1;BLURPLE]
  $createObject[$jsonRequest[https://api.miduwu.ga/json/discordjs?query=$message]
  $suppressErrors[invalid query provided, please provide something valid, e.g \`intents\`]
  $onlyIf[$message!=;you need to provide an djs func to search]
  `
}
