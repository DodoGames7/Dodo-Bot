module.exports = {
name: "tictactoe",
info: {
        description: "Starts a tictactoe match with your opponent.",
        perms: "`SendMessages`"
},
aliases: ["ttt"],
type: "messageCreate",
code: `$userCooldown[tttcmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[tttcmd]];1000]]:R>]
$onlyIf[$mentioned[0]!=;Please mention a opponent to play with.]
$onlyIf[$isBot[$mentioned[0]]==false;You cannot play with bots!]
$onlyIf[$mentioned[0]!=$authorID;You cannot play with yourself.]
$let[player1;$authorID]
  $let[player2;$mentioned[0]]
  $!startTicTacToe[$get[player1];$get[player2]]`
}