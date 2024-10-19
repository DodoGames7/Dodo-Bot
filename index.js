const { AoiClient } = require("aoi.js"); // Define aoi.js client creator
const config = require("./config.json"); // Load the setup options from config
require('dotenv').config() // Enable env support in local hosting
const functions = require("./handlers/functions.js");
const vars = require('./handlers/variables.js');


// Client Setup
const client = new AoiClient({
  token: process.env.BotToken || config.BotToken, // Token with either env or config
  prefix: "$getGuildVar[prefix]", // By default, it uses custom prefix system (default prefix used: d!).
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers", "GuildPresences", "GuildModeration", "GuildEmojisAndStickers"], // Discord.js intents (v14)
  events: ["onMessage", "onInteractionCreate", "onJoin", "onLeave", "onMessageDelete", "onMessageUpdate", "onBanAdd", "onBanRemove", "onGuildJoin", "onFunctionError"], // Setup aoi.js events
  aoiLogs: false, // Don't show aoi.js default console message
  aoiWarning: false, // Disable aoi.js update warning
  database: { // Use aoi.db as the default database for storing data
    type: "aoi.db",
    db: require("@aoijs/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"], // tables for the database
    securityKey: process.env.DBsecurityKey || config.DBsecurityKey // Security Key with either env or config
  },
 disableFunctions: ["$clientToken"], // For safety reasons
 mobilePlatform: config.MobileStatus, // Whether or not to enable mobile status
 debugs: {
 interpreter: config.EnableDebugMode // Whether or not to enable aoi.js debug mode
},
respondOnEdit: {
 commands: config.respondOnEdit,
 time: 20000
},
suppressAllErrors: config.DisableAllErrors
});

// Handlers
client.loadCommands("./commands/", config.LogCommands);
Object.keys(vars).forEach((t) =>
  client.variables(vars[t], t)
)
functions.forEach((func) => client.functionManager.createFunction(func));


 
