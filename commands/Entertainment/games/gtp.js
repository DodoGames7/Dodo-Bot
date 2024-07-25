module.exports = {
name: "guess-the-pokemon",
info: {
        description: "Starts a game of Guess The Pokemon.",
        perms: "`SendMessages`"
},
type: "messageCreate",
aliases: ["gtp"],
code: `$userCooldown[gtpcmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[gtpcmd]];1000]]:R>]

$!djsEval[const { GuessThePokemon } = require('discord-gamecord');

const Game = new GuessThePokemon({
  message: ctx.message,
  isSlashGame: false,
  embed: {
    title: "Who's The Pokemon",
    color: '$getGlobalVar[embedcolor]'
  },
  timeoutTime: 60000,
  winMessage: 'You guessed it right! It was a {pokemon}.',
  loseMessage: 'Better luck next time! It was a {pokemon}.',
  errMessage: 'Unable to fetch pokemon data! Please try again.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]`
}