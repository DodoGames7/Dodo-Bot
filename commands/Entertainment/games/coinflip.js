module.exports = {
  name: "coinflip",
  code: `$title[Coin Flip]
  $description[The coin is in the air Choose heads or tails below.]
  $color[Red]
  $addButton[1;Tails;1;tailsbutton_$authorID;false]
  $addButton[1;Heads;4;headsbutton_$authorID;false]
  $cooldown[2s;slow down, don't spam the command]
  `
}