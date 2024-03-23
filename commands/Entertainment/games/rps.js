module.exports = {
name: "rock-paper-scissors",
aliases: "rps",
code: `$djsEval[const { RockPaperScissors } = require('discord-gamecord');

const Game = new RockPaperScissors({
  message: message,
  isSlashGame: false,
  opponent: message.mentions.users.first(),
  embed: {
    title: "Rock Paper Scissors",
    color: "$getVar[embedcolor]",
    description: "Press a button below to make a choice."
  },
  buttons: {
    rock: "Rock",
    paper: "Paper",
    scissors: "Scissors"
  },
  emojis: {
    rock: "🌑",
    paper: "📰",
    scissors: "✂️"
  },
  mentionUser: true,
  timeoutTime: 60000,
  buttonStyle: "SECONDARY",
  pickMessage: "You choose {emoji}.",
  winMessage: "**{player}** won the Game! Congratulations!",
  tieMessage: "The Game tied! No one won the Game!",
  timeoutMessage: "The Game went unfinished! No one won the Game!",
  playerOnlyMessage: "Only {player} and {opponent} can use these buttons."
});

Game.startGame()
]
$onlyIf[$isBot[$mentioned[1;true]]==false;You cannot play with bots!]
$onlyIf[$mentioned[1;true]!=$authorID;Please mention a opponent to play with!]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;rock-paper-scissors;$authorID];$dateStamp];1000]]:R>]
`
}
