module.exports = {
    name: "resetleveling",
    type: "awaited",
    code: `$resetUserVar[level;$guildID]
    $resetUserVar[xp;$guildID]
    $resetUserVar[xpLimit;$guildID]
    $resetUserVar[previouslevel;$guildID]
    $setGuildVar[islevelingreset;yes]
    `
    }
