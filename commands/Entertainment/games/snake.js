module.exports = {
  name: "snake",
  executeAt: "both",
  aliases: "snek",
  code: `$djsEval[const { Snake } = require('discord-gamecord');

const Game = new Snake({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Snake Game',
    overTitle: 'Game Over',
    color: '#5865F2'
  },
  emojis: {
    board: '⬛',
    food: '🍎',
    up: '⬆️', 
    down: '⬇️',
    left: '⬅️',
    right: '➡️',
  },
  snake: { head: '🟢', body: '🟩', tail: '🟢', over: '💀' },
  foods: ['🍎', '🍇', '🍊', '🫐', '🥕', '🥝', '🌽'],
  stopButton: 'Stop',
  timeoutTime: 60000,
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]`
}