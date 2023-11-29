module.exports = {
name: "randomhex",
$if: "old",
code: `$title[Random Hex Code]
$if[$stringStartswith[$message[1];--no-preview]==true]
$addField[hex Code;#$getObjectProperty[api;hex]]
$addField[Color name:;$replaceText[$getObjectProperty[api;name];undefined;No name has been found]]
$else
$description[Image not displayed? Click [here]($getObjectProperty[api;image]) to manually view the color look!]
$image[$getObjectProperty[api;image]]
$endif
$onlyIf[$getObjectProperty[api;hex]!=undefined;Couldn't generate a hex code. Please either run the command again or try again later.]
$onlyIf[$getObjectProperty[api;image]!=undefined;Couldn't embed the upcoming hex code as the image. Try running the command again instead.]
$createObject[api;$jsonRequest[https://api.popcat.xyz/randomcolor]]
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
`
}
