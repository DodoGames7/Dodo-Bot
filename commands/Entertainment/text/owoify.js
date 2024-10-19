module.exports = {
    name: "owoify",
    info: {
        description: "Adds owoify style to your text.",
        perms: ["`SendMessages`"]
    },
    code: `$owoify[$message]
$onlyIf[$message!=;Please enter a text.]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;owoify;$authorID];$dateStamp];1000]]:R>]
$disableMentionType[all]`
    }
