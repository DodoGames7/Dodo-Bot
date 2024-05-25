module.exports = {
name: "drake",
info: {
    description: "Generates a Drake meme with your own inputs.",
    perms: ["`SendMessages`", "`AttachFiles`"]
},
code: `
$attachment[https://api.popcat.xyz/drake?text1=$splitText[1]&text2=$splitText[2];drake.png;URL]
$onlyIf[$IsValidImageLink[https://api.popcat.xyz/drake?text1=$splitText[1]&text2=$splitText[2]]==true;It looks like there're issues with processing the image. Please, try again later if possible.]
$onlyIf[$charCount[$splitText[1]]<=86||$charCount[$splitText[2]]<=86;Your drake meme contents cannot be longer than 86 characters.]
$onlyIf[$hasPermsInChannel[$channelID;$clientID;attachfiles]==true||$hasPerms[$guildID;$clientID;attachfiles]==true;I must have \`AttachFiles\` permission in order to proceed. Please, grant me the permission and try again.]
$onlyIf[$splitText[1]!=||$splitText[2]!=;Hey there! Your usage seems to be incorrect.

A example of a usage should be \`$getGuildVar[prefix]drake Content 1/Content 2\`]
$cooldown[5s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;drake;$authorID];$dateStamp];1000]]:R>]
$textSplit[$message;/]
$onlyIf[$getGuildVar[betaserver]==on&&$getGlobalUserVar[betacommands]==on;
This command is currently unavailable. Possible reasons are being:

* You don't have Beta commands enabled. Run \`beta\` command to enable it first
* The server has Beta commands disabled
]
`
}