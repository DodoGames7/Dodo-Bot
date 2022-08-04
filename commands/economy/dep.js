module.exports = {
name:"dep",
aliases:"deposit",
code: `
$title[Deposit]
$description[deposited $numberSeparator[$truncate[$get[amount]];,] to bank]
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$get[amount]]]
$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank];$get[amount]]]

$onlyif[$get[amount]!=0;{newEmbed:{description:Cannot dep 0!}{color:RED}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed:{description:Cannot dep negative amounts!}{color:RED}}]
$onlyif[$getGlobalUserVar[money]>=$get[amount];{newEmbed:{description:You do not have that much to dep!}{color:RED}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed:{description:Not a number!}{color:RED}}]
$onlyif[$message!=; you need to provide an amount]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[1]];k;000;1];m;000000;1];all;$getGlobalUserVar[money;$authorID];1];max;$getGlobalUserVar[money;$authorID];1]]
`
} // credit: https://github.com/Snipedprox/Zeon/blob/main/commands/economy/deposit.js
