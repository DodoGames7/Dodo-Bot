module.exports ={
    name: "kick",
    code: `
    $username[$mentioned[1]] has been kicked from the guild.
    $kick[$mentioned[1]]
    $argsCheck[1;just mention someone you want to kick.]
    $onlyPerms[kick;you Don't have Kick Members Permission to use this, (sorry, not sorry)]
    $onlyBotPerms[kick;hey, i don't have Kick Members permission to do that!]
    $onlyif[$checkContains[$mentioned[1];$authorID]==false;you can't take actions against yourself lol]
    ` // kicks a user from the server, mentioning user is needed
}