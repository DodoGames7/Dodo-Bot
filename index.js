// imports
const { AoiClient, defaultCacheConfig } = require("aoi.js");
const { Intents } = require("zeneth");

// create a new client
const bot = new AoiClient({
    token: process.env.TOKEN,
    prefixes: "&&",
    intents: Intents.Guilds | Intents.GuildMessages | Intents.MessageContent,
    events: ["MessageCreate", "Ready"],
    caches: defaultCacheConfig(),
});


(async () => {
    await bot.managers.commands.load({ path: "./commands"});
})();

 