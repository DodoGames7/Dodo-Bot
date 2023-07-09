module.exports = {
  name: "trivia",
  executeAt: "guild",
  aliases: "triv",
  code: `$djsEval[const { Trivia } = require('discord-gamecord');

const Game = new Trivia({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Trivia',
    color: '#5865F2',
    description: 'You have 60 seconds to guess the answer.'
  },
  timeoutTime: 60000,
  buttonStyle: 'PRIMARY',
  trueButtonStyle: 'SUCCESS',
  falseButtonStyle: 'DANGER',
  mode: '$getGuildVar[trivia_type]',  
  difficulty: '$getGuildVar[trivia_difficulty]',  
  winMessage: 'You won! The correct answer is {answer}.',
  loseMessage: 'You lost! The correct answer is {answer}.',
  errMessage: 'Unable to fetch question data! Please try again.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]
  $cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]`
}