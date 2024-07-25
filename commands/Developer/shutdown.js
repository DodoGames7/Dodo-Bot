module.exports = {
name: "shutdown",
info: {
    description: "Returns a confirmation before shutting down the bot.",
    perms: ["`SendMessages`"],
    dev: "true"
},
type: "messageCreate",
code: `$onlyIf[$checkContains[$botOwnerID[$getGlobalVar[AllowBotMembers]];$authorID]==true;]
$title[Shutting down]
$description[Do you really want to shutdown the bot? This will simply stop your bot from responding. To turn on the bot, you need to go through your host to start it once again.]
$thumbnail[https://us-east-1.tixte.net/uploads/dodo-bot.wants.solutions/warning.png]
$color[Red]
$addActionRow
$addButton[shutdownconfirm_$authorID;Yes;Secondary]
$addButton[shutdowndeny_$authorID;No;Secondary]
`
}