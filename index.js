const { AoiClient } = require("aoi.js");
const config = require("./config.json");

// Client Setup
const bot = new AoiClient({
  token: process.env.TOKEN || config.BotToken, // Token with either env or config
  prefix: "$getGuildVar[prefix]", // By default, it uses custom prefix system. (default used prefix: d!)
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers", "GuildPresences", "GuildModeration", "GuildEmojisAndStickers"], // Discord.js intents (v14)
  events: ["onMessage", "onInteractionCreate", "onJoin", "onMessageDelete", "onMessageUpdate", "onLeave", "onBanAdd", "onBanRemove", "onGuildJoin", "onFunctionError"], // Setup aoi.js events
  aoiLogs: false, // Don't show aoi.js default console message
  aoiWarning: false, // Disable aoi.js update warning
  database: { // Use aoi.db as the default database for storing data
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: config.DBsecurityKey,
  },
 disableFunctions: ["$clientToken"],
 mobilePlatform: config.MobileStatus
});

// Handlers
bot.loadCommands("./commands/", config.LogCommands);
bot.variables(require("./handler/variables.js"));


 
