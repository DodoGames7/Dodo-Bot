module.exports = {
    name: "report",
    type: "messageCreate",
    info: {
        description: "Returns a link to report issues on Dodo-Bot's GitHub repo.",
        perms: ["`SendMessages`"]
    },
    aliases: "bugreport",
    code: `$userCooldown[reportbugcmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[reportbugcmd]];1000]]:R>]

$title[Reporting bugs]
$description[Even though the bot might not appear to be buggy, it is worth noting that it may contain bugs, and as such, it is recommended to report bugs through the Github repo.

To get started, be sure to have a Github account first then press the button "Report a Bug" to open a new issue.
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[https://github.com/DodoGames7/Dodo-Bot/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=%5BBUG%5D;Report a bug;Link]
`
}
