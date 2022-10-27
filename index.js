const { Panel } = require("@akarui/aoi.panel")

const aoijs = require('aoi.js')


const bot = new aoijs.AoiClient({
   token: process.env.TOKEN,
 //Discord Bot Token, (ofc it's hidden what did you expect)
   prefix: ["$getServerVar[prefix]", "<@$clientID>"],  //Discord Bot Prefix
   intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_BANS"], // the discord.js intents
   database: {
    db: require("aoi.db"),
    type: "aoi.db",
    path: "./database/",
    tables: ["main"],
    extraOptions: {
      dbType: "KeyValue",
    },
  }
 })



// handlers
bot.variables(require("./handlers/variables.js")); // for bot variables (important, do not delete)
require('./handlers/callbacks')(bot) // for loading most callbacks used in bot 
require('./handlers/customfuncs')(bot) // for loading custom made functions using function manager

 const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")

 /*
 bot.cmd is object of Collections where the command data will be stored
 "./commands/" is the path of folder where all the commands' code will be present
 */

// dashboard support
const panel = new Panel({
  username: process.env.username,//username for logging in
  password: process.env.password,//password for logging in
  secret: process.env.secret,//session secret
  port: 3000,//port on which website is hosted, Not required! Default 3000
  bot:bot,//your aoi.js client
  mainFile:"index.js",//Main file where code is running.Not required, default taken from package.json
  commands: "./commands", // commands folder
  interaction:"./commands/Interactions"//interactions folder
})
panel.loadPanel()//Load The Panel

panel.onError()//Will detect errors, and send it to aoi.panel's error page.
