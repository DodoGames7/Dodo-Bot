module.exports = {
name:"withdraw",
aliases:"with",
code: `
$title[withdraw]
$description[$numberSeparator[$truncate[$get[amount]];,] has been withdrawn from bank]
$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank];$get[amount]]]
$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$get[amount]]]
$onlyif[$get[amount]!=0;{newEmbed:{description:Cannot withraw 0!}{color:RED}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed:{description:Cannot withdraw negative amounts!}{color:RED}}]
$onlyif[$getGlobalUserVar[bank]>=$get[amount];{newEmbed:{description:You do not have that much to withdraw!}{color:RED}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed:{description:Not a number!}{color:RED}}]
$onlyif[$message!=; you need to provide an amount]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[1]];k;000;1];m;000000;1];all;$getGlobalUserVar[bank;$authorID];1];max;$getGlobalUserVar[bank;$authorID];1]]
`
} // credit: https://github.com/Snipedprox/Zeon/blob/main/commands/economy/withdraw.js
