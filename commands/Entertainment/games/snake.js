module.exports = {
name: "snake",
info: {
        description: "Starts a game of snake.",
        perms: "`SendMessages`"
},
type: "messageCreate",
aliases: ["snek"],
code: `$userCooldown[snakecmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[snakecmd]];1000]]:R>]


$!djsEval[const { Snake } = require('discord-gamecord');

const Game = new Snake({
  message: ctx.message,
  isSlashGame: false,
  embed: {
    title: 'Snake Game',
    overTitle: 'Game Over',
    color: '$getGlobalVar[embedcolor]'
  },
  emojis: {
    board: '⬛',
    food: '🍎',
    up: '⬆️', 
    down: '⬇️',
    left: '⬅️',
    right: '➡️',
  },
  snake: { head: '🟢', body: '🟩', tail: '🟢', skull: '💀'},
  foods: \\['🍎', '🍇', '🍊', '🫐', '🥕', '🥝', '🌽'\\],
  stopButton: 'Stop',
  timeoutTime: 60000,
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]

`
}