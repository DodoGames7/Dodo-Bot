module.exports = {
  name: "2048",
  executeAt: "both",
  code: `$djsEval[const { TwoZeroFourEight } = require('discord-gamecord');

const Game = new TwoZeroFourEight({
  message: message,
  isSlashGame: false,
  embed: {
    title: '2048',
    color: '#5865F2'
  },
  emojis: {
    up: '⬆️',
    down: '⬇️',
    left: '⬅️',
    right: '➡️',
  },
  timeoutTime: 60000,
  buttonStyle: 'PRIMARY',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]
$cooldown[2s;slow down, don't spam the command]
`
}