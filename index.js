const { AoiClient } = require("aoi.js");

const bot = new AoiClient({
    token: process.env.TOKEN,
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    prefix: "&"
})

require('./utils/callbacks')(bot)

bot.commands.load("./commands/")

bot.start()
const  { Panel } = require("@akarui/aoi.panel")
// v6 panel dashboard
const panel = new Panel({
    username: process.env.username,//username for logging in
    password: process.env.password,//password for logging in
    secret: process.env.secret,//session secret
    port: 3000,//port on which website is hosted, Not required! Default 3000
    bot: bot,//your aoi.js client
    mainFile: "index.js",//Main file where code is running.Not required, default taken from package.json
    commands: "./commands",// folder name in which all the edit needing files are there.
    vesrion:"v6"
})
