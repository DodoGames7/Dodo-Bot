module.exports = {
    name: "gitbuilds",
    info: {
        description: "Returns information about dev builds (with a link to try them as well).",
        perms: "`SendMessages`"
    },
    aliases: ["devbuilds"],
    type: "messageCreate",
    code: `$userCooldown[gitbuildscmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[gitbuildscmd]];1000]]:R>]
$title[About GitBuilds]
    $description[GitBuilds are development versions of the bot available on Github that isn't ready to be considered as "stable" release. While usually new features or changes are introduced, there may be also bugs considering that they're unfinished builds which is why it's not recommended for public use as they're only meant for testing.

    GitBuilds Builds are obtainable through the branch $hyperlink[gitbuilds;https://github.com/dodogames7/Dodo-Bot/tree/gitbuilds)].]
    $color[$getGlobalVar[embedcolor]]
    $addActionRow
$addButton[https://dodogames7.github.io/dodo-bot-site/advanced/gitbuilds/;Getting started;Link]
    `
}
