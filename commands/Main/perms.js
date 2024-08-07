odule.exports = {
name: "perms",
info: {
        description: "Returns the permissions the bot needs.",
        perms: "`SendMessages`"
    },
type: "messageCreate",
code: `$userCooldown[permscmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[permscmd]];1000]]:R>]

$title[Official perms]
$description[Confused on what perms the bot should have? This command is dedicated to that.]
$addField[\`SendMessages\`;The most basic permission.]
$addField[\`ViewChannel\`;Needed so the bot can read the user's messages executing it's command.]
$addField[\`AttachFiles\`;Needed for image commands such as \`gun\`.]
$addField[\`AddReactions\`;Required for \`suggest\` command.]
$addField[\`ViewAuditLog\`;Required for logs such as moderation and Integration.]
$color[$getGlobalVar[embedcolor]]
$attachment[./handler/assets/redwarning.png;redwarning.png]
$footer[For safety reasons, do not give the bot administrator permission at all;attachment://redwarning.png]

`

