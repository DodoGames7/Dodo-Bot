module.exports = {
name: "perms",
info: {
        description: "Returns the permissions the bot needs.",
        perms: "`SendMessages`"
    },
code: `
$title[Permissions]
$description[Confused on what perms the bot should have? This list should help you decide the right permissions for the bot!

For safety reasons, do not give the bot administrator permission under any circumstances.
]
$addField[\`ViewAuditLog\`;Required for moderation logs.]
$addField[\`AttachFiles\`;Required for image commands such as \`gun\`.]
$addField[\`AddReactions\`;Required for \`suggest\` and \`poll\` command.]
$addField[\`SendMessages\`;The most basic permission.]
$addField[\`ViewChannel\`;Required so the bot can read the user's messages executing it's command.]
$color[$getVar[embedcolor]]
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;perms;$authorID];$dateStamp];1000]]:R>]

`
}
