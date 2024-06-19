module.exports = {
  name: "snake",
  info: {
    description: "Starts a snake game.",
    perms: ["`SendMessages`"]
  },
  aliases: "snek",
  code: `$djsEval[const { Snake } = require('discord-gamecord');

const Game = new Snake({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Snake Game',
    overTitle: 'Game Over',
    color: '$getVar[embedcolor]'
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
  buttonStyle: "SECONDARY",
  stopButton: 'Stop',
  timeoutTime: 60000,
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;snake;$authorID];$dateStamp];1000]]:R>]`
}