module.exports = {
    name: "resetonleave",
    type: "awaited",
    code: `$deleteVar[level;$authorID_$guildID;main] 
    $deleteVar[previouslevel;$authorID_$guildID;main]
    $deleteVar[xp;$authorID_$guildID;main] 
    $deleteVar[xpLimit;$authorID_$guildID;main]`
    }
