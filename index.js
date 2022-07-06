const aoijs = require('aoi.js')


const bot = new aoijs.AoiClient({
   token: process.env.TOKEN,
 //Discord Bot Token, (ofc it's hidden what did you expect)
   prefix: ["$getServerVar[prefix]", "<@$clientID>"],  //Discord Bot Prefix
   intents: ["GUILDS", "GUILD_MESSAGES"]
 })



// handlers
require('./handlers/variables')(bot) // for bot variables (important, do not delete)
require('./handlers/callbacks')(bot) // for loading most callbacks used in bot 
require('./handlers/customfuncs')(bot) // for loading custom made functions using function manager

 const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")

 /*
 bot.cmd is object of Collections where the command data will be stored
 "./commands/" is the path of folder where all the commands' code will be present
 */
