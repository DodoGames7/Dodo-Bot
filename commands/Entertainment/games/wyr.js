module.exports = {
name: "would-you-rather",
info: {
        description: "Starts a game of two options to choose from.",
        perms: ["`SendMessages`", "`AddReactions` (if using `--usereactions` flag)"],
        flags: "`--usereactions`"
},
aliases: ["wyr"],
type: "messageCreate",
code: `
$userCooldown[wyrcmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[wyrcmd]];1000]]:R>]
$let[status;$httpRequest[https://api.gamecord.xyz/wyr;get]]
$onlyIf[$get[status]==200;Unable to fetch data for wyr. Please, try again later.]

$let[messageID;$sendMessage[$channelID;$title[Would you rather...]
$addField[**Option 1**;$httpResult[data;option1]]
$addField[**Option 2**;$httpResult[data;option2]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
;true]]

$if[$checkContains[$message;--usereactions;—usereactions]==true;
$!addButtonTo[$channelID;$get[messageID];wyr-ops1;0;Secondary;1️⃣;false]
$!addButtonTo[$channelID;$get[messageID];wyr-ops2;0;Secondary;2️⃣;false]
;
$onlyIf[$channelHasPerms[$channelID;$botID;AddReactions]==true;
I do not have permissions to add reactions to my message in this channel. Please either grant me \`AddReactions\` permission or use buttons instead.
]
$!addMessageReactions[$channelID;$get[messageID];1️⃣;2️⃣]
]
`
}
