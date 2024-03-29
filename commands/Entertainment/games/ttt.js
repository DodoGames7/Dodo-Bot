module.exports = {
name: "tictactoe",
aliases: "ttt",
code: `$djsEval[const { TicTacToe } = require('discord-gamecord');

const Game = new TicTacToe({
  message: message,
  isSlashGame: false,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'Tic Tac Toe',
    color: '$getVar[embedcolor]',
    statusTitle: 'Status',
    overTitle: 'Game Over'
  },
  emojis: {
    xButton: '❌',
    oButton: '🔵',
    blankButton: '➖'
  },
  mentionUser: true,
  timeoutTime: 60000,
  xButtonStyle: 'DANGER',
  oButtonStyle: 'PRIMARY',
  turnMessage: '{emoji} | Its turn of player **{player}**.',
  winMessage: '{emoji} | **{player}** won the TicTacToe Game.',
  tieMessage: 'The Game tied! No one won the Game!',
  timeoutMessage: 'The Game went unfinished! No one won the Game!',
  playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
});

Game.startGame();
]
$onlyIf[$isBot[$mentioned[1;true]]==false;You cannot play with bots!]
$onlyIf[$mentioned[1;true]!=$authorID; Mention an user to play with!]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;tictactoe;$authorID];$dateStamp];1000]]:R>]
`
}