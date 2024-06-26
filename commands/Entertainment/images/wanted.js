module.exports = {
    name: "wanted",
    info: {
        description: "Adds a wanted poster into user's profile picture.",
        perms: ["`SendMessages`", "`AttachFiles`"]
    },
    code: `$attachment[$get[apilink];wanted.png;URL]
    $onlyIf[$IsValidImageLink[$get[apilink]]==true;It looks like there're issues with processing the image. Please, try again later if possible.]
    $onlyIf[$hasPermsInChannel[$channelID;$clientID;attachfiles]==true||$hasPerms[$guildID;$clientID;attachfiles]==true;I must have \`AttachFiles\` permission in order to proceed. Please, grant me the permission and try again.]
    $let[apilink;https://api.popcat.xyz/wanted?image=$replaceText[$replaceText[$userAvatar[$mentioned[1;true]];.webp;.png];.gif;.png]]
    $cooldown[5s; Slow down! Don't spam the command!
    Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;wanted;$authorID];$dateStamp];1000]]:R>]`
    }
