module.exports = {
    name: "gitbuilds",
    info: {
        description: "Returns information about Pre-release builds and how to try them.",
        perms: "`SendMessages`"
    },
    aliases: ["devbuilds"],
    type: "messageCreate",
    code: `$userCooldown[gitbuildscmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[gitbuildscmd]];1000]]:R>]
$title[About GitBuilds]
$addField[Introduction;GitBuilds is a way to test pre-release builds of upcoming versions of Dodo-Bot before they eventually release as a stable version.

Builds released in this state are incomplete and may have bugs as a result so it is not recommended to use them for production purposes.
]
$addField[How to test?;For those who want to host them on their bots. You can download the files from the [gitbuilds](https://github.com/DodoGames7/Dodo-Bot/tree/gitbuilds) branch on Github.

Alternatively, you can invite "Dodo Canary" (using the button below) to a server to directly test latest pre-release builds (prefix: \`d?\`).
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[https://discord.com/api/oauth2/authorize?client_id=970481494797738016&scope=bot+applications.commands&permissions=36032;Invite Dodo Canary;Link]
`
}
