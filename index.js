const aoijs = require('aoi.js')
const config = require("./config.json")

const bot = new aoijs.AoiClient({
   token: process.env.TOKEN,
 //Discord Bot Token, (ofc it's hidden what did you expect)
   prefix: ["$getServerVar[prefix]", "<@$clientID>"],  //Discord Bot Prefix
   intents: ["Guilds", "GuildMessages", "MessageContent"], // the discord.js intents
   disableLogs: config.disableLogs
 })



// handlers
bot.variables(require("./utils/variables.js")); // for bot variables (important, do not delete)
require('./utils/callbacks')(bot) // for loading most callbacks used in bot 

 const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")

 /*
 bot.cmd is object of Collections where the command data will be stored
 "./commands/" is the path of folder where all the commands' code will be present
 */

