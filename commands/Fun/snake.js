module.exports = {
  name: "snake",
  code: `$djsEval[const { Snake } = require('leaf-utils');

 new Snake({
            message: message,
            slash_command: false,
            snake: {
                head: '🟢',
                body: '🟢',
                tail: '🟢',
                over: '💀'
            },
            emojis: {
                board: '⬛',
                food: '🍎',
                up: '⬆️',
                right: '➡️',
                down: '⬇️',
                left: '⬅️',
            },
            foods: ['🍎', '🍇', '🍊', '🍕', '🥕', '🥞'],
            stopButton: {
                stopLabel: 'Stop',
                stopStyle: 'DANGER',
            },
            authorOnly: 'Only {{author}} can use these buttons',
        }).startGame();]`
} // credit: https://github.com/notLeaf/leaf-utils/blob/main/src/Examples/Snake.md