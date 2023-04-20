module.exports = {
  name: "slots",
  executeAt: "both",
  code: `$djsEval[const { Slots } = require('discord-gamecord');

const Game = new Slots({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Slot Machine',
    color: '#5865F2'
  },
  slots: ['🍇', '🍊', '🍋', '🍌']
});

Game.startGame();
]
$cooldown[2s;slow down, don't spam the command]`
}