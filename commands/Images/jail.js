module.exports = {
name: "jail",
code: `$attachment[https://some-random-api.ml/canvas/jail?avatar=$replaceText[$userAvatar[$mentioned[1;yes]];.webp;.png;-1];jail.png]
$onlyBotPerms[attachfiles;i need \`ATTACH_FILES\` Permissions before posting generated results]`
    } // sends someone to jail
