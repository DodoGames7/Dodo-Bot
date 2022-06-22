module.exports = {
name: "triggered",
code: `$attachment[https://some-random-api.ml/canvas/triggered?avatar=$replaceText[$userAvatar[$mentioned[1;yes]];.webp;.png;-1];triggered.gif]
$onlyBotPerms[attachfiles;i need \`ATTACH_FILES\` Permissions before posting generating results]`
    } // makes users avatar Triggered
