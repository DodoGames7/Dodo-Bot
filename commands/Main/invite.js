module.exports = {
name: "invite",
info: {
        description: "Returns the invite link of the bot under a button.",
        perms: "`SendMessages`"
    },
type: "messageCreate",
code: `$userCooldown[invitecmd;2s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[invitecmd]];1000]]:R>]
$title[Invite Dodo-Bot]
$description[To invite the bot, press the "Invite" button.]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[$botInvite[36032];Invite;Link]
`
}