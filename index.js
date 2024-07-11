const { AoiClient } = require("aoi.js");
const config = require("./config.json"); // Load the setup options from config
require('dotenv').config() // Enable env support in local hosting

// Client Setup
const client = new AoiClient({
  token: process.env.BotToken || config.BotToken, // Token with either env or config
  prefix: "$getGuildVar[prefix]", // By default, it uses custom prefix system. (default prefix used: d!)
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers", "GuildPresences", "GuildModeration", "GuildEmojisAndStickers"], // Discord.js intents (v14)
  events: ["onMessage", "onInteractionCreate", "onJoin", "onMessageDelete", "onMessageUpdate", "onLeave", "onBanAdd", "onBanRemove", "onGuildJoin", "onFunctionError"], // Setup aoi.js events
  aoiLogs: false, // Don't show aoi.js default console message
  aoiWarning: false, // Disable aoi.js update warning
  database: { // Use aoi.db as the default database for storing data
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: process.env.DBsecurityKey || config.DBsecurityKey // Security Key with either env or config
  },
 disableFunctions: ["$clientToken"], // For safety reasons
 mobilePlatform: config.MobileStatus || process.env.MobileStatus, // Whether or not to enable mobile status
 debugs: {
 interpreter: config.DebugClient || process.env.DebugClient // Whether or not to enable aoi.js debug mode
}
});

// Handlers
client.loadCommands("./commands/", config.LogCommands || process.env.LogCommands);
client.variables(require("./handler/variables.js"));


 
