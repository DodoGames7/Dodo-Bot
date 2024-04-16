module.exports = {
    name: "guess-the-pokemon",
    aliases: "gtp",
    code: `$djsEval[const { GuessThePokemon } = require('discord-gamecord');
    
    const Game = new GuessThePokemon({
      message: message,
      isSlashGame: false,
      embed: {
        title: "Who's The Pokemon",
        color: "$getVar[embedcolor]"
      },
      timeoutTime: 60000,
      winMessage: "You guessed it right! It was a {pokemon}.",
      loseMessage: "Better luck next time! It was a {pokemon}.",
      errMessage: "Unable to fetch pokemon data! Please try again.",
      playerOnlyMessage: "Only {player} can use these buttons."
    });
    
    Game.startGame()
    ]
    $cooldown[5s; Slow down! Don't spam the command!
    Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;guess-the-pokemon;$authorID];$dateStamp];1000]]:R>]
    `
    }