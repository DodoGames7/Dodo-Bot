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
$onlyIf[disabled!=disabled;{newEmbed:{title:Uh, oh!}{description:This command has been disabled temporary as it no longer works for now.

Commands in this state may be either removed or fixed in future releases of the bot. There's no eta on what action will be taken for this command. Please, use other commands that actually "work" for now.
}{color:Yellow}}]
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
`
}
