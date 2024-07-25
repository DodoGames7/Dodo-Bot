module.exports = {
name: "flood",
info: {
        description: "Starts a game of Flood (pass the flag `--settings` to open the settings).",
        perms: "`SendMessages`"
},
type: "messageCreate",
code: `$userCooldown[floodcmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[floodcmd]];1000]]:R>]

$let[difficulty;$replace[$replace[$replace[$getUserVar[flood_difficulty];18;Hard];13;Normal];8;Easy]]
$if[$checkContains[$message;--settings;—settings]==true;
$title[Flood settings]
$description[Welcome to Flood's settings! Select a option to change!]
$addField[Current setting(s);
**Difficulty:** $get[difficulty]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[floodsettings_$authorID;Select a option;false;1;1]
$addOption[Difficulty;How hard the Game should be?;flooddifficultyoption;;false]
;
$!djsEval[const { Flood } = require('discord-gamecord')

const Game = new Flood({
  message: ctx.message,
  isSlashGame: false,
  embed: {
    title: 'Flood',
    color: '$getGlobalVar[embedcolor]',
  },
  difficulty: $getUserVar[flood_difficulty],
  timeoutTime: 60000,
  buttonStyle: 'SECONDARY',
  emojis: \\['🟥', '🟦', '🟧', '🟪', '🟩'\\],
  winMessage: 'You won! You took **{turns}** turns.',
  loseMessage: 'You lost! You took **{turns}** turns.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame()
]
]

`
}