module.exports = {
  name: "balance",
  aliases: ["bal", "b", "cash"],
  code: `$title[Balance of $username[$mentioned[1]]]
  $addField[Bank;$getGlobalUserVar[bank;$mentioned[1]];no]
  $addField[Money;$getGlobalUserVar[money;$mentioned[1]];no]
  $color[BLURPLE]
$onlyIf[$isBot[$mentioned[1]]!=true;bots can't have a economy profile]`
}