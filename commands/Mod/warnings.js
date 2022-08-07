module.exports = {
  name: "warnings",
  aliases: ["warns", "ws"],
  code: 
 `
 $title[$username[$mentioned[1]'s Warnings]
 $addField[Warnings Count;\`$getUserVar[warns;$mentioned[1;yes];$guildID]\`;no]
 $color[RED]
  `
  }
