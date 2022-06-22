const aoijs = require('aoi.js')


const bot = new aoijs.AoiClient({
   token: process.env.TOKEN,
 //Discord Bot Token, (ofc it's hidden what did you expect)
   prefix: ["$getServerVar[prefix]", "<@$clientID>"],  //Discord Bot Prefix
   intents: "all"
 })



bot.variables({
prefix: "+",
trivia_game_mode: "medium",
akin_buttons: "false",
akin_gametype: "character",
})

bot.onInteractionCreate() // allows making interactions command work

 bot.onMessage() //Allows to execute Commands

 const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")

 /*
 bot.cmd is object of Collections where the command data will be stored
 "./commands/" is the path of folder where all the commands' code will be present
 */
