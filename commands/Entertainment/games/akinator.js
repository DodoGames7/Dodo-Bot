module.exports = {
    name: "akinator",
    aliases:["akin"],
    executeAt: "guild",
    code: `$djsEval[
    const akinator = require("discord.js-akinator");
  const language = "$getGuildVar[akin_language]";
  const childMode = true;
  const gameType = "$getGuildVar[akin_gametype]";
  const useButtons = true;
  const embedColor = "$getGuildVar[akin_embedcolor]";
  akinator(message, {
              language: language, 
              childMode: childMode, 
              gameType: gameType, 
              useButtons: useButtons, 
              embedColor: embedColor 
          });
          ]
          $cooldown[2s;slow down, don't spam the command]
          `
        }