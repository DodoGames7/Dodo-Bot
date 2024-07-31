module.exports = {
name: "rebase",
type: "messageCreate",
info: {
        description: "Returns information about the Rebase version",
        perms: ["`SendMessages"]
},
code: ` $userCooldown[rebasecmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[rebasecmd]];1000]]:R>]

$attachment[./handler/assets/dodo-bot-logo.png;dodobot-logo.png]

$title[About rebase]
$description[Rebase is a special version of Dodo-Bot acting as a backup. It is based on $hyperlink[CupcakeX;https://github.com/dodoGames7/CupcakeX] codebase albeit being improved and having additions compared to the current build of it featuring new techniques and stuff.

As the name implies, it mostly acts as a emergency build in case if aoi.js suddenly died one day. It's also used for learning new stuff.]
$color[$getGlobalVar[embedcolor]]
$thumbnail[attachment://dodobot-logo.png]

`
}
