module.exports = {
name: "randomhex",
code: `$title[Random Hex Code]
$description[Image not displayed? Click [here](https://dodogames-api.up.railway.app/color?hex=$getObjectProperty[hex]) to manually view the color look!]
$addField[hex Code;#$getObjectProperty[hex]]
$addField[Color name:;$replaceText[$getObjectProperty[name];undefined;No name has been found]]
$image[$getObjectProperty[image]]
$onlyIf[$getObjectProperty[hex]!=undefined;Couldn't generate a hex code. Please either run the command again or try again later.]
$onlyIf[$getObjectProperty[image]!=undefined;Couldn't embed the upcoming hex code as the image. Try running the command again instead.]
$createObject[$jsonRequest[https://api.popcat.xyz/randomcolor]]
$cooldown[5s;slow down, don't spam the command]
`
}