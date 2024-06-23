module.exports = {
  name: "flood",
  info: {
    description: "Starts a game of Flood.",
    perms: ["`SendMessages`"]
  },
  code: `$djsEval[const { Flood } = require('discord-gamecord');

const Game = new Flood({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Flood',
    color: '$getVar[embedcolor]',
  },
  difficulty: $getGuildVar[flood_difficulty],
  timeoutTime: 60000,
  buttonStyle: 'SECONDARY',
  emojis: ['🟥', '🟦', '🟧', '🟪', '🟩'],
  winMessage: 'You won! You took **{turns}** turns.',
  loseMessage: 'You lost! You took **{turns}** turns.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;flood;$authorID];$dateStamp];1000]]:R>]`
}