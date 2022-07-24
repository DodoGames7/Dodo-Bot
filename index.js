const { AoiClient } = require("aoi.js");

const bot = new AoiClient({
    token: process.env.TOKEN,
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    prefix: "&"
})

bot.addEvent("onMessage")

bot.commands.load("./commands/")

bot.start()
