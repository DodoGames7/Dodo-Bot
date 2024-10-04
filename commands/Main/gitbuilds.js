module.exports = {
    name: "gitbuilds",
    info: {
        description: "Returns information about Pre-release builds and how to try them.",
        perms: ["`SendMessages`"]
    },
    aliases: "devbuilds",
    code: `$title[About GitBuilds]
$addField[How to test?;For those who want to host them on their bots. You can download the files from the [gitbuilds](https://github.com/DodoGames7/Dodo-Bot/tree/gitbuilds) branch on Github.

Alternatively, you can invite Dodo Canary (using the button below) to a server to directly test latest pre-release builds (prefix: \`d?\`).
]
$addField[Introduction;GitBuilds is a way to test pre-release builds of upcoming versions of Dodo-Bot before they eventually release as a stable version.

    Builds released in this state are incomplete and may have bugs as a result so it is not recommended to use them for production purposes.
]
$addButton[1;Invite Dodo Canary;5;https://discord.com/api/oauth2/authorize?client_id=970481494797738016&scope=bot+applications.commands&permissions=36032;false]
$color[$getVar[embedcolor]]
$cooldown[2s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;gitbuilds;$authorID];$dateStamp];1000]]:R>]
    `

    }
