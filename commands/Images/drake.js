module.exports = {
  name: "drake",
  code: `$attachment[https://api.popcat.xyz/drake?text1=$replaceText[$splitText[1]; ;+]&text2=$replaceText[$splitText[2]; ;+];drake.png]
  
  $Textsplit[$message;,]
  `
}
