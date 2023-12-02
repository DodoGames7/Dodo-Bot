module.exports = {
name: "randomhex",
code: `$title[Random Hex Code]
$description[Image not displayed? Click [here]($getObjectProperty[api;image]) to manually view the color look!]
$addField[hex Code;#$getObjectProperty[api;hex]]
$addField[Color name:;$replaceText[$getObjectProperty[api;name];undefined;No name has been found]]
$image[$getObjectProperty[api;image]]
$onlyIf[$getObjectProperty[api;hex]!=undefined;Couldn't generate a hex code. Please either run the command again or try again later.]
$onlyIf[$getObjectProperty[api;image]!=undefined;Couldn't embed the upcoming hex code as the image. Try running the command again instead.]
$createObject[api;$jsonRequest[https://api.popcat.xyz/randomcolor]]
$cooldown[5s;slow down, don't spam the command]
`
}
