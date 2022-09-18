module.exports = {
    name: "caution",
    code: `
    $attachment[https://api.popcat.xyz/caution?text=$message;caution.png]
    $onlyIf[$message!=;you need to type something]
    `
    
  }