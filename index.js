const config = require("./config.json");
const functions = require("./handlers/functions.js");

const { ForgeClient } = require("@tryforge/forgescript")
const { ForgeDB } = require("@tryforge/forge.db")
require('dotenv').config() // Enable env support in local hosting

// Client initialization
   const client = new ForgeClient({
    "intents": ["Guilds", "GuildMessages", "GuildMembers", "MessageContent", "GuildPresences", "GuildModeration"], // Intents
    "prefixes": ["$getGuildVar[prefix]"], // Custom prefix system
    "events": ["ready", "error", "interactionCreate", "messageCreate", "messageDelete", "messageUpdate", "guildMemberAdd", "guildMemberRemove", "guildBanAdd", "guildBanRemove", "guildCreate"], // Setup ForgeScript events
    "extensions": [ // Load extensions
        new ForgeDB({
    type: "better-sqlite3",
    database: "./database/forge.db"
    })
    ],
   mobile: config.MobileStatus, // Mobile status
   disableConsoleErrors: config.disableConsoleErrors // Console errors option
})

// Handlers
   client.commands.load("commands")
ForgeDB.variables(require("./handlers/variables.js"));
functions.forEach((func) => client.functions.add(func));
// Your bot token
   client.login(process.env.BotToken || config.BotToken);

 
