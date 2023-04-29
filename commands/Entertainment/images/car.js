module.exports = {
    name: "car",
    code: `
    $image[$getObjectProperty[image]]
    $createObject[$jsonRequest[https://api.popcat.xyz/car]]
    $cooldown[5s; slow down, don't spam the command]
    $suppressErrors[Something went wrong while searching for an image, please try again.]
                               `
    }