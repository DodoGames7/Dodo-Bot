module.exports = {
    name: "version",
    info: {
        description: "View the current version of Dodo-Bot (along with it's Changelog)",
        perms: "`SendMessages`"
    },
    aliases: ["ver", "changelog", "release"],
    type: "messageCreate",
    code: `
$userCooldown[versioncmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[versioncmd]];1000]]:R>]
$title[Dodo-Bot Version]
    $description[
* **Version**: $getGlobalVar[version]
* **Release type**: $getGlobalVar[releaseType]
* **Build created on**: <t:$trunc[$divide[$getGlobalVar[buildDate];1000]]:f>
    ]
$if[$getGlobalVar[pre_release]==on;
$footer[Testing is recommended;https://us-east-1.tixte.net/uploads/dodogames.wants.solutions/redwarning.png]
]
    $color[$getGlobalVar[embedcolor]]
    $addActionRow
    $addButton[changes_$authorID;Changes;Secondary]
    $addButton[fixes_$authorID;Bug Fixes;Secondary]
    $addButton[other_$authorID;Other;Secondary]
    $addActionRow
    $addButton[https://github.com/DodoGames7/Dodo-Bot/releases;Version History;Link;📜]
`
}
