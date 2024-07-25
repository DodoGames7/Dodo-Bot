module.exports = {
type: "messageCreate",
code: `$onlyIf[$isBot==false;]
$onlyIf[$getGuildVar[autoreplyping]==on;]
$onlyIf[$channelHasPerms[$channelID;$botID;ViewChannel;SendMessages]==true;]
$If[$startsWith[$message;<@$botID>]==true;
Hi! My Prefix is \`$getGuildVar[prefix]\` in this server!
]`
}