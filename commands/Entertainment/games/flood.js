module.exports = {
  name: "flood",
  executeAt: "guild",
  code: `$djsEval[const { Flood } = require('discord-gamecord');

const Game = new Flood({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Flood',
    color: '#5865F2',
  },
  difficulty: $getGuildVar[flood_difficulty],
  timeoutTime: 60000,
  buttonStyle: 'PRIMARY',
  emojis: ['🟥', '🟦', '🟧', '🟪', '🟩'],
  winMessage: 'You won! You took **{turns}** turns.',
  loseMessage: 'You lost! You took **{turns}** turns.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]`
}