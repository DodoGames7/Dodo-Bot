module.exports = {
  name: "slots",
  aliases: "slot",
  code: `$djsEval[const { Slots } = require('discord-gamecord');

const Game = new Slots({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Slot Machine',
    color: '$getVar[embedcolor]'
  },
  slots: ['🍇', '🍊', '🍋', '🍌']
});

Game.startGame();
]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;slots;$authorID];$dateStamp];1000]]:R>]`
}