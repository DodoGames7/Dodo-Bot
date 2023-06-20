module.exports = {
    name: "randomhex",
    code: `$title[Random Hex Code]
    $addField[hex Code;#$getObjectProperty[hex]]
    $addField[Color name:;$replaceText[$getObjectProperty[name];undefined;No name has been found]]
    $image[$getObjectProperty[image]]
    $onlyIf[$getObjectProperty[hex]!=undefined;Couldn't generate a hex code. Please either run the command again or try again later.]
    $onlyIf[$getObjectProperty[image]!=undefined;Couldn't embed the upcoming hex code as the image. Try running the command again instead.]
    $createObject[$jsonRequest[https://api.popcat.xyz/randomcolor]]
    $cooldown[5s; Slow down! Don't spam the command!
    Time left: \`%time%\`]
    `
    }