module.exports = {
    name: "car",
    code: `
    $image[$getObjectProperty[image]]
    $onlyIf[$getObjectProperty[image]!=undefined;Something went wrong while searching for an image, please try again.]
    $createObject[$jsonRequest[https://api.popcat.xyz/car]]
    $cooldown[5s; Slow down! Don't spam the command!
    Time left: \`%time%\`]
                               `
    }