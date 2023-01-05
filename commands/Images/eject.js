module.exports = {
name: "eject",
code: `
$attachment[https://vacefron.nl/api/ejected?name=$replaceText[$username[$mentioned[1]]; ;+;-1]&impostor=$randomText[true;false]&crewmate=$randomText[black;blue;brown;cyan;darkgreen;lime;orange;pink;purple;red;white;yellow];eject.png]
$onlyIf[$mentioned[1]!=$authorID;{attachment:eject.png:https://vacefron.nl/api/ejected?name=$replaceText[$username[$clientID]; ;+]&impostor=$randomText[true;false]&crewmate=darkgreen}]
$onlyBotPerms[attachfiles;i need \`ATTACH_FILES\` Permissions before posting generated results]
`
}
