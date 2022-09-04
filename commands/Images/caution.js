module.exports = {
    type: "basicCommand",
    name: "caution",
    code: `$onlyIf[$message!=;you need to type something]
    $title[1;CAUTION]
    $image[1;https://api.popcat.xyz/caution?text=$message]
    $color[1;Yellow]
    `
    
  }