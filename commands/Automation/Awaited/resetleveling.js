module.exports = {
    name: "resetleveling",
    type: "awaited",
    code: `$resetUserVar[level;$guildID]
    $resetUserVar[xp;$guildID]
    $resetUserVar[xpLimit;$guildID]
    $setGuildVar[islevelingreset;yes]
    `
    }