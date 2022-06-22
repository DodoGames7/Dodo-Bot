module.exports = {
  name: "tweet",
  code: `$attachment[https://some-random-api.ml/canvas/tweet?avatar=$replaceText[$authoravatar;.webp;.png;-1]&username=$replaceText[$username; ;+;-1]&comment=$replaceText[$message; ;+;-1]&displayname=$replaceText[$username; ;+;-1];tweet.png]
  $onlyIf[$message!=;you can't really make a tweet with nothing]
  $onlyBotPerms[attachfiles;i need \`ATTACH_FILES\` Permissions before posting generating results] `
} // fakes a youtube comment for fun