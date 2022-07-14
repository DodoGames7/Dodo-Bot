module.exports = {
  name: "drake",
  code: `$attachment[https://api.popcat.xyz/drake?text1=$uri[$splitText[1];encode]&text2=$uri[$splitText[2];encode];drake.png]
  
  $Textsplit[$message;,]
  $onlyIf[$message!=;you need to provide two text between comma, such as \`hi, hello\`]
  $onlyIf[$message[2]!=;you need to provide two text between comma, such as \`hi, hello\`]
  $onlyBotPerms[attachfiles;i need \`ATTACH_FILES\` Permissions before posting generated results]
  `
}
