module.exports = {
    name: "gitbuilds",
    info: {
        description: "Returns information about dev builds (with a link to trying them as well).",
        perms: ["`SendMessages`"]
    },
    code: `$title[About GitBuilds]
    $description[GitBuilds are development versions of the bot hosted on Github that isn't ready to be considered as "stable" release. While usually new features or changes are introduced, there may be also bugs considering that they're unfinished builds which is why it's not recommended for public use as they're only meant for testing.

    GitBuilds Builds are obtainable through the branch [gitbuilds](https://github.com/dodogames7/Dodo-Bot/tree/gitbuilds).]
    $addButton[1;Getting started;5;https://dodogames7.github.io/dodo-bot-site/advanced/gitbuilds/;false]
    $color[$getVar[embedcolor]]
    $cooldown[2s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;gitbuilds;$authorID];$dateStamp];1000]]:R>]
    `

    }
