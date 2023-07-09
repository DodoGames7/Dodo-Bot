module.exports = {
  name: "match-pairs",
  executeAt: "both",
  code: `$djsEval[const { MatchPairs } = require('discord-gamecord');

const Game = new MatchPairs({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Match Pairs',
    color: '#5865F2',
    description: '**Click on the buttons to match emojis with their pairs.**'
  },
  timeoutTime: 60000,
  emojis: ['🍉', '🍇', '🍊', '🥭', '🍎', '🍏', '🥝', '🥥', '🍓', '🫐', '🍍', '🥕', '🥔'],
  winMessage: '**You won the Game! You turned a total of \`{tilesTurned}\` tiles.**',
  loseMessage: '**You lost the Game! You turned a total of \`{tilesTurned}\` tiles.**',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
`
}