module.exports = {
    name: "report",
    info: {
        description: "Returns a link to report issues of Dodo-Bot on it's GitHub repo.",
        perms: ["`SendMessages`"]
    },
    aliases: "bugreport",
    code: `$title[Help Shape Dodo-Bot Future]
    $description[Even though the bot may not appear to be buggy, however, it is worth noting that it may contain bugs and as such, it is advised to report bugs through the Github repo.

To get started, be sure to have a Github account first then press the button "Report a Bug" to open a new issue.
]
    $color[$getVar[embedcolor]]
    $addButton[1;Report a Bug;5;https://github.com/DodoGames7/Dodo-Bot/issues/new/choose;false]
    $cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;report;$authorID];$dateStamp];1000]]:R>]
    `
}
