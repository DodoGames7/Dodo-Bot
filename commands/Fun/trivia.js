module.exports = {
  name: "trivia",
  aliases:["triv"],
  code: `$cooldown[3s;you need to wait %time% before using this again]
  $djsEval[const { Trivia } = require('discord-gamecord')

new Trivia({
  message: message,
  slash_command: false,
  embed: {
    title: 'Trivia',
    description: 'You have {time} seconds to respond!',
    color: '#5865F2',
  },
  difficulty: '$getServerVar[trivia_game_mode]',
  winMessage: 'GG, Your answer was correct! It was **{answer}**',
  loseMessage: 'Your answer was Incorrect! The correct answer was **{answer}**',
  othersMessage: 'You are not allowed to use buttons for this message!',
}).startGame();]`
}