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
$onlyIf[disabled!=disabled;{newEmbed:{title:Uh Oh!}{description:The API akinator uses to function no longer works.

          We have disabled the game temporary (including it's dedicated settings). You may be able to still play other games normally, but sorry for inconvenience.
           
        **Note**#COLON# Features or commands that are being disabled are subject to be either fixed or removed. We have no eta on when that will happen for these features/commands.
}{color:Blurple}}]

          `
        }