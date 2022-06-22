module.exports = {
  name: "akinator",
  aliases:["akin"],
  code: `$djsEval[
  const akinator = require("discord.js-akinator");

const language = "en";
const childMode = true;
const gameType = "$getServerVar[akin_gametype]";
const useButtons = $getServerVar[akin_buttons];
const embedColor = "#1F1E33";

akinator(message, {
            language: language, 
            childMode: childMode, 
            gameType: gameType, 
            useButtons: useButtons, 
            embedColor: embedColor 
        });
        ]`
}