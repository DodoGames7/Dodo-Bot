module.exports ={
    name: "kick",
    code: `
    $username[$mentioned[1]] has been kicked from the guild.
    $kick[$mentioned[1]]
    $argsCheck[1;just mention someone you want to kick.]
    $onlyPerms[kick;Only cool people with kick perms can use this!]
    $onlyBotPerms[kick;hey, i don't have kick members permission to do that!]
    ` // kicks a user from the server, mentioning user is needed
}