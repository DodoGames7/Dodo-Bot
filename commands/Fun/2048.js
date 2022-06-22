module.exports = {
  name: "2048",
  code: `$djsEval[const { TwoZeroFourEight } = require('discord-gamecord')

  new TwoZeroFourEight({
      message: message,
      slash_command: false,
      embed: {
        title: '2048 Game',
        color: '009dff',
        overTitle: 'Game Over!',
        winTitle: 'You Win!',
      },
      emojis: {
        up: '⬆️', 
        right: '➡️',
        down: '⬇️',
        left: '⬅️',
      },
      othersMessage: 'false'
  }).startGame()]
  `
}