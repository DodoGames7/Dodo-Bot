module.exports = {
  name: "minesweeper",
  executeAt: "both",
  code: `$djsEval[const { Minesweeper } = require('discord-gamecord');

const Game = new Minesweeper({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Minesweeper',
    color: '#5865F2',
    description: 'Click on the buttons to reveal the blocks except mines.'
  },
  emojis: { flag: '🚩', mine: '💣' },
  mines: 5,
  timeoutTime: 60000,
  winMessage: 'You won the Game! You successfully avoided all the mines.',
  loseMessage: 'You lost the Game! Beaware of the mines next time.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]
$cooldown[2s;slow down, don't spam the command]`
}