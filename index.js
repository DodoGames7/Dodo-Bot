const { AoiClient } = require("aoi.js");

const bot = new AoiClient({
    token: process.env.TOKEN,
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    prefix: "&"
})

require('./utils/callbacks')(bot)

bot.commands.load("./commands/")

bot.start()
