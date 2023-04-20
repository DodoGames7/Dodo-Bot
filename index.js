const { AoiClient, LoadCommands, Util} = require("aoi.js");

const bot = new AoiClient({
  token: process.env.TOKEN,
  prefix: "$getGuildVar[prefix]",
  intents: ["MessageContent", "Guilds", "GuildMessages", "DirectMessages"],
  events: ["onMessage", "onInteractionCreate"],
  aoiLogs: false,
  aoiWarning: true,
  guildOnly: false
});


const loader = new LoadCommands(bot)
loader.load(bot.cmd,"./commands/")


bot.variables(require("./handler/variables.js"));

// parser support
const { parse, createAst, parseChatInputOptions } = require('aoi.parser');
const {
    parseExtraOptions
} = require('aoi.parser/components');
 
Util.parsers.ErrorHandler = parse;
 
Util.parsers.OptionsParser = (data) => {
    return createAst(data).children.map(parseExtraOptions);
}
 