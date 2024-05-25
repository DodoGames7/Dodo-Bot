module.exports = {
name: "whoasked",
info: {
    description: "Searches for Askers (although mostly useless).",
    perms: ["`SendMessages`"]
},
code: `Searching for Askers... (0%)
$editIn[6s;Searching for Askers... (5%);Searching for Askers... (15%);Searching for Askers... (40%);Searching for Askers... (60%);Searching for Askers... (90%);Searching for Askers... (100%);No askers has been found.]
 $cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;whoasked;$authorID];$dateStamp];1000]]:R>]
`
}